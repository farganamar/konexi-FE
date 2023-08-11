import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import closeIcon from "./assets/close-nav.svg";
import { Body, Close, Container, Content, Head, Title } from "./_modalStyle";

function Modal(props) {
  const [modalHeight, setModalHeight] = useState(0);
  const [isContentHigher, setContentHigher] = useState(false);

  useEffect(() => {
    setTimeout(
      () => {
        const modalElement = document.getElementById(props.id);
        const modalHeightValue = modalElement && modalElement.offsetHeight;
        const viewportHeight = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
        const finalHeight =
          modalHeightValue > viewportHeight
            ? modalHeightValue - 50
            : modalHeightValue;
        setModalHeight(finalHeight);
        setContentHigher(finalHeight > viewportHeight);
      },
      props.isWaitMode ? 1000 : 0
    );
  });

  if (!props.isDisplay) {
    return null;
  }
  return (
    <Container isContentHigher={isContentHigher}>
      <Content
        id={props.id}
        height={modalHeight}
        isContentHigher={isContentHigher}
      >
        <Head>
          {props.displayClose && (
            <Close src={closeIcon} onClick={props.onClose} />
          )}
          <Title>{props.title}</Title>
        </Head>
        <Body>{props.children}</Body>
      </Content>
    </Container>
  );
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isDisplay: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isWaitMode: PropTypes.bool,
  displayClose: PropTypes.bool,
};

Modal.defaultProps = {
  id: "modal_id",
  title: "Modal Title",
  isDisplay: false,
  onClose: () => {},
  children: "No Content",
  isWaitMode: false,
  displayClose: true,
};

export default Modal;
