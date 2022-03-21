import React from "react";
import "./Card.scss";
import logoS7 from "../../image/S7 Logo.png";
import logoXA from "../../image/XiamenAir-Logo.png";

type CardProps = {
	ticket: any,
};

export const Card: React.FC<CardProps> = ({ticket}) => {
	
	const {price, carrier} = ticket;

	function timeConverter(dat: number, duretion: number){
		let date = new Date(dat);
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let hourEnd = Math.trunc(((hours*60) + Number(minutes))/60);
		let minutesEnd = duretion % 60;
		let formattedTime: string = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0': ''}${minutes} - ${hourEnd < 10 ? '0' : ''}${hourEnd}:${minutesEnd < 10 ? '0': ''}${minutesEnd}`;
		return formattedTime
	}


	function getTimeFromMins(mins: number) {
    let hours = Math.trunc(mins/60);
		let minutes = mins % 60;
		return `${hours}ч ${minutes < 10 ? '0': ''}${minutes}м`;
	};

	const companyLogo = carrier === "S7" || carrier === "MH" || carrier === "SU";
	return (
		<section className="card">
			<div className="container">
				<div className="card__header-row">
					<h2 className="card__price">{price} P</h2>
					<img src={companyLogo ? logoS7 : logoXA} alt={carrier} className="card__logo" />
				</div>
				<div className="card__datas">
				{ticket.segments.map((el: any) => 
				(
					<div className="card__segment" key={Math.random().toString(15).slice(2)}>
						<div className="card__flight">
							<p className="card__flight-label">{`${el.origin} - ${el.destination}`}</p>
							<p className="card__flight-value">{timeConverter(el.date, el.duration)}</p>
						</div>
						<div className="card__flight">
							<p className="card__flight-label">В пути</p>
							<p className="card__flight-value flight-value">{getTimeFromMins(el.duration)}</p>
						</div>
						<div className="card__flight">
							<p className="card__flight-label">Пеересадка</p>
							<p className="card__flight-value">{el.stops.length ? el.stops.join(',') : '—'}</p>
						</div>
					</div>
				)
				)}
				</div>
				
			</div>
			
		</section>
	);
}