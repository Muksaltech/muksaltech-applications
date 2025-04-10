import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FormContext } from '../context/FormContext';

const SecondStep = (props) => {
    const { formData, setFormData } = useContext(FormContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setFormData(prev => ({
            ...prev,
            ...data
        }));
        navigate("/apps/multi-step-form/MultiStepForm/ThirdStep")
    };


        useEffect(() => {
            //console.log('Updated formData:', formData);
        }, [formData]);

    return (
        <Form className="input-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <motion.div
                //className="col-md-6 offset-md-3"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
            >
            <div className="col-md-6 offset-md-3">
                <Form.Group controlId="user_email" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email address"
                            autoComplete="off"
                            defaultValue={formData.user_email} // set initial value
                        isInvalid={!!errors.user_email}
                        {...register('user_email', {
                            required: 'Email is required.',
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: 'Email is not valid.',
                            },
                        })}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.user_email?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="user_password" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Choose a password"
                            autoComplete="off"
                            defaultValue={formData.user_password} // set initial value
                        isInvalid={!!errors.user_password}
                        {...register('user_password', {
                            required: 'Password is required.',
                            minLength: {
                                value: 6,
                                message: 'Password should have at least 6 characters.',
                            },
                        })}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.user_password?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                    <Button variant="link" type="submit"
                        className='btn'>
                    Next
                </Button>
                </div>
                </motion.div>
        </Form>
    );
};

export default SecondStep;
