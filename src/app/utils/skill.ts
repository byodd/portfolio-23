import { Project } from "./project";
export interface Image {
  url: string;
  description?: string;
}
export interface Skill {
  id: string;
  name: string;
  detail: string;
  images: Image[];
  color: string;
  description: string;
  review: string;
  projects: Project[];
  skillList?: string[];
}
