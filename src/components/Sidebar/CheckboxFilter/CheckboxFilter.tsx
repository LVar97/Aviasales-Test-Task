import React, { useEffect, useState } from "react";
import "./CheckboxFilter.scss";
import { useActions } from "../../../hook/useActions";
import { useTypedSelector } from "../../../hook/useTypedSelector";


export const CheckboxFilter: React.FC = () => {
 
	const { setTicketsSortByStops, setTicketsSortByAll} = useActions();

	const [selectedStops, setSelectedStops] = useState<string[]>([]);
	
	const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		let a: any = event.target.id
		
		if (event.target.checked) {
			setSelectedStops(prev => prev.concat(a));
			
		}else{
			setSelectedStops(prev => prev.filter(el => event.target.id !== el));
			
		}
  };

	
	useEffect(() => {
		if(selectedStops.length){
			setTicketsSortByStops(selectedStops);
		}else{
			setTicketsSortByAll();
		}
	}, [selectedStops]);

	return (
		<div className="checkbox-filter">
			<form className="content">
				<h2 className="checkbox-filter__title title">Количество пересадок</h2>
				<div className="checkbox-filter__filters filters">
					<label htmlFor="0" >
						<input 
						type="checkbox" 
						name="checkbox" 
						value='0'
						id="0" 
						onChange={checkboxHandler}
						className="filters__item checkbox"/>
						Без пересадок
					</label>
					<label htmlFor="1" >
						<input 
						type="checkbox" 
						name="checkbox" 
						value='1'
						id="1" 
						onChange={checkboxHandler}
						className="filters__item checkbox"/>
						1 пересадкa
					</label>
					<label htmlFor="2" >
						<input 
						type="checkbox" 
						name="checkbox" 
						value='2'
						id="2" 
						onChange={checkboxHandler}
						className="filters__item checkbox"/>
						2 пересадки
					</label>
					<label htmlFor="3" >
						<input 
						type="checkbox" 
						name="checkbox"
						value='3' 
						id="3" 
						onChange={checkboxHandler}
						className="filters__item checkbox"/>
						3 пересадки
					</label>
				</div>
			</form>
		</div>
	);
}