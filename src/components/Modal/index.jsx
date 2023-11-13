import PropTypes from 'prop-types'

import { Overlay, Container, Footer } from './styles'

import { Button } from '../Button'
import { ReactPortal } from '../ReactPortal'
import { useAnimatedUnmount } from '../../hooks/useAnimatedUnmount'

export function Modal({
	danger,
	visible,
	isLoading,
	title,
	children,
	cancelLabel,
	confirmLabel,
	onCancel,
	onConfirm,
}) {
	const { shouldRender, animatedElementRef } = useAnimatedUnmount(visible)

	if (!shouldRender) {
		return null
	}

	let container = document.getElementById('modal-root')

	if (!container) {
		container = document.createElement('div')
		container.setAttribute('id', 'modal-root')
		document.body.appendChild(container)
	}

	return (
		<ReactPortal containerId="modal-root">
			<Overlay
				isLeaving={!visible}
				ref={animatedElementRef}>
				<Container
					danger={danger}
					isLeaving={!visible}>
					<h1>{title}</h1>

					<div className="modal-body">{children}</div>

					<Footer>
						<button
							onClick={onCancel}
							type="button"
							className="cancel-button"
							disabled={isLoading}>
							{cancelLabel}
						</button>
						<Button
							onClick={onConfirm}
							danger={danger}
							type="button"
							isLoading={isLoading}>
							{confirmLabel}
						</Button>
					</Footer>
				</Container>
			</Overlay>
		</ReactPortal>
	)
}

Modal.propTypes = {
	danger: PropTypes.bool,
	visible: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool,
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
	cancelLabel: PropTypes.string,
	confirmLabel: PropTypes.string,
	onCancel: PropTypes.func.isRequired,
	onConfirm: PropTypes.func.isRequired,
}

Modal.defaultProps = {
	danger: false,
	visible: false,
	isLoading: false,
	cancelLabel: 'Cancelar',
	confirmLabel: 'Confirmar',
}
