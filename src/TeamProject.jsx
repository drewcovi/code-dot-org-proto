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
import Footer from "./Footer";
import CanvasVisualizer from './CanvasVisualizer';


export default function App() {
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);
  const options = {
    minimap: {
        enabled: false
    },
    padding: {
      top: 10
    },
    // automaticLayout: true,
    overviewRulerBorder: false,
    overviewRulerLanes: 0
  };

  return (
    <>
    <div className="grid grid-cols-[auto_1fr_auto] grid-rows-[1fr_auto] w-screen row-start-2 bg-gray-50 flex grow">

      {/* Instruction Panel */}
      {showLeft ? (
        <aside className="bg-white p-4 shadow rounded-none overflow-y-auto w-[250px]">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Tasks</h2>
            <Button size="sm" variant="ghost" onClick={() => setShowLeft(false)}>
              ❌
            </Button>
          </div>
          <p className="text-sm text-gray-600">Follow the steps to complete the coding task.</p>
        </aside>
      ) : (
        <div className="flex items-start justify-center">
          <button className="sm my-3 mx-2 rounded bg-gray-300 px-4 py-2" onClick={() => setShowLeft(true)}>
          📝 Tasks
          </button>
        </div>
      )}

      {/* Middle Column */}
      <main className="grid grid-rows-[auto_1fr] ">

        {/* Tabbed Code Editor */}
        <section className="bg-white pt-4 shadow rounded-none overflow-hidden">
          <Tabs defaultValue="you" className="gap-0 h-full">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0" >
              <TabsTrigger className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none" value="you">You</TabsTrigger>
              <TabsTrigger className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none" value="matt">Matt</TabsTrigger>
              <TabsTrigger className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none" value="bryan">Bryan</TabsTrigger>
              <TabsTrigger className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none" value="main">main.py</TabsTrigger>
            </TabsList>
            <TabsContent value="you">
              <Editor defaultLanguage="python" options={options} defaultValue="import matplotlib.pyplot as plt
import numpy as np

def draw_squiggly_ellipse(cx, cy, rx, ry, segments=100, amplitude=6):
    angles = np.linspace(0, 2 * np.pi, segments)
    offsets = np.sin(np.linspace(0, 4 * np.pi, segments)) * amplitude
    x = cx + (rx + offsets) * np.cos(angles)
    y = cy + (ry + offsets) * np.sin(angles)

    plt.figure(figsize=(6, 4))
    plt.plot(x, y, color='yellow', linewidth=3)
    plt.axis('equal')
    plt.axis('off')
    plt.show()

draw_squiggly_ellipse(0, 0, 120, 80)
" theme="vs-dark" height="200px"/>
            </TabsContent>
            <TabsContent value="matt">
              <Editor defaultLanguage="python" options={options} defaultValue="import matplotlib.pyplot as plt
import numpy as np

def draw_triangle(cx, cy, size):
    height = size * (3**0.5) / 2
    points = np.array([
        [cx, cy - height / 2],
        [cx - size / 2, cy + height / 2],
        [cx + size / 2, cy + height / 2],
        [cx, cy - height / 2]
    ])

    plt.figure()
    plt.plot(points[:,0], points[:,1], color='#FFA07A', linewidth=2)  # pastel orange
    plt.axis('equal')
    plt.axis('off')
    plt.show()

draw_triangle(0, 0, 140)
" theme="vs-dark" height="200px"/>
            </TabsContent>
            <TabsContent value="bryan">
              <Editor defaultLanguage="python" options={options} defaultValue="import matplotlib.pyplot as plt
import numpy as np

def draw_star(cx, cy, spikes=5, outer=40, inner=20):
    angles = []
    radii = []
    for i in range(spikes * 2):
        angle = i * np.pi / spikes
        radius = outer if i % 2 == 0 else inner
        angles.append(angle)
        radii.append(radius)

    x = cx + np.cos(angles) * radii
    y = cy + np.sin(angles) * radii

    x = np.append(x, x[0])  # close the star
    y = np.append(y, y[0])

    plt.figure()
    plt.plot(x, y, color='hotpink', linestyle='--', linewidth=2)
    plt.axis('equal')
    plt.axis('off')
    plt.show()

draw_star(0, 0)
" theme="vs-dark" height="200px"/>
            </TabsContent>
            <TabsContent value="main">
              <Editor defaultLanguage="python" options={options} defaultValue="import pygame
import random
import math
from shapes.ellipse import draw_squiggly_ellipse
from shapes.triangle import draw_triangle
from shapes.star import draw_star

pygame.init()
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
clock = pygame.time.Clock()

BG_COLOR = (255, 254, 247)

# Shape definitions
shapes = [
    {
        'type': ellipse',
        'pos': [random.randint(100, WIDTH-100), random.randint(100, HEIGHT-100)],
        'vel': [random.choice([-1, 1]) * random.uniform(1, 3), random.choice([-1, 1]) * random.uniform(1, 3)],
        'size': (120, 80)
    },
    {
        'type': 'triangle',
        'pos': [random.randint(100, WIDTH-100), random.randint(100, HEIGHT-100)],
        'vel': [random.choice([-1, 1]) * random.uniform(1, 3), random.choice([-1, 1]) * random.uniform(1, 3)],
        'size': 140
    },
    {
        'type': 'star',
        'pos': [random.randint(100, WIDTH-100), random.randint(100, HEIGHT-100)],
        'vel': [random.choice([-1, 1]) * random.uniform(1, 3), random.choice([-1, 1]) * random.uniform(1, 3)],
        'size': (40, 20)
    }
]

frame = 0
running = True
while running:
    screen.fill(BG_COLOR)
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    for shape in shapes:
        x, y = shap
" theme="vs-dark" height="200px"/>
            </TabsContent>
          </Tabs>
        </section>

        {/* Canvas Area */}
        <section className="bg-white pt-4 shadow rounded-none flex items-center justify-center">
        <Tabs defaultValue="canvas" className="gap-0 h-full w-full">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0" >
              <TabsTrigger className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none" value="canvas">Canvas</TabsTrigger>
              <TabsTrigger className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none" value="console">Console</TabsTrigger>
            </TabsList>
            <TabsContent value="canvas" className="">
            <div className="w-full h-full bg-gray-700 rounded-none flex items-center justify-center text-gray-500">
            <CanvasVisualizer/>
          </div>
            </TabsContent>
            <TabsContent value="console">
            <div className="w-full h-full bg-gray-900 rounded-none flex items-center justify-center text-gray-500">
            Console Placeholder
          </div>
            </TabsContent>
            </Tabs>
          
        </section>

      </main>

      {/* Chat Interface */}
      {showRight ? (
        <aside className="bg-white p-4 shadow rounded-none flex flex-col w-[250px]">
          <div className="flex justify-between items-center mb-2">
            <Button size="sm" variant="ghost" onClick={() => setShowRight(false)}>
              ❌
            </Button>
            <h2 className="text-xl font-semibold">Chat</h2>
            
          </div>
          <div className="flex-1 overflow-y-auto mb-2 flex-col">
            <div className="flex flex-row justify-end">
              <p className="text-sm shrink text-gray-600 bg-gray-300 p-4 rounded-xl my-2">
              Chat will appear here...
              </p>
            </div>
            <p className="shrink text-sm text-gray-600 bg-gray-300 p-4 rounded-xl my-2 inline-block">Chat will appear here...</p>
            <div className="flex flex-row justify-end">
              <p className="text-sm shrink text-gray-600 bg-gray-300 p-4 rounded-xl my-2">
              Chat will appear here...
              </p>
            </div>
            <p className="shrink text-sm text-gray-600 bg-gray-300 p-4 rounded-xl my-2 inline-block">Chat will appear here...</p>
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="border rounded-md p-2 w-full"
          />
        </aside>
      ) : (
        <div className="flex items-start justify-center">
          <button className="sm my-3 mx-2 rounded bg-gray-300 px-4 py-2"  onClick={() => setShowRight(true)}>
          💬 Chat
          </button>
        </div>
      )}

    <div className="row-start-2 flex justify-end w-full col-span-full py-2 px-3 bg-gray-200">
    <button
        className="bg-code-purple text-white px-4 py-3 rounded-lg"
        >
            I'm Done
    </button>
    </div>
    </div>
    
    </>
  );
}
