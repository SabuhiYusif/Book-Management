import {GET_BOOKS} from "./types";
import axios from "axios";

export const getBooks = ({pageNumber}) => async dispatch => {
	console.log(pageNumber)
	const res = await axios.get(`http://localhost:8080/api/books?page=${pageNumber}&size=2`);
	dispatch ({
		type: GET_BOOKS, 
		payload: res.data
	})
}