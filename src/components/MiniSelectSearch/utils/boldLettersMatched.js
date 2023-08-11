import React from "react";
import { convertToLowerCase } from "./common";

// This function is to generate list item with bold letters that matched with the search text
// word is a list item. Ex: "Dr Spiderman".
// input is a text user entered. Ex: "man"

function boldLettersMatched(word, input) {
  if (input.length < 1 || word === "Select One") {
    return word;
  }

  let _input = convertToLowerCase(input);
  let firstIndexFound = convertToLowerCase(word).indexOf(_input);

  if (firstIndexFound < 0) {
    return word;
  }

  let arr1 = word.split("");
  let arr2 = word.split("");

  let search_text = [];
  arr1.forEach((item, index) => {
    if (
      index >= firstIndexFound &&
      _input.indexOf(convertToLowerCase(item)) > -1 &&
      search_text.length < input.length
    ) {
      search_text.push(item);
    }
  });

  let puzzle1 = arr1.splice(0, firstIndexFound);
  let puzzle2 = arr2.splice(firstIndexFound + input.length);

  return (
    <>
      {puzzle1.join("")}
      <span id="matched-text">{search_text.join("")}</span>
      {puzzle2.join("")}
    </>
  );
}

export default boldLettersMatched;
