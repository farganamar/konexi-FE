import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0px 16px;
`;

export const Content = styled.div`
  display: flex;
  gap: 16px;
`;

export const GoogleIco = styled.img`
  padding: 12px;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background: #f2f2f2;
`;

export const ContentDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const DescTitle = styled.span`
  font-size: 16px;
`;

export const DescText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #a6a3a3;
`;

export const DropItemWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 40px;
  width: 100%;
  background: #ededed;
  cursor: pointer;
`;

export const DatabaseIco = styled.img`
  height: 20px;
  width: 20px;
`;

export const DatabaseText = styled.span`
  font-size: 14px;
  font-weight: 550;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SubTitle = styled.span`
  font-size: 14px;
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorIco = styled.img`
  margin-bottom: 24px;
`;

export const FileWrapper = styled.div`
  height: 46px;
  border: 1px solid #c2bebe;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-items: center;
  align-items: center;
`;

export const RemoveIco = styled.img`
  height: 24px;
  width: 24px;
`;
