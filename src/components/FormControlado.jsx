import { useState } from "react";

const FormControlado = () => {
  const [frmLogin, setFrmLogin] = useState({
    email: "",
    password: "",
    age: 15,
  });

  /*
  const handlerInputEmail = (e) => {
    console.log(e.target);
    setFrmLogin({ ...frmLogin, email: e.target.value });
  };

  const handlerInputPassword = (e) => {
    setFrmLogin({ ...frmLogin, password: e.target.value });
  };
*/
  const handlerInputChange = ({ target: { name, value } }) => {
    setFrmLogin({ ...frmLogin, [name]: value });
  };

  return (
    <div>
      <h1>Fomurlario Controlado</h1>
      <input
        type="text"
        name="email"
        placeholder="Ingrese Email"
        autoComplete="off"
        value={frmLogin.email}
        onChange={handlerInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Ingrese password"
        autoComplete="off"
        value={frmLogin.password}
        onChange={handlerInputChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Ingrese edad"
        autoComplete="off"
        value={frmLogin.age}
        onChange={handlerInputChange}
      />
    </div>
  );
};

export default FormControlado;
