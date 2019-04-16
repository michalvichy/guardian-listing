import React from 'react';
import { Content } from '../models/content.inteface';
import { ListingItem } from './ListingItem';

interface Props {
  articles: Content[];
  toggleReadLater(i: Content): void;
  readLater: Content[];
}

export const Listing = ({ articles, toggleReadLater, readLater }: Props) => {
  function isMarked(item: Content): boolean {
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
