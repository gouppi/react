import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
	static defaultProps = {
		pokemons: [
			{id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
			{id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
			{id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
			{id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
			{id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
			{id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
			{id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
			{id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
		]
	};

	render() {

		let data = this.getHands();

		return (
			<div>
				<Pokedex pokemons={data.first_hand} exp={data.first_exp} isWinner={data.first_exp > data.second_exp} />
				<Pokedex pokemons={data.second_hand} exp={data.second_exp} isWinner={data.second_exp > data.first_exp} />
			</div>
		);
	}

	suffle() {
		let pokemons = this.props.pokemons;
		for (let i = pokemons.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[pokemons[i], pokemons[j]] = [pokemons[j], pokemons[i]];
		}
		return pokemons;
	}

	getHands() {
		let pokemons = this.suffle();
		let first_exp = 0;
		let second_exp = 0;
		var second = [];
		var first = [];

		for (let i = 0; i < pokemons.length; i++) {
			if ( i % 2 === 0) {
				second.push(pokemons[i]);
				first_exp += pokemons[i].base_experience;
			} else {
				first.push(pokemons[i]);
				second_exp += pokemons[i].base_experience;
			}
		}

		return {
			first_hand: first,
			first_exp: first_exp,
			second_hand: second,
			second_exp: second_exp
		}

	}

}

export default Pokegame;