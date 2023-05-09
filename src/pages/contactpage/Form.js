import React, { Fragment } from 'react'

export const Form = ({ form }) => {
    return (
        <form>
            {
                form.map(({ id, type, name, DBName, placeholder, required }) => {
                    return (
                        <Fragment key={id}>
                            <label htmlFor={type}>
                                {name}
                                {
                                    type === "textarea" ? (
                                        <textarea
                                            name={DBName}
                                            placeholder={placeholder}
                                            required={required}
                                        />
                                    ) : (
                                        <input
                                            name={DBName}
                                            type={type}
                                            placeholder={placeholder}
                                            required={required}
                                        />
                                    )
                                }
                            </label>
                        </Fragment>
                    )
                })
            }
            <button type='submit'> Submit </button>
        </form>
    )
}
