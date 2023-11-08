import styled from 'styled-components'

export const Container = styled.div`
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
