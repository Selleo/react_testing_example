import { Router, Link } from "@reach/router";
import examples from "./cases";

function App() {
  return (
    <div>
      <nav>
        {examples.map(({ to, linkText }) => (
          <Link to={to}>{linkText}</Link>
        ))}
      </nav>
      <Router>
        {examples.map(({ Component, path }) => (
          <Component key={path} path={path} />
        ))}
      </Router>
    </div>
  );
}

export default App;
