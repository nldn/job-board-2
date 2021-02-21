import { useHistory } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';

import { CompanyLogo } from '../CompanyLogo';

export const JobCard = ({ job }) => {
  const history = useHistory();
  
  return (
    <Card style={{ marginBottom: 15 }}>
      <Card.Body>
        <Row>
          <Col sm="1" style={{ display: 'flex' }}>
            <CompanyLogo name={job.company.logo} />
          </Col>
          <Col sm="11">
            <Card.Title>
              {job.title}
            </Card.Title>
            <Card.Subtitle className="text-muted">
              {job.company !== null ? job.company.name : 'Unknown Company'}
            </Card.Subtitle>
            <Card.Text>
              {job.description}
            </Card.Text>
            <Button variant="outline-dark" onClick={() => history.push(`/jobs/${job.id}`)}>More</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};