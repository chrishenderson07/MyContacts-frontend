/* eslint-disable react/no-unescaped-entities */

import { Container } from './styles'

import { Loader } from '../../components/Loader'
import { Modal } from '../../components/Modal'

import { useHome } from './useHome'

import { InputSearch } from './components/InputSearch'
import { Header } from './components/Header'
import { ErrorStatus } from './components/ErrorStatus'
import { EmptyList } from './components/EmptyList'
import { SearchNotFound } from './components/SearchNotFound'
import ContactsList from './components/ContactsList'

export function Home() {
	const {
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
		handleTryAgain,
		orderBy,
		handleToggleOrderBy,
		handleDeleteContact,
		handleConfirmDeleteContact,
	} = useHome()

	const hasContacts = contacts.length > 0
	const isListEmpty = !hasError && !isLoading && !hasContacts
	const isSearchEmpty = !hasError && hasContacts && filteredContacts.length < 1
	return (
		<Container>
			<Loader isLoading={isLoading} />

			{hasContacts && (
				<InputSearch
					value={searchTerm}
					onChange={handleChangeSearchTerm}
				/>
			)}

			<Header
				hasError={hasError}
				qtyOfContacts={contacts.length}
				qtyOfFilteredContacts={filteredContacts.length}
			/>

			{hasError && <ErrorStatus onTryAgain={handleTryAgain} />}

			{isListEmpty && <EmptyList />}

			{isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

			{isPending && <h1>Carregando...</h1>}
			{hasContacts && (
				<>
					<ContactsList
						filteredContacts={filteredContacts}
						orderBy={orderBy}
						onToggleOrderBy={handleToggleOrderBy}
						onDeleteContact={handleDeleteContact}
					/>

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
				</>
			)}
		</Container>
	)
}
