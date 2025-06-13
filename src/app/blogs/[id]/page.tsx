'use client'
import CommentSection from "@/components/CommentSection";
import { Blog } from "@/types/blogs";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
export default function BlogDetails(){
    const id=useParams().id as string;
    const [blog,setblog]=useState<Blog|null>(null);
    useEffect(()=>{
        const stored=localStorage.getItem('blogs')
        if(stored){
            const blogs=JSON.parse(stored);
            const found=blogs.find((b:Blog)=>b.id === id);
            setblog(found||null)
        }
    },[id]);
    const updateComments =(newComments:string[])=>{
        if(blog)setblog({...blog,comments:newComments});
    };
    if(!blog){
        return <div>
            Not found or Loading ...
        </div>
    }
    return(
        <div className="flex flex-col justify-center items-center-safe min-h-screen ">
            <h2 className="text-4xl">{blog?.title}</h2>
            <div>
                <p className="border-l-4 border-r-4 pl-2 pr-2 m-4 min-h-25">{blog?.content}</p>
                <p className=" flex justify-between p-5 mb-1">
                        <span className="ml-10 border-t-2 border-b-2 p-1.5 pr-11">
                            Author :  {blog?.author}
                        </span>
                        <span className="mr-10 border-t-2 border-b-2 pt-1.5 pb-1.5">
                            Category : {blog?.category}
                        </span>
                </p>
                <CommentSection blogId={blog?.id} comments={blog?.comments} onCommentAdded={updateComments}/>
            </div>
        </div>
    )
}