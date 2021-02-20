import { Card, Button } from 'react-bootstrap';
import { ReactComponent as CompanyLogo } from './apple.svg';

export const CompanyCard = () => {
  return (
    <Card style={{ marginBottom: 16 }}>
      <Card.Body>
          <CompanyLogo width={48} height={48} style={{ marginBottom: 16 }} />
          <Card.Title>Apple Inc.</Card.Title>
          <Card.Text className="text-sm">Technology company based in Cupertino, California.</Card.Text>
          <Button variant="outline-dark" block>More</Button>
      </Card.Body>
    </Card>
  );
};