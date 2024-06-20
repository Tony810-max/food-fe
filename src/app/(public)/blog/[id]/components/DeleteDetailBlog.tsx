import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Trash2 } from 'lucide-react';
import useBlog from '../../hooks/useBlog';

interface deleteDetailBlog {
  id: number
}

const DeleteDetailBlog:React.FC<deleteDetailBlog> = ({id}) => {
  const {handleDeleteComment} = useBlog()
  
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
                <AlertDialogAction onClick={() => handleDeleteComment(id)}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
      </AlertDialog>
  )
}

export default DeleteDetailBlog