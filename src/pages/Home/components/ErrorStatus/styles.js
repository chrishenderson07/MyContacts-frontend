import styled from 'styled-components'

export const Container = styled.div`
	margin-top: 1.6rem;
	display: flex;
	align-items: center;

	.details {
		margin-left: 2.4rem;
		strong {
			font-size: 2.2rem;
			color: ${({ theme }) => theme.colors.danger.main};
			display: block;
			margin-bottom: 8px;
		}
	}
`
