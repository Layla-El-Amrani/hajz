import React from 'react';

const Voiture = ({ voiture, supprimerVoiture }) => {
  return (
    <tr>
      <td>{voiture.id}</td> {/* Affichage de l'ID */}
      <td>{voiture.Marque}</td>
      <td>{voiture.TypeCarburant}</td>
      <td>{voiture.PrixLocation} MAD</td>
      <td><img src={voiture.image} alt={voiture.Marque} style={{ width: '200px' }} /></td>
      <td><button onClick={() => supprimerVoiture(voiture.id)}>Supprimer</button></td>
    </tr>
  );
};

export default Voiture;
