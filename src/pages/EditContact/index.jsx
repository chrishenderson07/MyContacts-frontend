import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import ContactForm from '../../components/ContactForm'
import { PageHeader } from '../../components/PageHeader'
import { Loader } from '../../components/Loader'

import ContactsService from '../../services/ContactsService'
import { toast } from '../../utils/toast'

export function EditContact() {
	const [isLoading, setIsLoading] = useState(true)
	const contactFormRef = useRef(null)

	const { id } = useParams()
	const navigate = useNavigate()

	function handleSubmit() {
		//
	}

	useEffect(() => {
		return () => {
			async function loadContact() {
				try {
					const contact = await ContactsService.getContactsById(id)
					contactFormRef.current.setFieldsValues(contact)

					setIsLoading(false)
				} catch (error) {
					navigate('/')
					toast({
						type: 'error',
						text: 'Contato não encontrado',
					})
				}
			}
			loadContact()
		}
	}, [id, navigate])

	return (
		<>
			<Loader isLoading={isLoading} />
			<PageHeader title="Editar contato X" />
			<ContactForm
				ref={contactFormRef}
				buttonLabel="Salvar Alterações"
				onSubmit={handleSubmit}
			/>
		</>
	)
}
