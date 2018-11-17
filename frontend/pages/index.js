import React, {Component} from 'react';
import {Container, Col, Input, InputGroup, InputGroupAddon, Row} from 'reactstrap';
import RestaurantList from "../components/RestaurantList";

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}
	}

	onChange(e) {
		this.setState({query: e.target.value.toLowerCase()})
	}

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<div className="my-xl-5">
							<h1>Deliveroo Clone 🍔</h1>
							<p className="lead">Your favourite restaurants, delivered fast to your door. </p>
						</div>

						<div className="search mb-xl-5">
							<InputGroup>
								<InputGroupAddon addonType="append">Search 🔍</InputGroupAddon>
								<Input placeholder="Type any restaurant name here.."
								       onChange={this.onChange.bind(this)}/>
							</InputGroup>
						</div>

						<RestaurantList search={this.state.query}/>
					</Col>
				</Row>
			</Container>
		)
	}
}