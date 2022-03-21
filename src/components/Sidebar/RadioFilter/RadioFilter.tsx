import React, { useState } from "react";
import "./RadioFilter.scss";
import { useActions } from "../../../hook/useActions";

export const RadioFilter: React.FC = () => {
	
	const { setTicketsSortByCompany, setTicketsSortByAll } = useActions();

	const [selectedCompany, setSelectedCompany] = useState<String>('All');
	
	const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCompany(event.target.value);
		 
		if (event.target.value === "S7" || event.target.value === "MH" || event.target.value === "SU") {
			setTicketsSortByCompany('S7');
		}else{
			setTicketsSortByCompany('EY');
		}
		if (event.target.id === '1') {
			setTicketsSortByAll();
		}
  };

	return (
		<div className="radio-filter">
			<form className="content">
				<h2 className="radio-filter__title title">Компания</h2>
				<div className="radio-filter__filters filters">
					<label htmlFor="0" >
						<input 
						type="radio" 
						name="radio" 
						id="1" 
						className="filters__item"
						onChange={radioHandler}
						value="All"
						checked={selectedCompany === "All"}
						/>
						Все
					</label>
					<label htmlFor="radio">
							<input 
							type="radio" 
							name="radio" 
							value='XiamenAir'
							className="filters__item"
							onChange={radioHandler}
							/>
							XiamenAir
					</label>
					<label htmlFor="radio" >
						<input 
						type="radio" 
						name="radio" 
						value='S7'
						className="filters__item"
						onChange={radioHandler}
						/>
						S7
				</label>
				</div>
			</form>
		</div>
	);
}