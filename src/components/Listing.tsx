import React from 'react';

import { ListingItem } from './ListingItem';

import { Article } from '../models/article.interface';

interface Props {
  articles: Article[];
  toggleReadLater(i: Article): void;
  readLater: Article[];
}

export const Listing = ({ articles, toggleReadLater, readLater }: Props) => {
  function isMarked(item: Article): boolean {
    return readLater.findIndex(i => i.id === item.id) > -1;
  }

  return (
    <div className="listing">
      {articles.map(article => (
        <ListingItem
          key={article.id}
          article={article}
          toggleReadLater={toggleReadLater}
          isMarked={isMarked(article)}
        />
      ))}
    </div>
  );
};
