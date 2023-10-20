import { PageHeader } from '../../components/PageHeader'
import { Container } from './styles'
import { ContactForm } from '../../components/ContactForm'
import ContactsService from '../../services/ContactsService'
import { toast } from '../../utils/toast'

export function NewContact() {
	async function handleSubmit(formData) {
		try {
			const contact = {
				name: formData.name,
				email: formData.email,
				phone: formData.phone,
				category_id: formData.categoryId,
			}

			await ContactsService.createContacts(contact)

			toast({
				type: 'success',
				text: 'Contato cadastrado com sucesso',
			})
		} catch (error) {
			// alert('Erro ao cadastrar contato')
			toast({
				type: 'error',
				text: 'Erro ao cadastrar contato',
			})
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
