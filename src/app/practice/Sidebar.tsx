import { Problem } from "@/data/problems";
import { CheckCircle2, ChevronRight, TerminalSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  problems: Problem[];
  activeId: number;
  onSelect: (id: number) => void;
}

export function Sidebar({ problems, activeId, onSelect }: SidebarProps) {
  return (
    <aside className="w-64 h-full bg-card border-r border-border flex flex-col shrink-0">
      <div className="p-4 border-b border-border bg-muted/20">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            <TerminalSquare className="w-4 h-4" />
            Problems
          </h2>
          <span className="text-xs font-semibold">{problems.length}</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {problems.map((problem) => {
          const isActive = problem.id === activeId;
          return (
            <button
              key={problem.id}
              onClick={() => onSelect(problem.id)}
              className={cn(
                "w-full text-left p-4 border-b border-border transition-colors group relative",
                isActive 
                  ? "bg-accent border-l-4 border-l-primary" 
                  : "hover:bg-accent/50 border-l-4 border-l-transparent"
              )}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="block text-xs font-mono text-muted-foreground mb-1">
                    Problem {problem.id}
                  </span>
                  <h3 className={cn(
                    "font-medium text-sm",
                    isActive ? "text-foreground font-semibold" : "text-muted-foreground group-hover:text-foreground"
                  )}>
                    {problem.title}
                  </h3>
                </div>
                {isActive && <ChevronRight className="w-4 h-4 text-primary mt-3" />}
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
