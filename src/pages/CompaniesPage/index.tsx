import React from 'react';
import { useQuery } from '@apollo/client';

import { DefaultPage } from '../DefaultPage';
import { CompanyList } from '../../components/CompanyList';

import getCompaniesQuery from './GetCompaniesQuery.graphql';

export const CompaniesPage = () => {
  const { loading, error, data } = useQuery(getCompaniesQuery);

  if (loading) {
    console.log(loading);
  }
  
  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }

  return (
    <DefaultPage title="Companies">
      <CompanyList />
    </DefaultPage>
  );
};