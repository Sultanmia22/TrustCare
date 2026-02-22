'use client'
import { useSession } from "next-auth/react";

export const useUser = () => {
    const { data: session, status } = useSession();
    return {
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        isLoggedIn: status === "authenticated",
        isLoading: status === "loading",
    }
}