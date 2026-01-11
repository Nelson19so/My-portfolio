import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightCode = (code: string, lang: string) => {
    if (!code) return code;

    const keywords: Record<string, string[]> = {
      javascript: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'export', 'from', 'async', 'await', 'try', 'catch', 'new', 'this'],
      html: ['DOCTYPE', 'html', 'head', 'body', 'div', 'span', 'a', 'img', 'link', 'script', 'style', 'meta', 'title'],
      css: ['display', 'position', 'color', 'background', 'margin', 'padding', 'border', 'width', 'height', 'flex', 'grid']
    };

    let highlighted = code;

    // Highlight strings
    highlighted = highlighted.replace(/(['"`])(.*?)\1/g, '<span class="text-green-400">$1$2$1</span>');

    // Highlight comments
    highlighted = highlighted.replace(/(\/\/.*$)/gm, '<span class="text-gray-500 italic">$1</span>');
    highlighted = highlighted.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-gray-500 italic">$1</span>');

    // Highlight numbers
    highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="text-purple-400">$1</span>');

    // Highlight keywords
    const langKeywords = keywords[lang] || [];
    langKeywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlighted = highlighted.replace(regex, `<span class="text-blue-400">${keyword}</span>`);
    });

    // Highlight functions
    highlighted = highlighted.replace(/\b([a-zA-Z_]\w*)\s*\(/g, '<span class="text-yellow-400">$1</span>(');

    return highlighted;
  };

  return (
    <div className="relative group my-6">
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={handleCopy}
          className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto border border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm text-slate-400 ml-2">{language}</span>
        </div>
        <pre className="text-sm leading-relaxed">
          <code
            className="text-slate-300 font-mono"
            dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }}
          />
        </pre>
      </div>
    </div>
  );
}
