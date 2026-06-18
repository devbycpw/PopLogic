export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface ClientAvatar {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
