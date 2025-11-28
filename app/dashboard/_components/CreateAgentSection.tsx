"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";

const CreateAgentSection = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div className="space-y-2 flex flex-col justify-center items-center mt-24">
      <h2 className="font-semibold text-xl">Create AI Agent</h2>
      <p className="text-lg">
        Build a custom AI Agent workflow with logic and tools
      </p>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button size={"lg"} onClick={() => setOpenDialog(true)}>
            <Plus />
            Create
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter Agent Name</DialogTitle>
            <DialogDescription>
              <Input placeholder="Agent Name" />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Create Agent</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateAgentSection;
