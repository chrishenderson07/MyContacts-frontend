import styled, { css, keyframes } from 'styled-components'

const messageIn = keyframes`
from {
  opacity : 0;
  transform: translateY(100px);
}

to {
   opacity: 1;
   transform: translateY(0);
}
`
const messageOut = keyframes`
from {
  opacity : 1;
  transform: translateY(0);
}

to {
  opacity: 0;
  transform: translateY(100px);
}
`

const containerVariants = {
	default: css`
		background-color: ${({ theme }) => theme.colors.primary.main};
	`,
	success: css`
		background-color: ${({ theme }) => theme.colors.sucess.main};
	`,
	error: css`
		background-color: ${({ theme }) => theme.colors.danger.main};
	`,
}

export const Container = styled.div`
	padding: 1.6rem 3.2rem;

	color: #fff;

	border-radius: 4px;
	box-shadow: 0px 20px 20px -16px #00000040;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;

	animation: ${messageIn} 0.3s;

	${({ isLeaving }) =>
		isLeaving &&
		css`
			animation: ${messageOut} 0.3s forwards;
		`}

	&:focus {
	}

	${({ type }) => containerVariants[type] || containerVariants.default}

	& + & {
		margin-top: 1.6rem;
	}
`
