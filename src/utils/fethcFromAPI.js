import { ChainId, Token, TokenAmount, Pair, Trade, TradeType, Route } from '@uniswap/sdk'
// Utility function for fetching data from a remote API ( here RAPID API )

// we specify if req is a GET request or a POST request using axios

import axios from 'axios';
const BASE_URL ='https://youtube-v31.p.rapidapi.com/search';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    // const response = await axios.get(`${BASE_URL}/${url}`, options); BUT we can destructure it in one line
    
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}

  