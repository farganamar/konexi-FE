import { useRef, useState } from "react";
import {
  Button,
  Card,
  MiniSelectSearch,
  Modal,
  SelectSearch,
  TopNav,
} from "../../../../components";
import { EMAIL } from "../../../../mock/email";
import { TAB } from "../../../../mock/tab";
import DATABASE from "./../../../../assets/png/database.png";
import ERROR from "./../../../../assets/svg/error.svg";
import GOOGLE from "./../../../../assets/svg/google.svg";
import REMOVE from "./../../../../assets/svg/remove.svg";
import {
  ColumnWrapper,
  Container,
  Content,
  ContentDesc,
  ContentWrapper,
  DatabaseIco,
  DatabaseText,
  DescText,
  DescTitle,
  DropItemWrapper,
  ErrorIco,
  FileWrapper,
  FlexWrapper,
  GoogleIco,
  ModalContent,
  RemoveIco,
  SubTitle,
} from "./_dashboard";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [invalidFile, setInvalidFile] = useState(false);
  const inputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.files;
    if (data.length > 1) {
      return setInvalidFile(true);
    }
    setFile(e.dataTransfer.files);
  };

  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  return (
    <Container>
      <Card>
        <TopNav onDelete={() => {}} />
        <ContentWrapper>
          <Content>
            <GoogleIco alt="google" src={GOOGLE} />
            <ContentDesc>
              <DescTitle>Connect Google Account</DescTitle>
              <DescText>
                Please connect Google Account to use this block
              </DescText>
            </ContentDesc>
          </Content>
          <Button
            onClick={() => {
              window.open("https://accounts.google.com/login?hl=in", "_blank");
            }}
          >
            Connect
          </Button>
        </ContentWrapper>
      </Card>
      <Card>
        <TopNav onDelete={() => {}} />
        <input
          type="file"
          hidden
          ref={inputRef}
          onChange={(e) => {
            setFile(e.target.files);
          }}
        />
        {!file && (
          <DropItemWrapper
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            <DatabaseIco alt="database" src={DATABASE} />
            <DatabaseText>
              Connect Flow Node to Import to Google Sheets
            </DatabaseText>
          </DropItemWrapper>
        )}
        {file && <span>{file[0].name}</span>}
      </Card>
      <Card>
        <TopNav onDelete={() => {}} />
        <ColumnWrapper>
          <SubTitle>Google Account</SubTitle>
          <SelectSearch options={EMAIL} />
          <SubTitle>File</SubTitle>
          <FileWrapper>
            <FlexWrapper></FlexWrapper>
            <FlexWrapper>
              <MiniSelectSearch options={TAB} />
              <RemoveIco alt="remove" src={REMOVE} />
            </FlexWrapper>
          </FileWrapper>
        </ColumnWrapper>
      </Card>
      <Modal
        title=""
        isDisplay={invalidFile}
        onClose={() => {
          setInvalidFile(false);
        }}
      >
        <ModalContent>
          <ErrorIco alt="error" src={ERROR} />
          <span>Invalid number of File</span>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default Dashboard;
