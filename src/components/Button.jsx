/* eslint-disable react/prop-types */

const Button = ({ action, label }) => {
  return <button onClick={action}>{label}</button>;
};
export default Button;

/*
const Button = (props) => {
    return <button onClick={props.action}>{props.label}</button>;
  };
  export default Button;
  */
