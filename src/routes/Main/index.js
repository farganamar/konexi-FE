import { useEffect } from "react";
import { useWidget } from "../../context/Context";
import Form from "./steps";
import { CoreLayout } from "../../layout";

function Main() {
  const { setStep } = useWidget();
  useEffect(() => {
    setStep(1);
  }, []);

  return (
    <CoreLayout>
      <Form />
    </CoreLayout>
  );
}

export default Main;
