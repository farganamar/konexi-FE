import { useWidget } from "../../../context/Context";
import Dashboard from "./Dashboard";

function Form() {
  const { step } = useWidget();
  const generateForm = () => {
    switch (step) {
      case 1:
        return <Dashboard />;
      default:
        return null;
    }
  };

  return generateForm();
}
export default Form;
