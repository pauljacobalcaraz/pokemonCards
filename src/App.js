import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import KantoPokemon from './Components/PokemonList.js';
import DisplayedPokemons from './Components/DisplayedPokemons';

class App extends React.Component {
	state = {
		pokemons: KantoPokemon,

		PokemonTypes: [
			'Normal',
			'Fire',
			'Water',
			'Electric',
			'Grass',
			'Ice',
			'Fighting',
			'Poison',
			'Ground',
			'Flying',
			'Psychic',
			'Bug',
			'Rock',
			'Ghost',
			'Dragon',
		],
	};
	render() {
		return (
			<div>
				<Route path='/types'>
					<nav>
						{this.state.PokemonTypes.map((type) => {
							return (
								<Link to={'/types/' + type}>
									<button className={type}>{type}</button>
								</Link>
							);
						})}
					</nav>
				</Route>
				<Route exact path='/'>
					<div id='landing-img'>
						<div>
							<Link to={'/types'}>
								<button>View Pokemons</button>
							</Link>
						</div>
						<img src='https://th.bing.com/th/id/R25d1d99368b2180b588d578e5ce519ee?rik=g54yg9TNSMHYIA&riu=http%3a%2f%2fcdn.epicstream.com%2fassets%2fuploads%2fquizquestioncover%2ffirstgen.jpg&ehk=gRd7snIigXo3%2b8IjLT6rkUk%2bm8uMfmdil5FVId90F1o%3d&risl=&pid=ImgRaw' alt="bg-image"/>
					</div>
				</Route>
				<Route exact path='/types/'>
					<div className='poke-container'>
						{this.state.pokemons.map((pokemon) => {
							return <DisplayedPokemons pokemon={pokemon} />;
						})}
					</div>
				</Route>
				<div className='poke-container'>
					{this.state.PokemonTypes.map((type) => {
						return (
							<Route path={'/types/' + type}>
								{this.state.pokemons
									.filter(
										(pokemon) =>
											pokemon.type1 === type || pokemon.type2 === type
									)
									.map((pokemon) => {
										return <DisplayedPokemons pokemon={pokemon} />;
									})}
							</Route>
						);
					})}
				</div>
			</div>
		);
	}
}

export default App;
