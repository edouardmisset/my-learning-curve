export interface FeatureData {
  id: string
  name: string
  description: string
  category: 'HTML' | 'CSS' | 'JavaScript' | 'Web Platform'
  status: 'limited' | 'newly' | 'widely' | 'unknown'
  date: string
}
