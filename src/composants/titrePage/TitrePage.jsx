import React from 'react'

export const TitrePage = ({titre, classe}) => {
    return (
        <div className={classe}>
            <h2>
                { titre }
            </h2>
        </div>
    )
}
