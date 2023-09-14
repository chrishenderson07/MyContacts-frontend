import { Container, Header, ListContainer, Card } from './styles'
import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'

export function ContactsList() {
	return (
		<Container>
			<Header>
				<strong>3 Contatos</strong>
				<a href="/">Novo Contato</a>
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
						<a href="/edit">
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
						<a href="/edit">
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
						<a href="/edit">
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
			</ListContainer>
		</Container>
	)
}
