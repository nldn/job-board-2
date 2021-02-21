import { FC } from 'react';
import { Row, Col } from 'react-bootstrap';
import { CompanyCard } from "../CompanyCard";

interface CompanyListProps {
  companies: any[]
};

export const CompanyList: FC<CompanyListProps> = ({ companies }) => {
  return (
    <Row>
      {companies.map(company => (
        <Col sm="3" key={company.id}>
          <CompanyCard company={company} />
        </Col>
      ))}
    </Row>
  );
};