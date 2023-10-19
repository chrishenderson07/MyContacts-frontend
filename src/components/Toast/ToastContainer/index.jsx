import { ToastMessage } from '../ToastMessage'
import { Container } from './styles'

export function ToastContainer() {
	return (
		<Container>
			<ToastMessage text="Default toast" />
			<ToastMessage
				text="Sucess toast"
				type="danger"
			/>
			<ToastMessage
				text="Error toast"
				type="sucess"
			/>
		</Container>
	)
}
