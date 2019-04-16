import React, { useState, useEffect } from 'react';
import { Content, ContentParams } from '../models/content.inteface';
import { fetchContent } from '../config/service';
import { Listing } from './Listing';

interface State {
  articles: Content[];
  pages: number;
  pending: boolean;
}

export const HomePage = () => {
  const [query, setQuery] = useState<ContentParams>({ page: '1' });
  const [state, setState] = useState<State>({
    articles: [],
    pages: 0,
    pending: true,
  });

  useEffect(() => {
    fetchContent(query).then(response => {
      console.log({ response });

      setState({
        articles: response.results,
        pages: response.pages,
        pending: false,
      });
    });
  }, [query]);

  return (
    <>
      <Listing articles={state.articles} />
    </>
  );
};
