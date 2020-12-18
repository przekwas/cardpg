import React from 'react'
import { StyledContainer } from './Styles';

const Container = ({ children, centered }) => {
	return (
		<StyledContainer centered={!!centered}>
			{children}
		</StyledContainer>
	)
}

export default Container;
