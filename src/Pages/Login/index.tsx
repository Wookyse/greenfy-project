import { useNavigate } from 'react-router-dom';

import { TitleLogin } from '../../components/LoginComponents/TitleLogin';
import { InputLogin } from '../../components/LoginComponents/InputLogin';
import { Button } from '../../components/LoginComponents/ButtonLogin';
import './style.scss';
import { ForgotPassWord } from '../../components/LoginComponents/ForgotPassword';

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/home');
  };

  return (
    <div className="background-login">
      <div className="background-form">
        <form className="content-form" action="" onSubmit={handleSubmit}>
          <TitleLogin />
          <InputLogin />
          <ForgotPassWord />
          <Button name="Login" />
        </form>
        <div className="link-create-account">
          <a href="?">How to have an account</a>
          <div className="gg-arrow-right"></div>
        </div>
      </div>
    </div>
  );
};
