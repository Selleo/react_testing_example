import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RemountAfterRedirect from "./cases/remount_after_redirect/RemountAfterRedirect";

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col>
            <Switch>
              <Route path="/remountAfterRedirect/:id">
                <RemountAfterRedirect />
              </Route>
              <Route path="/">
                <Redirect to="/remountAfterRedirect/123" />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
