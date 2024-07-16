/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '@/types/common';
import { TextContext } from '@/contexts/useTextContext';
interface IFormProps {
  onSetOpen: (value: boolean) => void;
}

type formBlog = {
  title: string;
  description: string;
};

type addBlog = {
  title: string;
  description: string;
  images: string[];
};

const schema = yup
  .object()
  .shape({
    title: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

const FormCreateBlog: React.FC<IFormProps> = ({ onSetOpen }) => {
  const context: any = React.useContext(TextContext);
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const [fileImage, setFileImage] = React.useState<FileList>();
  const uploadImage = (files: FileList) => {
    const CLOUD_NAME = 'dehamgr2z';
    const PRESET_NAME = 'food-upload';
    const FOLDER_NAME = 'image_food';
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const uploadPromises = Array.from(files).map((files) => {
      const formData = new FormData();
      formData.append('file', files);
      formData.append('folder', FOLDER_NAME);
      formData.append('upload_preset', PRESET_NAME);
      return axios.post(api, formData).then((response) => response.data.url);
    });

    return Promise.all(uploadPromises);
  };

  const handleCreateNewBlog = async (data: formBlog) => {
    data;
    let images = [];
    if (fileImage) {
      images = await uploadImage(fileImage);
    }
    const blogData = {
      title: data?.title,
      description: data?.description,
      images: images,
    };
    await handleAddBlog(blogData);
  };

  const handleAddBlog = async (data: addBlog) => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('accessToken')!);
      if (!accessToken) return;
      const response = await axios.post(
        `${API_URL}/api/v1/post/create`,
        {
          title: data?.title,
          description: data?.description,
          images: data?.images,
        },
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );
      if (response) {
        toast.success('Create new blog successfully...!!!');
        context?.fetchBlog();
        onSetOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="grid gap-4 py-4"
      onSubmit={handleSubmit(handleCreateNewBlog)}
    >
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="title" className="text-right font-sans">
          Title
        </Label>
        <Input id="title" className="col-span-3" {...register('title')} />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="description" className="text-right font-sans">
          Description
        </Label>
        <Input
          id="description"
          className="col-span-3"
          {...register('description')}
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="imgae" className="text-right font-sans capitalize">
          choose image
        </Label>
        <Input
          type="file"
          id="username"
          accept="image/*"
          className="col-span-3"
          onChange={(e) => {
            const file = e.target.files;
            file && setFileImage(file);
          }}
          multiple={true}
        />
      </div>
      <Button
        type="submit"
        variant={'destructive'}
        className="font-sans text-base"
      >
        Create Blog
      </Button>
    </form>
  );
};

export default FormCreateBlog;
