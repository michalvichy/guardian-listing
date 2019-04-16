export interface Content {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}

export interface ContentParams {
  section?: string;
  page: string;
}

export interface ContentResponse {
  results: Content[];
  pages: number;
}
