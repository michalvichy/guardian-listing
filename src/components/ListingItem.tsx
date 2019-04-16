import React from 'react';

import { Content } from '../models/content.inteface';
import { formatDate } from '../helpers/fromDate';

interface Props {
  article: Content;
  toggleReadLater(i: Content): void;
  isMarked: boolean;
}

export const ListingItem = ({ article, toggleReadLater, isMarked }: Props) => {
  function handleAddReadLater() {
    toggleReadLater(article);
  }

  return (
    <div className="listing-item">
      <p className="listing-item__title">{article.webTitle}</p>

      <p className="listing-item__date">
        Date: {formatDate(article.webPublicationDate)}
      </p>

      <p className="listing-item__section">Section: {article.sectionName}</p>

      <div className="listing-item__footer">
        <a href={article.webUrl} target="blank" rel="noopener nofollow">
          Read more
        </a>

        <div
          className="read-later"
          title="Read later"
          onClick={handleAddReadLater}
          dangerouslySetInnerHTML={{ __html: isMarked ? '&starf;' : '&star;' }}
        />
      </div>
    </div>
  );
};
