import "./SearchResult.css";
import { useNavigate } from "react-router-dom";
const SearchResult = ({ result }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the "/other" page when the component is clicked
    navigate(`/product?id=${result.id}`);
  };
  return (
    <div className="search-result" onClick={handleClick}>
      {result.Product_Title}
    </div>
  );
};
export default SearchResult;
