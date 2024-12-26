
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IBook } from "../helpers/types";
import { getBookById } from "../helpers/api";

export const BookDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<IBook | null>(null);

    useEffect(() => {
        if (id) {
            getBookById(Number(id)).then((response) => setBook(response));
        }
    }, [id]);

    if (!book) {
        return <p>Book not found.</p>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <img src={book.imageUrl} alt={book.title} className="w-full h-64 object-cover mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-6">{book.title}</h2>
                <p className="text-gray-600 mb-4">Pages: {book.pages}</p>
            </div>
        </div>
    );
};
