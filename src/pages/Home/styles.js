import styled from 'styled-components'

export const Container = styled.div`
	margin-top: 3.2rem;
`
export const InputSearchContainer = styled.div`
	width: 100%;

	input {
		width: 100%;
		background-color: #fff;
		border: none;
		border-radius: 4px;
		height: 5rem;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
		outline: none;
		padding: 0 1.6rem;

		&::placeholder {
			color: #bcbcbc;
		}
	}
`

export const Header = styled.header`
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

export const ListHeader = styled.header`
	margin-top: 2.4rem;

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

		img {
			transform: ${({ orderBy }) =>
				orderBy === 'asc' ? 'rotate(-180deg)' : 'rotate(0deg)'};
			transition: transform 0.2s ease-in;
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

export const ErrorContainer = styled.div`
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

export const EmptyListContainer = styled.div`
	margin-top: 1.6rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	p {
		margin-top: 0.8rem;
		text-align: center;
		color: ${({ theme }) => theme.colors.gray[200]};

		strong {
			color: ${({ theme }) => theme.colors.primary.main};
		}
	}
`
