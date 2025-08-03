import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Footer from './Footer';
import Header from './Header';

const questionGroups = [
  {
    id: 'vark',
    title: 'Step 1: VARK Learning Style',
    questions: [
      {
        id: 'vark',
        title:
          '1. How do you prefer to learn new concepts (like how to use a new app or ride a bike)?',
        options: [
          {
            label: 'Watch a video or look at diagrams',
            value: 'visual',
            image: '/images/visual.png',
          },
          {
            label: 'Ask someone to explain it to you',
            value: 'auditory',
            image: '/images/auditory.png',
          },
          {
            label: 'Read the instructions',
            value: 'reading',
            image: '/images/reading.png',
          },
          {
            label: 'Try it hands-on',
            value: 'kinesthetic',
            image: '/images/kinesthetic.png',
          },
        ],
      },
    ],
  },
  {
    id: 'grasha',
    title: 'Step 2: Grasha-Riechmann Learning Style',
    questions: [
      {
        id: 'grasha',
        title: '2. In group projects, you…',
        options: [
          {
            label: 'Prefer to work alone',
            value: 'independent',
            image: '/images/independent.png',
          },
          {
            label: 'Like when others guide you',
            value: 'dependent',
            image: '/images/dependent.png',
          },
          {
            label: 'Compete to stand out',
            value: 'competitive',
            image: '/images/competitive.png',
          },
          {
            label: 'Enjoy collaborating equally',
            value: 'collaborative',
            image: '/images/collaborative.png',
          },
          {
            label: 'Avoid them when possible',
            value: 'avoidant',
            image: '/images/avoidant.png',
          },
          {
            label: 'Like leading or helping others',
            value: 'participant',
            image: '/images/participant.png',
          },
        ],
      },
    ],
  },
  // {
  //   id: "kolb",
  //   title: "Step 3: Kolb’s Experiential Learning Style",
  //   questions: [
  //     {
  //       id: "kolb",
  //       title: "Pick your favorite way to learn something new.",
  //       options: [
  //         { label: "Learn from a real experience or story", value: "concrete", image: "/images/concrete.png" },
  //         { label: "Think about what happened and why", value: "reflective", image: "/images/reflective.png" },
  //         { label: "Read explanations and ideas", value: "abstract", image: "/images/abstract.png" },
  //         { label: "Try it yourself and experiment", value: "active", image: "/images/active.png" },
  //       ],
  //     },
  //   ],
  // },
  {
    id: 'gardner',
    title: 'Step 4: Gardner’s Multiple Intelligences',
    questions: [
      {
        id: 'gardner',
        title: '3. Which activity sounds most like you?',
        options: [
          {
            label: 'Solving puzzles',
            value: 'logical',
            image: '/images/logical.png',
          },
          {
            label: 'Writing poems or stories',
            value: 'linguistic',
            image: '/images/linguistic.png',
          },
          {
            label: 'Drawing or designing',
            value: 'spatial',
            image: '/images/spatial.png',
          },
          {
            label: 'Playing an instrument or dancing',
            value: 'musical',
            image: '/images/musical.png',
          },
          {
            label: 'Hanging out with friends or helping others',
            value: 'interpersonal',
            image: '/images/interpersonal.png',
          },
          {
            label: 'Thinking about your feelings or journaling',
            value: 'intrapersonal',
            image: '/images/intrapersonal.png',
          },
          {
            label: 'Hiking, gardening, or caring for animals',
            value: 'naturalistic',
            image: '/images/naturalistic.png',
          },
        ],
      },
    ],
  },
  {
    id: 'enviornment',
    title: 'Step 5: Enivornmental',
    questions: [
      {
        id: 'enviornment',
        title: '4. What environment helps you focus best?',
        options: [
          {
            label: 'Quiet space with minimal distractions',
            value: 'silence',
            image: '/images/silence.png',
          },
          {
            label: 'Light background music or sounds',
            value: 'white-noise',
            image: '/images/white-noise.png',
          },
          {
            label: 'Around other people, collaborative',
            value: 'teamwork',
            image: '/images/teamwork.png',
          },
          {
            label: 'It depends on my mood',
            value: 'adaptable',
            image: '/images/adaptable.png',
          },
        ],
      },
    ],
  },
];

