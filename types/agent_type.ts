import { Id } from "@/convex/_generated/dataModel";

export type AgentType = {
  _id: Id<"AgentTable">;
  _creationTime: number;
  config?: string;
  name: string;
  agentId: string;
  published: boolean;
  userId: Id<"UserTable">;
};
