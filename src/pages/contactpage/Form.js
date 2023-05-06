import React, { Fragment } from 'react'

export const Form = ({ form }) => {
    return (
        <form>
            {
                form.map(({ id, type, name, placeholder }) => {
                    return (
                        <Fragment key={id}>
                            <label htmlFor={type}> {name} </label>
                            {
                                type === "textarea" ? (
                                    <textarea name={type} placeholder={placeholder}></textarea>
                                ) : (
                                    <input type={type} placeholder={placeholder} />
                                )
                            }
                        </Fragment>
                    )
                })
            }
            <button> Submit </button>
        </form>
    )
}
