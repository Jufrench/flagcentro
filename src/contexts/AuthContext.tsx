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

  async function login(email: string, password: string) {
    const response = await supabase.auth.signInWithPassword({
      email, password
    });
    console.log('///> response', response)
    if (response?.data?.user?.aud === "authenticated") {
      setIsLoggedIn(true);
      setUser(response.data.user);
      navigate("/home");
    }
  };

  // function logout() {
  //   setStoredUser(null);
  //   navigate("/login");
  // };

  return (
    <AuthContextProvider value={{ isLoggedIn, login, user }}>
      <>{children}</>
    </AuthContextProvider>
  )
}