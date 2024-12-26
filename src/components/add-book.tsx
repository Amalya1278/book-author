
import { useForm } from "react-hook-form";
import { IAuthor, InputBook } from "../helpers/types";
import { addNewBook, getAllBooks } from "../helpers/api";
import { useEffect, useState } from "react";
import data from "../assets/data.json";

export const AddBook = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<InputBook>();
    const [authors, setAuthors] = useState<IAuthor[]>([]);

    const handleAdd = async (data: InputBook) => {
        const books=await getAllBooks()
        const sameBooks=books.find((book)=>book.title==data.title)
        if(sameBooks){
            throw new Error("error")
        }
        else{
        await addNewBook(data);
        reset();
        }
    };
    useEffect(()=>{
   setAuthors(data.authors)
            
    },[])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Book</h2>
                <form onSubmit={handleSubmit(handleAdd)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            {...register("title", { required: "Please fill this field" })}
                            type="text"
                            className="w-full border px-4 py-2 rounded-lg"
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Pages</label>
                        <input
                            {...register("pages", { required: "Please fill this field", valueAsNumber: true })}
                            type="number"
                            className="w-full border px-4 py-2 rounded-lg"
                        />
                        {errors.pages && <p className="text-red-500 text-sm">{errors.pages.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            {...register("imageUrl", { required: "Please fill this field" })}
                            type="text"
                            className="w-full border px-4 py-2 rounded-lg"
                        />
                        {errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Author</label>
                        <select
                            {...register("authorId", { required: "Please select an author" })}
                            className="w-full border px-4 py-2 rounded-lg"
                        >
                            <option value=""></option>
                            {authors.map(author => (
                                <option key={author.id} value={author.id}>
                                    {author.name} {author.surname}
                                </option>
                            ))}
                        </select>
                        {errors.authorId && (
                            <p className="text-red-500 text-sm">{errors.authorId.message}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    >
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
};
