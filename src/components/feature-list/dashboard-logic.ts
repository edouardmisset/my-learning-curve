export class FeatureDashboardLogic {
  grid: HTMLElement | null
  searchInput: HTMLInputElement | null
  categoryFilter: HTMLSelectElement | null
  statusFilter: HTMLSelectElement | null
  starredFilter: HTMLSelectElement | null
  sortSelect: HTMLSelectElement | null
  noResults: HTMLElement | null
  root: HTMLElement

  private readonly STORAGE_KEY = 'feature-list-starred'
  private starred: Set<string>

  constructor(root: HTMLElement) {
    this.root = root
    this.starredFilter = root.querySelector('[data-action="filter-starred"]')
    this.sortSelect = root.querySelector('[data-action="sort"]')
    this.noResults = root.querySelector('[data-no-results]')

    this.starred = this.loadStarred()
    this.applyStarredState()

    this.bindEvents()
    this.updateView() // Initial sort/view update if needed
  }

  loadStarred(): Set<string> {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      return stored ? new Set(JSON.parse(stored)) : new Set()
    } catch {
      return new Set()
    }
  }

  saveStarred() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify([...this.starred]))
    } catch (e) {
      console.warn('Failed to save starred features', e)
    }
  }

  applyStarredState() {
    const buttons =
      this.root.querySelectorAll<HTMLButtonElement>('[data-star-btn]')
    buttons.forEach(btn => {
      const id = btn.dataset.id
      if (id && this.starred.has(id)) {
        btn.setAttribute('aria-pressed', 'true')
      } else {
        btn.setAttribute('aria-pressed', 'false')
      }
    })
  }

  toggleStar(btn: HTMLElement) {
    const id = btn.dataset.id
    if (!id) return

    const isStarred = this.starred.has(id)
    if (isStarred) {
      this.starred.delete(id)
      btn.setAttribute('aria-pressed', 'false')
    } else {
      this.starred.add(id)
      btn.setAttribute('aria-pressed', 'true')
    }

    this.saveStarred()
    this.updateView()

    // Micro-interaction
    btn.classList.add('animating') // Note: This class needs to match CSS. Since CSS Modules hashes classes, 'animating' might not work unless global or passed.
    // WAIT: css modules. I defined .star-btn.animating in the module file.
    // But in the typescript file, I don't import the module object to know the hashed name of 'animating'.
    // Potential Fix: Use a global class for animation or attribute.
    // Or simply adding a style directly? No.
    // The CSS provided in FeatureCard.module.css was:
    // .star-btn.animating { animation: ... }
    // This gets hashed to something like ._star-btn_123._animating_123
    // Since I can't easily access the hash map here without importing the JSON/JS (which Astro doesn't easily expose to client script without passing props),
    // Use data attribute for animation state!

    btn.dataset.animating = 'true'
    setTimeout(() => {
      delete btn.dataset.animating
    }, 300)
  }

  bindEvents() {
    this.searchInput?.addEventListener('input', () => this.updateView())
    this.categoryFilter?.addEventListener('change', () => this.updateView())
    this.statusFilter?.addEventListener('change', () => this.updateView())
    this.starredFilter?.addEventListener('change', () => this.updateView())
    this.sortSelect?.addEventListener('change', () => this.updateView())

    // Event Delegation on Root to catch clicks in any sub-grid
    this.root.addEventListener('click', e => {
      const target = e.target as HTMLElement

      // Handle MDN Button
      const mdnBtn = target.closest('[data-mdn-btn]')
      if (mdnBtn) {
        e.stopPropagation()
        const query = (mdnBtn as HTMLElement).dataset.query || ''
        const searchUrl = `https://developer.mozilla.org/en-US/search?q=${encodeURIComponent(
          query,
        )}`
        window.open(searchUrl, '_blank')
        return
      }

      // Handle Star Button
      const starBtn = target.closest('[data-star-btn]')
      if (!starBtn) return

      e.stopPropagation()
      this.toggleStar(starBtn as HTMLElement)
      return
    })
  }

  updateView() {
    const categories = Array.from(
      this.root.querySelectorAll('[data-category-group]'),
    ) as HTMLElement[]
    const searchValue = this.searchInput?.value.toLowerCase() || ''
    const categoryValue = this.categoryFilter?.value || 'all'
    const statusValue = this.statusFilter?.value || 'all'
    const starredValue = this.starredFilter?.value || 'all'
    const sortValue = this.sortSelect?.value || 'newest'

    let totalVisibleCount = 0

    categories.forEach(categoryGroup => {
      const grid = categoryGroup.querySelector('[data-grid]')
      if (!grid) return

      const items = Array.from(grid.children) as HTMLElement[]
      let groupVisibleCount = 0

      // Filter items within this group
      const processedItems = items.map(item => {
        // Skip null/non-elements if any
        if (!item.dataset) return { item, date: '', name: '', isVisible: false }

        const itemId = item.dataset.id || ''
        const itemCat = item.dataset.category || ''
        const itemStatus = item.dataset.status || ''

        const combinedText = (item.textContent || '').toLowerCase()
        const nameText =
          item.querySelector('h3')?.textContent?.trim().toLowerCase() || ''

        const matchSearch =
          searchValue === '' || combinedText.includes(searchValue)
        const matchCategory =
          categoryValue === 'all' || itemCat === categoryValue
        const matchStatus = statusValue === 'all' || itemStatus === statusValue
        // Starred Filter Logic
        const matchStarred =
          starredValue === 'all' ||
          (starredValue === 'starred' && this.starred.has(itemId))

        const isVisible =
          matchSearch && matchCategory && matchStatus && matchStarred
        item.style.display = isVisible ? '' : 'none'
        if (isVisible) groupVisibleCount++
        if (isVisible) totalVisibleCount++

        return {
          item,
          date: item.dataset.date || '',
          name: nameText,
          isVisible,
        }
      })

      // Sort items within this group
      processedItems.sort((a, b) => {
        if (sortValue === 'newest') {
          return b.date.localeCompare(a.date)
        } else if (sortValue === 'oldest') {
          return a.date.localeCompare(b.date)
        } else if (sortValue === 'az') {
          return a.name.localeCompare(b.name)
        } else if (sortValue === 'za') {
          return b.name.localeCompare(a.name)
        } else {
          return b.date.localeCompare(a.date)
        }
      })

      // Re-append to this group's grid
      const fragment = document.createDocumentFragment()
      processedItems.forEach(({ item }) => fragment.appendChild(item))
      grid.appendChild(fragment)

      // Toggle Group Visibility
      categoryGroup.style.display = groupVisibleCount > 0 ? '' : 'none'
    })

    if (this.noResults) {
      this.noResults.classList.toggle('hidden', totalVisibleCount > 0)
    }
  }
}
