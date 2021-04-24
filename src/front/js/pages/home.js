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
			<div className="section-2 box" />

			<div className="section-3 box" />
			<div className="section-4 box" />
		</div>
	);
};
