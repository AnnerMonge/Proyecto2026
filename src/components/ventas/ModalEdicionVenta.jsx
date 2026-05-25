import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const ModalEdicionVenta = ({
  mostrarModal,
  setMostrarModal,
  ventaEditada,
  manejoCambioInput,
  actualizarVenta,
  ganadosDisponibles, // Asumo que necesitas esta lista para seleccionar el ganado
}) => {
  const [deshabilitado, setDeshabilitado] = useState(false);

  const handleGuardar = async () => {
    if (deshabilitado) return;
    setDeshabilitado(true);
    await actualizarVenta();
    setDeshabilitado(false);
  };

  return (
    <Modal
      show={mostrarModal}
      onHide={() => setMostrarModal(false)}
      backdrop="static"
      keyboard={false}
      centered
      size="md"
    >
      <Modal.Header closeButton>
        <Modal.Title>Editar Venta</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          {/* Selección de Ganado */}
          <Row>
            <Col xs={12}>
              <Form.Group className="mb-3">
                <Form.Label>Seleccionar Ganado *</Form.Label>
                <Form.Select
                  name="id_ganado"
                  value={ventaEditada.id_ganado || ""}
                  onChange={manejoCambioInput}
                  required
                >
                  <option value="">Seleccione un animal...</option>
                  {ganadosDisponibles?.map((g) => (
                    <option key={g.id_ganado} value={g.id_ganado}>
                      {g.nombre} - {g.codigo_arete}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Datos del Comprador */}
          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre Comprador *</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre_comprador"
                  value={ventaEditada.nombre_comprador || ""}
                  onChange={manejoCambioInput}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Teléfono *</Form.Label>
                <Form.Control
                  type="text"
                  name="telefono_comprador"
                  value={ventaEditada.telefono_comprador || ""}
                  onChange={manejoCambioInput}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Detalles Financieros y Fecha */}
          <Row>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Precio Venta ($) *</Form.Label>
                <Form.Control
                  type="number"
                  name="precio_venta"
                  value={ventaEditada.precio_venta || ""}
                  onChange={manejoCambioInput}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Fecha Venta *</Form.Label>
                <Form.Control
                  type="date"
                  name="fecha_venta"
                  value={ventaEditada.fecha_venta || ""}
                  onChange={manejoCambioInput}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => setMostrarModal(false)}
          disabled={deshabilitado}
        >
          Cancelar
        </Button>
        <Button
          variant="primary"
          onClick={handleGuardar}
          disabled={deshabilitado || !ventaEditada.id_ganado || !ventaEditada.precio_venta}
        >
          {deshabilitado ? "Guardando..." : "Guardar Venta"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEdicionVenta;