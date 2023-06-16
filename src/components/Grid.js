import React, {Component} from "react";
import Single from './Single';

class Grid extends Component{
    renderList(){
        // Retourne tous les éléments sous forme de liste (composant Single)
        return this.props.items.map((item, it) => (
            <Single key={i+1} item={item} />   
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