import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Header from './Header';
import { useNavigate } from 'react-router';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const units = [
  {
    id: 1,
    title: 'Unit 1: DJ Signal’s Remix Lab',
    subtitle: 'Foundations in Computational Thinking',
    progress: 100,
    href: './',
    lessons: [
      'Decomposition',
      'Pattern Recognition',
      'Abstraction',
      'Algorithm Design',
    ],
  },
  {
    id: 2,
    title: 'Unit 2: BeatBox Bistro',
    subtitle: 'Programming Basics & Data',
    progress: 25,
    href: '/end',
    lessons: [
      'Designing Algorithms',
      'Variables and Data Flow',
      'Working with Objects',
    ],
  },
  {
    id: 3,
    title: 'Unit 3: LoopDrop Festival',
    subtitle: 'Control Structures',
    progress: 0,
    href: './',
    lessons: [
      'Functions and Parameters',
      'Loops',
      'Conditional Statements',
      'Nested Selection',
    ],
  },
  {
    id: 4,
    title: 'Unit 4: GlitchFix: Studio Session',
    subtitle: 'Testing and Debugging',
    progress: 0,
    href: './',
    lessons: ['Debugging Strategies'],
  },
  {
    id: 5,
    title: 'The Grand Remix Battle',
    subtitle: 'Capstone Challenge',
    progress: 0,
    href: './',
    lessons: ['Create your own music-driven Python project'],
  },
];

let loadingBarClasses = 'h-2 mb-4 [&>div]:rounded-full';
let headerClasses =
  'px-6 pt-6 m-0 text-white flex flex-col md:flex-row md:justify-between md:items-start gap-6';
export default function UnitReviewScreen() {
  let navigate = useNavigate();
  function handleNext(href) {
    console.log(href);
    if (href === './') {
      return;
    } else {
      navigate(href);
    }
  }
  return (
    <>
      <title>Unit overview</title>
      <Header title="Course Overview: Python Programming" avatar={true} />
      {/* <div className="p-8 border-b border-gray-800 row-start-2">
                    <p className="text-muted-foreground">
                        
                    </p>
            </div> */}
      <main className="row-start-2 bg-gray-200">
      <h2 className="mx-10 my-6">Units remaining</h2>
        <Accordion collapsible type="single" defaultValue={2}>
          {units.map((unit) => ( (unit.progress < 100) &&
            <Card
              key={unit.id}
              className="mx-4 my-6 w-auto overflow-hidden p-0 shadow-none"
            >
              <CardContent className="space-y-4 p-0">
                <div
                  onClick={() => {
                    handleNext(unit.href);
                  }}
                  className={
                    unit.progress === 100
                      ? headerClasses + ' bg-gray-400'
                      : headerClasses + ' bg-code-teal'
                  }
                >
                  <div className="md:w-3/4">
                    <h3 className="mb-1 text-xl font-bold">{unit.title}</h3>
                    <p className="mb-2 text-sm">{unit.subtitle}</p>
                    <Progress
                      value={unit.progress}
                      className={
                        unit.progress === 100
                          ? loadingBarClasses + ' [&>div]:bg-white'
                          : loadingBarClasses + ' [&>div]:bg-code-purple'
                      }
                    />
                  </div>
                  {unit.progress < 100 && (
                    <div className="flex w-full p-6 md:w-1/4 md:justify-end">
                      <Button
                        variant={
                          unit.progress === 100 ? 'secondary' : 'default'
                        }
                      >
                        {unit.progress === 100
                          ? 'Review'
                          : unit.progress > 0
                            ? 'Continue Unit'
                            : 'Start Unit'}
                      </Button>
                    </div>
                  )}
                </div>
                <AccordionItem value={unit.id} className="">
                  <AccordionTrigger className="text-code-teal m-0 cursor-pointer px-6 text-lg font-semibold border-b rounded-none">
                    Lessons
                  </AccordionTrigger>
                  <AccordionContent className="p-6 bg-gray-100">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      {unit.lessons.map((lesson, idx) => (
                        <Card
                          key={idx}
                          className="border border-gray-200 shadow-none py-0"
                        >
                          <CardContent className="p-4">
                            <h4 className="text-sm font-semibold">{lesson}</h4>
                            <Progress
                              value={
                                unit.id === 1
                                  ? 100
                                  : unit.id === 2 && idx === 0
                                    ? 100
                                    : 0
                              }
                              className="mt-2 h-1 [&>div]:rounded-full [&>div]:bg-blue-500"
                            />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </CardContent>
            </Card>
          ))}
          <h2 className="mx-10">Complete</h2>
          {units.map((unit) => ( (unit.progress == 100) &&
          <Card
          key={unit.id}
          className="mx-4 my-6 w-auto overflow-hidden p-0 shadow-none"
        >
          <CardContent className="space-y-4 p-0">
            <div
              onClick={() => {
                handleNext(unit.href);
              }}
              className={
                unit.progress === 100
                  ? headerClasses + ' bg-gray-400'
                  : headerClasses + ' bg-code-teal'
              }
            >
              <div className="md:w-3/4">
                <h3 className="mb-1 text-xl font-bold">{unit.title}</h3>
                <p className="mb-2 text-sm">{unit.subtitle}</p>
                <Progress
                  value={unit.progress}
                  className={
                    unit.progress === 100
                      ? loadingBarClasses + ' [&>div]:bg-white'
                      : loadingBarClasses + ' [&>div]:bg-code-purple'
                  }
                />
              </div>
              {unit.progress < 100 && (
                <div className="flex w-full p-6 md:w-1/4 md:justify-end">
                  <Button
                    variant={
                      unit.progress === 100 ? 'secondary' : 'default'
                    }
                  >
                    {unit.progress === 100
                      ? 'Review'
                      : unit.progress > 0
                        ? 'Continue Unit'
                        : 'Start Unit'}
                  </Button>
                </div>
              )}
            </div>
            <AccordionItem value={unit.id} className="">
              <AccordionTrigger className="px-6 text-code-teal m-0 cursor-pointer text-lg rounded-none font-semibold border-b border-gray-200">
                Lessons
              </AccordionTrigger>
              <AccordionContent className="p-6  bg-gray-100">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {unit.lessons.map((lesson, idx) => (
                    <Card
                      key={idx}
                      className="border border-gray-200 shadow-none"
                    >
                      <CardContent className="px-4">
                        <h4 className="text-sm font-semibold">{lesson}</h4>
                        <Progress
                          value={
                            unit.id === 1
                              ? 100
                              : unit.id === 2 && idx === 0
                                ? 100
                                : 0
                          }
                          className="mt-2 h-1 [&>div]:rounded-full [&>div]:bg-blue-500"
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </CardContent>
          </Card>
          ))}
        </Accordion>
      </main>
    </>
  );
}
