import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider} from '@apollo/client';
import client from './apollo';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import { JobsPage } from './pages/JobsPage';
import { CompaniesPage } from './pages/CompaniesPage';
import { CompanyDetailsPage } from './pages/CompanyDetailsPage';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import { CreateJobPage } from './pages/CreateJobPage';

function App() {
  return (
    <div 
      className="bg-light" 
      style={{
        display: 'flex', 
        width: '100%', 
        height: '100%' 
      }}>
        <ApolloProvider client={client}>
          <Router>
            <Sidebar />
            <Main>
              <Container>
                <Row>
                  <Col sm="12">
                    <Switch>
                      <Route exact path="/jobs" component={JobsPage} />
                      <Route path="/jobs/create" component={CreateJobPage} />
                      <Route exact path="/companies" component={CompaniesPage} />
                      <Route path="/companies/:companyId" component={CompanyDetailsPage} />
                    </Switch>  
                  </Col>
                </Row>
              </Container>
            </Main>
          </Router>
        </ApolloProvider>
    </div>
  );
}

export default App;
