import { Http } from './axios';

import { ArticleParams, ArticleResponse } from '../models/article.interface';
import { SectionsResponse } from '../models/section.interface';

import { fromDate } from '../helpers/fromDate';

export const fetchSections = async (q = '') => {
  const res = await Http.get<{ response: SectionsResponse }>(`/sections`, {
    params: { q: q || undefined },
  });

  return res.data.response;
};

export const fetchArticles = async (opts: ArticleParams = { page: 1 }) => {
  const params = {
    ...opts,
    'page-size': 20,
    'from-date': fromDate(),
  };
  const res = await Http.get<{ response: ArticleResponse }>(`/search`, {
    params,
  });

  return res.data.response;
};
