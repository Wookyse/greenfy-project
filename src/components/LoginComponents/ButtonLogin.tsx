import './style.scss';
type ButtonProps = {
  name: React.ReactNode;
};
export const Button = (props: ButtonProps) => {
  return (
    <div className="button-login">
      <button>{props.name}</button>
    </div>
  );
};
