import { Row, Col } from 'react-bootstrap';
import { JobCard } from '../JobCard';

export const JobList = ({ jobs }) => {
  return (
    <Row>
      {jobs.map(job => (
        <Col sm="12" key={job.id}>
          <JobCard job={job} />
        </Col>
      ))}
    </Row>
  );
};