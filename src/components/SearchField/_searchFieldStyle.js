import styled from "styled-components";

export const Content = styled.div`
  margin-top: 16px;
  text-align: left;
  width: 100%;
  border: 1px solid #d6d8da;
  border-radius: 8px;
`;

export const FieldWrapper = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width + "px" : "100%")};
`;

export const Label = styled.div`
  font-size: 15px;
  line-height: 21px;
  margin-bottom: 8px;
  @media all and (min-width: 768px) {
    font-size: 17px;
    line-height: 24px;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 8px;
  left: 10px;
  width: 24px;
  height: 24px;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 10px;
  width: 24px;
  height: 24px;
`;

export const Input = styled.input`
  display: block;
  padding: 8px 8px 8px 40px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border: transparent;
  font-size: 15px;
  line-height: 21px;
  @media all and (min-width: 768px) {
    font-size: 17px;
    line-height: 24px;
  }
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #000;
  }
`;
