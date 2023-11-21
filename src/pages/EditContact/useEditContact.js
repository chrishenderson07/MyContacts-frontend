import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import ContactsService from '../../services/ContactsService'
import { toast } from '../../utils/toast'
import { useSafeAsyncAction } from '../../hooks/useSafeAsyncAction'

export function useEditContact() {
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
		const controller = new AbortController()
		async function loadContact() {
			try {
				const contact = await ContactsService.getContactsById(
					id,
					controller.signal,
				)

				safeAsyncAction(() => {
					contactFormRef.current.setFieldsValues(contact)
					setIsLoading(false)
					setContactName(contact.name)
				})
			} catch (error) {
				if (error instanceof DOMException && error.name === 'AbortError') {
					return
				}
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

		return () => {
			controller.abort()
		}
	}, [id, navigate, safeAsyncAction])

	return {
		isLoading,
		contactName,
		contactFormRef,
		handleSubmit,
	}
}
