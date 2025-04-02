import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const FirstStep = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        navigate("/apps/multi-step-form/MultiStepForm/SecondStep")
    };

    return (
        <Form className="input-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <motion.div
                //className="col-md-6 offset-md-3"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
               // transition={{ stiffness: 150 }}
            >
            <div className="col-md-6 offset-md-3">

                {/* First Name */}
                <Form.Group className="mb-3" controlId="first_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        autoComplete="off"
                        isInvalid={!!errors.first_name}
                        {...register('first_name', {
                            required: 'First name is required.',
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: 'First name should contain only letters.'
                            }
                        })}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.first_name?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Last Name */}
                <Form.Group className="mb-3" controlId="last_name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        autoComplete="off"
                        isInvalid={!!errors.last_name}
                        {...register('last_name', {
                            required: 'Last name is required.',
                            pattern: {
                                value: /^[a-zA-Z]+$/,
                                message: 'Last name should contain only letters.'
                            }
                        })}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.last_name?.message}
                    </Form.Control.Feedback>
                </Form.Group>
                    <Button variant="link" type="submit" className='btn'>
                            Next
                       </Button>
                </div>
                </motion.div>
        </Form>
    );
};

export default FirstStep;
