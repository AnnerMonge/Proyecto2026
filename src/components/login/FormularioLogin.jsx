import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./FormularioLogin.css";

const FormularioLogin = ({
  usuario,
  contrasena,
  error,
  setUsuario,
  setContrasena,
  iniciarSesion,
}) => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-header">
          <i className="bi bi-box me-2"></i>
          <h2 className="login-title">Discosa</h2>
        </div>

        {error && (
          <Alert variant="danger" className="mt-3 alert-login">
            {error}
          </Alert>
        )}

        <Form>
          <Form.Group className="mb-4">
            <Form.Label className="login-label">
              <i className="bi bi-envelope me-2"></i>Correo Electrónico
            </Form.Label>
            <Form.Control
              className="login-input"
              type="email"
              placeholder="tu@correo.com"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="login-label">
              <i className="bi bi-lock me-2"></i>Contraseña
            </Form.Label>
            <Form.Control
              className="login-input"
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </Form.Group>

          <Button
            className="login-button"
            onClick={iniciarSesion}
          >
            <i className="bi bi-box-arrow-in-right me-2"></i>
            Iniciar Sesión
          </Button>
        </Form>
      </div>

      <div className="login-right">
        <div className="login-right-content">
          <i className="bi bi-speedometer2 login-icon"></i>
          <h1>¡BIENVENIDO!</h1>
          <p>
            Accede a tu sistema de gestión de ventas
            <br />
            y productos de forma segura.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormularioLogin;