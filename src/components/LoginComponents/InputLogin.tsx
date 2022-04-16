import './style.scss';
import { GroupMail } from '../../assets/icons/Group.svg';
import { GroupPass } from '../../assets/icons/charm_shield-keyhole.svg';
export const InputLogin = () => {
  return (
    <div className="input-login">
      <span>
        <GroupMail />
        <input type="text" placeholder="Institutional email" />
      </span>
      <span>
        <GroupPass />
        <input type="text" placeholder="Password" />
      </span>
    </div>
  );
};
