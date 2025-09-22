// this will be the main header that will show on ALL pages
// should contain the website name/logo, search button (activates search modal), login/signup, library page anchor, light/dark mode, github icon

import Searchbar from "./Searchbar";

interface SearchbarProps {
  openSearchModal: () => void;
}

const Header = ({ openSearchModal }: SearchbarProps) => {

  return (
    <div id="header">
      <span>heder</span>
      <Searchbar openSearchModal={openSearchModal} />
    </div>
  )
}


export default Header;