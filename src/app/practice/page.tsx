"use client";

import { useState } from "react";
import { problems, Problem, TestCase } from "@/data/problems";
import { Sidebar } from "./Sidebar";
import { ProblemDescription } from "./ProblemDescription";
import { CodeEditor } from "./CodeEditor";
import { TestResults } from "./TestResults";

export type TestResult = {
  testCase: TestCase;
  passed: boolean;
  actualOutput: string;
  error?: string;
};

export default function PracticePage() {
  const [activeProblemId, setActiveProblemId] = useState<number>(problems[0].id);
  const [userCode, setUserCode] = useState<Record<number, string>>({});
  const [testResults, setTestResults] = useState<Record<number, TestResult[]>>({});

  const activeProblem = problems.find((p) => p.id === activeProblemId) || problems[0];
  const currentCode = userCode[activeProblemId] || activeProblem.starterCode;
  const currentResults = testResults[activeProblemId] || null;

  const handleCodeChange = (newCode: string) => {
    setUserCode((prev) => ({ ...prev, [activeProblemId]: newCode }));
  };

  const handleRunCode = () => {
    const results: TestResult[] = [];
    
    activeProblem.testCases.forEach((testCase) => {
      try {
        // We use new Function to execute the user's code in the browser.
        // This is safe-ish because it's client-side and only affecting their own browser.
        // We append the function call at the end.
        
        let execCode = currentCode;
        
        // Special handling for problem 5 which has two functions
        if (activeProblem.id === 5) {
          execCode += \`\\n\\nreturn {
            mergeInventory: mergeInventory.apply(null, arguments[0]),
            highestScore: arguments[1] ? highestScore.apply(null, [arguments[1]]) : undefined
          };\`;
        } else {
          execCode += \`\\n\\nreturn \${activeProblem.functionName}.apply(null, arguments);\`;
        }

        const func = new Function(execCode);
        const actualOutput = func(...testCase.input);
        
        // Basic deep equality check for arrays/objects
        const isPassed = JSON.stringify(actualOutput) === JSON.stringify(testCase.expected);

        results.push({
          testCase,
          passed: isPassed,
          actualOutput: JSON.stringify(actualOutput)
        });
      } catch (error: any) {
        results.push({
          testCase,
          passed: false,
          actualOutput: "",
          error: error.message
        });
      }
    });

    setTestResults((prev) => ({ ...prev, [activeProblemId]: results }));
  };

  return (
    <div className="flex h-screen w-full flex-col font-sans overflow-hidden bg-background text-foreground">
      <header className="flex items-center justify-between px-6 py-3 border-b border-border bg-card shrink-0">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight">Code Validator</span>
          <span className="text-xs font-mono uppercase text-muted-foreground border border-border rounded-full px-2 py-0.5 ml-2">
            ES6 Practice
          </span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          problems={problems} 
          activeId={activeProblemId} 
          onSelect={setActiveProblemId} 
        />
        
        <div className="flex flex-1 overflow-hidden">
          {/* Left panel: Problem Description & Test Results */}
          <div className="w-1/2 flex flex-col border-r border-border h-full bg-card">
            <div className="flex-1 overflow-y-auto">
              <ProblemDescription problem={activeProblem} />
            </div>
            <div className="h-[40%] border-t border-border flex flex-col bg-background/50">
              <TestResults results={currentResults} problem={activeProblem} />
            </div>
          </div>

          {/* Right panel: Code Editor */}
          <div className="w-1/2 flex flex-col h-full bg-[#1e1e1e]">
            <CodeEditor 
              code={currentCode} 
              onChange={handleCodeChange} 
              onRun={handleRunCode}
              problem={activeProblem}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
