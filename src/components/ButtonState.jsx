/* eslint-disable react/prop-types */

const ButtonState = ({ precio, setCantidad, cantidad }) => {
  const handlerClick = (valor) => {
    setCantidad(cantidad + 1 + valor);
  };
  return (
    <>
      <button
        onClick={() => handlerClick(10)}
      >{`cantidad de clicks : ${cantidad}`}</button>
      <p>{precio}</p>
    </>
  );
};

export default ButtonState;
