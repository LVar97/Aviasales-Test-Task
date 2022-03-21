import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import "./Main.scss";
import { useActions } from "../../hook/useActions";
import { useTypedSelector } from "../../hook/useTypedSelector";
import { IArrTickets } from "../../types/tickets";


export const Main: React.FC = () => {


	const {cards, page, limit, error} = useTypedSelector(state => state.tickets)
	const { getTickets, setTicketsSortByCheap, setTicketsSortByFast } = useActions();

	useEffect(()=>{
		getTickets(page, limit);
	}, []);

	const sortByCheapTickets = (event: React.MouseEvent) => {
		event.preventDefault();
		setTicketsSortByCheap(cards);
		
	};

	const sortByFasterTickets = (event: React.MouseEvent) => {
		event.preventDefault();
		setTicketsSortByFast(cards);
	};

	
	// доделать
	const box = document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>;

	useEffect(() => {
		
		for (let i = 5; i < cards.length; i++) {
			box[i].style.display = "none";
		}
	}, [cards]);

	const handleMoreCards = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		let countD = 5;
		countD += 5;
		if (countD <= cards.length){
			for(let i = 0; i < countD; i++){
				box[i].style.display = "block";
			}
		}
	}

	return (
		<main className="main">
			<ul className="main__filters">
				<li><p className="main__filter" onClick={(event) => sortByCheapTickets(event)}>Самый дешевый</p></li>
				<li><p className="main__filter" onClick={(event) => sortByFasterTickets(event)}>Самый быстрый</p></li>
				<li><p className="main__filter">Оптимальный</p></li>
			</ul>
			{}
			{error ? <p className="error-text">{error}</p>
			: cards.map((el: any) => (
				<Card ticket={el} key={Math.random().toString(16).slice(2)}/>
				))
			}
			{!error 
			? (<button 
				id="button"
				className="main__pagination"
				onClick={handleMoreCards}
				>Показать еще 5 билетов!</button>)
			: null }
		</main>
	);
}

