'use client'

import { useToast } from "@/hooks/use-toast"

export const toastHelper = () => {
    const { toast } = useToast()
    toast({
        title: "Scheduled: Catch up",
        description: "Friday, February 10, 2023 at 5:57 PM",
      })
}