export default function LearningStyleQuiz() {
  let navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {});
  const currentGroup = questionGroups[step];

  const handleChange = (id, value) => {
    const currentAnswers = answers[id] || [];
    const newAnswers = currentAnswers.includes(value)
      ? currentAnswers.filter((answer) => answer !== value)
      : [...currentAnswers, value];
    setAnswers({ ...answers, [id]: newAnswers });
    setError('');
  };

  const handleReset = () => {
    setAnswers({});
    setStep(0);
    setSubmitted(false);
    // console.log('test')
  };
  const handleNext = () => {
    const unanswered = currentGroup.questions.find(
      (q) => !answers[q.id] || answers[q.id].length === 0
    );
    if (unanswered) {
      setError('Please select an option before continuing.');
      return;
    }
    if (step < questionGroups.length - 1) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
      setError('');
    }
  };

  return (
    <>
      <Header title="Help us get to know you" avatar={true}></Header>

        {!submitted ? (
          <div className="p-5 flex-1 flex-col content-start">
            {/* {step} */}
            {/* <h2 className="text-xl font-semibold mb-4">{currentGroup.title}</h2> */}
            {currentGroup.questions.map((q) => (
              <div key={q.id} className="mb-8 pb-30">
                <p className="font-semibold mb-4 text-lg">{q.title}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-20">
                  {q.options.map((opt) => (
                    <div
                      key={opt.value}
                      className={`border rounded-xl pb-4 overflow-hidden cursor-pointer hover:shadow-lg transition ${
                        (answers[q.id] || []).includes(opt.value)
                          ? 'border-blue-500 ring-2 ring-blue-300 bg-blue-200'
                          : 'border-gray-300'
                      }`}
                      onClick={() => handleChange(q.id, opt.value)}
                    >
                      <img
                        src={opt.image}
                        alt={opt.label}
                        className="w-full h-64 object-cover mb-2 grayscale"
                      />
                      <p className="text-center font-medium">{opt.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center flex flex-col grow-1 items-center content-center self-center row-start-2">
            <div className="w-100 flex flex-col bg-gray-200 p-12 rounded-xl self-center">
              <h2 className="text-xl font-bold">Thank you</h2>
              {/* <ul className="list-inside space-y-1">
              {Object.entries(answers).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.toUpperCase()}:</strong> {value.charAt(0).toUpperCase() + value.slice(1)}
                </li>
              ))}
            </ul> */}
              <p className="my-3">
                With this information we can work to better match you during
                group activities and find ways to streamline your coursework.
              </p>
              <p className="mb-6">
                If you wish to change these answers at any time simply return to
                your profile
              </p>
              <button
                className="px-8 py-4 text-white rounded-xl shadow bg-code-purple"
                onClick={() => navigate('/dashboard')}
              >
                Continue to Dashboard
              </button>
              <button
                className="px-8 my-4 py-4 border-1 bg-gray-100 rounded-xl"
                onClick={handleReset}
              >
                Start over
              </button>
            </div>

            {/* FOOTER ACTIONS */}
          </div>
        )}
      <Footer className="">
        {!submitted && step !== 0 ? (
          <>
            <button
              onClick={handleBack}
              disabled={step === 0}
              className={`px-8 py-4 rounded-xl ${
                step === 0
                  ? 'bg-gray-300 text-gray-700'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Back
            </button>

            <button
              onClick={handleNext}
              className="bg-code-purple text-white px-8 py-4 rounded-xl"
            >
              {step === questionGroups.length - 1 ? 'Submit' : 'Next'}
            </button>
          </>
        ) : !submitted ? (
          <>
            <button
              className="px-8 py-4 text-white rounded-xl shadow bg-gray-600"
              onClick={() => navigate('/styles-intro')}
            >
              Back
            </button>
            {error && <p className="text-red-600 font-medium mb-2">{error}</p>}
            <button
              onClick={handleNext}
              className="bg-code-purple text-white px-8 py-4 rounded-xl"
            >
              {step === questionGroups.length - 1 ? 'Submit' : 'Next'}
            </button>
          </>
        ) : (
          <></>
        )}
      </Footer>
    </>
  );
}
