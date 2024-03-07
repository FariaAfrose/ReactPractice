// eslint-disable-next-line import/no-extraneous-dependencies
import useSWR from 'swr';
import React from 'react';

 const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();
    return data;
 };
export default function Quote() {
const { data, error } = useSWR('http://api.quotable.io/random', fetcher, {
    suspense: true,
});
console.log(data);
 if (error) {
    return <h1>Thre was an error</h1>;
 }
  return (
    <div>
      <h1>
        Geting data using fetch Api
        <div>{data.content}</div>
      </h1>
    </div>
  );
}
