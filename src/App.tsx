import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import { JobsPage } from './pages/JobsPage';
import { CompaniesPage } from './pages/CompaniesPage';

function App() {
  return (
    <div className="bg-light" style={{ width: '100%', height: '100%' }}>
      <Router>
        <Container>
          <Row>
            <Col sm="12">
              <Switch>
                <Route path="/jobs" component={JobsPage} />
                <Route path="/companies" component={CompaniesPage} />
              </Switch>  
            </Col>
          </Row>
          </Container>
      </Router>
    </div>
  );
}

export default App;
