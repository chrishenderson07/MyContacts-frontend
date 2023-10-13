import { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import isEmailValid from '../../utils/isEmailValid'
import formatPhone from '../../utils/formatPhone'
import CategoriesService from '../../services/CategoriesService'

import useErrors from '../../hooks/useErrors'

import { Form, ButtonContainer } from './styles'

import { FormGroup } from '../FormGroup'
import { Input } from '../Input'
import { Select } from '../Select'
import { Button } from '../Button'

export function ContactForm({ buttonLabel }) {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [category, setCategory] = useState('')
	const [categories, setCategories] = useState([])
	const [isLoadingCategories, setIsLoadingCategories] = useState(true)

	const { errors, setError, removeError, getErrorMessageByFieldName } =
		useErrors()

	const isFormValid = name && errors.length === 0

	function handleNameChange(event) {
		setName(event.target.value)

		if (!event.target.value) {
			setError({ field: 'name', message: 'Nome é obrigatário' })
		} else {
			removeError('name')
		}
	}

	function handleEmailChange(event) {
		setEmail(event.target.value)

		if (event.target.value && !isEmailValid(event.target.value)) {
			setError({ field: 'email', message: 'E-mail inválido' })
		} else {
			removeError('email')
		}
	}

	function handlePhoneChange(event) {
		setPhone(formatPhone(event.target.value))
	}

	function handleSubmit(event) {
		event.preventDefault()
		console.log({
			name,
			email,
			phone,
			category,
		})
	}

	useEffect(() => {
		async function loadCategories() {
			console.log('entrei')
			try {
				const categoriesList = await CategoriesService.listCategories()
				setCategories(categoriesList)
			} catch {
			} finally {
				setIsLoadingCategories(false)
			}
		}

		loadCategories()
	}, [])

	return (
		<Form
			onSubmit={handleSubmit}
			noValidate>
			<FormGroup error={getErrorMessageByFieldName('name')}>
				<Input
					error={getErrorMessageByFieldName('name')}
					placeholder="Nome *"
					value={name}
					onChange={handleNameChange}
				/>
			</FormGroup>

			<FormGroup error={getErrorMessageByFieldName('email')}>
				<Input
					type="email"
					error={getErrorMessageByFieldName('email')}
					placeholder="E-mail"
					value={email}
					onChange={handleEmailChange}
				/>
			</FormGroup>

			<FormGroup>
				<Input
					placeholder="Telefone"
					value={phone}
					onChange={handlePhoneChange}
					maxLength={15}
				/>
			</FormGroup>

			<FormGroup isLoading={isLoadingCategories}>
				<Select
					value={category}
					onChange={(e) => setCategory(e.target.value)}
					disabled={isLoadingCategories}>
					<option value="">Sem categoria</option>

					{categories.map((category) => (
						<option
							key={category.id}
							value={category.id}>
							{category.name}
						</option>
					))}
				</Select>
			</FormGroup>

			<ButtonContainer>
				<Button
					disabled={!isFormValid}
					type="submit">
					{buttonLabel}
				</Button>
			</ButtonContainer>
		</Form>
	)
}

ContactForm.propTypes = {
	buttonLabel: PropTypes.string.isRequired,
}
