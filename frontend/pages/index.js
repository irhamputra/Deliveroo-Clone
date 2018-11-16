import React, {Component} from 'react';
import {Col, Input, InputGroup, InputGroupAddon, Row} from 'reactstrap';
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
			<div className="container-fluid">
				<Row>
					<Col>
						<Col>
							<div className="my-xl-5">
								<h1>Deliveroo Clone</h1>
								<p className="lead">Your favourite restaurants, delivered fast to your door.</p>
							</div>
						</Col>

						<Col>
							<div className="search">
								<InputGroup>
									<InputGroupAddon addonType="append">Search</InputGroupAddon>
									<Input onChange={this.onChange.bind(this)}/>
								</InputGroup>
							</div>
						</Col>
						<RestaurantList search={this.state.query}/>
					</Col>
				</Row>
			</div>
		)
	}
}