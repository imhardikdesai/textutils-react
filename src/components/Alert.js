import React from 'react'

function Alert(parms) {
    const toCapitalize = (word) => {
        const newWord = word.toLowerCase();
        return newWord.charAt(0).toUpperCase() + newWord.slice('1');
    }
    return (
        <div style={{ height: '45px' }}>
            {
                parms.alert && <div className={`alert alert-${parms.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{toCapitalize(parms.alert.type)}</strong>: {parms.alert.msg}
                </div>
            }
        </div>
    )
}

export default Alert;
