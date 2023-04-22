import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
// Box is basicallly a div element


// Short cut in order to IMPORT a COMPONENT - double click on that component and CTRL + SPACE 
// It seems you need path intellisence extension or smthing , But the below would be automatically
// completed by that command .

/*
import Feed from './components/Feed';
import ChannelDetail from './components/ChannelDetail';
import VideoDetail from './components/VideoDetail';
import SearchFeed from './components/SearchFeed';
import Navbar from './components/Navbar'; 
*/

// But it would have cluttered the code so we have A index.js file in components folder and 
//export all the above from that file and import all the components here IN ONE LINE
import {VideoDetail,SearchFeed, Navbar, Feed, ChannelDetail} from './components';

    
const App = () => (
  
    <BrowserRouter>
      <Box sx= {{backgroundColor: '#000'}}> 

      <Navbar />
      {/* We can have all our routes below Navbar comp. */}
      {/* Notice both Routes and Route componenet are from react-router-dom */}
      <Routes>
        <Route path="/" exact element={<Feed />} />
        {/* Means if we go to /vedio/123123 We are gonna go to the page 
            with that id here 123123 */}
        <Route path='/vedio/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
      
      </Box>
    </BrowserRouter>
); 


export default App
