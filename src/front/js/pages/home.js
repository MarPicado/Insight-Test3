import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	return (
		<div>
			<div>
				<div className="section-1 box" />
			</div>
			<div className="section-2 box" />
			<ul className="nav style-navcat justify-content-center">
				<li className="nav-item">
					<a className="nav-link active" href="#">
						Vegan
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Meet-Lover
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Spicy
					</a>
				</li>
			</ul>
			<div className="section-3 box" />
			<div className="section-4 box" />
		</div>
	);
};
