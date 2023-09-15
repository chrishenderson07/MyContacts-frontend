import styled from 'styled-components'

export const Container = styled.header`
	margin-bottom: 2.4rem;

	a {
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 0.8rem;

		span {
			font-weight: bold;
			color: ${({ theme }) => theme.colors.primary.main};
		}

		img {
			transform: rotate(-90deg);
		}
	}

	h1 {
		font-size: 2.4rem;
	}
`
