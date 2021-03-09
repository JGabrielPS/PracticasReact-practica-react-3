import React from "react";
import { useParams } from "react-router-dom";

const Inicio = () => {
  const { id, nombre, edad } = useParams();

  return (
    <>
      <h1>Desde Inicio</h1>
      <h2>
        El Id es {id}, el nombre {nombre} y la edad {edad}
      </h2>
    </>
  );
};

export default Inicio;
