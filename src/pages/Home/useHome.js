import { useEffect, useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from '../../utils/toast'
import ContactsService from '../../services/ContactsService'

export function useHome() {
	const [contacts, setContacts] = useState([])
	const [orderBy, setOrderBy] = useState('asc')
	const [searchTerm, setSearchTerm] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const [hasError, setHasError] = useState(false)
	const [isDeleteModalVisible, setisDeleteModalVisible] = useState(false)
	const [contactBeingDeleted, setcontactBeingDeleted] = useState(null)
	const [isLoadingDelete, setIsLoadingDelete] = useState(false)

	const navigate = useNavigate()

	const filteredContacts = useMemo(() => {
		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
		)
	}, [contacts, searchTerm])

	function handleToggleOrderBy() {
		setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'))
	}

	function handleChangeSearchTerm(event) {
		setSearchTerm(event.target.value)
	}

	function handleTryAgain() {
		loadContacts()
	}

	function handleDeleteContact(contact) {
		setcontactBeingDeleted(contact)
		setisDeleteModalVisible(true)
	}

	function handleCloseDeleteModal() {
		setisDeleteModalVisible(false)
	}

	async function handleConfirmDeleteContact() {
		try {
			setIsLoadingDelete(true)
			await ContactsService.deleteContact(contactBeingDeleted.id)

			setContacts((prevState) =>
				prevState.filter((contact) => contact.id !== contactBeingDeleted.id),
			)

			handleCloseDeleteModal()
			toast({
				type: 'success',
				text: 'Contato deletado com sucesso!',
			})
		} catch {
			toast({
				type: 'error',
				text: 'Ocorreu um erro ao deletar o  sucesso!',
			})
		} finally {
			setIsLoadingDelete(false)
		}
	}

	const loadContacts = useCallback(async () => {
		try {
			setIsLoading(true)

			const contactsList = await ContactsService.listContacts(orderBy)

			setHasError(false)
			setContacts(contactsList)
		} catch {
			setHasError(true)
			setContacts([])
		} finally {
			setIsLoading(false)
		}
	}, [orderBy])

	useEffect(() => {
		loadContacts()
	}, [loadContacts])

	return {
		isLoading,
		isDeleteModalVisible,
		isLoadingDelete,
		handleCloseDeleteModal,
		contactBeingDeleted,
		contacts,
		searchTerm,
		handleChangeSearchTerm,
		hasError,
		filteredContacts,
		navigate,
		handleTryAgain,
		orderBy,
		handleToggleOrderBy,
		handleDeleteContact,
		handleConfirmDeleteContact,
	}
}
