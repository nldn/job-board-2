import { Row, Col } from 'react-bootstrap';
import { JobCard } from '../JobCard';

export const JobList = () => {
  const dummyJobs = [
    { id: '1' }, 
    { id: '2' }, 
    { id: '3' },
    { id: '4' },
    { id: '5' }
  ];

  return (
    <Row>
      {dummyJobs.map(job => (
        <Col sm="12" key={job.id}>
          <JobCard />
        </Col>
      ))}
    </Row>
  );
};