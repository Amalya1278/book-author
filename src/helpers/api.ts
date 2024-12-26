import axios from "axios";
import { IBook, IAuthor, InputBook, InputAuthor } from "./types";

const Axios = axios.create({
    baseURL: "http://localhost:4000",
});

export const getAllBooks = async (): Promise<IBook[]> => {
    const response = await Axios.get("/books");
    return response.data;
};

export const getBookById = async (id: number): Promise<IBook> => {
    const response = await Axios.get(`/books/`+id);
    return response.data;
};

export const addNewBook = async (data: InputBook): Promise<IBook> => {
    const response = await Axios.post("/books", data);
    return response.data;
};

export const getAllAuthors = async (): Promise<IAuthor[]> => {
    const response = await Axios.get("/authors");
    return response.data;
};

export const addNewAuthor = async (data: InputAuthor): Promise<IAuthor> => {
    const response = await Axios.post("/authors", data);
    return response.data;
};
export const deleteBook=async(id:number):Promise<void>=>{
    const response=await Axios.delete("/books/"+id)
}