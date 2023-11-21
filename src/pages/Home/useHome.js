import { useEffect, useState, useCallback, useTransition } from 'react'
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
	const [filteredContacts, setFilteredContacts] = useState([])
	const [isPending, startTransition] = useTransition()

	const navigate = useNavigate()

	const handleToggleOrderBy = useCallback(() => {
		setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'))
	}, [])

	function handleChangeSearchTerm(event) {
		const { value } = event.target
		setSearchTerm(value)

		startTransition(() => {
			setFilteredContacts(
				contacts.filter((contact) =>
					contact.name.toLowerCase().includes(value.toLowerCase()),
				),
			)
		})
	}

	function handleTryAgain() {
		loadContacts()
	}

	const handleDeleteContact = useCallback((contact) => {
		setcontactBeingDeleted(contact)
		setisDeleteModalVisible(true)
	}, [])

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

	const loadContacts = useCallback(
		async (signal) => {
			try {
				setIsLoading(true)

				const contactsList = await ContactsService.listContacts(orderBy, signal)

				setHasError(false)
				setContacts(contactsList)
				setFilteredContacts(contactsList)
			} catch (error) {
				if (error instanceof DOMException && error.name === 'AbortError') {
					return
				}
				setHasError(true)
				setContacts([])
			} finally {
				setIsLoading(false)
			}
		},
		[orderBy],
	)

	useEffect(() => {
		const controller = new AbortController()

		loadContacts(controller.signal)

		return () => {
			controller.abort()
		}
	}, [loadContacts])

	return {
		isPending,
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
