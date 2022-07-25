import React from 'react'

function Alert(parms) {
    const toCapitalize = (word) => {
        const newWord = word.toLowerCase();
        return newWord.charAt(0).toUpperCase() + newWord.slice('1');
    }
    return (
        parms.alert && <div class={`alert alert-${parms.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{toCapitalize(parms.alert.type)}</strong>: {parms.alert.msg}
        </div>
    )
}

export default Alert;
