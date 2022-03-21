import { ITicket, ICompany, ISegment } from "../interfaces";

export interface IArrTickets {
	carrier: string
	price: number
	segments: ISegment[]
}

export interface TicketsState {
	searchId: any,
	cards: IArrTickets[];
	constArrCards: IArrTickets[];
	loading: boolean;
	error: null | string;
	page: number;
	limit: number;
}

export enum TicketsActionTypes {
	FETCH_TICKETS = 'FETCH_TICKETS',
	FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
	FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR',
	GET_TICKETS = 'GET_TICKETS',
	// SET_TODO_PAGE = 'SET_TODO_PAGE',
	SET_TICKETS_SORT_BY_CHEAP = 'SET_TICKETS_SORT_BY_CHEAP',
	SET_TICKETS_SORT_BY_FAST = 'SET_TICKETS_SORT_BY_FAST',
	SET_TICKETS_SORT_BY_OPTIMAL = 'SET_TICKETS_SORT_BY_OPTIMAL',
	SET_TICKETS_SORT_BY_COMPANY = 'SET_TICKETS_SORT_BY_COMPANY',
	SET_TICKETS_SORT_BY_ALL = 'SET_TICKETS_SORT_BY_ALL',
	SET_TICKETS_SORT_BY_STOPS = 'SET_TICKETS_SORT_BY_STOPS',
	// SET_TODO_DELETE = 'SET_TODO_DELETE',
	// SET_TODO_ADD = 'SET_TODO_ADD ',
	// SET_TODO_COMPLETED = "SET_TODO_COMPLETED"
}

interface FetchTicketsAction {
	type: TicketsActionTypes.FETCH_TICKETS,
}

interface FetchTicketsSuccessAction {
	type: TicketsActionTypes.FETCH_TICKETS_SUCCESS,
	payload: any, //вместо any[] подставить интерфейс самого todo
}

interface FetchTicketsErrorAction {
	type: TicketsActionTypes.FETCH_TICKETS_ERROR,
	payload: string,
}

interface GetTicketsAction {
	type: TicketsActionTypes.GET_TICKETS,
	payload: IArrTickets[],
}

interface SetTicketsSortByCheap{
	type: TicketsActionTypes.SET_TICKETS_SORT_BY_CHEAP,
	payload: IArrTickets[],
}

interface SetTicketsSortByFast{
	type: TicketsActionTypes.SET_TICKETS_SORT_BY_FAST,
	payload: any[],
} 

interface SetTicketsSortByOptimal{
	type: TicketsActionTypes.SET_TICKETS_SORT_BY_OPTIMAL,
} 

interface SetTicketsSortByCompany{
	type: TicketsActionTypes.SET_TICKETS_SORT_BY_COMPANY,
	payload: string,
} 

interface SetTicketsSortByAll{
	type: TicketsActionTypes.SET_TICKETS_SORT_BY_ALL,
} 

interface SetTicketsSortByStops{
	type: TicketsActionTypes.SET_TICKETS_SORT_BY_STOPS,
	payload: any[]
} 


export type TicketsAction = 
	GetTicketsAction 
	| FetchTicketsAction
	| FetchTicketsSuccessAction
	| FetchTicketsErrorAction
	// | FetchTodosErrorAction 
	// | FetchTodosSuccessAction 
	// | SetTodoPage
	| SetTicketsSortByCheap
	| SetTicketsSortByFast
	| SetTicketsSortByCompany
	| SetTicketsSortByAll
	| SetTicketsSortByOptimal
	| SetTicketsSortByStops
	// | SetTodoDelete
	// | SetTodoAdd
	// | SetTodoCompleted