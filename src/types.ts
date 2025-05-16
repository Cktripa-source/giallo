export  interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features?: string[];
  link?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  avatar?: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  duration: string;
  description: string;
  responsibilities?: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export type MessageRole = 'user' | 'assistant' | 'system';

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

export interface ChatRequest {
  messages: {
    role: MessageRole;
    content: string;
  }[];
}

export interface ChatResponse {
  choices: {
    message: {
      role: MessageRole;
      content: string;
    };
  }[];
}
  