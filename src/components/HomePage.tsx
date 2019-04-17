import React, { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap';

import { Article, ArticleParams } from '../models/article.interface';
import { Header } from './Header';
import { Listing } from './Listing';
import { Pagination } from './Pagination';

import { fetchArticles } from '../config/service';
import { readItem, saveItem } from '../helpers/localStorage';

interface State {
  articles: Article[];
  pages: number;
}

export const HomePage = () => {
  const [readLater, setReadLater] = useState<Article[]>(
    readItem('readLater') || []
  );
  const [pending, setPending] = useState<boolean>(true);
  const [query, setQuery] = useState<ArticleParams>({ page: 1 });
  const [state, setState] = useState<State>({
    articles: [],
    pages: 0,
  });

  useEffect(() => {
    fetchArticles(query).then(response => {
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

  function handleReadLater(article: Article) {
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
