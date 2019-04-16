export interface Article {
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

export interface ArticleParams {
  section?: string;
  page: number;
}

export interface ArticleResponse {
  results: Article[];
  pages: number;
}
