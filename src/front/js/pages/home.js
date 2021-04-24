import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, Container } from "react-bootstrap";

export const Home = () => {
	return (
		<div>
			<div>
				<div className="section-1 box" />
				<Container>
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://cnnespanol.cnn.com/wp-content/uploads/2019/11/vegano.jpg?quality=100&strip=info"
								alt="Vegano"
								width={800}
								height={800}
							/>
							<Carousel.Caption>
								<h3>Platillos Veganos</h3>
								<h4>Conozca las opciones para platillos veganos</h4>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://saboryestilo.com.mx/wp-content/uploads/2019/05/carne-magra-de-res-cortes-saludables.jpg"
								alt="Carnes"
								width={800}
								height={800}
							/>

							<Carousel.Caption>
								<h3>Carnes</h3>
								<h4>Deliciosas carnes a considerar</h4>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="https://i1.wp.com/www.easytourchina.com/images/Photo/the-famous-chinese-spicy-dishes-how-to-cook-chicken-with-chilies/p363_d20140922161058_thumb_b.jpg"
								alt="Picante"
								width={800}
								height={800}
							/>

							<Carousel.Caption>
								<h3>Picantes</h3>
								<h4>Comidas picantes</h4>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Container>
				<ul className="nav style-navcat justify-content-center">
					<li className="nav-item">
						<a className="nav-link active" href="#">
							Vegano
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Carnivoro
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Picante
						</a>
					</li>
				</ul>
			</div>
			<h3>
				Section1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum.
			</h3>
			<div className="section-2 box" />
			<h3>
				Section2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum.
			</h3>
			<div className="section-3 box" />
			<h3>
				Section 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum.
			</h3>
			<div className="section-4 box" />
			<h3>
				Section 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum.
			</h3>
		</div>
	);
};
