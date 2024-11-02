import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Book from "../book/Book";

const Books = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch("./booksData.json")
        .then(res=>res.json())
        .then(data=>setBooks(data))
       
    },[])
    return (
        <div className="mt-5">
            <h4 className="text-center text-4xl font-semibold">Books {books.length}</h4>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    books.map((bok)=> <Book bok={bok}></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;