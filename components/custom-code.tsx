"use client";

import { Check, Clipboard } from "lucide-react";
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
    <div className=" gap-0 relative rounded-lg bg-card showLineNumbers border overflow-x-auto py-1 text-white">
      <div className="flex absolute right-2 top-2  justify-between items-center ">
        <button
          type="button"
          className="text-gray-300 bg-transparent border rounded-md backdrop-blur-md p-2 hover:text-input"
          onClick={handleCopy}
        >
          {copied ? <Check color="green" size={15} /> : <Clipboard size={20} />}
        </button>
      </div>
      <pre>
        <code
          ref={codeRef}
          className={`${className} bg-card overflow-x-auto text-sm`}
        >
          {props.children}
        </code>
      </pre>
    </div>
  );
};

export default Code;
