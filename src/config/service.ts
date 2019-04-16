import { Http } from './axios';

import { ContentParams, ContentResponse } from './../models/content.inteface';
import { Section } from '../models/section.interface';
import { fromDate } from '../helpers/fromDate';

export const fetchSections = async (q = '') => {
  const res = await Http.get<{ response: Section[] }>(`/sections`);

  return res.data;
};

export const fetchContent = async (opts: ContentParams = { page: 1 }) => {
  const params = {
    ...opts,
    'page-size': 20,
    'from-date': fromDate(),
  };
  const res = await Http.get<{ response: ContentResponse }>(`/search`, {
    params,
  });

  return res.data.response;
};
