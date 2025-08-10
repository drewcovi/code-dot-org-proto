import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import QuestSelector from './QuestSelector';
import AvatarForge from './AvatarForge';
import { BrowserRouter, Routes, Route } from 'react-router';
import ComputationalThinkingGame from './ComputationalThinkingGame';
import LearningStyleQuiz from './LearningStyleQuiz';
import Dashboard from './Dashboard';
import LearningStyleIntro from './LearningStyleIntro';
import UnitReviewScreen from './UnitReviewScreen';
import EndOnboarding from './EndOnboarding';
import TeamProject from './TeamProject';
import CodeMateIntro from './CodeMateIntro';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { IconChevronDown, IconHelp, IconHelpCircleFilled, IconMenu2, IconMenu3 } from "@tabler/icons-react"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex h-screen flex-col font-sans text-gray-800">
        <nav className="bg-code-teal flex min-h-12 flex-row items-center px-6 py-4 text-white justify-between px-10">
          <div class="">
            <div className="mr-2 align-middle inline-block bg-gray-200 rounded-lg h-10 w-10"></div>
            <span>Code Academy</span>
          </div>
          <div className="gap-1 flex shrink items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-lg border-1 px-4 py-2">
              My Account&nbsp;<IconChevronDown className="inline"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <IconHelpCircleFilled className="inline"/>
          <IconMenu2 className="inline"/>
          </div>
        </nav>
        <main className="flex grid flex-1 grid-cols-[auto] grid-rows-[auto_1fr] overflow-y-auto overflow-y-scroll bg-gray-100">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CodeMateIntro />} />
              <Route path="/codemate" element={<AvatarForge />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/end" element={<EndOnboarding />} />
              <Route path="/project" element={<TeamProject />} />
              <Route path="/styles-intro" element={<LearningStyleIntro />} />
              <Route path="/styles" element={<LearningStyleQuiz />} />
              <Route path="/courses/python" element={<QuestSelector />} />
              <Route path="/unit-overview" element={<UnitReviewScreen />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </>
  );
}

export default App;
