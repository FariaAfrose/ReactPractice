import React, { Suspense, useState, useEffect } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
// import Quote from './component/fetch/Quote';
// import Quote2 from './component/axios/Quote';
// import Quote3 from './component/swr/Quote';
import Quote4 from './component/query/Quote';

function App() {
  // const [quote, setQuete] = useState(null);
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        Suspense: true,
      },
    },
  });
// useEffect(() => {
//     const fetchQuote = async () => {
//         const res = await fetch('http://api.quotable.io/random');
//    const data = await res.json();
//  setQuete(data);
// };
//     fetchQuote();
// }, []);
return (
  <div className="App">
    {/* <Quote /> */}
    {/* <Quote2 /> */}
    {/* <Suspense fallback={<h1>Loading.. data</h1>}> */}
    {/* <Quote3 /> */}
    {/* </Suspense> */}
    <QueryClientProvider client={client}>
      <Suspense fallback={<h1>Loading.. data</h1>}>
        <Quote4 />
        <Quote4 />
      </Suspense>

    </QueryClientProvider>

  </div>
);
}

export default App;
