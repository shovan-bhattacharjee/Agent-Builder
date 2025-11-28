"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound  } from "lucide-react";

const AppHeader = () => {
    const {isLoaded} = useUser()
  return (
    <div className="w-full p-4 shadow-xs flex items-center justify-end bg-sidebar border-b">
        {
            !isLoaded && <CircleUserRound className="size-7" />
        }
      <UserButton />
    </div>
  );
};

export default AppHeader;
