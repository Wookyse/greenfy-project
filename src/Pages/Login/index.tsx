import { TitleLogin } from '../../components/LoginComponents/TitleLogin';
import { InputLogin } from '../../components/LoginComponents/InputLogin';
import './style.scss';
import { ButtonLogin } from '../../components/LoginComponents/ButtonLogin';
import { ForgotPassWord } from '../../components/LoginComponents/ForgotPassword';

export const Login = () => {
  return (
    <div className="background-login">
      <div className="background-form">
        <form className="content-form" action="">
          <TitleLogin />
          <InputLogin />
          <ForgotPassWord />
          <ButtonLogin />
        </form>
      </div>
    </div>
  );
};
