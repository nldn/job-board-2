import { Row, Col, Card, Button, Form } from 'react-bootstrap';

export const Login = () => {
  return (
    <Row>
      <Col sm={{ span: 8, offset: 2 }}>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group>
                <Button variant="dark" block>Login</Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};