import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-rainbow-components';
import axios from 'axios';

export default function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  //fetches quote data when component gets mounted
  useEffect(() => {
    getQuote();
  }, []);

  //actual fetch request to third party api
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
              <div>
                <svg
                  className='shape'
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  viewBox='0 0 96 96'
                >
                  <path
                    id='XMLID_6_'
                    class='st0'
                    d='M45.9,31.1v23.3c0,2.3-0.4,4.5-1.3,6.6c-0.9,2.1-2.1,3.9-3.6,5.4c-1.5,1.5-3.3,2.7-5.4,3.6
		c-2.1,0.9-4.3,1.3-6.6,1.3h-2.1c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5v-4.2c0-0.6,0.2-1.1,0.6-1.5
		c0.4-0.4,0.9-0.6,1.5-0.6H29c2.3,0,4.3-0.8,6-2.5c1.7-1.7,2.5-3.6,2.5-6v-1.1c0-0.9-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9h-7.4
		c-1.8,0-3.3-0.6-4.5-1.9c-1.2-1.2-1.9-2.7-1.9-4.5V31.1c0-1.8,0.6-3.3,1.9-4.5c1.2-1.2,2.7-1.9,4.5-1.9h12.7c1.8,0,3.3,0.6,4.5,1.9
		C45.3,27.8,45.9,29.3,45.9,31.1z M75.5,31.1v23.3c0,2.3-0.4,4.5-1.3,6.6c-0.9,2.1-2.1,3.9-3.6,5.4c-1.5,1.5-3.3,2.7-5.4,3.6
		c-2.1,0.9-4.3,1.3-6.6,1.3h-2.1c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5v-4.2c0-0.6,0.2-1.1,0.6-1.5
		c0.4-0.4,0.9-0.6,1.5-0.6h2.1c2.3,0,4.3-0.8,6-2.5c1.7-1.7,2.5-3.6,2.5-6v-1.1c0-0.9-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9
		h-7.4c-1.8,0-3.3-0.6-4.5-1.9c-1.2-1.2-1.9-2.7-1.9-4.5V31.1c0-1.8,0.6-3.3,1.9-4.5c1.2-1.2,2.7-1.9,4.5-1.9h12.7
		c1.8,0,3.3,0.6,4.5,1.9C74.9,27.8,75.5,29.3,75.5,31.1z'
                  />
                </svg>
              </div>
              <h5 className='card-title text-center'>Quote of the day</h5>
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
