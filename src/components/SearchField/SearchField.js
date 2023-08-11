import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage";
import closeIcon from "./assets/close.svg";
import searchIcon from "./assets/search.svg";
import {
  CloseIcon,
  Content,
  FieldWrapper,
  Input,
  Label,
  SearchIcon,
} from "./_searchFieldStyle";

function SearchField(props) {
  const [localValue, setLocalValue] = useState(props.value);
  const [isCloseDisplay, setCloseDisplay] = useState(false);

  useEffect(() => {
    setLocalValue(props.value);
  }, [props.value]);

  const handleValueChange = (e) => {
    const { value } = e.target;
    setLocalValue(value);
    props.handleGetValue(value);
    setCloseDisplay(!!value);
  };

  const handleEventOnBlur = () => {
    setTimeout(() => {
      setCloseDisplay(false);
    }, 300);
  };

  const handleEventOnFocus = () => {
    localValue && setCloseDisplay(true);
  };

  const handleCloseClick = () => {
    setLocalValue("");
    props.handleClose();
  };

  const handleKeyPress = (e) => {
    let key = e.charCode || e.keyCode || 0;
    if (key == 13) {
      e.preventDefault();
    }
  };

  return (
    <Content>
      <Label>{props.label}</Label>
      <FieldWrapper id="searchField">
        <SearchIcon src={searchIcon} />
        <Input
          name={props.name}
          placeholder={props.placeholder}
          value={localValue}
          onBlur={handleEventOnBlur}
          onFocus={handleEventOnFocus}
          onChange={handleValueChange}
          onKeyPress={handleKeyPress}
          autoComplete="off"
          error={props.error}
        />
        {isCloseDisplay && (
          <CloseIcon src={closeIcon} onClick={handleCloseClick} />
        )}
        <ErrorMessage>{props.error}</ErrorMessage>
      </FieldWrapper>
    </Content>
  );
}

SearchField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  handleGetValue: PropTypes.func,
  handleClose: PropTypes.func,
};

SearchField.defaultProps = {
  name: "",
  label: "",
  placeholder: "",
  value: "",
  error: "",
  handleGetValue: () => {},
  handleClose: () => {},
};

export default SearchField;
