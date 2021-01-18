import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const CreateProject = ({ history }: any) => {
  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default CreateProject;
