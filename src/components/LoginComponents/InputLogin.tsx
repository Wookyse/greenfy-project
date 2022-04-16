import './style.scss';
import { ReactComponent as GroupMail } from '../../assets/icons/Group.svg';
import { ReactComponent as GroupPass } from '../../assets/icons/charm_shield-keyhole.svg';
export const InputLogin = () => {
  return (
    <div className="input-login">
      <div className="input-email-field">
        <div className="mail-ico-field">
          <GroupMail />
        </div>
        <input type="text" placeholder="Institutional email" />
      </div>
      <div className="input-password-field">
        <div className="pass-ico-field">
          <GroupPass />
        </div>
        <input type="text" placeholder="Password" />
      </div>
    </div>
  );
};
