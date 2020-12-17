import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import page from './resources/1.PNG';
import './page_selection.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class PassageWindow extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<CardColumns>
				<Card className = "hoverable" bg = "secondary" text = "light">
					<Card.Body>
						<Card.Title>
							Passage 1
						</Card.Title>
						<blockquote className="blockquote mb-0 card-body">
							"Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
							accusantium <strong>doloremque laudantium, totam rem aperiam, eaque ipsa quae
							ab illo inventore veritatis</strong>"
						</blockquote>
					</Card.Body>
				</Card>
				<Card className = "hoverable" bg = "warning" text = "light">
					<Card.Body>
						<Card.Title>
							Passage 2
						</Card.Title>
						<blockquote className="blockquote mb-0 card-body">
							"<strong>Sed ut perspiciatis unde omnis iste</strong> natus error sit voluptatem 
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
							ab illo inventore veritatis"
						</blockquote>
					</Card.Body>
				</Card>
				<Card className = "hoverable" bg = "primary" text = "light">
					<Card.Body>
						<Card.Title>
							Passage 3
						</Card.Title>
						<blockquote className="blockquote mb-0 card-body">
							"Morbi a euismod elit. Aenean leo neque, pharetra a eros ac, malesuada rhoncus massa. Etiam massa ligula, malesuada quis ipsum vel, vulputate dictum velit. Donec vitae libero hendrerit, rutrum nibh sit amet, rutrum ligula. Curabitur aliquet metus lacinia, iaculis tortor id, vehicula magna. Etiam sit amet mattis turpis, eu interdum arcu. Cras sodales dolor metus, nec ultricies velit efficitur vitae. <strong>In euismod felis est, vitae gravida turpis consequat nec. Nulla ut velit ante. Ut eu molestie nunc, vel rhoncus leo.</strong> Vestibulum mi elit, sodales in ornare nec, scelerisque quis justo. Vivamus eget mauris ex. Duis semper dapibus ligula, id venenatis quam vestibulum at. Donec ac tellus ac purus tincidunt rhoncus."
						</blockquote>
					</Card.Body>
				</Card>
				<Card className = "hoverable" bg = "dark" text = "light">
					<Card.Body>
						<Card.Title>
							Passage 3
						</Card.Title>
						<blockquote className="blockquote mb-0 card-body">
						Curabitur nec nunc eget turpis congue mattis.<strong>Cras sed felis quam. Nunc at orci in mauris varius auctor sed vel orci.</strong>Donec augue augue, placerat sit amet tincidunt non, rhoncus ac ligula. Quisque blandit consequat posuere. Morbi a nisl feugiat, tempor libero quis, accumsan ante. Aenean ultricies quis erat eu vulputate."
						</blockquote>
					</Card.Body>
				</Card>
			</CardColumns>
		)
	}
}
  
export default function PageScreen() {
    return (
		<div className = "parent" style = {{margin: "20px"}}>
			<div style = {{marginBottom: "20px"}}>
				<Card className = "hoverable" bg = "light" text = "dark"> 
					<Link to = "/" style = {{textDecoration : "none", color : "black"}}>
						<Card.Body>
							<Card.Title>
								Back to Page Selection
							</Card.Title>
							<Card.Text>
							</Card.Text>
						</Card.Body>
					</Link>
				</Card>
			</div>
			<div className = "parent" style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				{/* <PassageWindow/> */}
				<img className = "ind_page" src = {page}/>
			</div>
		</div>
	)
}
