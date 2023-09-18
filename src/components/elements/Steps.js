import React from 'react';
import PropTypes from 'prop-types';
import { BlueCheck } from "./BlueCheck";
import { Stepper } from "./Stepper";
import { EmptyCheck } from "./EmptyCheck.js";
export const Steps = ({ selected }) => {
  // Define the step data
  const stepsData = [
    {
      img: 'https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64ee7c544c339b0ef858e2ac/img/vector-303.svg',
      property1: selected >= 1 ? 'completed' : 'pending',
    },
    {
      img: 'https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64ee7c544c339b0ef858e2ac/img/vector-303-1.svg',
      property1: selected >= 2 ? 'completed' : selected === 1 ? 'in-progress' : 'pending',
      text: 'STEP 2',
      text1: 'Details',
    },
    {
      icon: selected >= 3 ? <BlueCheck className="icon-instance-node" /> : <EmptyCheck className="icon-instance-node" />,
      property1: selected >= 3 ? 'completed' : selected === 2 ? 'in-progress' : 'pending',
      text: 'STEP 3',
      text1: 'Select Subscription',
      vector1: 'https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64ee7c544c339b0ef858e2ac/img/vector-303-2.svg',
    },
    {
      icon: selected >= 4 ? <BlueCheck className="icon-instance-node" /> : <EmptyCheck className="icon-instance-node" />,
      property1: selected >= 4 ? 'completed' : selected === 3 ? 'in-progress' : 'pending',
      text: 'STEP 4',
      text1: 'Eligibility Check',
      vector1: 'https://anima-uploads.s3.amazonaws.com/projects/64e3ab5e179fd75deb1ba6bd/releases/64ee7c544c339b0ef858e2ac/img/vector-303-3.svg',
    },
    {
      icon: selected >= 5 ? <BlueCheck className="icon-instance-node" /> : <EmptyCheck className="icon-instance-node" />,
      property1: selected >= 5 ? 'completed' : selected === 4 ? 'in-progress' : 'pending',
      text: 'STEP 5',
      text1: 'Check Out',
    },
  ];

  return (
    <div className="div-4">
      {stepsData.map((step, index) => (
        <Stepper
          key={index}
          className="stepper-instance"
          {...step}
        />
      ))}
    </div>
  );
};

Steps.propTypes = {
  selected: PropTypes.number.isRequired, // Indicates the selected step
};