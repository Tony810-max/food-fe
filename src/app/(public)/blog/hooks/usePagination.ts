import { API_URL, metaComment } from "@/types/common"
import axios from "axios"
import { useParams, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import useBlog from "./useBlog"

const usePagination = () => {
    const [metaComment, setMetaComment] = useState<metaComment>()  
    const {valueComment} = useBlog()
    console.log("valueComment",valueComment)
    const [totalItems,setTotalItems] = useState<number>()
    const [totalPages,setTotalPages] = useState<number | undefined>()
    const idBlog = useParams<{id: string}>()?.id
    const searchParam = useSearchParams()
    const search = searchParam?.get('page')
    console.log(totalPages)
    console.log("totalItems", totalItems)

    const fetchMetaComment = async() => {
        try {
           const response = await axios.get(`${API_URL}/api/v1/comment/by-post/${idBlog}?postId=${idBlog}&page=${search}&limit=4`)
           if(response) {
            console.log(response?.data?.meta)
             setTotalPages(response?.data?.meta?.totalPages)
             setMetaComment(response?.data?.meta)
             setTotalItems(response?.data?.meta?.totalItems)
          }
         } catch (error) {
           console.log(error)
         }
       }

       useEffect(() => {
        fetchMetaComment()
       },[])

    return {
        fetchMetaComment,
        metaComment,
        totalItems
    }
}

export default usePagination