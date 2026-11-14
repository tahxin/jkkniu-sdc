import { Problem } from "@/data/problems";
import { Zap } from "lucide-react";

interface ProblemDescriptionProps {
  problem: Problem;
}

export function ProblemDescription({ problem }: ProblemDescriptionProps) {
  // Simple markdown-like parser for description
  const parseDescription = (text: string) => {
    return text.split('\\n').map((line, i) => {
      // Bold text
      let parsed = line.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
      // Inline code
      parsed = parsed.replace(/\`(.*?)\`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm text-primary font-mono">$1</code>');
      
      if (line.trim().startsWith('- ')) {
        return <li key={i} dangerouslySetInnerHTML={{ __html: parsed.substring(2) }} className="ml-4 list-disc mb-1" />;
      }
      
      if (line.trim() === '') return <br key={i} />;
      
      return <p key={i} dangerouslySetInnerHTML={{ __html: parsed }} className="mb-2" />;
    });
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl">
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          Problem {problem.id}: {problem.title}
          <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500/20" />
        </h2>
        
        <div className="text-muted-foreground leading-relaxed mb-6 bg-card rounded-lg p-1">
          {parseDescription(problem.description)}
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            Test Cases Example
          </h3>
          <div className="space-y-3">
            {problem.testCases.map((tc, idx) => (
              <div key={idx} className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
                <div className="font-semibold text-muted-foreground bg-muted/50 px-3 py-2 text-sm border-b border-border">
                  Example {idx + 1}
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Input:</div>
                    <div className="text-foreground font-mono text-sm bg-muted/30 px-3 py-2 rounded-md border border-border">
                      {problem.functionName}({tc.input.map(i => JSON.stringify(i)).join(', ')})
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Expected Output:</div>
                    <div className="text-foreground font-mono text-sm bg-green-500/10 px-3 py-2 rounded-md border border-green-500/20 text-green-700 dark:text-green-400">
                      {JSON.stringify(tc.expected)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
