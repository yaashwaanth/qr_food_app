"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreateStore, GetSignedUrl } from "./action";
import { useRouter } from "next/navigation";



const StoreCreateForm = () => {
  const router = useRouter()
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

  // Handle Text Inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle File Upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogo(file)
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const computeSHA256 = async(file:File) => {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest("SHA-256",buffer)
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b)=> b.toString(16).padStart(2,"0")).join("");

    return hashHex;
  }

  // Handle Form Submission
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

   try {
    if(logo){

      const checksum = await computeSHA256(logo)
      const signedUrlResult = await GetSignedUrl(formData.name,formData.location,logo.type,logo.size,checksum)
      if(signedUrlResult.failure !== undefined){
        throw(new Error(signedUrlResult.failure))
      }

      await fetch(signedUrlResult.success?.url!,{
        method: "PUT",
        body: logo,
        headers: {
          "Content-Type": logo.type
        }
      })

      // setFormData((prev) => ({
      //   ...prev,
      //   logo: signedUrlResult.success?.url.split("?")[0],
      // }));

      const updatedFormData = {
        ...formData,
        logo: signedUrlResult.success?.url.split("?")[0],
      };

      console.log(formData,"form data....");
      
      const result = await CreateStore(updatedFormData);

      if(result.success == true) {
        // toaster

        // navigate
        router.push('/dashboard')

      }else{
        // toaster
      }
      
      // uploading image to aws
     }
    
   } catch (error) {
    console.log(error);
    return
    
   }finally{
    setFormData({
    name: "",
    tables: "",
    openingTime: "",
    closingTime: "",
    location: "",
    logo: ""
    })
    setLogo(undefined)
   }
    

    // await createStore(formData)
    // Form data can be sent to an API, for example:
    console.log("Submitting Data:");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-96 mb-10">
        <CardHeader>
          <CardTitle className="text-2xl">Create Store</CardTitle>
          <CardDescription className="text-sm font-bold">
            Tell us about your store
          </CardDescription>
        </CardHeader>

        {imagePreview && (
          <div className="mt-2 flex justify-center">
            <img
              src={imagePreview}
              alt="Logo Preview"
              className="w-32 h-32 object-cover rounded-full border"
            />
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
          <Button type="submit" className="w-full">
            Create
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default StoreCreateForm;
