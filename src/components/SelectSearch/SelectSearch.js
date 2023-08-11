import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import ErrorMessage from "../ErrorMessage";
import SearchField from "../SearchField";
import arrowIconActive from "./assets/arrow.svg";
import boldLettersMatched from "./utils/boldLettersMatched";
import {
  checkLocalValue,
  generateDivider,
  handleSearchValue,
  isObject,
  sliceOptions,
} from "./utils/common";
import {
  Container,
  ErrorWrapper,
  FieldWrapper,
  Hint,
  Img,
  Label,
  Option,
  OptionList,
  OptionWrapper,
  SearchWrapper,
  Select,
  SelectValue,
} from "./_selectSearchStyle";

function SelectSearch(props) {
  const [localValue, setLocalValue] = useState(props.selectedValue);
  const [isClicked, setIsClicked] = useState(props.isClicked);
  const [searchText, setSearchText] = useState("");
  const [listOptions, setOptions] = useState([]);
  const [isOptionDisplay, setOptionDisplay] = useState("hidden");
  const [noMatchVal, setNoMatchVal] = useState(false);
  const selectComponent = useRef(null);

  useEffect(() => {
    if (props.selectedValue && !localValue) {
      setLocalValue(props.selectedValue);
    }
    if (!props.selectedValue && localValue) {
      setLocalValue(props.selectedValue);
    }
  }, [props.selectedValue, localValue]);

  const handleOutsideClick = (e) => {
    if (selectComponent.current && selectComponent.current.contains(e.target)) {
      return;
    }
    setOptionDisplay("hidden");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick, false);
    setLocalValue(props.selectedValue);
    setOptions(sliceOptions(props.options));
    return () => {
      document.addEventListener("mousedown", handleOutsideClick, false);
    };
  }, [props.options]);

  useEffect(() => {
    /*Auto select when theres only 1 options*/
    if (!props.extraOptionsFormat) {
      let optVal = listOptions.map((opt) => opt.val);
      let optDesc = listOptions.map((opt) => opt.desc);
      if (listOptions.length === 1 && listOptions[0] !== "No Match") {
        if (typeof listOptions[0] === "string") return;
        setLocalValue(optVal + generateDivider(optDesc) + optDesc);
        props.setFieldValue(
          props.name,
          optVal + generateDivider(optDesc) + optDesc
        );
      }
    }
  }, [listOptions]);

  useEffect(() => {
    if (props.customInput) {
      if (listOptions.length === 1 && listOptions[0] === "No Match") {
        setNoMatchVal(true);
      } else if (listOptions.length >= 1) {
        const checkValandOption = listOptions.find((e) => {
          if (isObject(e)) {
            return e.val.toUpperCase() === localValue.toUpperCase();
          }
        });
        if (checkValandOption) {
          setLocalValue("");
          props.setFieldValue(props.name, "");
        }
      } else {
        setNoMatchVal(false);
      }
    }
  }, [listOptions, props.customInput, localValue]);

  const handleSelectClick = () => {
    if (!props.disabled) {
      props.setFieldTouched(props.name);
      if (isOptionDisplay === "hidden") {
        setOptionDisplay("visible");
      } else if (isOptionDisplay === "visible") {
        setOptionDisplay("hidden");
      }
    }
  };

  const handleSelectOption = (opt) => {
    if (opt.category) {
      return;
    }
    if (isObject(opt)) {
      if (opt.val === "Select One") {
        setLocalValue("");
        props.setFieldValue(props.name, "");
      } else {
        setLocalValue(opt.val + generateDivider(opt.desc) + opt.desc);
        if (opt.cd) {
          props.clinicCd(opt.cd);
        }
        props.setFieldValue(
          props.name,
          opt.val + generateDivider(opt.desc) + opt.desc
        );
      }
    } else {
      if (opt !== "No Match") {
        if (opt === "Select One") {
          setLocalValue("");
          props.setFieldValue(props.name, "");
        } else {
          setLocalValue(opt);
          props.setFieldValue(props.name, opt);
        }
      }
    }
    setIsClicked(true);
    if (isOptionDisplay === "hidden") {
      setOptionDisplay("visible");
    } else if (isOptionDisplay === "visible") {
      setOptionDisplay("hidden");
    }
  };

  const handleClose = () => {
    setOptions(props.options);
    setSearchText("");
  };

  let isItemObject = listOptions.some((data) => !!isObject(data));

  let optionsData = [...listOptions];

  optionsData = props.extraOptionsFormat
    ? props.formatOptions(isItemObject, optionsData)
    : optionsData;

  return (
    <Container ref={selectComponent}>
      {props.label && <Label>{props.label}</Label>}
      <FieldWrapper id={props.idWrapper}>
        <Select disabled={props.disabled} onClick={handleSelectClick}>
          <SelectValue>
            {localValue
              ? checkLocalValue(
                  localValue,
                  props.isDescShown,
                  noMatchVal,
                  props.groups,
                  props.wrapDesc
                )
              : "Select One"}
          </SelectValue>
          <Img src={arrowIconActive} isoptiondisplay={isOptionDisplay} />
        </Select>
        {isOptionDisplay && (
          <OptionWrapper isoptiondisplay={isOptionDisplay}>
            <SearchWrapper>
              <SearchField
                placeholder={props.searchPlaceholder}
                handleGetValue={(val) => {
                  handleSearchValue(
                    val,
                    props.options,
                    setOptions,
                    setSearchText
                  );
                }}
                handleClose={handleClose}
              />
            </SearchWrapper>
            <OptionList>
              {optionsData.map((opt, index) => {
                if (searchText && props.groups && opt.category) {
                  return null;
                } else {
                  return (
                    <Option
                      key={index}
                      selected={opt === localValue}
                      onClick={() => handleSelectOption(opt)}
                    >
                      {isObject(opt) ? (
                        <>
                          {props.groups && opt.val !== "Select One" ? null : (
                            <span className="option-val">
                              {boldLettersMatched(opt.val, searchText)}
                            </span>
                          )}
                          {opt.desc ? (
                            <span className="option-desc">
                              {boldLettersMatched(opt.desc, searchText)}
                            </span>
                          ) : (
                            <span className="option-group">{opt.category}</span>
                          )}
                        </>
                      ) : (
                        <span>{boldLettersMatched(opt, searchText)}</span>
                      )}
                    </Option>
                  );
                }
              })}
              {props.customInput && props.options.length > 0 && searchText && (
                <Option onClick={() => handleSelectOption(searchText)}>
                  <span>
                    <b>{searchText}</b>
                  </span>
                  <span>Non-Panel</span>
                </Option>
              )}
            </OptionList>
          </OptionWrapper>
        )}
      </FieldWrapper>
      {props.hint && <Hint>{props.hint}</Hint>}
      {!props.disabled && isClicked && props.error && (
        <ErrorWrapper>
          <ErrorMessage>{props.error}</ErrorMessage>
        </ErrorWrapper>
      )}
    </Container>
  );
}

SelectSearch.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  selectedValue: PropTypes.string.isRequired,
  groups: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        val: PropTypes.string,
        desc: PropTypes.string,
      }),
      PropTypes.string,
    ])
  ),
  searchPlaceholder: PropTypes.string,
  extraOptionsFormat: PropTypes.bool,
  error: PropTypes.string,
  customInput: PropTypes.bool,
  disabled: PropTypes.bool,
  idWrapper: PropTypes.string,
  isDescShown: PropTypes.bool,
  isClicked: PropTypes.bool,
  wrapDesc: PropTypes.bool,
  formatOptions: PropTypes.func,
  setFieldValue: PropTypes.func,
  setFieldTouched: PropTypes.func,
};

SelectSearch.defaultProps = {
  name: "",
  label: "",
  selectedValue: "Select One",
  groups: null,
  options: ["No Option"],
  searchPlaceholder: "",
  error: "",
  extraOptionsFormat: false,
  customInput: false,
  disabled: false,
  idWrapper: "",
  isDescShown: false,
  isClicked: false,
  wrapDesc: false,
  formatOptions: () => [],
  setFieldValue: () => {},
  setFieldTouched: () => null,
};

export default SelectSearch;
