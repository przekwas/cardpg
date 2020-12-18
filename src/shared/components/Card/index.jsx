import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { damage } from '../../reducers/enemySlice';

const Card = () => {
    const dispatch = useDispatch();
    
    return (
        <CardBase>
            <h1>Attack</h1>
            <h2>+1 damage</h2>
            <button onClick={() => dispatch(damage(1))}>Use</button>
        </CardBase>
    );
}

const CardBase = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    height: 250px;
    width: 200px;
`;

export default Card;
