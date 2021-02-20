import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import { CompanyList } from './components/CompanyList';

function App() {
  return (
    <div className="bg-light" style={{ width: '100%', height: '100%' }}>
      <Container>
        <Row>
          <Col sm="12">
            <CompanyList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
