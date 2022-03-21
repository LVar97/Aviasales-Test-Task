import { Dispatch } from "react";
import { TicketsActionTypes, TicketsAction } from "../../types/tickets";
import axios from "axios";


export interface IArrTickets {
	carrier: string
	price: number
	segments: any[]
}


export const getTickets = (page=1, limit=5) => {
	
	return async (dispatch: Dispatch<TicketsAction>) => {
		try {
			const res = await axios.get('https://front-test.beta.aviasales.ru/search');
			if (res){
				dispatch({type: TicketsActionTypes.FETCH_TICKETS_SUCCESS, payload: res.data})
				let id = Object.values(res.data).join('');
				const response = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`, {
					params: {
						page: page,
						limit: limit,
					}
				});
	
				dispatch({type: TicketsActionTypes.GET_TICKETS, payload: response.data.tickets})
			}
			
		} catch (e) {
			dispatch({
				type: TicketsActionTypes.FETCH_TICKETS_ERROR, 
				payload: 'Произошла ошибка при загрузки данных'})
		}
	}
}


export function setTicketsSortByCheap (arrTickets: IArrTickets[]) {
	return {
		type: TicketsActionTypes.SET_TICKETS_SORT_BY_CHEAP, 
		payload: arrTickets
	}
};

export function setTicketsSortByFast (arrTickets: any) {
	return {
		type: TicketsActionTypes.SET_TICKETS_SORT_BY_FAST, 
		payload: arrTickets
	}
};

export function setTicketsSortByOptimal (arrTickets: IArrTickets[]) {
	return {
		type: TicketsActionTypes.SET_TICKETS_SORT_BY_OPTIMAL, 
		payload: arrTickets
	}
};

export function setTicketsSortByCompany (id: string) {
	return {
		type: TicketsActionTypes.SET_TICKETS_SORT_BY_COMPANY, 
		payload: id
	}
};

export function setTicketsSortByAll () {
	return {
		type: TicketsActionTypes.SET_TICKETS_SORT_BY_ALL,
	}
};

export function setTicketsSortByStops (arr: any) {
	return {
		type: TicketsActionTypes.SET_TICKETS_SORT_BY_STOPS,
		payload: arr,
	}
};