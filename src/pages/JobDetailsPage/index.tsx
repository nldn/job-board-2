import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import moment from 'moment';

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
    console.log(moment(data.job.createdAt).fromNow());

    return (
      <DefaultPage title="Job Details">
        <Card>
          <Card.Body>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }} >
              <Card.Title style={{ flex: 1, marginBottom: 0 }}>
                {data.job.title}
              </Card.Title>
              <small className="text-muted">
                {moment(data.job.createdAt).fromNow()}
              </small>
            </div>
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