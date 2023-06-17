import React,{ Component } from "react";
import {collection, addDoc} from 'firebase/firestore';
import db from '../firebase';

class Form extends Component {
    //Fonction qui handle button click
    addContact = (e) =>{
        e.preventDefault();
        // alert('clik');
        addDoc(collection(db, "contacts"), {
            prenom: e.target.prenom.value,
            nom:e.target.nom.value,
            email:e.target.email.value,
            compagnie: e.target.compagnie.value,
            notes: e.target.notes.value
        });

        // reset form
        document.getElementById("addContact").reset();

    }
    render(){
        return (
            <div className="row">
                <form className="col s12" id='addContact' onSubmit={this.addContact.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="prenom" type="text" className="validate" />
                            <label htmlFor="prenom">Prenom</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="nom" type="text" className="validate" />
                            <label htmlFor="nom">Nom</label>
                        </div>
                    </div>
                    <div class="row">
                        <div className="input-field col s6">
                            <input id="email" type="text" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="compagnie" type="text" className="validate" />
                            <label htmlFor="compagnie">Compagnie</label>
                        </div>
                    </div>
                    <div class="row">
                        <div className="input-field col s6">
                            <input id="notes" type="text" className="validate" />
                            <label htmlFor="notes">Notes</label>
                        </div>
                        <div className="input-field col s6">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Ajouter</button>
                        </div>
                    </div>
                </form>
          </div>
        )
    }

}

export default Form;