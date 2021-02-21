import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import getJobQuery from './GetJobQuery.graphql';

import { Card, Spinner } from 'react-bootstrap';
import { DefaultPage } from '../DefaultPage';

export const JobDetailsPage = () => {
  const { jobId: id } = useParams<{ jobId: string }>();

  const { loading, error, data } = useQuery(getJobQuery, { variables: { id } });

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
      <DefaultPage title="Job Details">
        <Card>
          <Card.Body>
            <Card.Title>
              {data.job.title}
            </Card.Title>
            <Card.Subtitle>
              {data.job.company.name}
            </Card.Subtitle>
            <Card.Text>
              {data.job.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </DefaultPage>
    );
  };
};