import styled from 'styled-components'

export const Overlay = styled.div`
	background-color: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(5px);
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Container = styled.div`
	width: 100%;
	max-width: 450px;

	background-color: #fff;
	border-radius: 4px;

	padding: 2.4rem;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

	> h1 {
		font-size: 2.2rem;
		color: ${({ theme, danger }) =>
			danger ? theme.colors.danger.main : theme.colors.dark[900]};
	}

	.modal-body {
		margin-top: 3.2rem;
	}
`

export const Footer = styled.footer`
	margin-top: 3.2rem;

	display: flex;
	align-items: center;
	justify-content: flex-end;

	.cancel-button {
		background-color: transparent;
		border: none;
		font-size: 1.6rem;
		margin-right: 2.6rem;
		color: ${({ theme }) => theme.colors.gray[200]};

		&:disabled {
			cursor: not-allowed;
		}
	}
`
