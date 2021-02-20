import { FC } from 'react';
import { Row, Col } from 'react-bootstrap';

interface DefaultPageProps {
  title: string;
}

export const DefaultPage: FC<DefaultPageProps> = ({ title, children }) => {
  return (
    <Row>
      <Col sm="12">
        <h1 style={{ marginTop: 32, marginBottom: 32 }}>
          {title}
        </h1>

        {children}
      </Col>
    </Row>
  );
};