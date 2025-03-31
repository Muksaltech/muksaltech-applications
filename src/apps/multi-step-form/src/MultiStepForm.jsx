import React from 'react';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';

import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MultiStepForm.scss"

import { Routes, Route, Navigate } from 'react-router-dom';


const MultiStepForm = () => (
  <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="FirstStep" replace />} />
      <Route path="FirstStep" element={<FirstStep />} />
      <Route path="SecondStep" element={<SecondStep />} />
      <Route path="ThirdStep" element={<ThirdStep />} />
    </Routes>
  </div>
);

export default MultiStepForm;

