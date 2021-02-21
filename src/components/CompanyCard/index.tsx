import { FC } from 'react';
import { Card, Button } from 'react-bootstrap';
import { ReactComponent as CompanyLogo } from './apple.svg';

interface CompanyCardProps {
  company: any;
}

export const CompanyCard: FC<CompanyCardProps> = ({ company }) => {
  return (
    <Card style={{ marginBottom: 30 }}>
      <Card.Body>
          <CompanyLogo width={48} height={48} style={{ marginBottom: 16 }} />
          <Card.Title>
            {company.name}
          </Card.Title>
          <Card.Text className="text-sm">
            {company.description}
          </Card.Text>
          <Button variant="outline-dark" block>More</Button>
      </Card.Body>
    </Card>
  );
};