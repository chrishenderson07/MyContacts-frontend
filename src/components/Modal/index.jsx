import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { Overlay, Container, Footer } from './styles'

import { Button } from '../Button'

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
	if (!visible) {
		return null
	}

	return ReactDOM.createPortal(
		<Overlay>
			<Container danger={danger}>
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
		</Overlay>,
		document.getElementById('modal-root'),
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
