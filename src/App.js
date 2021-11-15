import { Router } from "@reach/router";
import examples from "./cases";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";
import Navigation from "./Navigation";

function App() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Router>
            <Navigation default />
          </Router>
        </Col>
        <Col>
          <Router>
            <Main path="/" />
            {examples.map(({ Component, path }) => (
              <Component key={path} path={path} />
            ))}
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
