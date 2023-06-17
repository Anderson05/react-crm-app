// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import data from '../data.json';
// Chargement de la bd
import {collection, doc, getDocs, deleteDoc} from 'firebase/firestore';
import db from '../firebase';
import Grid from './Grid';
import Form from './Form';


class App extends Component{
  constructor(props){
    super(props);
    // this.state = { data }
    this.updateData = this.updateData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.state = {
      contacts: []
    }
  }

  // Function qui charge les data depuis Firestore
  async updateData(){
    const contacts = await getDocs(collection(db, "contacts")) ;
    console.log(contacts)
    const contactsFormated = contacts.docs.map(doc =>({...doc.data(), id:doc.id}));
    this.setState({
      contacts: contactsFormated
    })
  }

  // Fonction qui supprime une collection dans la BDD
  async deleteData(docId){
    await deleteDoc(doc(db, "contacts", docId));
  }


  //Chargement des données lorsqu'on chrge le component
  componentDidMount(){
    this.updateData();
  }

  render(){
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <div className='nav-wrapper'>
              <a href='/' className='brand-logo center'>Contacts</a>
            </div>
          </nav>
        </div>
        <div>
          <Form />
          <Grid items={this.state.contacts} deleteData={this.deleteData} />
        </div>
      </div>
    );
  }
}


export default App;
