"use client";

import { Clipboard } from "lucide-react";
import React, { useRef, useState } from "react";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Code = (props: any) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  // Extract the language from the className
  const className = props.className || "";

  // Handle copy functionality
  const handleCopy = () => {
    if (codeRef.current) {
      const codeText = codeRef.current.innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      });
    }
  };

  return (
    <div className=" gap-0 rounded-lg bg-card showLineNumbers border overflow-x-auto p-4 text-white pb-6">
      <div className="flex justify-between items-center ">
        <div></div>
        <button
          type="button"
          className="text-gray-300 hover:text-white"
          onClick={handleCopy}
        >
          {copied ? "Copied!" : <Clipboard size={20} />}
        </button>
      </div>

      <code ref={codeRef} className={`${className} bg-card text-sm`}>
        {props.children}
      </code>
    </div>
  );
};

export default Code;
