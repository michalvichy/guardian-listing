import React from 'react';

import { Content } from '../models/content.inteface';
import { formatDate } from '../helpers/fromDate';

interface Props {
  article: Content;
}

export const ListingItem = ({ article }: Props) => {
  return (
    <div className="listing-item">
      <p className="listing-item__title">{article.webTitle}</p>

      <p className="listing-item__date">
        Date: {formatDate(article.webPublicationDate)}
      </p>

      <p className="listing-item__section">Section: {article.sectionName}</p>

      <a href={article.webUrl} target="blank" rel="noopener nofollow">
        Read more
      </a>
    </div>
  );
};
