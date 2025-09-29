// this will be the main header that will show on ALL pages
// should contain the website name/logo, search button (activates search modal), login/signup, library page anchor, light/dark mode, github icon

import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

interface SearchbarProps {
  openSearchModal: () => void;
}

const Header = ({ openSearchModal }: SearchbarProps) => {

  return (
    <div id="header">
      <Link to="/" id="logo-anchor">
        <div id="logo-text">ps&nbsp;&nbsp;&nbsp;pulse</div>
        <div id="logo-underline"></div>
      </Link>
      <Searchbar openSearchModal={openSearchModal} />
    </div>
  )
}


export default Header;