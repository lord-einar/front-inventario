import React, { useEffect, useState } from "react";
import axios from "axios";
import {Table } from "react-bootstrap";
import { PaginationControl } from "react-bootstrap-pagination-control";
import RemitoModal from "./RemitoModal";

function BuscarRemitos() {
  const [remitos, setRemitos] = useState([]);
  const [page, setPage] = useState(1);
  const [remito, setRemito] = useState();
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState(0);
  const [limit, setLimit] = useState(12);
  const [showModal, setShowModal] = useState(false);

  const busqueda = async () => {
    axios
      .get(`http://localhost:7070/remitos/${limit}/${offset}`)
      .then((res) => {
        // console.log(res.data);
        setRemitos(res.data.rows);
        setItems(res.data.count);
    });
};

const busquedaByID = async (id) => {
    axios.get(`http://localhost:7070/remitos/${id}`).then((res) => {
        // console.log(res.data);
        setRemito(res.data);
      setShowModal(true);
    });
  };

  useEffect(() => {
    busqueda();
  }, [offset]);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Numero</th>
            <th>Sede</th>
            <th>User</th>
            <th>Fecha</th>
            <th>Prestamo</th>
            <th>User Destino</th>
          </tr>
        </thead>
        <tbody>
          {remitos.map((remito) => (
            <tr key={remito.id}>
              <td>
                <button onClick={() => busquedaByID(remito.id)}>
                  {remito.numero}
                </button>
              </td>
              <td>{remito.Sede.nombre}</td>
              <td>{remito.User.nombre}</td>
              <td>{remito.fecha}</td>
              <td>{remito.prestamo ? "Sí" : "No"}</td>
              <td>{remito.userDestino}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <PaginationControl
        page={page}
        between={Math.ceil(items / limit)}
        total={items}
        limit={limit}
        changePage={(page) => {
          setPage(page);
          setOffset(limit * (page - 1));
        }}
        ellipsis={1}
      />

      {remito ? (
        <RemitoModal
          showModal={showModal}
          setShowModal={setShowModal}
          remito={remito}
        />
      ) : null}
    </div>
  );
}

export default BuscarRemitos;
