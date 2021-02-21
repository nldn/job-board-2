import { FC } from 'react';

import { CompanyType } from '../../types';

import { Card, Button } from 'react-bootstrap';
import { CompanyLogo } from '../CompanyLogo';

interface CompanyCardProps {
  company: CompanyType;
}

export const CompanyCard: FC<CompanyCardProps> = ({ company }) => {
  return (
    <Card style={{ marginBottom: 30 }}>
      <Card.Body>
          <CompanyLogo name={company.logo} width={48} height={48} style={{ marginBottom: 16 }} />
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