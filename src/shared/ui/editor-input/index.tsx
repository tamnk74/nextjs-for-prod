'use client'

import { useEffect, useRef } from 'react'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import { debounce } from '@/shared/utils/pacer/debounce'

type Props = {
  onChange: (data: { blocks: { type: string; data: Record<string, unknown> }[] }) => void;
  defaultValue?: { blocks: { type: string; data: Record<string, unknown> }[] }
}


export default function EditorInput({ onChange, defaultValue }: Props) {
  const editorRef = useRef<EditorJS | null>(null)
  const editorContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: editorContainerRef.current!,
        tools: {
          header: Header,
          list: List,
        },
        data: defaultValue || {
          blocks: [
            {
              type: 'header',
              data: { text: 'Hello Editor.js', level: 2 },
            },
            {
              type: 'list',
              data: {
                items: ['Item 1', 'Item 2'],
                style: 'unordered',
              },
            },
          ],
        },
        onReady() {
          console.log('Editor.js is ready');
        },
        onChange: debounce(async () => {
          const content = await editor.save();
          onChange(content);
        }, 300),
      });

      editorRef.current = editor
    }

    return () => {
      if (editorRef.current && typeof editorRef.current.destroy === 'function') {
      editorRef.current?.destroy()
      editorRef.current = null
      }
    }
  }, [defaultValue, onChange])

  return <div id="editor" ref={editorContainerRef} className="border p-4 rounded bg-white" />
}
