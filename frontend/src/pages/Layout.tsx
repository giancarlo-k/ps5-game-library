// Shell of everything you can see!
// main "page", serves as a way to organize all pages and components before sending to app.tsx

import { useState } from "react";
import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSearchModalActive, setIsSearchModalActive] = useState(false);

  const openSearchModal = () => {
    setIsSearchModalActive(true);
  }

  const closeSearchModal = () => {
    setIsSearchModalActive(false);
  }


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'lightgray'
    }}>
      <Header openSearchModal={openSearchModal} />
      { isSearchModalActive ? ( <SearchModal onCloseSearchModal={closeSearchModal} /> ) : null }
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;