export interface IBook{
    id:number,
    title:string,
    pages:number,
    imageUrl:string,
    authorId:number
}
export interface IAuthor{
    id:string,
    name:string,
    surname:string
}
export type InputBook=Omit<IBook, "id">
export type InputAuthor=Omit<IAuthor, "id">