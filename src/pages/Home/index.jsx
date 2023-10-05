import { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import {
	Container,
	InputSearchContainer,
	Header,
	ListHeader,
	Card,
} from './styles'

// import { Modal } from '../../components/Modal'
import { Loader } from '../../components/Loader'

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'
import ContactsService from '../../services/ContactsService'

export function Home() {
	const [contacts, setContacts] = useState([])
	const [orderBy, setOrderBy] = useState('asc')
	const [searchTerm, setSearchTerm] = useState('')
	const [isLoading, setIsLoading] = useState(true)

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

	useEffect(() => {
		async function loadContacts() {
			try {
				setIsLoading(true)

				const contactsList = await ContactsService.listContacts(orderBy)

				setContacts(contactsList)
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}
		loadContacts()
	}, [orderBy])

	return (
		<Container>
			<Loader isLoading={isLoading} />
			{/* <Modal danger /> */}
			<InputSearchContainer>
				<input
					type="text"
					placeholder="Pesquisar pelo nome..."
					value={searchTerm}
					onChange={handleChangeSearchTerm}
				/>
			</InputSearchContainer>

			<Header>
				<strong>
					{filteredContacts.length}
					{filteredContacts.length === 1 ? ' contato' : ' contatos'}
				</strong>
				<a onClick={() => navigate('/new')}>Novo Contato</a>
			</Header>

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
							{contact.category_name && <small>{contact.category_name}</small>}
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
						<button type="button">
							<img
								src={trash}
								alt="Delete"
							/>
						</button>
					</div>
				</Card>
			))}
		</Container>
	)
}
