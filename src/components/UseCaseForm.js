import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const UseCaseForm = ({
  useCases,
  selectedDomain,
  selectedUseCaseData,
  onNextStep,
  onPreviousStep,
}) => {
  const [formData, setFormData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (event) => {
    const selectedCategoryName = event.target.value;
    const selectedCategory = useCases.find(
      (category) => category.name === selectedCategoryName
    );
    setSelectedCategory(selectedCategory);
    // onNextStep();
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // onNextStep();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with formData, e.g., submit to server
    onNextStep();
  };

  return (
    <div>
      <Form.Group controlId='categoryDropdown'>
        <Form.Label>Select a Use Case:</Form.Label>
        <Form.Control as='select' onChange={handleCategoryChange}>
          <option value=''>Choose...</option>
          {useCases.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      {selectedCategory && (
        <Card className='mt-4'>
          <Card.Body>
            <Card.Title>{selectedCategory.name}</Card.Title>
            <Form onSubmit={handleSubmit}>
              {selectedCategory.fields.map((field, index) => (
                <Form.Group key={index} controlId={`field_${index}`}>
                  <Form.Label>{field.description}</Form.Label>
                  <Form.Control
                    type={field.type}
                    name={field.name}
                    placeholder={`Enter ${field.name}`}
                  />
                </Form.Group>
              ))}

              {/* Render questions */}
              {selectedCategory.questions.map((question, index) => (
                <Form.Group key={index} controlId={`question_${index}`}>
                  <Form.Label>{question.text}</Form.Label>
                  <Form.Control
                    type='text'
                    name={`question_${index}`}
                    placeholder={`Answer for: ${question.text}`}
                  />
                </Form.Group>
              ))}

              <Button variant='primary w-100 m-1' type='submit'>
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default UseCaseForm;
