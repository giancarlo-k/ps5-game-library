// NOT THE SEARCHBAR. ITS THE BUTTON THAT ACTIVATES THE SEARCHBAR

import { useEffect} from "react";
import { IoSearch } from "react-icons/io5";
import '../styles/header.css';

interface SearchbarProps {
  openSearchModal: () => void;
}

const Searchbar = ({ openSearchModal }: SearchbarProps) => {

  const handleSearchOpen = () => {
    openSearchModal();
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '/') {
        openSearchModal();
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [openSearchModal])

  return (
    <button id='search-button' onClick={handleSearchOpen} >
      <IoSearch size={24} style={{ color: 'white' }}/>
      <div id="searchbar-keystroke-icon">/</div>
    </button>
  )
}

export default Searchbar;