import React from 'react';
import "../style/Formulaire.css"

const Formulaire = () => {
    return (
            <div className="from">
            <h2 className='text'>Inscrivez-vous</h2>
          <form>
            <tr>
              <td><label htmlFor="nom">Nom</label></td>
              <td><input type="text" name="nom" placeholder="Samake" /></td>
            </tr>
            <tr>
              <td><label htmlFor="prenom">Prenom</label></td>
              <td>
                <input
                  type="text"
                  name="prenom"
                  placeholder="Abdoul Ibrahima"
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="date">Date de naissance</label></td>
              <td>
                <input type="date" name="date" placeholder="03-12-2001" />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email</label></td>
              <td>
                <input
                  type="email"
                  name="email"
                  placeholder="samabdoul03@gmail.com"
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="diplome">Niveau_etude</label></td>
              <td>
                <select name="diplome">
                  <option value="dip">DEF</option>
                  <option value="dip">BAC</option>
                  <option value="dip">LICENCE</option>
                  <option value="dip">MASTER</option>
                  <option value="dip">DOCTORAT</option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="bouton">
                <a href=".">Envoyer</a>
                <a href=".">Annuler</a>
              </td>
            </tr>
          </form>
      </div>
    );
};

export default Formulaire;