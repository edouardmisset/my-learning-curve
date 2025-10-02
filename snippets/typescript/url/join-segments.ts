// WIP

const regEx = /^(.+):\//
const fileRegEx = /^file:/

export function joinUrl(...segments: string[]): URL {
  return new URL(
    segments
      .join('/')
      .replace(/[/]+/g, '/')
      .replace(regEx, '$1://')
      .replace(fileRegEx, 'file:/')
      .replace(/\/(\?|&|#[^!])/g, '$1')
      .replace(/\?/g, '&')
      .replace('&', '?'),
  )
}
