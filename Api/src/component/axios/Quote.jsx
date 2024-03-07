import React, { useState, useEffect } from 'react';

export default function Quote() {
const [quote, setQuete] = useState(null);
useEffect(() => {
    const fetchQuote = async () => {
        const res = await fetch('http://api.quotable.io/random');
   const data = await res.json();
 setQuete(data);
};
    fetchQuote();
}, []);

  return (
    <div>
      <h1>
        Geting data using fetch Api
        <div>{quote?.content}</div>
      </h1>
    </div>
  );
}
