import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { commentContext } from './CommentDetailBlog'
import useBlog from '../../hooks/useBlog';

interface formUpdate{
    id: number;
    onSetOpen: (value: boolean) => void;
}

const schema = yup
  .object()
  .shape({
    comment: yup.string().required(),
  })
  .required();

const FormUpdateDetailBlog:React.FC<formUpdate> = ({id, onSetOpen}) => {
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
      });
      const {handleUpdateComment} = useBlog()
      const comment = useContext(commentContext)
      
  return (
    <form className="grid gap-4 py-4" 
    onSubmit={handleSubmit((data) => handleUpdateComment(data, id, onSetOpen))}>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="name" className="text-right">
        Comment
      </Label>
      <Input
        id="name"
        placeholder={comment}
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