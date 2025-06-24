import React from 'react'

export const Carte = ({nom, description, typeProduit}) => {
    return (
        <>
            <h2>{nom}</h2>
            <p>{description}</p>
            <p>{typeProduit}</p>
        </>
    )
}
