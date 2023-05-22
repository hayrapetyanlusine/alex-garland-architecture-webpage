import React from 'react'
import { Fragment } from 'react'

export const Field = ({ fields, handleChange, error, values }) => {
    return (
        fields.map(({ id, type, title, name, placeholder, required, errorMessage }) => (
            <Fragment key={id}>
                <label htmlFor={type} className='filed'>
                    {title}
                    {type === "textarea" ? (
                        <textarea
                            name={name}
                            value={values[name]}
                            placeholder={placeholder}
                            required={required}
                            onChange={handleChange}
                        />
                    ) : (
                        <input
                            name={name}
                            value={values[name]}
                            type={type}
                            placeholder={placeholder}
                            required={required}
                            onChange={handleChange}
                        />
                    )}
                </label>
                {error[name] && (<p className="error-message"> {errorMessage}</p>)}
            </Fragment>
        ))
    )
}