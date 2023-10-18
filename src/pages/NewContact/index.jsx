import { PageHeader } from '../../components/PageHeader'
import { Container } from './styles'
import { ContactForm } from '../../components/ContactForm'
import ContactsService from '../../services/ContactsService'

export function NewContact() {
	async function handleSubmit(formData) {
		try {
			const contact = {
				name: formData.name,
				email: formData.email,
				phone: formData.phone,
				category_id: formData.categoryId,
			}

			const response = await ContactsService.createContacts(contact)
			console.log(response)
		} catch (error) {
			alert('Erro ao cadastrar contato')
		}
	}
	return (
		<Container>
			<PageHeader title="Novo Contato" />
			<ContactForm
				onSubmit={handleSubmit}
				buttonLabel="Cadastrar"
			/>
		</Container>
	)
}
