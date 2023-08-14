import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import DomainForm from "../src/components/DomainForm";
import UseCaseForm from "../src/components/UseCaseForm";
import useCasesData from "./data.json";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedUseCase, setSelectedUseCase] = useState("");
  const [selectedUseCaseData, setSelectedUseCaseData] = useState(null); // Initialize selectedUseCaseData

  const handleSelectDomain = (event) => {
    setSelectedDomain(event.target.value);
    setSelectedUseCase(""); // Reset selected use case
    setSelectedUseCaseData(null); // Reset selected use case data
    setCurrentStep(2); // Move to the next step when domain is selected
  };
  const handleSelectUseCase = (useCaseName) => {
    setSelectedUseCase(useCaseName);
    const selectedDomainData = useCasesData.domains.find(
      (domain) => domain.name === selectedDomain
    );
    const selectedUseCaseData = selectedDomainData.use_cases.find(
      (useCase) => useCase.name === useCaseName
    );
    setSelectedUseCaseData(selectedUseCaseData);
    setCurrentStep(3); // Move to the next step
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  console.log(selectedUseCaseData);
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <Row>
        <Col
          sm={12}
          className='d-flex justify-content-center align-items-center'
        >
          <div className='mt-5'>
            <h1 className='text-center'>Dynamic Form Example</h1>

            {currentStep === 1 && (
              <div>
                <h2>Step 1: Domain</h2>
                <DomainForm
                  domains={useCasesData.domains}
                  onSelectDomain={handleSelectDomain}
                />
                <Button variant='primary w-100 m-1' onClick={handleNextStep}>
                  Next
                </Button>
              </div>
            )}

            {currentStep === 2 && selectedDomain && (
              <div>
                <h2>Step 2: Use Case</h2>
                <UseCaseForm
                  selectedDomain={selectedDomain}
                  useCases={
                    useCasesData.domains.find(
                      (domain) => domain.name === selectedDomain
                    ).use_cases
                  }
                  selectedUseCaseData={selectedUseCaseData}
                  onSelectUseCase={(useCaseName) =>
                    handleSelectUseCase(useCaseName, selectedDomain)
                  }
                  onNextStep={handleNextStep}
                  onPreviousStep={handlePreviousStep}
                />
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
