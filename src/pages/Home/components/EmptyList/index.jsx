/* eslint-disable react/no-unescaped-entities */
import { Container } from './styles'

import emptyBox from '../../../../assets/images/icons/empty-box.svg'

export function EmptyList() {
	return (
		<Container>
			<img
				src={emptyBox}
				alt="Empty Box"
			/>
			<p>
				Você ainda não tem nenhum contato cadastrado! Clique no botão
				<strong>"Novo Contato" </strong>
				cima para cadastrar o seu primeiro!
			</p>
		</Container>
	)
}
