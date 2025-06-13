'use client'
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import { Blog } from "@/types/blogs"
import { v4 as uuidv4 } from "uuid"
import { useRouter } from "next/navigation"

export default function BlogForm(){
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const [category,setCategory]=useState('');
    const [author,setAuthor]=useState('');
    const router=useRouter();
    const handleSubmit=()=>{
        const newBlog:Blog={
            id:uuidv4(),
            title,
            content,
            category,
            author,
            comments:[],
        };
        const storage=localStorage.getItem('blogs');
        let blogs=[];
        if(storage){
             blogs=JSON.parse(storage)
        }
        blogs.unshift(newBlog);
        localStorage.setItem('blogs',JSON.stringify(blogs));
        router.push('blogs');
    }

    return(
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow space-y-4">
            <Input
            className="mb-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <Input
            className="mb-2"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            />
            <Input
            className="mb-2"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            />
            <Textarea
            className="mb-4 min-h-[170px]"
            placeholder="Enter the content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
            <Button
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
            onClick={handleSubmit}
            >
            Create Blog
            </Button>
        </div>
    )
}