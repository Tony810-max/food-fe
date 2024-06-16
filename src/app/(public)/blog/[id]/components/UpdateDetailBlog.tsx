import React, { useContext } from 'react'

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pencil } from 'lucide-react';
import axios from 'axios';
import { API_URL } from '@/types/common';
import FormUpdateDetailBlog from './FormUpdateDetailBlog';

interface updateProps{ 
    id:number
}

const UpdateDetailBlog:React.FC<updateProps> = ({id}) => {
   
       
  return (
    <Dialog>
     <DialogTrigger asChild>
        <Pencil className='cursor-pointer hover:opacity-70'/>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
           <DialogHeader>
                  <DialogTitle>Edit comment</DialogTitle>
                  <DialogDescription>
                    Make changes to your comment here. Click save when you're done.
            </DialogDescription>
             </DialogHeader>
            <FormUpdateDetailBlog id={id} />
            
     </DialogContent>
    </Dialog>
  )
}

export default UpdateDetailBlog