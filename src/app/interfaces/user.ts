import { Education } from "./education"
import { Experience } from "./experience"
import { Projects } from "./projects"

export interface User {
  name: string
  photo: string
  address: {
    city: string
    state: string
  },
  contacts: Contacts
  summary: string
  keywords?: string
  experience: Experience[]
  education: Education[]
  projects: Projects[]

  skills: string[]
}

type Contacts = {
  emails: {
    Gmail: string
  },
  GitHub: string
  LinkedIn: string,
  Instagram: string
}
