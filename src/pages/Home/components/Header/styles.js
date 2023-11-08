import styled from 'styled-components'

export const Container = styled.header`
	display: flex;
	justify-content: ${({ justifyContent }) => justifyContent};

	align-items: center;
	margin-top: 3.2rem;
	border-bottom: 2px solid ${({ theme }) => theme.colors.gray[50]};
	padding-bottom: 1.6rem;
	strong {
		font-size: 2.4rem;
	}

	a {
		color: ${({ theme }) => theme.colors.primary.main};
		text-decoration: none;
		font-weight: bold;
		border: 2px solid ${({ theme }) => theme.colors.primary.main};
		padding: 0.8rem 1.6rem;
		border-radius: 4px;
		transition: all 0.2s ease-in;

		&:hover {
			background-color: ${({ theme }) => theme.colors.primary.main};
			color: #fff;
		}
	}
`
