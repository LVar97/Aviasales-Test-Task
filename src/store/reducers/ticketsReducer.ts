import { TicketsAction, TicketsActionTypes, TicketsState } from "../../types/tickets"


const initialState: TicketsState = {
	searchId: {},
	cards: [],
	constArrCards: [],
	loading: false,
	error: null,
	page: 1,
	limit: 5,
}

export const ticketsReducer = (state = initialState, action: TicketsAction): TicketsState => {
	switch (action.type){
		case TicketsActionTypes.FETCH_TICKETS:
			return { ...state, loading: true, error: null}
		case TicketsActionTypes.FETCH_TICKETS_SUCCESS:
			return { ...state, loading: false, error: null, searchId: action.payload}
		case TicketsActionTypes.FETCH_TICKETS_ERROR:
			return { ...state, loading: false, error: action.payload}

		case TicketsActionTypes.GET_TICKETS:
			return { ...state, cards: action.payload, constArrCards: action.payload}
		case TicketsActionTypes.SET_TICKETS_SORT_BY_CHEAP:
			return { 
				...state, 
				cards: state.cards.sort((prev, next) => prev.price - next.price)
			}
		case TicketsActionTypes.SET_TICKETS_SORT_BY_FAST:
			return {
				...state,
				cards: state.cards.filter((el) => {
					el.segments = el.segments.sort((prev, next) => prev.duration - next.duration)
					return el.segments
				})
			}
		case TicketsActionTypes.SET_TICKETS_SORT_BY_OPTIMAL:
				return {
					...state,
					cards: state.cards
					// state.cards.map(el => el.segments.sort((prev, next) => prev.duration - next.duration))
				}
		case TicketsActionTypes.SET_TICKETS_SORT_BY_COMPANY:
			return {
				...state,
				cards: state.constArrCards.filter((el) => el.carrier === action.payload )
			}
		case TicketsActionTypes.SET_TICKETS_SORT_BY_ALL:
			return {
				...state,
				cards: state.constArrCards
			}
		case TicketsActionTypes.SET_TICKETS_SORT_BY_STOPS:
				return {
					...state,
					cards: state.constArrCards.filter((card) => {
						card.segments = card.segments.filter(el => action.payload.every(item => el.stops.length.toString() === item))
						return card.segments.length; 
					})
					
				}
		default:
			return state
	}
}