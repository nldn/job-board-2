import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { CompanyType } from '../../types';

import { Card, Button } from 'react-bootstrap';
import { CompanyLogo } from '../CompanyLogo';

interface CompanyCardProps {
  company: CompanyType;
}

export const CompanyCard: FC<CompanyCardProps> = ({ company }) => {
  const history = useHistory();

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
          <Button 
            block
            variant="outline-dark"
            onClick={() => history.push(`companies/${company.id}`)}
          >
            More
          </Button>
      </Card.Body>
    </Card>
  );
};