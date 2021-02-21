import { useQuery } from '@apollo/client';

import getJobsQuery from './GetJobsQuery.graphql';

import { Spinner } from 'react-bootstrap';
import { DefaultPage } from "../DefaultPage";
import { JobList } from "../../components/JobList";

export const JobsPage = () => {
  const { loading, error, data } = useQuery(getJobsQuery);

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
      <DefaultPage title="Jobs">
        <JobList jobs={data.jobs} />
      </DefaultPage>
    );
  };
};