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
        <div className='card post-preview post-preview-featured lift my-5'>
          <div className='card-body'>
            <div className='pt-2'>
              <h5 className='card-title text-center'>"</h5>
              <p className='card-text text-center'>{quote.quote}</p>
            </div>
            <hr />
            <div className='post-preview-meta'>
              <div className='post-preview-meta-details text-right'>
                <div className='post-preview-meta-details-name'>
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
