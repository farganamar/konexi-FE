export const isObject = (val) => {
  if (typeof val === "object" && val !== null) {
    return true;
  }
  return;
};

export const convertToLowerCase = (val) => {
  if (!val || typeof val !== "string") {
    return "";
  }
  return val.toLowerCase();
};

export const generateDivider = (desc) => {
  if (desc) {
    return " - ";
  }
  return "";
};

export const sliceOptions = (data) => {
  if (Array.isArray(data) && data.length > 0) {
    return data.slice(0, 101);
  }
  return [];
};

export const handleSearchValue = (val, options, setOptions, setSearchText) => {
  setSearchText(val);
  if (val && val.length >= 1) {
    let value = convertToLowerCase(val);
    let option;
    let searchResult = options.filter((opt) => {
      if (isObject(opt)) {
        option = convertToLowerCase(opt.val) + convertToLowerCase(opt.desc);
      } else {
        option = convertToLowerCase(opt);
      }
      return option.indexOf(value) > -1 && opt;
    });
    if (searchResult.length > 0) {
      setOptions(sliceOptions(searchResult));
    } else {
      setOptions(["No Match"]);
    }
  } else {
    setOptions(sliceOptions(options));
  }
};

const formatVal = (val) => {
  let word = val;
  if (val.length > 23) {
    word = val.slice(0, 20) + "...";
  }
  return word;
};

export const checkLocalValue = (
  localValue,
  isDescShown,
  noMatchVal,
  groups,
  wrapDesc
) => {
  if (isDescShown) {
    const splitVal1 = localValue.split("-");
    const splitVal2 = localValue.split("-");
    if (isObject(localValue)) {
      return formatVal(localValue.val) + " (" + localValue.desc + ")";
    } else if (localValue.indexOf("-") > -1) {
      if (noMatchVal) {
        return localValue;
      } else {
        let val1 = localValue.split("-")[0];
        let val2 = localValue.split("-")[1];
        if (splitVal1.length > 2) {
          splitVal1.pop();
          const joinArray = splitVal1.join();
          let subst = "-";
          let result = joinArray.replace(/,/g, subst);
          const descVal = splitVal2[splitVal2.length - 1];
          return `${result} (${descVal})`;
        } else {
          return formatVal(val1) + " (" + val2 + ")";
        }
      }
    } else {
      return localValue;
    }
  } else {
    if (isObject(localValue)) {
      return localValue.val + " - " + localValue.desc;
    }
    if (groups) {
      let newValue = localValue.split(" - ");
      newValue = newValue[1] || localValue;
      return newValue;
    }
    if (wrapDesc) {
      let mainVal = localValue.split(" - ")[0];
      let descVal = localValue.split(" - ")[1]
        ? " (" + localValue.split(" - ")[1] + ")"
        : "";
      return mainVal + descVal;
    }
    return localValue;
  }
};
