
import { useForm } from "react-hook-form";
import { InputAuthor } from "../helpers/types";
import { addNewAuthor } from "../helpers/api";

export const AddAuthor = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<InputAuthor>();

    const handleAdd = async (data: InputAuthor) => {
        await addNewAuthor(data);
        reset();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Author</h2>
                <form onSubmit={handleSubmit(handleAdd)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            {...register("name", { required: "Please fill this field" })}
                            type="text"
                            className="w-full border px-4 py-2 rounded-lg"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Surname</label>
                        <input
                            {...register("surname", { required: "Please fill this field" })}
                            type="text"
                            className="w-full border px-4 py-2 rounded-lg"
                        />
                        {errors.surname && <p className="text-red-500 text-sm">{errors.surname.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    >
                        Add Author
                    </button>
                </form>
            </div>
        </div>
    );
};
