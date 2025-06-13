'use client'
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Blog } from "@/types/blogs";
export default function CommentSection({
    comments,
    blogId,
    onCommentAdded
}:{
    comments:string[],
    blogId:string,
    onCommentAdded:(newComments:string[]) =>void;

})
{
    const [newComment,setNewComment]=useState('');
    const handleCommentSection=()=>{
        if(!newComment.trim())return;
        const stored =localStorage.getItem('blogs');
        if(!stored)return;
        const blogs=(stored)?JSON.parse(stored):[];
        const updated=blogs.map((b:Blog)=>
        b.id===blogId ?{...b,comments:[newComment,...b.comments]}:b
        );
        localStorage.setItem('blogs',JSON.stringify(updated));
        onCommentAdded([newComment,...comments]);
        setNewComment('');
    };
    return(
        <div>
            <div className="ml-10 mr-10"><Textarea placeholder="add a comment" value={newComment} onChange={(e)=>setNewComment(e.target.value)}/></div>
            <Button className="ml-10 mt-20" onClick={handleCommentSection}>submit comment</Button>
            <div className="mt-10 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-start overflow-y-scroll h-32   bg-gray-100 rounded-md shadow p-4">
                    {
                        comments.map((cmt,i)=>
                        <div className=" mb-2 text-center " key={i}>{cmt}</div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}