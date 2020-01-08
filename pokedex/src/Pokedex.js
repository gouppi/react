import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';


class Pokedex extends Component {



	render() {
		var pokecards = this.props.pokemons.map((p) => {
			return <Pokecard {...p} key={p.id} />
		})

		return (
			<div className="Pokedex-foobar">
				<h1>Pokedex</h1>
				<h3>Total Experience: {this.props.exp}</h3>
				<h3 className={this.props.isWinner ? 'Pokedex-winning' : 'Pokedex-losing'}>{this.props.isWinner ? 'Winning hand' : ' Losing Hand'}</h3>


				<div className="Pokedex-pokemons">

						{pokecards}
				</div>
			</div>
		)
	}
}

export default Pokedex;