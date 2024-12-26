
import { useEffect, useState } from "react";
import { IBook } from "../helpers/types";
import { deleteBook, getAllBooks } from "../helpers/api";
import { Link } from "react-router-dom";

export const BookList = () => {
    const [books, setBooks] = useState<IBook[]>([]);
    const[modal,setModal]=useState(false)
    const [bookToDelete, setBookToDelete] = useState<IBook | null>(null)

    useEffect(() => {
        getAllBooks().then((response) => setBooks(response));
    }, []);
    const openModal=(book:IBook)=>{
        setModal(true)
        setBookToDelete(book)


    }
    const closeModal=()=>{
        setModal(false)
        setBookToDelete(null)
    }
    const handleDelete = async () => {
        if (bookToDelete) {
            await deleteBook(bookToDelete.id);  
            setBooks(books.filter((book) => book.id !== bookToDelete.id));
            closeModal();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Books</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {books.map((book) => (
                        <div key={book.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={book.imageUrl || "https://via.placeholder.com/150"}
                                alt={book.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-gray-800 mb-2">{book.title}</h2>
                                <p className="text-gray-600 mb-4">Pages: {book.pages}</p>
                                <Link
                                    to={`/book/details/${book.id}`}
                                    className="text-blue-500 hover:underline"
                                >
                                     Details
                                </Link>
                                <button
                                onClick={()=>openModal(book)}
                                >Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {modal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h3 className="text-xl font-semibold text-gray-800">you want to delete this book?</h3>
                        <div className="mt-4 flex justify-between">
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                            >
                                Yes
                            </button>
                            <button
                                onClick={closeModal}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
