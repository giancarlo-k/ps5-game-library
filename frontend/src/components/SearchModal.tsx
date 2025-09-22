import '../styles/searchmodal.css';
import { IoSearch, IoArrowForwardOutline, IoCloseOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

interface SearchModalProps {
  onCloseSearchModal: () => void;
}

const SearchModal = ({ onCloseSearchModal }: SearchModalProps) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [dotCount, setDotCount] = useState(1);
  const [show, setShow] = useState(false);
  const searchQueryRef = useRef(searchQuery);

  useEffect(() => {
    setShow(true);
  }, [])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onCloseSearchModal();
    }, 400)
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDotCount(prev => (prev % 5) + 1 );
    }, 500)

    return () => clearInterval(intervalID);
  }, [])

  useEffect(() => {
    searchQueryRef.current = searchQuery;
  }, [searchQuery])

  const handleSearch = () => {
    const query = searchQueryRef.current;
    setSearchQuery('');

    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      handleClose();
    }
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'Enter') handleSearch();
    };

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleClose])

  const handleBlurClick = handleClose;
  const handleModalClick = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div onClick={handleBlurClick} className={ show ? 'show' : '' } id='open-area'>
      <div
        onClick={handleModalClick}
        className={ show ? 'show' : '' }
        id='modal-box'
      >
        <IoSearch size={34} style={{ color: 'white', marginTop: '1.5px', marginRight: '10px' }}/>
        <div className='searchbar-box'>
          <div>
            { searchQuery && <IoCloseOutline onClick={() => {
              setSearchQuery('');
              inputRef.current?.focus();
            }} size={28} id="search-modal-clear-btn"/>}
            <input ref={inputRef} onChange={handleInput} value={searchQuery} autoComplete='off' autoFocus id="searchbar" type="text" placeholder={`Stellar Blade${'.'.repeat(dotCount)}`}/>
          </div>
          <div id="searchbar-line"></div>
        </div>
        <button onClick={handleSearch} id="activate-search-btn">
          <IoArrowForwardOutline size={26} style={{ color: 'white', marginTop: '1px' }}/>
        </button>
      </div>
    </div>
  )
}

export default SearchModal;