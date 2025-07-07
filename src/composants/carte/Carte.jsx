import React from "react";

export const Carte = ({ nom, description, typeProduit, imageName, classe }) => {
  return (
    <>
      <div className={classe}>
        <img src={`/images/produits/${imageName}`} alt={nom} />
      </div>
      <h2>{nom}</h2>
      <p>{description}</p>
      <p>{typeProduit}</p>
    </>
  );
};
