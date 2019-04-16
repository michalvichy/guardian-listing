import React, { useState, useEffect } from 'react';
import Spinner from 'reactstrap/lib/Spinner';

import { Content, ContentParams } from '../models/content.inteface';
import { Header } from './Header';
import { Listing } from './Listing';
import { Pagination } from './Pagination';

import { fetchContent } from '../config/service';
import { readItem, saveItem } from '../helpers/localStorage';

interface State {
  articles: Content[];
  pages: number;
}

export const HomePage = () => {
  const [readLater, setReadLater] = useState<Content[]>(
    readItem('readLater') || []
  );
  const [pending, setPending] = useState<boolean>(true);
  const [query, setQuery] = useState<ContentParams>({ page: 1 });
  const [state, setState] = useState<State>({
    articles: [],
    pages: 0,
  });

  useEffect(() => {
    fetchContent(query).then(response => {
      setState({
        articles: response.results,
        pages: response.pages,
      });
      setPending(false);
    });
  }, [query]);

  useEffect(() => {
    saveItem('readLater', readLater);
  }, [readLater]);

  function handlePageChange(pageNo: number) {
    setQuery({ ...query, page: pageNo });
    setPending(true);
  }

  function selectSection(section: string) {
    setQuery({ section, page: 1 });
    setPending(true);
  }

  function handleReadLater(article: Content) {
    const index = readLater.findIndex(item => item.id === article.id);

    if (index === -1) {
      return setReadLater([...readLater, article]);
    }

    return setReadLater([
      ...readLater.slice(0, index),
      ...readLater.slice(index + 1),
    ]);
  }

  return (
    <>
      <Header onSelect={selectSection} />

      {pending && <Spinner type="grow" color="success" />}

      <Listing
        articles={state.articles}
        toggleReadLater={handleReadLater}
        readLater={readLater}
      />

      {!pending && state.articles.length === 0 && <p>No results</p>}

      <Pagination
        currentPage={+query.page}
        maxPages={state.pages}
        onPageChange={handlePageChange}
      />
    </>
  );
};
