import React, { Component } from 'react';
import './Pokecard.css';

const IMG_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
	render() {

		let imgUrl = IMG_API + this.props.id.toString().padStart(3, '0') + '.png';

		return (
			<div className="Pokecard">
				<h3 className="Pokecard-name">{this.props.name}</h3>
				<img className="Pokecard-img" src={imgUrl}/>
				<div className="Pokecard-data">Type: {this.props.type} </div>
				<div className="Pokecard-data">EXP: {this.props.base_experience} </div>
			</div>
		);
	}
}

export default Pokecard;