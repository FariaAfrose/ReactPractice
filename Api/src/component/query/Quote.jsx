import React from 'react';
import { useQuery } from 'react-query';
import getQuote from './getQuoteApi';

export default function Quote({ quote }) {
    const { data } = useQuery('quote', () => getQuote());
  return (
    <div>
      <h1>
        Geting data using fetch Api
        <div>{data?.content}</div>
      </h1>
    </div>
  );
}
