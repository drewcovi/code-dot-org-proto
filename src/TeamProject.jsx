// App.tsx
import { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Editor from "@monaco-editor/react";

export default function App() {
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);
  const monacoOptions = {
    minimap: {
        enabled: false,
        autohide: true
    }
  };

  return (
    <div className="grid grid-cols-[auto_1fr_auto] grid-rows-[1fr] w-screen row-start-2 gap-1 p-4 bg-gray-50">

      {/* Instruction Panel */}
      {showLeft ? (
        <aside className="bg-white p-4 shadow rounded-xl overflow-y-auto w-[250px]">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Instructions</h2>
            <Button size="sm" variant="ghost" onClick={() => setShowLeft(false)}>
              ❌
            </Button>
          </div>
          <p className="text-sm text-gray-600">Follow the steps to complete the coding task.</p>
        </aside>
      ) : (
        <div className="flex items-start justify-center">
          <Button size="sm" onClick={() => setShowLeft(true)}>
            👉 Show
          </Button>
        </div>
      )}

      {/* Middle Column */}
      <main className="grid grid-rows-[1fr_1fr] gap-1">

        {/* Tabbed Code Editor */}
        <section className="bg-white p-4 shadow rounded-xl overflow-hidden">
          <Tabs defaultValue="alice" className="h-full">
            <TabsList className="mb-2">
              <TabsTrigger value="alice">Alice</TabsTrigger>
              <TabsTrigger value="michelle">Michelle</TabsTrigger>
              <TabsTrigger value="cristina">Cristina</TabsTrigger>
              <TabsTrigger value="main">Main</TabsTrigger>
            </TabsList>
            <TabsContent value="alice">
              <Editor defaultLanguage="python" options={monacoOptions} defaultValue="<h1>Hello World</h1>" />
            </TabsContent>
            <TabsContent value="michelle">
              <Editor defaultLanguage="python" options={monacoOptions} defaultValue="h1 { color: red; }" />
            </TabsContent>
            <TabsContent value="cristina">
              <Editor defaultLanguage="python" options={monacoOptions} defaultValue="console.log('Hello');" />
            </TabsContent>
            <TabsContent value="main">
              <Editor defaultLanguage="python" options={monacoOptions} defaultValue="print('Hello')" />
            </TabsContent>
          </Tabs>
        </section>

        {/* Canvas Area */}
        <section className="bg-white p-4 shadow rounded-xl flex items-center justify-center">
          <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
            Canvas Placeholder
          </div>
        </section>

      </main>

      {/* Chat Interface */}
      {showRight ? (
        <aside className="bg-white p-4 shadow rounded-xl flex flex-col w-[250px]">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Chat</h2>
            <Button size="sm" variant="ghost" onClick={() => setShowRight(false)}>
              ❌
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto mb-2">
            <p className="text-sm text-gray-600">Chat will appear here...</p>
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="border rounded-md p-2 w-full"
          />
        </aside>
      ) : (
        <div className="flex items-start justify-center">
          <Button size="sm" onClick={() => setShowRight(true)}>
            👈 Show
          </Button>
        </div>
      )}
    </div>
  );
}
