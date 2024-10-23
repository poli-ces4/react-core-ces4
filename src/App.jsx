import { useState } from "react";
import Button from "./components/Button";
import ButtonState from "./components/ButtonState";
import Table from "./components/Table";
import LifeCycle from "./components/LifeCycle";
import style from "./App.module.css";
import VideoList from "./components/VideoList";
import { playListMusic } from "./data/data";
import FormControlado from "./components/FormControlado";
import FormNoControlado from "./components/FormNoControlado";

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
      <div className={style.container} style={{ width: "500px" }}>
        <p>Prueba</p>
        <br />
        <p>sada</p>
        <VideoList title={"Musica"} playList={playListMusic} />
      </div>
      <div>
        <br />
        <FormControlado />
      </div>
      <div>
        <br />
        <FormNoControlado />
      </div>

      <p>hola</p>
      <Table />
      <br />

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
