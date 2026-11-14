import { Problem } from "@/data/problems";
import Editor from "@monaco-editor/react";
import { Play, RotateCcw, Code2 } from "lucide-react";

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  onRun: () => void;
  problem: Problem;
}

export function CodeEditor({ code, onChange, onRun, problem }: CodeEditorProps) {
  return (
    <div className="flex flex-col h-full bg-[#1e1e1e]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#2d2d2d] bg-[#1e1e1e]">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
          <Code2 className="w-4 h-4 text-blue-400" />
          {problem.functionName}.js
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onChange(problem.starterCode)}
            className="text-xs flex items-center gap-1 hover:text-green-400 cursor-pointer text-gray-400 transition-colors"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
          <button 
            onClick={onRun}
            className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-7 px-3"
          >
            <Play className="w-3 h-3 fill-current" /> Run Code
          </button>
        </div>
      </div>
      
      <div className="flex-1 w-full h-full relative">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          value={code}
          onChange={(value) => onChange(value || "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineHeight: 24,
            padding: { top: 16 },
            scrollBeyondLastLine: false,
            smoothScrolling: true,
            cursorBlinking: "smooth",
            fontFamily: "var(--font-mono)",
            formatOnPaste: true,
          }}
        />
      </div>
    </div>
  );
}
