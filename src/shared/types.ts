export interface IMember {
	id: number
	username: string
	email: string
	address: string
	isCustom?: boolean
}

export interface IMemberResponse {
	meta: {
		currentPage: number
		perPage: number
		totalPages: number
	}
	items: IMember[]
}
