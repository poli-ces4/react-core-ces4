import { useEffect } from "react";

const Papelera = () => {
  useEffect(() => {
    return () => {
      console.log("Componente Papelera ya no existe");
    };
  }, []);

  return <div>Papelera</div>;
};

export default Papelera;
