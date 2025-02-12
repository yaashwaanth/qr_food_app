import { useQuery } from "@tanstack/react-query";




export function getStoreDetails(){
    return useQuery({
        queryKey: ['get-store'],
        queryFn: async() => {
          const response =  await fetch('/api/get-store')
          return response.json()
        }
    })
}