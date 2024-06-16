import { Button } from '@/components/ui/button'
import { DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { API_URL } from '@/types/common'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify'

interface formUpdateProps{
    comment: string;
}

interface formUpdate{
    id: number;
}

const schema = yup
  .object()
  .shape({
    comment: yup.string().required(),
  })
  .required();

const FormUpdateDetailBlog:React.FC<formUpdate> = ({id}) => {
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
      });

      const handleUpdateComment = async(data: formUpdateProps) => {
      
        try {
            const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
            const response = await axios.patch(`${API_URL}/api/v1/comment/${id}`,{
                content: data?.comment,
                postId: id,
              },{ headers: { Authorization: `Bearer ${accessToken}` } })
        if(response) {
            toast.success('Updated comment')
        }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <form className="grid gap-4 py-4" 
    onSubmit={handleSubmit(handleUpdateComment)}>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="name" className="text-right">
        Comment
      </Label>
      <Input
        id="name"
        defaultValue=""
        className="col-span-3"
        {...register('comment')}
      />
    </div>
    
    <div className='flex justify-end'>
    <Button type="submit" variant={"destructive"}>Save</Button>
    </div>
    </form>


  )
}

export default FormUpdateDetailBlog