import { API_URL, IBlog, IComment } from "@/types/common";
import axios from "axios";
import { useEffect, useState } from "react";

const useBlog = (id?:number | string) => {
    const [dataBlog,setDataBlog] = useState<IBlog[]>()
    const [dataDetailBlog,setDataDetailBlog] = useState<IBlog>()
    const [dataCommentDetailBlog, setDataCommentDetailBlog] = useState<IComment[]>()

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/post`)
      if(response){
        setDataBlog(response?.data?.posts);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleDetailBlog = async (id: number | string) => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/post/${id}`)
      if(response){
       setDataDetailBlog(response?.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  const fetchCommentDetailBlog = async() => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/comment/by-post/{postId}?postId=${id}`)
      
      if(response) {
        setDataCommentDetailBlog(response?.data?.comments)
      }
    } catch (error) {
      console.log(error)
    }
}
 
  useEffect(() => {
    fetchBlog();
  },[])

  useEffect(() => {
    if(id){
      handleDetailBlog(id)
      fetchCommentDetailBlog()
    }
  },[id])
 
  return {
    dataBlog, 
    fetchBlog,
    handleDetailBlog,
    dataDetailBlog,
    dataCommentDetailBlog,
  }
}

export default useBlog