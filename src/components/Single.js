import React from "react";

// Construction d'un composant unique
const Single = (props) => {
    return(
        <li className="col s12 l6">
            <div className="card">
                <img src="./portrait.jpg" alt="{props.item.title} " />
                <span className="card-title">{props.item.prenom} {props.item.nom}</span>
            </div>
            <div className="card-content">
                <span className="card-title">{props.item.email}</span>
                <div className="row">
                    <div className="col l6 center">
                        <blockquote><h6>{props.item.notes}</h6></blockquote>
                    </div>
                </div>
            </div>
            <div className="card-action">
                <button className="waves-effect waves-light btn #d32f2f red darken-2">Supprimer</button>
            </div>
        </li>
    )
}

export default Single;