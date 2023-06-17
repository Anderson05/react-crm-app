import React, {Component} from "react";
import Single from './Single';

class Grid extends Component{

    // Fonction de suppression d'un element du Grid
    deleteData(docId){
        this.props.deleteData(docId);
    }

    renderList(){
        // Retourne tous les éléments sous forme de liste (composant Single)
        return this.props.items.map((item, i) => (
            <Single key={i+1} item={item} deleteData={this.deleteData.bind(this)} />
        ));
    }

    render(){
        return (
            <div>
                <div className='row'>
                    <ul>
                        {this.renderList()}
                    </ul>
                </div>
            </div>
        );
    }
}


export default Grid;