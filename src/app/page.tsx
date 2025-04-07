"use client";

import Image from 'next/image';
import { ReactFlow } from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: 'algorithm', position: { x: 300, y: 100 }, data: { label: 'Algorithm' } },
  { id: 'frontend', position: { x: 200, y: 200 }, data: { label: 'Frontend' } },
  { id: 'backend', position: { x: 400, y: 200 }, data: { label: 'Backend' } },
  { id: 'devops', position: { x: 300, y: 300 }, data: { label: 'Devops' } },
  { id: 'system-design', position: { x: 300, y: 400 }, data: { label: 'System design' } },
];

const initialEdges = [
  { id: 'e-algorithm-frontend', source: 'algorithm', target: 'frontend' },
  { id: 'e-algorithm-backend', source: 'algorithm', target: 'backend' },
  { id: 'e-backend-devops', source: 'backend', target: 'devops' },
  { id: 'e-frontend-devops', source: 'frontend', target: 'devops' },
  { id: 'e-devops-system-design', source: 'devops', target: 'system-design' },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center px-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:px-20">
      <main className="w-full row-start-2 flex flex-col items-center gap-2 sm:items-start">
        <div style={{ width: '100vw', height: '100vh' }}>
          <ReactFlow nodes={initialNodes} edges={initialEdges} zoomOnPinch={false} zoomOnScroll={false}/>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
