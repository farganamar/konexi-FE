import {
  Container,
  LeftHeader,
  RightHeader,
  SheetIco,
  Title,
  TrashIco,
} from "./_topNav";
import SHEET from "./../../assets/svg/sheet.svg";
import TRASH from "./../../assets/svg/trash.svg";

function TopNav(props) {
  return (
    <Container>
      <LeftHeader>
        <SheetIco alt="sheet" src={SHEET} />
        <Title>Export to Google Sheets</Title>
      </LeftHeader>
      <RightHeader>
        <TrashIco alt="trash" src={TRASH} onClick={props.onDelete} />
      </RightHeader>
    </Container>
  );
}

export default TopNav;
