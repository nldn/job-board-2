import { Link } from "react-router-dom"

export const Sidebar = () => {
  return (
    <div
      style={{
        width: 256,
        backgroundColor: 'lightgray'
      }}
    >
      <ul>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link to="/companies">Companies</Link>
        </li>
      </ul>
    </div>
  );
};