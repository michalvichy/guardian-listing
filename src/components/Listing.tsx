import React from 'react';
import { Content } from '../models/content.inteface';
import { ListingItem } from './ListingItem';

interface Props {
  articles: Content[];
}

export const Listing = ({ articles }: Props) => {
  return (
    <div className="listing">
      {articles.map(article => (
        <ListingItem key={article.id} article={article} />
      ))}
    </div>
  );
};
