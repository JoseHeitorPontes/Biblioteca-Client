import { FaSearch } from "react-icons/fa";

import "./styles.scss";

export function Search() {
  return (
    <div className="search-container form-control">
      <FaSearch className="search-icon" />

      <input className="search-input border-0" placeholder="Nome do livro" />
    </div>
  );
}
