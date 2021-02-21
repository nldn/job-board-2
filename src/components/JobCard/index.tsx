import { Row, Col, Card, Button } from 'react-bootstrap';

import { CompanyLogo } from '../CompanyLogo';

export const JobCard = () => {
  return (
    <Card style={{ marginBottom: 15 }}>
      <Card.Body>
        <Row>
          <Col sm="1" style={{ display: 'flex' }}>
            <CompanyLogo name="apple" />
          </Col>
          <Col sm="11">
            <Card.Title>Frontend Developer</Card.Title>
            <Card.Subtitle className="text-muted">Apple Inc.</Card.Subtitle>
            <Card.Text>
              We are looking for a frontend developer who will join our Design & Engineering team.
            </Card.Text>
            <Button variant="outline-dark">More</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};