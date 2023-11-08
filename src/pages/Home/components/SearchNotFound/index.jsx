import PropTypes from 'prop-types'

import { Container } from './styles'

import magnifierQuestion from '../../../../assets/images/icons/magnifier-question.svg'

export function SearchNotFound({ searchTerm }) {
	return (
		<Container>
			<img
				src={magnifierQuestion}
				alt="Magnifier Question"
			/>
			<span>
				Nenhum contato encontrado para <strong>{searchTerm}</strong>
			</span>
		</Container>
	)
}

SearchNotFound.propTypes = {
	searchTerm: PropTypes.string.isRequired,
}
