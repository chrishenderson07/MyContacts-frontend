import styled from 'styled-components'

export const Container = styled.div`
	margin-top: 3.2rem;
`

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

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

export const ListContainer = styled.div`
	margin-top: 2.4rem;

	header {
		margin-bottom: 8px;
		button {
			background-color: transparent;
			border: none;
			display: flex;
			align-items: center;
			gap: 0.8rem;
			font-size: 1.6rem;

			span {
				font-weight: bold;
				color: ${({ theme }) => theme.colors.primary.main};
			}
		}
	}
`

export const Card = styled.div`
	background-color: #fff;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
	padding: 1.6rem;
	border-radius: 4px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	//Toda vez que houver um elemento Card, seguido de outro elemento Card
	//Adicione a margem top de 1.6rem
	& + & {
		margin-top: 1.6rem;
	}

	.info {
		.contact-name {
			display: flex;
			align-items: center;
			gap: 8px;

			small {
				background-color: ${({ theme }) => theme.colors.primary.lighter};
				color: ${({ theme }) => theme.colors.primary.main};
				font-weight: bold;
				text-transform: uppercase;

				padding: 4px;
				border-radius: 4px;
			}
		}

		span {
			display: block;
			font-size: 1.4rem;
			color: ${({ theme }) => theme.colors.gray[200]};
		}
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 8px;

		button {
			background-color: transparent;
			border: none;
		}
	}
`
