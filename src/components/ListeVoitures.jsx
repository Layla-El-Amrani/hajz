import React, { useState } from 'react';
import Voiture from './Voiture';
import AjouterVoiture from './AjouterVoiture';

const ListeVoitures = () => {
  const [voitures, setVoitures] = useState([
    {"id":"v1","Marque":"Dacia Logan","TypeCarburant":"Diesel","PrixLocation":200,"image":require('../assets/images/1.jpg')},
    {"id":"v2","Marque":"Peugeot 208","TypeCarburant":"Essence","PrixLocation":400,"image":require('../assets/images/2.jpg')},
    {"id":"v3","Marque":"Renault Clio","TypeCarburant":"Essence","PrixLocation":350,"image":require('../assets/images/4.jpg')},
  
  ]);

  const supprimerVoiture = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette voiture ?")) {
      setVoitures(voitures.filter(voiture => voiture.id !== id));
    }
  };

  return (
    <div className="liste-voitures">
      <h1>Liste des Voitures de Location</h1>
      <AjouterVoiture setVoitures={setVoitures} voitures={voitures} /> {/* Passer la liste des voitures */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Marque</th>
            <th>Type Carburant</th>
            <th>Prix Location</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {voitures.map(voiture => (
            <Voiture key={voiture.id} voiture={voiture} supprimerVoiture={supprimerVoiture} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListeVoitures;
