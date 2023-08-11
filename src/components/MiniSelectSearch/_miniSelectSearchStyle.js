import styled from "styled-components";

export const Container = styled.div``;

export const Label = styled.div`
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 8px;

  @media all and (min-width: 1024px) {
    line-height: 24px;
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

export const Select = styled.div`
  height: 40px;
  min-width: 100px;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 16px;
  background: ${(props) => (props.disabled ? "#bfbfbf" : "#ededed")};
  color: ${(props) => (props.disabled ? "#848A90" : "#000")};
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;

  > div {
    width: calc(100% - 44px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media all and (min-width: 1024px) {
    line-height: 24px;
  }
`;

export const SelectValue = styled.div`
  padding-left: 16px;
`;

export const Img = styled.img`
  position: absolute;
  height: 10px;
  width: 10px;
  top: 16px;
  right: 24px;
  transform: rotate(
    ${({ isoptiondisplay }) => (isoptiondisplay === "hidden" ? "180" : "0")}deg
  );
  transition: transform 0.5s;
`;

export const OptionWrapper = styled.div`
  visibility: ${(props) => props?.isoptiondisplay};
  position: absolute;
  margin-top: 7px;
  border: 0.5px solid #b3b1a8;
  border-radius: 8px;
  min-width: 360px;
  top: 40px;
  left: -180px;
  background-color: #fff;
  z-index: 30;
  padding-bottom: 24px;
  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.1);

  @media all and (min-width: 1024px) {
    left: 0px;
  }
`;

export const SearchWrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;
`;

export const OptionList = styled.div`
  left: 0;
  margin-top: 10px;
  max-height: 200px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #848a90;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #333d47;
  }
`;

export const Option = styled.div`
  display: flex;
  margin-left: 16px;
  padding: 8px 24px;
  min-height: 40px;
  color: #000;
  font-size: 14px;
  line-height: 24px;
  box-sizing: border-box;

  .option-val {
    margin-right: 24px;
    min-width: 58px;
  }

  .option-group {
    font-family: "";
  }
  #matched-text {
    font-weight: 700;
  }

  &:hover {
    background-color: #b3b1a8;
  }
`;

export const Hint = styled.div`
  font-size: 14px;
  line-height: 21px;
  color: #b3b1a8;
`;

export const ErrorWrapper = styled.div`
  margin-top: 13px !important;
`;
