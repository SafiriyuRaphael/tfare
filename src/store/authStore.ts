import { create } from "zustand";
import { persist } from "zustand/middleware";


type UserType = { userData: string, token: string }

type AuthStoreType = { user: UserType | null, isAuthenticated: boolean, logOut: () => void, setUser: (user: UserType) => void }

export const authStore = create(persist<AuthStoreType>((set) => ({
    user: { userData: "", token: "" },
    isAuthenticated: false,
    setUser: (user) => set({ user }),
    logOut: () => set({ user: null, isAuthenticated: false })

}), { name: "user-data" }))