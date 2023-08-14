import React from "react";
import { Form } from "react-bootstrap";

const DomainForm = ({ domains, onSelectDomain }) => (
  <Form>
    <Form.Group controlId="domainSelect">
      <Form.Label>Select Domain:</Form.Label>
      <Form.Control as="select" onChange={onSelectDomain}>
        <option value="">Select Domain...</option>
        {domains.map((domain, index) => (
          <option key={index} value={domain.name}>
            {domain.name}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  </Form>
);

export default DomainForm;
