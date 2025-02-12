'use client'
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Switch } from "@/components/ui/switch"
import { getStoreDetails } from './action';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';


const ProfileForm = () => {

    const {data,isLoading,error} = getStoreDetails()
    const [edit,setEdit] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [logo,setLogo] = useState<File|undefined>(undefined)
    const [formData, setFormData] = useState({
        name: "",
        tables: "",
        openingTime: "",
        closingTime: "",
        location: "",
        logo: ""
      });

     console.log("lunk ka ",imagePreview);
     
       // Handle Text Inputs
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
        };

         const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
              setLogo(file)
              const imageUrl = URL.createObjectURL(file);
              setImagePreview(imageUrl);
            }
          };

          const handleSubmit = () => {

          }

          
          useEffect(() => {
            if (data) {
                setFormData({
                    name: data.store.name || "",
                    tables: data.store.tables || "",
                    openingTime: data.store.openTime || "",
                    closingTime: data.store.closingTime || "",
                    location: data.store.location || "",
                    logo: data.store.logo || ""
                });
                setImagePreview(data.store.logo)
                console.log("lunkssss",data.store.logo);
                
            }
        }, [data]);
 
    
  return (
   <div className='w-full'>
      {
        isLoading ? <Loader2 size={20} className='animate-spin'/> :

        <form onSubmit={handleSubmit} className=''>
      <div className='flex w-full justify-end mb-7 gap-5'>
    <p className='font-medium'>Edit Store</p><Switch checked={edit} onCheckedChange={() =>setEdit(!edit)}/>
    </div>
      <Card className="sm:w-96 w-80 mx-auto mb-10">
        <CardHeader>
          <CardTitle className="text-2xl">Create Store</CardTitle>
          <CardDescription className="text-sm font-bold">
            Tell us about your store
          </CardDescription>
        </CardHeader>

        {imagePreview && (
          <div className="mt-2 flex justify-center">
            {/* <Image
              src={imagePreview}
              alt="Logo Preview"
              className="w-32 h-32 object-cover rounded-full border"
              width={32}
              height={32}
              
            /> */}
            <img src={`${imagePreview}`} alt='logo' className='rounded-full object-cover w-28 h-28' />
          </div>
        )}


        {/* Name Input */}
        <CardContent>
          <div className="flex flex-col">
            <label className="text-zinc-800 text-sm font-bold">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name of the store"
              className="border-2 rounded-sm p-1"
              required
              disabled={!edit}
            />
          </div>
        </CardContent>

        {/* Tables Input */}
        <CardContent>
          <div className="flex flex-col">
            <label className="text-zinc-800 text-sm font-bold">Tables</label>
            <input
              name="tables"
              value={formData.tables}
              onChange={handleInputChange}
              type="number"
              placeholder="Number of Tables..."
              className="border-2 rounded-sm p-1"
              required
              disabled={!edit}
            />
          </div>
        </CardContent>

        {/* Opening Time */}
        <CardContent>
          <div className="flex flex-col">
            <label className="text-zinc-800 text-sm font-bold">
              Opening Time
            </label>
            <input
              name="openingTime"
              value={formData.openingTime}
              onChange={handleInputChange}
              type="time"
              className="border-2 rounded-sm p-1 select-none outline-none"
              required
              disabled={!edit}
            />
          </div>
        </CardContent>

        {/* Closing Time */}
        <CardContent>
          <div className="flex flex-col">
            <label className="text-zinc-800 text-sm font-bold">
              Closing Time
            </label>
            <input
              name="closingTime"
              value={formData.closingTime}
              onChange={handleInputChange}
              type="time"
              className="border-2 rounded-sm p-1 select-none outline-none"
              required
              disabled={!edit}
            />
          </div>
        </CardContent>

        {/* Location */}
        <CardContent>
          <div className="flex flex-col">
            <label className="text-zinc-800 text-sm font-bold">Location</label>
            <input
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="border-2 rounded-sm p-1 select-none outline-none"
              required
              disabled={!edit}
            />
          </div>
        </CardContent>

        {/* Logo Upload */}
        <CardContent>
          <div className="flex flex-col">
            <label className="text-zinc-800 text-sm font-bold mb-2">Logo</label>

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/jpeg,image/png,image/jpg"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
              disabled={!edit}
              
            />

            {/* Styled Button (Label for Hidden Input) */}
            <label
              htmlFor="fileInput"
              className="cursor-pointer px-4 py-2 bg-blue-600 text-white font-semibold rounded-md text-center hover:bg-blue-700 transition-all"
            >
              Upload Logo
            </label>
          </div>
        </CardContent>

        {/* Submit Button */}
        <CardFooter>
          <Button type="submit" className="w-full" disabled={!edit}>
            Update
          </Button>
        </CardFooter>
      </Card>
    </form>
      }
     
   </div>
  )
}

export default ProfileForm