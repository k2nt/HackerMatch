import axios from 'axios';

const API_ENDPOINT="https://jsonplaceholder.typicode.com"

const fetchAPI = async ({
	method = "get",
	endpoint = "",
	data = {},
}) => {

	return await axios({
		method,
		url: API_ENDPOINT + endpoint,
		timeout: 60000,
		data,
	});
};

export default fetchAPI;