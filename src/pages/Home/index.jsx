import {
	Container,
	InputSearchContainer,
	Header,
	ListContainer,
	Card,
} from './styles'
import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'
import { Link } from 'react-router-dom'

export function Home() {
	return (
		<Container>
			<InputSearchContainer>
				<input
					type="text"
					placeholder="Pesquisar pelo nome..."
				/>
			</InputSearchContainer>

			<Header>
				<strong>3 Contatos</strong>
				<Link to="/new">Novo Contato</Link>
			</Header>
			<ListContainer>
				<header>
					<button
						type="button"
						className="sort-button">
						<span>Nome</span>
						<img
							src={arrow}
							alt="Arrow"
						/>
					</button>
				</header>

				<Card>
					<div className="info">
						<div className="contact-name">
							<strong>Chris Henderson</strong>
							<small>Instagram</small>
						</div>
						<span>contato@nerodesign.com</span>
						<span>(21) 99999-9999</span>
					</div>

					<div className="actions">
						<Link to="/edit/123">
							<img
								src={edit}
								alt="Edit"
							/>
						</Link>
						<button type="button">
							<img
								src={trash}
								alt="Delete"
							/>
						</button>
					</div>
				</Card>
			</ListContainer>
		</Container>
	)
}
