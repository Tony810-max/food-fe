import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Trash2 } from 'lucide-react';
import axios from 'axios';
import { API_URL } from '@/types/common';
import { toast } from 'react-toastify';

interface deleteDetailBlog {
  id: number
}

const DeleteDetailBlog:React.FC<deleteDetailBlog> = ({id}) => {

  const handleDeleteComment = async() => {
    try {
        const accessToken = JSON.parse(localStorage.getItem('accessToken')!)
        const response = await axios.delete(`${API_URL}/api/v1/comment/${id}`,{ headers: { Authorization: `Bearer ${accessToken}` } })
        if(response){
          toast.success('Comment deleted...!!!')
                  }
      } catch (error) {
        console.log(error)
    }
}
  return (
    <AlertDialog>
            <AlertDialogTrigger asChild>
              <Trash2 color='#f53e32' className='cursor-pointer hover:opacity-70' />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteComment}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
  )
}

export default DeleteDetailBlog