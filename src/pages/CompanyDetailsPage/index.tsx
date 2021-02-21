import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import getCompanyQuery from './GetCompanyQuery.graphql';

import { Spinner, Card } from 'react-bootstrap';
import { DefaultPage } from "../DefaultPage";
import { CompanyLogo } from "../../components/CompanyLogo";

export const CompanyDetailsPage = () => {
  const { companyId: id } = useParams<{ companyId: string }>();

  const { loading, error, data } = useQuery(getCompanyQuery, { variables: { id } });

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  
  if (error) {
    return (
      <div>
        Error
      </div>
    );
  }

  if (data) {
    return (
      <DefaultPage title="Company Details">
        <Card>
          <Card.Body>
            <CompanyLogo name={data.company.logo} width={48} height={48} style={{ marginBottom: 16 }} />
            <Card.Title>
              {data.company.name}
            </Card.Title>
            <Card.Text>
              {data.company.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </DefaultPage>
    );
  };

};