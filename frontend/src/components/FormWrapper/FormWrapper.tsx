import { Wrapper } from "./FormWrapper.style";
import formLogo from "../../assets/form_logo.svg";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const FormWrapper = ({ children, style }: Props) => {
  return (
    <Wrapper style={style}>
      <img src={formLogo} />
      {children}
    </Wrapper>
  );
};

export default FormWrapper;
