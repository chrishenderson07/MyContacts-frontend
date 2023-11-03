class CategoryMapper {
	toDomain(persistenceContact) {
		return {
			id: persistenceContact.id,
			name: persistenceContact.name,
		}
	}
}

export default new CategoryMapper()
