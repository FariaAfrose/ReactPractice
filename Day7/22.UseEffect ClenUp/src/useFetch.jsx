import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const abortCont = new AbortController();

        setTimeout(() => {
          fetch(url, { signal: abortCont.signal }).then((res) => {
            if (!res.ok) {
        throw Error('Code Not Fatch the data for that resource');
            }
           return res.json();
          }).then((blogData) => {
            setData(blogData);
          setPending(false);
          setError(null);
        }).catch((err) => {
          if (err.name === 'ABortError') {
            console.log('fetch aborted');
          } else {
            setPending(false);
            setError(err.message);
          }
        });
        }, 1000);
        return () => abortCont.abort();
        }, [url]);
        return { data, isPending, error };
    };
export default useFetch;
