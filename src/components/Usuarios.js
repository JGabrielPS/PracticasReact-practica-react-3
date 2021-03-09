import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  const obtenerUsuarios = async () => {
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await resp.data;
      setUsuarios(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <>
      <h1>Lista de Usuarios</h1>
      {usuarios.map((item) => {
        return (
          <div>
            <Link to={`/usuario/${item.id}`} key={item.id}>
              {item.name}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Usuarios;
