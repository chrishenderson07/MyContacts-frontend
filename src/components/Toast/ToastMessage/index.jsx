import PropTypes from 'prop-types'

import { Container } from './styles'

import xCircleIcon from '../../../assets/images/icons/x-circle.svg'
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg'

export function ToastMessage({ type, text }) {
	return (
		<Container type={type}>
			{type === 'error' && (
				<img
					src={xCircleIcon}
					alt="X"
				/>
			)}
			{type === 'sucess' && (
				<img
					src={checkCircleIcon}
					alt="Check"
				/>
			)}
			<strong>{text}</strong>
		</Container>
	)
}

ToastMessage.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['default', 'success', 'error']),
}

ToastMessage.defaultProps = {
	type: 'default',
}
