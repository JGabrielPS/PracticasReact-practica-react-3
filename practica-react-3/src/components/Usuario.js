import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Usuario = () => {
  const [usuario, setUsuario] = useState([]);
  const { id } = useParams();

  const obtenerUsuario = async () => {
    try {
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const user = await resp.data;
      setUsuario(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerUsuario();
  }, []);

  return (
    <>
      <h1>Usuario</h1>
      <p>Nombre: {usuario.name}</p>
      <p>Email: {usuario.email}</p>
      <small>Teléfono: {usuario.phone}</small>
    </>
  );
};

export default Usuario;
