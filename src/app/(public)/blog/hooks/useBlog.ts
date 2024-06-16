import { API_URL, IBlog } from "@/types/common";
import axios from "axios";
import { useEffect, useState } from "react";

const useBlog = (id?:number | string) => {
    const [dataBlog,setDataBlog] = useState<IBlog[]>()
    const [dataDetailBlog,setDataDetailBlog] = useState<IBlog>()
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

  useEffect(() => {
    fetchBlog();
  },[])

  useEffect(() => {
    if(id){

      handleDetailBlog(id)
    }
  },[id])
  return {
    dataBlog, 
    fetchBlog,
    handleDetailBlog,
    dataDetailBlog,
  }
}

export default useBlog