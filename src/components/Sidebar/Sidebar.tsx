import React, {useState} from "react";
import { CheckboxFilter } from "./CheckboxFilter/CheckboxFilter";
import { RadioFilter } from "./RadioFilter/RadioFilter";
import "./Sidebar.scss";



export const Sidebar: React.FC = () => {
	
	// const [isMobile, setIsMobile] = useState(false);
	const [isMobileFilers, setIsMobileFilers] = useState(false);

	const handleFilterClick = (event:  React.MouseEvent) => {
    event.preventDefault();
    setIsMobileFilers(!isMobileFilers);
  }

	const handleCloseFilter = (event:  React.MouseEvent) => {
    event.preventDefault();
    setIsMobileFilers(false);
  }


	return (
		<div className={`sidebar ${isMobileFilers ? '_active' : ''}`}>
			<div className={`sidebar__icon  ${isMobileFilers ? '_open' : ''}`} onClick={event => handleFilterClick(event)}>
				<span>Фильтры</span>
			</div>
			<div className="sidebar__titles">
				<p className="sidebar__title title">Фильтры</p>
				<p 
				className="sidebar__title title"
				onClick={event => handleCloseFilter(event)}
				>Готово</p>
			</div>
				<CheckboxFilter/>
				<RadioFilter/>
		</div>
	);
}