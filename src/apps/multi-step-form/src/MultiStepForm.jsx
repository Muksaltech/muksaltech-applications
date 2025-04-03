import React from 'react';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MultiStepForm.scss"
import { Routes, Route, Navigate } from 'react-router-dom';
import { FormProvider } from './context/FormContext'


const MultiStepForm = () => (
  <div className="container">
<FormProvider>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="FirstStep" replace />} />
      <Route path="FirstStep" element={<FirstStep />} />
      <Route path="SecondStep" element={<SecondStep />} />
      <Route path="ThirdStep" element={<ThirdStep />} />
      </Routes>
    </FormProvider>
    </div>
  

);

export default MultiStepForm;

