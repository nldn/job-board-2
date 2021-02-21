import { useHistory } from 'react-router-dom';
import moment from 'moment';

import { Row, Col, Card, Button } from 'react-bootstrap';

import { CompanyLogo } from '../CompanyLogo';

export const JobCard = ({ job }) => {
  const history = useHistory();

  return (
    <Card style={{ marginBottom: 15 }}>
      <Card.Body>
        <Row>
          {job.company && (
            <Col sm="1" style={{ display: 'flex' }}>
              <CompanyLogo name={job.company.logo} />
            </Col>
          )}
          <Col>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }} >
              <Card.Title style={{ flex: 1, marginBottom: 0 }}>
                {job.title}
              </Card.Title>
              <small className="text-muted">
                {moment(job.createdAt).fromNow()}
              </small>
            </div>
            {job.company && (
              <Card.Subtitle className="text-muted">
                {job.company.name}
              </Card.Subtitle>
            )}
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