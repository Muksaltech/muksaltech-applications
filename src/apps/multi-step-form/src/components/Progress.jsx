import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Progress = () => {
    const { pathname } = useLocation();

    const isFirstStep = pathname === '/apps/multi-step-form/MultiStepForm/FirstStep';
    const isSecondStep = pathname ==='/apps/multi-step-form/MultiStepForm/SecondStep';
    const isThirdStep = pathname === '/apps/multi-step-form/MultiStepForm/ThirdStep';

    return (
        <div className="steps">
            <div className={`${isFirstStep ? 'step active' : 'step'}`}>
                <div>1</div>
                <div>
                    {isSecondStep || isThirdStep ? (
                        <Link to="/apps/multi-step-form/MultiStepForm/FirstStep">Step 1</Link>
                    ) : (
                        'Step 1' // jumps to step 1
                    )}
                </div>
            </div>
            <div className={`${isSecondStep ? 'step active' : 'step'}`}>
                <div>2</div>
                <div>
                    {isThirdStep ? (
                        <Link to="/apps/multi-step-form/MultiStepForm/SecondStep">Step 2</Link>
                    ) : (
                        'Step 2'
                    )}
                </div>
            </div>
            <div className={`${isThirdStep ? 'step active' : 'step'}`}>
                <div>3</div>
                <div>Step 3</div>
            </div>
        </div>
    );
};

export default Progress;
