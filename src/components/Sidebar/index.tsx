import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap';

export const Sidebar = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        width: 256,
        backgroundColor: 'white',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 16 }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: 'slategray' }}></div>
      </div>

      <div style={{ display: 'flex', flex: 1 }}>
        <ul style={{ margin: 0, padding: 0, width: '100%', listStyleType: 'none' }}>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/jobs/create">Create Job</Link>
          </li>
          <li>
            <Link to="/companies">Companies</Link>
          </li>
        </ul>
      </div>

      <div>
      <Button block variant="outline-dark">Logout</Button>
      </div>
    </div>
  );
};