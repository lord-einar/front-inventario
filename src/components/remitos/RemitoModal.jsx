import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function RemitoModal({ remito, showModal, setShowModal }) {
  return (
    <>
      <Modal
        show={showModal}
        centered
        size="lg"
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Remito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={6}>
              <p>Numero: {remito.remito.numero}</p>
            </Col>
            <Col xs={6} md={6}>
              <p>Fecha: {new Date(remito.remito.fecha).toLocaleDateString()}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <p>Sede destino: {remito.remito.Sede.nombre}</p>
            </Col>
            <Col xs={6} md={6}>
              <p>Solicitante: {remito.remito.userDestino}</p>
            </Col>
          </Row>
          <hr />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Producto</th>
                <th>Serial</th>
              </tr>
            </thead>
            <tbody>
              {remito.stock.length ? (
                remito.stock.map((item) => (
                  <tr key={item.id}>
                    <td>{item.nombre}</td>
                    <td>{item.Marca.nombre}</td>
                    <td>{item.TipoArticulo.nombre}</td>
                    <td>{item.serie}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>No hay productos</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <p>Técnico: {remito.remito.User.nombre}</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RemitoModal;
