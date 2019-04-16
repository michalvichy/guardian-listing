import React, { useState, useEffect } from 'react';
import Spinner from 'reactstrap/lib/Spinner';

import { Content, ContentParams } from '../models/content.inteface';
import { Listing } from './Listing';
import { Pagination } from './Pagination';

import { fetchContent } from '../config/service';

interface State {
  articles: Content[];
  pages: number;
}

export const HomePage = () => {
  const [pending, setPending] = useState<boolean>(true);
  const [query, setQuery] = useState<ContentParams>({ page: 1 });
  const [state, setState] = useState<State>({
    articles: [],
    pages: 0,
  });

  useEffect(() => {
    fetchContent(query).then(response => {
      console.log({ response });

      setState({
        articles: response.results,
        pages: response.pages,
      });
      setPending(false);
    });
  }, [query]);

  function handlePageChane(pageNo: number) {
    setQuery({ page: pageNo });
    setPending(true);
  }

  return (
    <>
      {pending && <Spinner type="grow" color="success" />}

      {state.articles.length && <Listing articles={state.articles} />}

      {!pending && state.articles.length === 0 && <p>No results</p>}

      <Pagination
        currentPage={+query.page}
        maxPages={state.pages}
        onPageChange={handlePageChane}
      />
    </>
  );
};
