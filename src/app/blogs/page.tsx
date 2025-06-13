'use client';
import React from 'react'
import { useEffect ,useState} from 'react'
import BlogCard from '@/components/BlogCard'
import { Blog } from '@/types/blogs'

export default function Blogs() {
  const [blogs,setBlogs]=useState<Blog[]>([]);
  useEffect(()=>{
    const stored=localStorage.getItem('blogs');
    if(stored) {
      setBlogs(JSON.parse(stored));
    }
  },[])

  return (

    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-4xl font-bold mt-8 mb-4 underline'>Blogs</h1>
      <div >
        {blogs.length === 0 && <p>No blogs found</p>}
        {
          blogs.map((blog)=>(
            <BlogCard key={blog.id} blog={blog}/>
          ))
        }
      </div>
    </div>
  )
}
