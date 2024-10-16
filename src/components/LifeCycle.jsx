import { useEffect, useState } from "react";
import Papelera from "./Papelera";

console.log("Pre-render");
const LifeCycle = () => {
  console.log("Logic-Render");
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log("UseEffect default");
  });
  //solo se ejecuta una sola vez, cuando se carga/monta el componente
  useEffect(() => {
    console.log("UseEffect sin dependencias []");
  }, []);
  useEffect(() => {
    console.log("UseEffect con dependencias [contador1]");
  }, [contador1]);
  useEffect(() => {
    console.log("UseEffect con dependencias [contador1,contador2]");
  }, [contador1, contador2]);

  return (
    <div>
      {console.log("return-render")}
      <h3>LifeCycle</h3>
      <h4>Contador 1: {contador1}</h4>
      <h4>Contador 2: {contador2}</h4>
      <button onClick={() => setContador1(contador1 + 1)}>Contador 1</button>
      <button onClick={() => setContador2(contador2 + 1)}>Contador 2</button>
      <br />
      <br />
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar" : "Mostrar"}
      </button>
      <br />
      {visible && <Papelera />}
    </div>
  );
};
export default LifeCycle;
