import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const SheetIco = styled.img`
  padding: 8px;
  border-radius: 8px;
  height: 24px;
  width: 24px;
  background: #d5f7ed;
`;

export const Title = styled.span`
  font-size: 20px;
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const TrashIco = styled.img`
  padding: 8px;
  border-radius: 4px;
  height: 16px;
  width: 16px;
  background: #ededed;
  cursor: pointer;
`;
