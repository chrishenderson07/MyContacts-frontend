import PropTypes from 'prop-types'

import { Overlay, Container, Footer } from './styles'

import { Button } from '../Button'

export function Modal({ danger }) {
	return (
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
		</Overlay>
	)
}

Modal.propTypes = {
	danger: PropTypes.bool,
}

Modal.defaultProps = {
	danger: false,
}
