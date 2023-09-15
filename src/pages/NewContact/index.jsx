import { PageHeader } from '../../components/PageHeader'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { Button } from '../../components/Button'
import { Container } from './styles'

export function NewContact() {
	return (
		<Container>
			<PageHeader title="Novo Contato" />
			<Input />
			<Select>
				<option value="123">Instagram</option>
				<option value="123">Instagram</option>
				<option value="123">Instagram</option>
				<option value="123">Instagram</option>
			</Select>
			<Button type="button">Salvar alterações</Button>
			<Button
				type="button"
				disabled>
				Salvar alterações
			</Button>
		</Container>
	)
}
