// hover over {Stack} or any mui component for that matter and you'll realize that
//you can go directly to their documentaion page and CHECK DEMO ON HOW TO USE IT  

import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from '../utils/constants'

// Again, on ctrl + double clicking a component that is used , it'll be automatically imported
import SearchBar from './SearchBar'


const Navbar = () => (
    // p stands for padding 
    // sx prop is how we add css styling to mui components

    // sticky cuz we want this to stick to the top

    //On hovering over Stack you'll see Stack API (fancy name but it's pretty simple),
    //that lists all the props that Stack has and how to use it. READ THE FUCKING DOCUMENTATION
    <Stack 
      direction='row' 
      alignItems='center' 
      p={2} 
      sx={{ position: 'sticky', 
            background: '#000',
            top:0,
            justifyContent: 'space-between' }} 
    >

      <Link to='/' style={{display: 'flex', alignItems: 'center'}} > 
        {/* LOOK AT using height for img */}
        <img src={logo} alt="logo" height={45}/>
      </Link>
      <SearchBar />
      Navbar
    </Stack>
  
)

export default Navbar
