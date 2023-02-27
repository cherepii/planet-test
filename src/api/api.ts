import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://new-backend.unistory.app/api',
	headers: {
		'Content-Type': 'application/json',
	},
})

export default instance
