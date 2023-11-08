import styled from 'styled-components'

export const Container = styled.div`
	margin-top: 1.6rem;
	display: flex;
	align-items: flex-start;

	span {
		color: ${({ theme }) => theme.colors.gray[200]};
		margin-left: 1.6rem;
		word-break: break-word;
	}
`
