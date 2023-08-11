import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background-color: #fff;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 1024px) {
    background-color: rgba(138, 137, 137, 0.6);
  }
`;

export const Content = styled.div`
  @media (min-width: 1024px) {
    position: absolute;
    width: 768px;
    margin-left: calc((100vw - 780px) / 2);
    margin-top: ${({ isContentHigher, height }) =>
      !isContentHigher && height > 0 ? `calc((100vh - ${height}px) / 2)` : 0};
    margin-bottom: ${({ isContentHigher }) => (isContentHigher ? "50px" : "0")};
    z-index: 400;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 16px;
  background: white;
  border-bottom: 1px solid #dee2e6;

  @media (min-width: 1024px) {
    height: 88px;
    padding: 0;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom: none;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #000000;
`;

export const Close = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 8px;
  cursor: pointer;

  @media (min-width: 1024px) {
    right: 34px;
  }
`;

export const Body = styled.div`
  padding-top: 32px;
  @media (min-width: 1024px) {
    padding: 0;
    padding-bottom: 32px;
    position: relative;
    min-height: 100px;
    background: #fff;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;
