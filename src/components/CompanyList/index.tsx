import { Row, Col } from 'react-bootstrap';
import { CompanyCard } from "../CompanyCard";

export const CompanyList = () => {
  const dummyCompanies = [
    { id: '1' }, 
    { id: '2' }, 
    { id: '3' },
    { id: '4' },
    { id: '5' }
  ];

  return (
    <Row>
      {dummyCompanies.map(company => (
        <Col sm="3" key={company.id}>
          <CompanyCard />
        </Col>
      ))}
    </Row>
  );
};