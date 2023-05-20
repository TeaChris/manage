// footer company links
export interface CompanyLink {
  id: number
  title: string
  url: string
}

export const companyLinks: CompanyLink[] = [
  { id: 1, title: 'about logo', url: '/' },
  { id: 2, title: 'out team', url: '/' },
  { id: 3, title: 'press', url: '/' },
  { id: 4, title: 'trends', url: '/' },
  { id: 5, title: 'careers', url: '/' },
]

// footer support links
export interface Support {
  id: number
  title: string
  url: string
}

export const supportLinks: Support[] = [
  { id: 1, title: 'give usfeedback', url: '/' },
  { id: 2, title: 'help center', url: '/' },
  { id: 3, title: 'live chat', url: '/' },
]

// footer resources links
export interface Resources {
  id: number
  title: string
  url: string
}

export const resources: Resources[] = [
  { id: 1, title: 'FAQS', url: '/' },
  { id: 2, title: 'Blog', url: '/' },
]

// footer contact links
export interface Contact {
  id: number
  title: string
  url: string
}

export const contact: Contact[] = [
  { id: 1, title: 'support@manage.ng', url: '/' },
]
