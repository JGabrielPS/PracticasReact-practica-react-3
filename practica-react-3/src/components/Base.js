import React, { useState, useEffect } from "react";

const Base = () => {
  const [nombre, setNombre] = useState("Pedro");

  useEffect(() => {
    setTimeout(() => {
      setNombre("Manuel");
    }, 2000);
  });

  return (
    <>
      <h1>Desde URL Base</h1>
      <h2>Nombre: {nombre}</h2>
    </>
  );
};

export default Base;
