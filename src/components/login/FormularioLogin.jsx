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
        <h2 className="login-title">Login</h2>

        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}

        <Form>
          <Form.Group className="mb-4">
            <Form.Control
              className="login-input"
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4">
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
            Iniciar Sesión
          </Button>
        </Form>
      </div>

      <div className="login-right">
        <h1>WELCOME BACK!</h1>

        <p>
          Bienvenido nuevamente a Discosa.
          <br />
          Accede al sistema para continuar.
        </p>
      </div>
    </div>
  );
};

export default FormularioLogin;