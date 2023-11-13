import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

import xCircleIcon from '../../../assets/images/icons/x-circle.svg'
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg'

export function ToastMessage({
	message,
	onRemoveMessage,
	isLeaving,
	onAnimationEnd,
}) {
	const animatedElementRef = useRef(null)

	function handleRemoveToast() {
		onRemoveMessage(message.id)
	}

	useEffect(() => {
		function handleAnimationEnd() {
			onAnimationEnd(message.id)
		}

		const elementRef = animatedElementRef.current
		if (isLeaving) {
			elementRef.addEventListener('animationend', handleAnimationEnd)
		}

		return () => {
			elementRef.removeEventListener('animationend', handleAnimationEnd)
		}
	}, [isLeaving, onAnimationEnd, message.id])

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			onRemoveMessage(message.id)
		}, message.duration || 7000)

		return () => {
			clearTimeout(timeoutId)
		}
	}, [message, onRemoveMessage])

	return (
		<Container
			type={message.type}
			onClick={handleRemoveToast}
			tabIndex={0}
			role="button"
			isLeaving={isLeaving}
			ref={animatedElementRef}>
			{message.type === 'error' && (
				<img
					src={xCircleIcon}
					alt="X"
				/>
			)}
			{message.type === 'success' && (
				<img
					src={checkCircleIcon}
					alt="Check"
				/>
			)}
			<strong>{message.text}</strong>
		</Container>
	)
}

ToastMessage.propTypes = {
	message: PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
		type: PropTypes.oneOf(['default', 'success', 'error']),
		duration: PropTypes.number,
	}),
	onRemoveMessage: PropTypes.func.isRequired,
	isLeaving: PropTypes.bool,
	onAnimationEnd: PropTypes.func,
}
