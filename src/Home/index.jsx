import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Container  from '../shared/components/Container';
import Card from '../shared/components/Card';

const Home = () => {
	const enemy = useSelector(state => state.enemy);
	

	return (
		<Container centered>
			<Row col>
				<h1>Enemy</h1>
                <h2>hp: {enemy.hp.current} / {enemy.hp.max}</h2>
			</Row>
			<Row>
				<Card />
			</Row>
		</Container>
	);
};

const Row = styled.div`
    display: flex;
    flex-direction: ${props => props.col ? 'column' : 'row'};
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export default Home;
