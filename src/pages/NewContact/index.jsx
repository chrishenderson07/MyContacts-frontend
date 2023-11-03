import { useRef } from 'react'

import { PageHeader } from '../../components/PageHeader'
import { Container } from './styles'
import ContactForm from '../../components/ContactForm'
import ContactsService from '../../services/ContactsService'
import { toast } from '../../utils/toast'

export function NewContact() {
	const contactFormRef = useRef(null)
	async function handleSubmit(contact) {
		try {
			await ContactsService.createContacts(contact)
			contactFormRef.current.resetFields()

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
				ref={contactFormRef}
				onSubmit={handleSubmit}
				buttonLabel="Cadastrar"
			/>
		</Container>
	)
}
