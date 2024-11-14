/** @format */

import React from "react";
import "./StepsGrid.css";

const StepCard = ({ stepNumber, title, description }) => (
  <div className='step-card'>
    <div className='step-icon'>»</div>
    <div className='step-number'>Step {stepNumber}</div>
    <h3 className='step-title'>{title}</h3>
    <p className='step-description'>{description}</p>
  </div>
);

const StepsGrid = () => (
  <section className='steps-grid'>
    <StepCard
      stepNumber={1}
      title='Free sign-up'
      description='Register on our Partner Dashboard and have your contact details verified instantly.'
    />
    <StepCard
      stepNumber={2}
      title='Profile setup'
      description='Access your personalised dashboard to complete your profile.'
    />
    <StepCard
      stepNumber={3}
      title='Showcase your work'
      description='Upload your portfolio and past work examples to attract clients to your profile.'
    />
    <StepCard
      stepNumber={4}
      title='Start Working'
      description='Get verified by our team and easily manage your work through our Partner Dashboard.'
    />
  </section>
);

export default StepsGrid;
