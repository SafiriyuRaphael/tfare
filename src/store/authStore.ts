import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IUserInfo } from "../types";


type UserType = { userData: IUserInfo | null, token: string }

type AuthStoreType = { user: UserType | null, isAuthenticated: boolean, logOut: () => void, setUser: (user: UserType) => void }

export const authStore = create(persist<AuthStoreType>((set) => ({
    user: { userData: null, token: "" },
    isAuthenticated: false,
    setUser: (user) => set({ user, isAuthenticated: true }),
    logOut: () => set({ user: { userData: null, token: "" }, isAuthenticated: false, })

}), { name: "user-data" }))