import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import { BookList } from "../components/book-list";
import { AddAuthor } from "../components/add-author";
import { AddBook } from "../components/add-book";
import { BookDetails } from "../components/book-details";

export const path=createBrowserRouter([
    {
        path:"",
        element:<Layout/>,
        children:[
            { path: "",element: <BookList /> },
                        {
                path: "add-author",
                element: <AddAuthor />,
            },
            {
                path: "add-book",
                element: <AddBook />,
            },
            { path: "book/details/:id", element: <BookDetails /> }
        ]
        
    }
])