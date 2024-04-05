import React from 'react'

export default function Alert(props) {

    const Captalize = (word) => {
        const newword = word.toUpperCase();
        return newword
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong> {Captalize(props.alert.type)}</strong> : {props.alert.massage}
        </div>
    )
}
