import React, { useContext } from "react";
import CustomInput from "../../Common/Input.component/Input";
import { RegisterContextMembers } from "../../Context/RegisteredMemberContext";
import SearchBarStyles from "../../Styles/MenuPageStyles/SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  const [state, setState] = useContext(RegisterContextMembers);

  const handleChange = ({ target }) => {
    setState((data) => ({ ...data, [target.name]: target.value }));
  };
  const { searchBarContainer, searchBar, input, searchIcon } = SearchBarStyles;

  return (
    <section className={searchBarContainer}>
      <div className={searchBar}>
        <CustomInput
          type={"search"}
          name={"menuSearchBar"}
          placeholder="search"
          className={input}
          onChange={handleChange}
          value={state.menuSearchBar}
        />
        <FontAwesomeIcon icon={faSearch} className={searchIcon} />
      </div>
    </section>
  );
};

export default SearchBar;
