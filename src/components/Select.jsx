import styled from 'styled-components'

export const Select = styled.select`
	width: 100%;
	height: 5.2rem;
	background-color: #fff;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
	border-radius: 4px;
	border: 2px solid #fff;
	outline: none;
	appearance: none;

	padding: 0 1.6rem;
	font-size: 1.6rem;

	transition: border-color 0.2s ease-in;
	&:focus {
		border-color: ${({ theme }) => theme.colors.primary.main};
	}
`
