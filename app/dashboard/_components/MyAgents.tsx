"use client";

import { UserDetailContext } from "@/context/UserDetailContext";
import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";
import { useContext, useEffect, useState } from "react";

const MyAgents = () => {
  const { userDetail } = useContext(UserDetailContext);
  const [agents, setAgents] = useState<any[]>([]);
  const convex = useConvex();
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
    <div>
      <h1 className="text-2xl font-bold mb-4">My Agents</h1>
      {agents.length === 0 ? (
        <p>No agents found. Create one to get started!</p>
      ) : (
        <ul>
          {agents.map((agent) => (
            <li key={agent.agentId}>{agent.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyAgents;
