import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateAgent = mutation({
  args: {
    agentId: v.string(),
    name: v.string(),
    userId: v.id("UserTable"),
  },
  handler: async (ctx, args) => {
    const agent = await ctx.db.insert("AgentTable", {
      name: args.name,
      agentId: args.agentId,
      published: false,
      userId: args.userId,
    });
    return agent;
  },
});

export const GetAgentsByUser = mutation({
  args: {
    userId: v.id("UserTable"),
  },
  handler: async (ctx, args) => {
    const agents = await ctx.db
      .query("AgentTable")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .order("desc")
      .collect();
    return agents;
  },
});
