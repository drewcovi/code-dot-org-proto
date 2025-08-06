import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuestSelector from './QuestSelector';
import AvatarForge from './AvatarForge';
import { BrowserRouter, Routes, Route } from "react-router";
import ComputationalThinkingGame from './ComputationalThinkingGame';
import LearningStyleQuiz from './LearningStyleQuiz';
import Dashboard from './Dashboard';
import LearningStyleIntro from './LearningStyleIntro';
import UnitReviewScreen from './UnitReviewScreen';
import EndOnboarding from './EndOnboarding';
import TeamProject from './TeamProject';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="h-screen font-sans text-gray-800 flex flex-col">
    <nav className="flex-row bg-code-teal text-white flex min-h-12 items-center px-6 py-4">
    </nav>
    <main className="bg-gray-100 flex flex-1 overflow-y-scroll overflow-y-auto grid grid-cols-[auto] grid-rows-[auto_1fr]">
      
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AvatarForge/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/end" element={<EndOnboarding/>}/>
      <Route path="/project" element={<TeamProject/>}/>
      <Route path="/styles-intro" element={<LearningStyleIntro/>}/>
      <Route path="/styles" element={<LearningStyleQuiz/>} />
      <Route path="/courses/python" element={<QuestSelector/>} />
      <Route path="/unit-overview" element={<UnitReviewScreen/>} />
    </Routes>
  </BrowserRouter>
  </main>
  </div>
    </>
  )
}

export default App
