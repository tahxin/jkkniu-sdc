import { Problem } from "@/data/problems";
import { TestResult } from "./page";
import { Terminal, CheckCircle2, XCircle } from "lucide-react";

interface TestResultsProps {
  results: TestResult[] | null;
  problem: Problem;
}

export function TestResults({ results, problem }: TestResultsProps) {
  if (!results) {
    return (
      <div className="flex-1 flex flex-col p-4 bg-muted/10">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-border">
          <h3 className="text-sm font-bold flex items-center gap-2 text-primary border-b-2 border-primary pb-2 -mb-[10px]">
            <Terminal className="w-4 h-4" />
            Test Results
          </h3>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
          <Terminal className="w-8 h-8 mb-2 opacity-30" />
          <p className="text-sm text-center">Run your code to see actual results here</p>
        </div>
      </div>
    );
  }

  const passedCount = results.filter(r => r.passed).length;
  const totalCount = results.length;
  const allPassed = passedCount === totalCount;

  return (
    <div className="flex flex-col h-full bg-muted/10">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card">
        <h3 className="text-sm font-bold flex items-center gap-2 text-primary border-b-2 border-primary pb-[11px] -mb-[13px]">
          <Terminal className="w-4 h-4" />
          Test Results
        </h3>
        <div className="text-xs font-semibold px-2 py-1 rounded-full bg-background border border-border">
          <span className={allPassed ? "text-green-500" : "text-destructive"}>
            {passedCount} / {totalCount} Passed
          </span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
        {results.map((result, idx) => (
          <div 
            key={idx} 
            className={\`p-4 rounded-lg border \${
              result.passed 
                ? 'border-green-500/30 bg-green-500/5' 
                : 'border-destructive/30 bg-destructive/5'
            }\`}
          >
            <div className="flex items-center gap-2 mb-3">
              {result.passed ? (
                <CheckCircle2 className="w-4 h-4 text-green-500" />
              ) : (
                <XCircle className="w-4 h-4 text-destructive" />
              )}
              <span className={\`text-sm font-bold \${result.passed ? 'text-green-500' : 'text-destructive'}\`}>
                Test Case {idx + 1}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="space-y-1.5">
                <p className="text-muted-foreground font-semibold uppercase text-[10px] tracking-wider">Input:</p>
                <div className="text-foreground bg-background p-2 rounded-md border border-border break-all">
                  {problem.functionName}({result.testCase.input.map(i => JSON.stringify(i)).join(', ')})
                </div>
              </div>
              
              <div className="space-y-1.5">
                <p className="text-muted-foreground font-semibold uppercase text-[10px] tracking-wider">Expected:</p>
                <div className="text-foreground bg-background p-2 rounded-md border border-border break-all">
                  {JSON.stringify(result.testCase.expected)}
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-border/50">
              <div className="space-y-1.5 text-xs font-mono">
                <p className="text-muted-foreground font-semibold uppercase text-[10px] tracking-wider">Actual Output:</p>
                <div className={\`p-2 rounded-md border break-all \${
                  result.error 
                    ? 'bg-destructive/10 border-destructive/20 text-destructive' 
                    : 'bg-background border-border text-foreground'
                }\`}>
                  {result.error ? \`Error: \${result.error}\` : result.actualOutput}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
