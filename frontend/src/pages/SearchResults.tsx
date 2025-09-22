import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  return (
    <>
      <div>Seach Results for <span style={{ color: 'blue' }}>{query}</span></div>
    </>
  )
}

export default SearchResults;