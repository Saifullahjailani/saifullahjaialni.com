export interface Projects {
  name: string
  completed: string,
  completed_by: {
    year?: string
    season?: string
    month?: string
  },
  description: {
    language?: string[],
    libraries?: string[],
    frameworks?: string[],
    concepts?: string[]
    api?: string[],
    info?: string,
    link?: string
  }
}
