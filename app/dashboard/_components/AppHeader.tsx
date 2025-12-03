"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound  } from "lucide-react";

const AppHeader = () => {
    const {isLoaded} = useUser()
  return (
    <div className="p-4 shadow-xs flex items-center bg-sidebar border-b sticky top-0 w-full z-10 justify-end">
        {
            !isLoaded && <CircleUserRound className="size-7" />
        }
      <UserButton />
    </div>
  );
};

export default AppHeader;
