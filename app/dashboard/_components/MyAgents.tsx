"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserDetailContext } from "@/context/UserDetailContext";
import { api } from "@/convex/_generated/api";
import { AgentType } from "@/types/agent_type";
import { useConvex } from "convex/react";
import { BrainCircuit } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { timeAgo } from "./../../../lib/helpers";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MyAgents = () => {
  const { userDetail } = useContext(UserDetailContext);
  const [agents, setAgents] = useState<AgentType[]>();
  const convex = useConvex();
  const router = useRouter();

  const getUserAgents = async () => {
    const fetchedAgents = await convex.mutation(api.agent.GetAgentsByUser, {
      userId: userDetail._id,
    });
    setAgents(fetchedAgents);
  };

  useEffect(() => {
    if (userDetail?._id) {
      Promise.resolve().then(() => getUserAgents());
    }
  }, [userDetail]);

  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold mb-4">My Agents</h1>
      {agents?.length === 0 ? (
        <p>No agents found. Create one to get started!</p>
      ) : (
        <div className="flex items-center gap-2 w-full flex-wrap pb-10">
          {agents?.map((agent) => (
            <Card key={agent._id} onClick={() => router.push(`/agents/${agent.agentId}`)} className="h-full cursor-pointer w-50 hover:shadow-lg transition-shadow">
              <CardContent className="w-full space-y-2">
                <div className="flex flex-row items-center gap-2">
                  <BrainCircuit className="size-5" />
                  <p className="text-lg font-medium">{agent.name}</p>
                </div>
                <div>
                  <p>{timeAgo(new Date(agent._creationTime).getTime())}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAgents;
