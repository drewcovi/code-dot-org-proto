import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const questions = [
  {
    id: 1,
    skill: 'Decomposition',
    prompt: 'Sort the sounds into correct categories: Kick, Snare, Melody A, Bassline, Melody B, Synth Wash, Snare, Kick, Bassline, Melody A',
    options: ['Sorted correctly', '1–2 misplaced', '3+ misplaced', 'Did not sort'],
    scores: [3, 2, 1, 0],
  },
  {
    id: 2,
    skill: 'Pattern Recognition',
    prompt: 'Complete the beat: BOOM clap BOOM clap BOOM ____',
    options: ['clap', 'BOOM clap', 'BOOM', 'silence'],
    scores: [3, 2, 1, 0],
  },
  {
    id: 3,
    skill: 'Abstraction',
    prompt: 'What rule describes the verse? Line 1, Line 2, Line 1, Line 2',
    options: [
      'Repeat (Line 1 + Line 2) 2x',
      'Line 1 + Line 2 + Line 1 + Line 2',
      'Repeat Line 1 2x, Repeat Line 2 2x',
      'Can’t simplify',
    ],
    scores: [3, 2, 1, 0],
  },
  {
    id: 4,
    skill: 'Algorithm Design',
    prompt: 'Choose the correct sequence to build a remix.',
    options: [
      'Start the beat → Drop the bass → Add effects → Export the track',
      'Drop the bass → Start the beat → Add effects → Export the track',
      'Start the beat → Add effects → Drop the bass → Export the track',
      'Start the beat → Drop the bass → Export the track → Add effects',
    ],
    scores: [3, 1, 2, 0],
  },
];

export default function ComputationalThinkingGame() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAnswer = (qIdx, aIdx) => {
    const newAnswers = [...answers];
    newAnswers[qIdx] = aIdx;
    setAnswers(newAnswers);
  };

  const totalScore = answers.reduce((sum, ans, i) => {
    if (ans === null) return sum;
    return sum + questions[i].scores[ans];
  }, 0);

  const getFeedback = () => {
    if (totalScore >= 10) return '🎧 Remix Pro: You think like a true DJ—structured, sharp, and ready to code!';
    if (totalScore >= 6) return '🎚️ Rhythm Rookie: Good ear! Time to fine-tune a few skills.';
    if (totalScore >= 3) return '🛠️ Loop Learner: Let’s replay the basics—grab those mini-lessons and remix again!';
    return '🌀 Glitch Detective: You’re just getting the hang of this—head to the warm-up loop.';
  };

  return (
    <div className="p-6 space-y-6">
      {questions.map((q, idx) => (
        <Card key={q.id} className="w-full">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
              <div className="md:w-1/2">
                <h3 className="text-lg font-semibold">{q.skill}</h3>
                <p>{q.prompt}</p>
              </div>
              <div className="flex flex-col gap-2 md:w-1/2">
                {q.options.map((opt, aIdx) => (
                  <Button
                    key={aIdx}
                    variant={answers[idx] === aIdx ? 'default' : 'outline'}
                    onClick={() => handleAnswer(idx, aIdx)}
                  >
                    {opt}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button className="mt-4" onClick={() => { setSubmitted(true); setDialogOpen(true); }}>Submit</Button>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Results</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <h4 className="text-xl font-bold">Your Total Score: {totalScore}/12</h4>
            <p>{getFeedback()}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
