
import { useState } from 'react'
import './SearchBar.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'


const SearchBar = () => {

  const [searchIcon, setSearchIcon] = useState(true)

  const handleChange = (event) => {
    if(event.target.value !== ""){
      setSearchIcon(false)
    }
    else{
      setSearchIcon(true)
    }
  }

  return (
    <div className='search'>
        <div className="searchbar__placeholder">
          <div>
            {searchIcon && (
              <AiOutlineSearch className={`icon__search`}/>
            )}
            
            <input className="search__input" placeholder='Search' type="search" onChange={handleChange} />
          </div>
          <a href=""><BsFillMicFill className='icon__mic'/></a>
            
        </div>
        
    </div>
  )
}

export default SearchBar