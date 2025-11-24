"use client";
import { UserDetailContext } from "@/context/UserDetailContext";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect, useState } from "react";

export const Provider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { user } = useUser();
  const createUser = useMutation(api.user.CreateNewUser);
  const [userDetail, setUserDetail] = useState<any>(null);
  
  const CreateAndGetUser = async () => {
    if (user) {
      const result = await createUser({
        name: user.fullName ?? "",
        email: user.primaryEmailAddress?.emailAddress ?? "",
      });
      setUserDetail(result);
    //   return result;
    }
  };
  
  useEffect(() => {
    if (user) {
      Promise.resolve().then(() => CreateAndGetUser());
    }
  }, [user]);
  
  return (
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
      {children}
    </UserDetailContext.Provider>
  );
};
