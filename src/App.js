import { Router } from "@reach/router";
import examples from "./cases";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";

function App() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <Nav
            path="*"
            variant="pills"
            className="flex-column"
            activeKey={window.location.pathname}
          >
            <Nav.Link href="/">Main</Nav.Link>
            {examples.map(({ to, linkText }) => (
              <Nav.Link href={to}>{linkText}</Nav.Link>
            ))}
          </Nav>
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
