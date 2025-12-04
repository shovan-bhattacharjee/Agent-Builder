"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, Code, GitBranchPlusIcon, Play } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="p-3 w-full flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <ChevronLeft
          onClick={() => router.back()}
          className="size-8 cursor-pointer"
        />
        <h2 className="text-xl font-medium">Agent Name</h2>
      </div>
      <div className="flex items-center gap-3">
        <Button variant={"ghost"} className="cursor-pointer">
          <Code /> Code
        </Button>
        <Button className="cursor-pointer">
          <Play /> Play
        </Button>
        <Button className="cursor-pointer">
          <GitBranchPlusIcon /> Deploy
        </Button>
      </div>
    </div>
  );
};

export default Header;
