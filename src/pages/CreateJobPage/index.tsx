import { useState } from "react";
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import createJobMutation from './CreateJobMutation.graphql';

import { Button, Card, Form } from "react-bootstrap";
import { DefaultPage } from "../DefaultPage";

export const CreateJobPage = () => {
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');

  const [ createJob ] = useMutation(createJobMutation, {
    onCompleted: ({ job }) => {
        console.log('completed...', job);
        history.push(`/jobs/${job.id}`);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const input = {
      title,
      description,
      salary: parseInt(salary),
      location,
      companyId: "ryXpbXkG_",
      createdBy: "1"
    }

    createJob({ 
      variables: { input }, 
    });
  };

  return (
    <DefaultPage title="Create Job">
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Salary</Form.Label>
              <Form.Control type="number" placeholder="Salary" min={0} defaultValue={salary} onChange={e => setSalary(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Button variant="dark" type="submit">Create</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </DefaultPage>
  );
};