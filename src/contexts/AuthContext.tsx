// import { useLocalStorage } from "@mantine/hooks";
import { createContext, ReactNode, useState } from "react";
import supabase from "../supabaseClient";
import { useNavigate } from "react-router";
// import { useNavigate } from "react-router";

export const AuthContext = createContext<any>({});
const AuthContextProvider = AuthContext.Provider;

/**
 * Content of Auth Provider
 * Gives the app access to the propers in the "value" object of return statement
 */
export default function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  // const isLoggedIn = Boolean(false);
  // const isLoggedIn = false;
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<Record<string, any>>();

  const getUser = async (email: string | undefined) => {
    const response = await supabase.from("Users").select().eq("email", email);
    // console.log('%c/// response', 'color:tomato', response);
    if (response.data) setUser(response.data?.[0]);
  }

  async function login(email: string, password: string) {
    const response = await supabase.auth.signInWithPassword({
      email, password
    });
    // console.log('%c///> response', 'color:limegreen', response)
    if (response?.data?.user?.aud === "authenticated") {
      setIsLoggedIn(true);
      getUser(response?.data?.user?.email);
      navigate("/home");
    }
  };

  async function logout() {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <AuthContextProvider value={{ isLoggedIn, login, logout, user }}>
      <>{children}</>
    </AuthContextProvider>
  )
}