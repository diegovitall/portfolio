import { useState, useEffect } from 'react';

interface TerminalLine {
  prompt: string;
  text: string;
  delay?: number;
}

interface TerminalProps {
  lines: TerminalLine[];
  loop?: boolean; // Add loop prop
}

export function Terminal({ lines, loop }: TerminalProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      if (loop) {
        const loopDelay = 4000; // Delay before restarting the loop (4 seconds)
        const timeout = setTimeout(() => {
          setCompletedLines([]);
          setCurrentLineIndex(0);
          setCurrentText('');
          setIsTyping(true);
        }, loopDelay);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        return;
      }
    }

    const currentLine = lines[currentLineIndex];
    const fullText = currentLine.text;
    const typingSpeed = 50;
    const lineDelay = currentLine.delay || 500;

    if (currentText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCompletedLines((prev) => [...prev, currentLine.prompt + currentText]);
        setCurrentText('');
        setCurrentLineIndex(currentLineIndex + 1);
      }, lineDelay);
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentLineIndex, lines]);

  return (
    <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden max-w-2xl w-full">
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-400 text-sm ml-2">terminal</span>
      </div>

      <div className="p-4 font-mono text-sm min-h-[200px]">
        {completedLines.map((line, index) => (
          <div key={index} className="mb-2">
            <span className="text-green-400">{line}</span>
          </div>
        ))}
        {currentLineIndex < lines.length && (
          <div className="flex items-center">
            <span className="text-green-400">{lines[currentLineIndex].prompt}</span>
            <span className="text-green-400">{currentText}</span>
            {isTyping && (
              <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
