import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: auto;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border: 2px solid #e1e1e3;
  border-radius: 8px;

  @media all and (min-width: 1024px) {
    width: 480px;
  }
`;
