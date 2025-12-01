"use client";

import { Button } from "@/components/ui/button";
import { Loader2Icon, Plus } from "lucide-react";
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
import { useContext, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { UserDetailContext } from "@/context/UserDetailContext";

const CreateAgentSection = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const createAgentMutation = useMutation(api.agent.CreateAgent);
  const [agentName, setAgentName] = useState("");
  const [loading, setLoading] = useState(false);
  const { userDetail } = useContext(UserDetailContext);
  const router = useRouter();

  const handleCreateAgent = async () => {
    setLoading(true);
    const agentId = uuidv4();
    await createAgentMutation({
      agentId,
      name: agentName,
      userId: userDetail._id,
    });
    setOpenDialog(false);
    setLoading(false);
    router.push(`/agents/${agentId}`);
  };

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
              <Input
                placeholder="Agent Name"
                onChange={(e) => setAgentName(e.target.value)}
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer">
                Cancel
              </Button>
            </DialogClose>
            <Button
              disabled={loading}
              onClick={handleCreateAgent}
              className={`${
                loading ? "cursor-not-allowed " : "cursor-pointer"
              }`}
            >
              {loading && <Loader2Icon className="animate-spin" />}
              Create Agent
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateAgentSection;
