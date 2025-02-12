'use client'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"


export const queryClient = new QueryClient({
    defaultOptions:{
        queries: {staleTime:60000}
    }
})