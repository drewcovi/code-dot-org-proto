import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuestSelector from './QuestSelector';
import AvatarForge from './AvatarForge';
import { BrowserRouter, Routes, Route } from "react-router";
import ComputationalThinkingGame from './ComputationalThinkingGame';
import LearningStyleQuiz from './LearningStyleQuiz';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="h-screen font-sans text-gray-800 flex flex-col">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AvatarForge/>} />
      {/* <Route path="/" element={<ComputationalThinkingGame/>} /> */}
      <Route path="/styles" element={<LearningStyleQuiz/>} />
      <Route path="/journey" element={<QuestSelector/>} />
      <Route path="/assessment" element={<ComputationalThinkingGame/>} />
    </Routes>
  </BrowserRouter>
  </div>
    </>
  )
}

export default App
