import { HTMLProps } from "react";
import { FaSearch } from "react-icons/fa";

import "./styles.scss";

type Props = HTMLProps<HTMLInputElement>;

export function Search({ ...rest }: Props) {
  return (
    <div className="search-container form-control">
      <FaSearch className="search-icon" />

      <input className="search-input border-0" placeholder="" {...rest} />
    </div>
  );
}
