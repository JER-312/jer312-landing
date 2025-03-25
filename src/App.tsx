// src/App.tsx
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <Outlet /> {/* Renders child route elements */}
      </div>
  );
}

export default App;