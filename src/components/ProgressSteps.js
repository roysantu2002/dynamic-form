import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ProgressSteps = ({ currentStep }) => (
  <ProgressBar now={(currentStep - 1) * 25} label={`${(currentStep - 1) * 25}%`} />
);

export default ProgressSteps;
