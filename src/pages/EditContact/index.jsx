import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import ContactForm from '../../components/ContactForm'
import { PageHeader } from '../../components/PageHeader'
import { Loader } from '../../components/Loader'

import ContactsService from '../../services/ContactsService'
import { toast } from '../../utils/toast'
import { useSafeAsyncAction } from '../../hooks/useSafeAsyncAction'

export function EditContact() {
	const [isLoading, setIsLoading] = useState(true)
	const contactFormRef = useRef(null)
	const [contactName, setContactName] = useState('')

	const { id } = useParams()
	const navigate = useNavigate()
	const safeAsyncAction = useSafeAsyncAction()

	async function handleSubmit(formData) {
		try {
			const contact = {
				name: formData.name,
				email: formData.email,
				phone: formData.phone,
				category_id: formData.categoryId,
			}

			const contactData = await ContactsService.updateContact(id, contact)
			setContactName(contactData.name)

			toast({
				type: 'success',
				text: 'Contato editado com sucesso',
			})
		} catch {
			toast({
				type: 'error',
				text: 'Erro ao editar o contato',
			})
		}
	}

	useEffect(() => {
		return () => {
			async function loadContact() {
				try {
					const contact = await ContactsService.getContactsById(id)

					safeAsyncAction(() => {
						contactFormRef.current.setFieldsValues(contact)
						setIsLoading(false)
						setContactName(contact.name)
					})
				} catch {
					safeAsyncAction(() => {
						navigate('/')
						toast({
							type: 'error',
							text: 'Contato não encontrado',
						})
					})
				}
			}
			loadContact()
		}
	}, [id, navigate, safeAsyncAction])

	return (
		<>
			<Loader isLoading={isLoading} />
			<PageHeader
				title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
			/>
			<ContactForm
				ref={contactFormRef}
				buttonLabel="Salvar Alterações"
				onSubmit={handleSubmit}
			/>
		</>
	)
}
