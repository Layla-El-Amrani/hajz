import React, { useState } from 'react';

const AjouterVoiture = ({ setVoitures, voitures }) => {
  const [id, setId] = useState('');
  const [marque, setMarque] = useState('');
  const [typeCarburant, setTypeCarburant] = useState('');
  const [prixLocation, setPrixLocation] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Stocke l'image comme une URL de données
      };
      reader.readAsDataURL(file);
    }
  };

  const ajouterVoiture = () => {
    // Vérifiez si tous les champs sont remplis
    if (!id || !marque || !typeCarburant || !prixLocation || !image) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    // Vérifiez si l'ID existe déjà
    const idExists = voitures.some(voiture => voiture.id === id);
    if (idExists) {
      setError('L\'ID existe déjà. Veuillez entrer un ID unique.');
      return;
    }

    const newVoiture = {
      id: id,
      Marque: marque,
      TypeCarburant: typeCarburant,
      PrixLocation: Number(prixLocation),
      image: image // Utilisez l'URL de données
    };
    setVoitures(prevVoitures => [newVoiture, ...prevVoitures]);
    // Réinitialiser les champs
    setId('');
    setMarque('');
    setTypeCarburant('');
    setPrixLocation('');
    setImage(null);
    setError(''); // Réinitialiser l'erreur
  };

  return (
    <div className="ajouter-voiture">
      <h2>Ajouter une nouvelle voiture</h2>
      <div className="form-container">
        <input type="text" placeholder="ID" value={id} onChange={e => setId(e.target.value)} />
        <input type="text" placeholder="Marque" value={marque} onChange={e => setMarque(e.target.value)} />
        <input type="text" placeholder="Type Carburant" value={typeCarburant} onChange={e => setTypeCarburant(e.target.value)} />
        <input type="number" placeholder="Prix Location (MAD)" value={prixLocation} onChange={e => setPrixLocation(e.target.value)} />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && <img src={image} alt="Aperçu" style={{ width: '100px', marginTop: '10px', borderRadius: '8px' }} />}
        <button onClick={ajouterVoiture}>Ajouter Voiture</button>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Afficher le message d'erreur */}
      </div>
    </div>
  );
};

export default AjouterVoiture;
