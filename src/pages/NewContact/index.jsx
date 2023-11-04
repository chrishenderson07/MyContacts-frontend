import { PageHeader } from '../../components/PageHeader'
import { Container } from './styles'
import ContactForm from '../../components/ContactForm'
import { useNewContact } from './useNewContact'

export function NewContact() {
	const { contactFormRef, handleSubmit } = useNewContact()

	return (
		<Container>
			<PageHeader title="Novo Contato" />
			<ContactForm
				ref={contactFormRef}
				onSubmit={handleSubmit}
				buttonLabel="Cadastrar"
			/>
		</Container>
	)
}
