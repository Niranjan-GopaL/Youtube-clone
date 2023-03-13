import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper , IconButton } from '@mui/material' 

// the icon for search
import {Search} from '@mui/icons-material'


const SearchBar = () => {
    // pl stands for padding left
    // mr is margin right , sm is small screen devices
    // so on small screen decies mr is set to 5
  return (
    // Paper component is just a simple div that has some content and appears as if it's having some elevation ( raised )
    <Paper 
        component='form'
        onSubmit={()=>{}}
        sx ={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5}
        }}
    >
        < input 
            className="search-bar"
            placeholder="Search for vedio"
            value=''
            onChange={() => {}}
        />

        <IconButton
            type="submit"
            sx ={{
                p:'10px',
                color: 'red'
            }}
        >
            {/* <Search /> is the componenet for search icon */}
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar
