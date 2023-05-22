import React from 'react'
import { useState, useEffect } from 'react';

import { Field } from './Field';
import { regex } from "./regex";

export const Form = ({ form }) => {
    const initialValues = { name: "", email: "", phone: "", message: "" };
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            const newErrors = {};

            for (const [name, value] of Object.entries(values)) {
                value.trim() === ''
                    ? newErrors[name] = false
                    : newErrors[name] = !regex[name].test(value)
            }

            setErrors(newErrors);
        }, 500);

        return () => {
            clearTimeout(delayTimer);
        };
    }, [values]);

    const handleValidation = (e) => {
        e.preventDefault();

        if (Object.values(errors).every(err => !err)) {
            localStorage.setItem(`${values.name}`, JSON.stringify(values));

            setValues(initialValues);
            setErrors({});

            setVisible(true);
        }
    };

    const handleChange = (e) => {
        const newObj = { ...values, [e.target.name]: e.target.value };
        setValues(newObj);
    };

    return (
        <>
            {visible ? (
                <div
                    className='form-submission'
                    style={{ 
                        padding: '20px', 
                        border: '1px solid black', 
                        backgroundColor: "lightgray",
                        textAlign: "center"
                    }}
                >
                    Thank you! Your submission has been received!
                </div>
            ) : (
                <form onSubmit={handleValidation}>
                    <Field
                        fields={form}
                        handleChange={handleChange}
                        error={errors}
                        values={values}
                    />
                    <button type='submit'> Submit </button>
                </form>
            )}
        </>
    )
}
