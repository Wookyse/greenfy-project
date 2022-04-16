import './style.scss';
import { ReactComponent as Greenfy } from '../../assets/icons/GreenFy.svg';
export const TitleLogin = () => {
  return (
    <div className="title-login">
      <Greenfy />
      <p className="sign-p">Sign in usign your student email account</p>
    </div>
  );
};
