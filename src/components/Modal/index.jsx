import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

import { Overlay, Container, Footer } from './styles'

import { Button } from '../Button'

export function Modal({ danger }) {
	return ReactDOM.createPortal(
		<Overlay>
			<Container danger={danger}>
				<h1>Titulo do modal</h1>

				<p>Corpo do Modal</p>

				<Footer>
					<button
						type="button"
						className="cancel-button">
						Cancelar
					</button>
					<Button
						danger={danger}
						type="button">
						Deletar
					</Button>
				</Footer>
			</Container>
		</Overlay>,
		document.getElementById('modal-root'),
	)
}

Modal.propTypes = {
	danger: PropTypes.bool,
}

Modal.defaultProps = {
	danger: false,
}
