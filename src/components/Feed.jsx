// Feed is going to compose of two parts : 1-> the main vedio feed (all the vedios in home page)
// 2 -> The sidebar ( all subscribers etc )

import {useState , useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Sidebar from './Sidebar'


/*
flexDirection: {
  sx: 'column',
  md: 'row'
}
this makes the Stack to be displayed row-wise normally ()
AND on medium (md) screen, it'll be displayed in ONE COLUMN 

i.e on mobiles all vedio are one after other , 
on desktop there will be a row with 3 vedios
*/

/*
if you want to understand more about the styling , changin to this layout makes it more readable
<Box 
        sx={{
        height: {
          sx: 'auto',
          md: '92vh'
        },
        borderRight: '1px solid #3d3d3d',
        px: {sx : 0, md : 2 }
      }}>

*/

const Feed = () => {
  return (
    // Stack is the main wrapper class that will enclose both the two parts
    <Stack sx={{flexDirection: { x: 'column', md: 'row'}}}>
      {/* px means padding horizontal , 0 in small and 3 in medium screen */}
      {/* This box is just like a div , it creates the grey divider 
      between the sidebar and main vedio feed*/}
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebarebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        {/* Typography is just a component for all text element - p , h1 .. h6  , etc */}
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2022 Learn at c
        </Typography>
      </Box>


      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

      </Box>
    </Stack>
  )
}

export default Feed
