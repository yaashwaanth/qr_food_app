"use client";

import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";


const CreateStoreModal = ({storelen}:{storelen: number}) => {
    const router = useRouter()


    const [open, setOpen] = useState(storelen==0 ? true : false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)}>Let's Go</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">Let's create your first store</DialogTitle>
                    <DialogDescription>
                       <Image src={require('@/assets/eat.png')} alt="some"/>
                    </DialogDescription>
                </DialogHeader>
                <Button className="text-sm font-semibold" onClick={() =>{
                    router.push('/configure/create-store')
                    setOpen(false)
                }}>Let's Go</Button>
            </DialogContent>
        </Dialog>
    );
};

export default CreateStoreModal;
