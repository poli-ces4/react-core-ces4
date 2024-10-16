import { useState } from "react";
import Button from "./components/Button";
import ButtonState from "./components/ButtonState";
import Table from "./components/Table";
import LifeCycle from "./components/LifeCycle";

const App = () => {
  const [cantidad, setCantidad] = useState(0);
  const handlerSearch = (nombre) => {
    console.log(nombre);
  };
  const handlerCancelled = () => {
    console.log("handlerCancelled");
  };

  return (
    <>
      {/** 
      <p>hola</p>
      <Table />
      <br />
      */}
      <Button label="Guardar" action={() => {}} />
      <Button label="Buscar" action={() => handlerSearch("Pedro")} />
      <Button label="Eliminar" action={handlerCancelled} />
      <br />
      <ButtonState
        precio={1000}
        cantidad={cantidad}
        setCantidad={setCantidad}
      />
      <br />
      <br />
      <LifeCycle />
    </>
  );
};

export default App;
