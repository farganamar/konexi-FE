import PropTypes from "prop-types";
import { Error } from "./_errorMessageStyle";

function ErrorMessage({ children }) {
  return <Error>{children}</Error>;
}

ErrorMessage.propTypes = {
  children: PropTypes.string,
};

ErrorMessage.defaultProps = {
  children: "",
};

export default ErrorMessage;
