import { Handle, Position } from "@xyflow/react"
import { MousePointer } from "lucide-react"

const AgentNode = () => {
  return (
    <div className="bg-white p-2 rounded-2xl border">
        <div className="flex gap-2 items-center">
            <MousePointer className="p-2 rounded-lg size-8 bg-green-100"/>
            <h2>Agent</h2>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    </div>
  )
}

export default AgentNode