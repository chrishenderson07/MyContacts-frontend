import { PageHeader } from '../../components/PageHeader'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
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
		</Container>
	)
}
