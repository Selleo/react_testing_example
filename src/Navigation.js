import { Nav } from "react-bootstrap";
import { Link } from "@reach/router";
import examples from "./cases";

const Navigation = () => {
  return (
    <Nav
      variant="pills"
      className="flex-column"
      activeKey={window.location.pathname}
    >
      <Nav.Link as={Link} to="/" href="/">
        Main
      </Nav.Link>
      {examples.map(({ to, linkText }) => (
        <Nav.Link as={Link} to={to} href={to} key={to}>
          {linkText}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default Navigation;
