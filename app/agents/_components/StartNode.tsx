import { Handle, Position } from "@xyflow/react"
import { Play } from "lucide-react"

const StartNode = () => {
  return (
    <div className="bg-white p-2 rounded-2xl border">
        <div className="flex gap-2 items-center">
            <Play className="p-2 rounded-lg size-8 bg-yellow-100"/>
            <h2>Start</h2>
            <Handle type="source" position={Position.Right} />
        </div>
    </div>
  )
}

export default StartNode