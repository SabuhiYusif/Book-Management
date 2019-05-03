import {GET_BOOKS, CREATE_BOOK} from "./types";
import axios from "axios";

export const createBook = (book, history) => async dispatch => {
  try {
    await axios.post("http://localhost:8080/api/books", book);

    history.push("");
    dispatch({
			type: CREATE_BOOK,
      payload: {}
    });
  } catch (err) {
    
  }
};

export const getBooks = ({pageNumber}) => async dispatch => {
	console.log(pageNumber)
	const res = await axios.get(`http://localhost:8080/api/books?page=${pageNumber}&size=2`);
	dispatch ({
		type: GET_BOOKS, 
		payload: res.data
	})
}