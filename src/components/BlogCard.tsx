'use client';
import { Blog } from "@/types/blogs"
import { Card,CardContent,CardTitle,CardDescription,CardHeader,CardFooter } from "./ui/card"
import Link from "next/link"
export default function BlogCard({blog}:{blog:Blog}){
    return(
        <div>
            <Card className="p-5 shadow-2xl shadow-green-500 mb-7 w-md">
                    <CardHeader>
                        <CardTitle>
                        <h1 className="text-3xl ">{blog.title}</h1>
                        </CardTitle>
                    </CardHeader>
                    <div className="flex justify-around">
                        <p className="text-3xl font-bold">content : </p>
                    </div>
                    <CardContent className="border-2 rounded-2xl p-7 h-70 overflow-y-scroll bg-neutral-200" >
                            {blog.content}
                    </CardContent>
                    <CardDescription className="flex justify-around">
                        <span ><p>Author : </p>{blog.author} </span>
                        <span><p>Category : </p>{blog.category}</span>
                    </CardDescription>
                    <div className="flex justify-end-safe">
                            <Link href={`/blogs/${blog.id}`} >
                        <CardFooter className="bg-green-600 hover:bg-green-300 rounded-md px-4 py-2 text-white max-w-fit active:scale-90 transition-transform">
                                view
                        </CardFooter>
                            </Link>
                    </div>
            </Card>
        </div>
    )
}