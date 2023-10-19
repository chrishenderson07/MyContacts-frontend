import styled, { css } from 'styled-components'

const containerVariants = {
	default: css`
		background-color: ${({ theme }) => theme.colors.primary.main};
	`,
	sucess: css`
		background-color: ${({ theme }) => theme.colors.sucess.main};
	`,
	danger: css`
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

	${({ type }) => containerVariants[type] || containerVariants.default}

	& + & {
		margin-top: 1.6rem;
	}
`