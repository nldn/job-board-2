import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import { CompanyCard } from './components/CompanyCard';

function App() {
  return (
    <div className="bg-light" style={{ width: '100%', height: '100%' }}>
      <Container>
        <Row>
          <Col sm="3">
            <CompanyCard />
          </Col>
          <Col sm="3">
            <CompanyCard />
          </Col>
          <Col sm="3">
            <CompanyCard />
          </Col>
          <Col sm="3">
            <CompanyCard />
          </Col>
          <Col sm="3">
            <CompanyCard />
          </Col>
          <Col sm="3">
            <CompanyCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
