import * as S from "./styles";

interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <S.Button href={props.href}>{props.text}</S.Button>;
};

export default Button;
