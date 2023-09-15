import { PageHeader } from '../../components/PageHeader'
import { Container } from './styles'
import { ContactForm } from '../../components/ContactForm'

export function NewContact() {
	return (
		<Container>
			<PageHeader title="Novo Contato" />
			<ContactForm buttonLabel="Cadastrar" />
		</Container>
	)
}
