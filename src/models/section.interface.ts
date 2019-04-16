export interface Section {
  id: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  editions: Edition[];
}

interface Edition {
  id: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  code: string;
}

export interface SectionsResponse {
  results: Section[];
}
