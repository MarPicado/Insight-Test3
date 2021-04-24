import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar style-nav justify-content-center fixed-top">
			<Link to="/">
				<ul className="nav nav-pills style-navbutton ">
					<li className="nav-item">
						<a className="nav-link active" href="#">
							Active
						</a>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							data-toggle="dropdown"
							href="#"
							role="button"
							aria-haspopup="true"
							aria-expanded="false">
							Dropdown
						</a>
						<div className="dropdown-menu">
							<a className="dropdown-item" href="#">
								Action
							</a>
							<a className="dropdown-item" href="#">
								Another action
							</a>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
							<div className="dropdown-divider" />
							<a className="dropdown-item" href="#">
								Separated link
							</a>
						</div>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Link
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">
							Disabled
						</a>
					</li>
				</ul>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<span>
						<i className="fas fa-shopping-cart fa-3x style-navcart" />
					</span>
				</Link>
			</div>
		</nav>
	);
};
