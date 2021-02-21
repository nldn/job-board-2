import React from 'react';
import { useQuery } from '@apollo/client';

import { DefaultPage } from '../DefaultPage';
import { CompanyList } from '../../components/CompanyList';
import { Spinner } from 'react-bootstrap';

import getCompaniesQuery from './GetCompaniesQuery.graphql';

export const CompaniesPage = () => {
  const { loading, error, data } = useQuery(getCompaniesQuery);

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
      <DefaultPage title="Companies">
        <CompanyList companies={data.companies} />
      </DefaultPage>
    );
  }

};