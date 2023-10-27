/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import {
	Container,
	InputSearchContainer,
	Header,
	ListHeader,
	Card,
	ErrorContainer,
	EmptyListContainer,
	SearchNotFoundContainer,
} from './styles'

import { Modal } from '../../components/Modal'
import { Loader } from '../../components/Loader'
import { Button } from '../../components/Button'

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'
import sad from '../../assets/images/icons/sad.svg'
import emptyBox from '../../assets/images/icons/empty-box.svg'
import magnifierQuestion from '../../assets/images/icons/magnifier-question.svg'

import { toast } from '../../utils/toast'

import ContactsService from '../../services/ContactsService'

export function Home() {
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
		setcontactBeingDeleted(null)
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
		} finally {
			setIsLoading(false)
		}
	}, [orderBy])

	useEffect(() => {
		loadContacts()
	}, [loadContacts])

	return (
		<Container>
			<Loader isLoading={isLoading} />
			<Modal
				danger
				visible={isDeleteModalVisible}
				isLoading={isLoadingDelete}
				title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"?`}
				confirmLabel="Deletar"
				onCancel={handleCloseDeleteModal}
				onConfirm={() => {
					handleConfirmDeleteContact(contactBeingDeleted.id)
				}}>
				<p>Essa operação não poderá ser desfeita</p>
			</Modal>

			{contacts.length > 0 && (
				<InputSearchContainer>
					<input
						type="text"
						placeholder="Pesquisar pelo nome..."
						value={searchTerm}
						onChange={handleChangeSearchTerm}
					/>
				</InputSearchContainer>
			)}

			<Header
				justifyContent={
					hasError
						? 'flex-end'
						: contacts.length > 0
						? 'space-between'
						: 'center'
				}>
				{!hasError && contacts.length > 0 && (
					<strong>
						{filteredContacts.length}
						{filteredContacts.length === 1 ? ' contato' : ' contatos'}
					</strong>
				)}
				<a onClick={() => navigate('/new')}>Novo Contato</a>
			</Header>

			{hasError && (
				<ErrorContainer>
					<img
						src={sad}
						alt="Sad"
					/>
					<div className="details">
						<strong>Ocorreu um erro ao obter os seus contatos</strong>

						<Button
							type="button"
							onClick={handleTryAgain}>
							Tentar novamente
						</Button>
					</div>
				</ErrorContainer>
			)}

			{!hasError && (
				<>
					{contacts.length < 1 && !isLoading && (
						<EmptyListContainer>
							<img
								src={emptyBox}
								alt="Empty Box"
							/>
							<p>
								Você ainda não tem nenhum contato cadastrado! Clique no botão
								<strong> "Novo Contato" </strong>
								cima para cadastrar o seu primeiro!
							</p>
						</EmptyListContainer>
					)}

					{contacts.length > 0 && filteredContacts.length < 1 && (
						<SearchNotFoundContainer>
							<img
								src={magnifierQuestion}
								alt="Magnifier Question"
							/>
							<span>
								Nenhum contato encontrado para <strong>{searchTerm}</strong>
							</span>
						</SearchNotFoundContainer>
					)}

					{filteredContacts.length > 0 && (
						<ListHeader orderBy={orderBy}>
							<button
								type="button"
								className="sort-button"
								onClick={handleToggleOrderBy}>
								<span>Nome</span>
								<img
									src={arrow}
									alt="Arrow"
								/>
							</button>
						</ListHeader>
					)}

					{filteredContacts.map((contact) => (
						<Card key={contact.id}>
							<div className="info">
								<div className="contact-name">
									<strong>{contact.name}</strong>
									{contact.category_name && (
										<small>{contact.category_name}</small>
									)}
								</div>
								<span>{contact.email}</span>
								<span>{contact.phone}</span>
							</div>

							<div className="actions">
								<a onClick={() => navigate(`/edit/${contact.id}`)}>
									<img
										src={edit}
										alt="Edit"
									/>
								</a>
								<button
									type="button"
									onClick={() => {
										handleDeleteContact(contact)
									}}>
									<img
										src={trash}
										alt="Delete"
									/>
								</button>
							</div>
						</Card>
					))}
				</>
			)}
		</Container>
	)
}
