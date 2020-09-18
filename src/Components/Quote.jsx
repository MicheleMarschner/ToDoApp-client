import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-rainbow-components';
import axios from 'axios';

export default function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    try {
      const options = {
        headers: {
          'X-TheySaidSo-Api-Secret': 'WBSCODINGSCHOOL2020',
          'Content-type': 'application/json',
        },
      };
      const res = await axios.get('https://quotes.rest/qod', options);
      console.log(res.data.contents.quotes[0]);
      setQuote(res.data.contents.quotes[0]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div class='card post-preview post-preview-featured lift my-5'>
          <div class='card-body'>
            <div class='pt-2'>
              <h5 class='card-title text-center'>"</h5>
              <p class='card-text text-center'>{quote.quote}</p>
            </div>
            <hr />
            <div class='post-preview-meta'>
              <div class='post-preview-meta-details text-right'>
                <div class='post-preview-meta-details-name'>
                  <i>{quote.author}</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
