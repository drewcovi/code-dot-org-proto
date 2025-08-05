// App.jsx
import { useState } from 'react';
import Header from './Header';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router';
let svg = localStorage.getItem('codemate');
const courses = [
  {
    title: 'Python Programming',
    description: 'Text-based coding for real-world applications.',
    modal: ' ',
    progress: 30,
    url: '/courses/python',
  },
  {
    title: 'Intro to Computer Science',
    description: 'Start learning block-based coding with fun puzzles.',
    modal: 'Coming soon! For now please select the Python Programming course',
    progress: 70,
    url: '/courses/intro',
  },
  {
    title: 'Game Lab',
    description: 'Build animations and games using JavaScript.',
    modal: 'Coming soon! For now please select the Python Programming course',
    progress: 90,
    url: '/courses/game-lab',
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const handleCourseSelection = (course) => {
    if (course.url === '/courses/python') {
      navigate(course.url);
    } else {
      setSelectedCourse(course);
    }
  };
  return (
    <>
      <title>Dashboard</title>
      {/* <Header title="My Dashboard"></Header> */}
      <div className="row-start-2 grid grid-cols-subgrid grid-rows-[auto_1fr] gap-x-10 gap-y-6 bg-gray-100 p-6 font-sans md:grid-cols-8 lg:grid-cols-12">
        <h2 className="justify-content order-first col-span-8 row-start-1 flex content-center text-3xl font-semibold lg:col-span-12">
          <span className="flex grow-1 items-center">My Courses</span>
          <span className="object-fit ml-6 flex h-20 w-20 overflow-hidden rounded-full border border-gray-800 bg-blue-200 shadow-md">
            {parse(svg)}
          </span>
        </h2>
        <div className="order-1 grid gap-6 md:col-span-4 md:grid-cols-1 lg:col-span-8 lg:grid-cols-2">
          {' '}
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="cursor-pointer overflow-hidden rounded-xl bg-white p-6 shadow transition hover:shadow-md"
              onClick={() => handleCourseSelection(course)}
            >
              <h3 className="bg-code-teal -mx-6 -mt-6 object-cover p-6 text-xl font-bold text-white">
                {course.title}
              </h3>
              <p className="mt-2 text-gray-600">{course.description}</p>
              <div className="mt-4 h-3 w-full rounded-full bg-gray-200">
                <div
                  className="h-3 rounded-full bg-green-500"
                  style={{
                    width: `${course.progress}%`,
                  }}
                />
              </div>
              <p className="mt-1 text-right text-sm text-gray-500">
                {course.progress}% complete
              </p>
              <a className={course.progress <= 0 ? 'bg-code-purple rounded-xl border-1 px-5 py-3 text-white':'bg-gray-500 rounded-xl border-1 px-5 py-3 text-white'}>
                {course.progress <= 0 ? (
                    'Start Course'
                ):(
                    'Continue Course'
                )}
              </a>
            </div>
          ))}
        </div>
        <div className="order-last grid md:col-span-4 md:col-start-5 lg:col-start-9">
          <div className="overflow-hidden rounded-xl bg-white p-6 shadow transition hover:shadow-md">
            <h3 className="bg-code-teal -mx-6 -mt-6 object-cover p-6 text-xl font-bold text-white">
              Achievements
            </h3>
            <div className="py-6">
              <ul className="list-none">
                <li className="my-3 flex items-center rounded border border-blue-800 px-5 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="blue"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                  Code Explorer
                </li>
                <li className="my-3 flex items-center rounded border border-orange-800 px-5 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="orange"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                    />
                  </svg>
                  Creative coder
                </li>
                <li className="my-3 flex items-center rounded border border-green-800 px-5 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="green"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
                    />
                  </svg>
                  Code Explorer
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Course Detail Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-600/50">
            <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
              <button
                className="absolute top-2 right-2 text-gray-500"
                onClick={() => setSelectedCourse(null)}
              >
                ✖
              </button>
              <h3 className="mb-2 text-2xl font-bold">
                {selectedCourse.title}
              </h3>
              <p className="mb-4 text-gray-700">{selectedCourse.modal}</p>
              {/* <p className="text-sm text-green-600">
                You're {selectedCourse.progress}% of the way there!
              </p> */}{' '}
            </div>
          </div>
        )}{' '}
      </div>
    </>
  );
}
