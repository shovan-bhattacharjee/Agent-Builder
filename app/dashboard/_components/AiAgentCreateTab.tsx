import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyAgents from "./MyAgents";
const AiAgentCreateTab = () => {
  return (
    <div className="px-10 md:px-24 lg:px-32 mt-14 md:mt-20">
      <Tabs defaultValue="myagents" className="w-1/2">
        <TabsList>
          <TabsTrigger value="myagents">My Agents</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>
        <TabsContent value="myagents">
          <MyAgents />
        </TabsContent>
        <TabsContent value="templates">Templates</TabsContent>
      </Tabs>
    </div>
  );
};

export default AiAgentCreateTab;
