import React from 'react';
import './DisplayedPokemons.css';
import { Link } from 'react-router-dom';

class DisplayedPokemons extends React.Component {
	render() {
		return (
			<div className='poke-card'>
				<div className='poke-img'>
					<img
						src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.props.pokemon.dexNo}.png`}
					/>
				</div>
				<div className='poke-data'>
					<div>
						#{this.props.pokemon.dexNo}
						<h2>{this.props.pokemon.name}</h2>
						<div className='poke-type'>
							<b>Type:</b>
							<Link to={'/types/' + this.props.pokemon.type1}>
								<button className={this.props.pokemon.type1}>
									{this.props.pokemon.type1}
								</button>
							</Link>

							{this.props.pokemon.type2 !== 'NA' ? (
								<Link to={this.props.pokemon.type2}>
									<button className={this.props.pokemon.type2}>
										{this.props.pokemon.type2}
									</button>
								</Link>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default DisplayedPokemons;
