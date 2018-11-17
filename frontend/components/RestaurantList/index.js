import gql from 'graphql-tag';
import Link from 'next/link';
import { graphql } from 'react-apollo';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

// Query from GraphQL
const query = gql`
    {
        restaurants {
            _id
            name
            description
            images{
                _id
                url
            }
        }
    }
`;

const RestaurantList = ({ data: {loading, error, restaurants}, search }, req) => {
	if (error) return 'Error loading restaurants';

	if (restaurants && restaurants.length){
		const searchQuery = restaurants.filter(query => query.name.toLowerCase().includes(search));

		if (searchQuery.length != 0){
			return (
				<div className="py-md-3">
					{searchQuery.map(res => {
						return (
							<Card style={{ width: "31.3%", margin: "10px"}} className="h-100" key={res._id}>
								<CardImg top={true} style={{ height: 250 }} src={`http://localhost:1337${res.images.url}`}/>
								<CardBody>
									<CardTitle>{res.name}</CardTitle>
									<CardText>{res.description}</CardText>
								</CardBody>
								<div className="card-footer">
									<Link as={`restaurant/${res._id}`} href={`/restaurant?id=${res._id}`}>
										<a className="btn btn-dark btn-block">View 👀</a>
									</Link>
								</div>
							</Card>
						)
					})}
				</div>
			)
		} else {
			return <h1 className="text-center my-xl-5">Oops! Restaurant is not found, find another one 👀</h1>
		}
	}

	return <h1 className="text-center my-lg-5">Loading...</h1>
};

RestaurantList.getInitialProps = async ({ req }) => {
	const res = await fetch('https://api.github.com/repos/zeit/next.js');
	const json = await res.json();
	return { stars: json.stargazers_count };
};

export default graphql(query, { props: ({ data }) => ({ data }) })(RestaurantList)