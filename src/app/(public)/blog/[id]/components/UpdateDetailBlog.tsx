import React, { useState } from 'react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Pencil } from 'lucide-react';
import FormUpdateDetailBlog from './FormUpdateDetailBlog';

interface updateProps{ 
    id: number
}

const UpdateDetailBlog:React.FC<updateProps> = ({id}) => {
  const [open,setOpen] = useState<boolean>(false)
   return (
    <Dialog open={open} onOpenChange={setOpen}>
     <DialogTrigger asChild>
        <Pencil className='cursor-pointer hover:opacity-70'/>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
           <DialogHeader>
                  <DialogTitle>Edit comment</DialogTitle>
                  <DialogDescription>
                    Make changes to your comment here. Click save when you are done.
            </DialogDescription>
             </DialogHeader>
            <FormUpdateDetailBlog id={id}  onSetOpen={setOpen}/>
            
     </DialogContent>
    </Dialog>
  )
}

export default UpdateDetailBlog