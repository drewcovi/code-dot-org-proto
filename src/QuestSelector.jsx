import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {useNavigate} from "react-router";

const quests = [
    {
        title: "Game Design",
        description: "Create and analyze your own game mechanics.",
        icon: "🎮",
        objective: "Understand game structure, player logic, and feedback systems.",
        finalProject: "Design and prototype your own playable mini-game."
    }, {
        title: "Music & Remixing",
        description: "Mix beats while learning Python and loops.",
        icon: "🎵",
        objective: "Learn how code shapes rhythm, sound, and timing.",
        finalProject: "Produce a custom remix using Python and audio loops."
    }, {
        title: "Art & Design",
        description: "Use code to power creative visuals.",
        icon: "🎨",
        objective: "Explore how code can generate dynamic and generative art.",
        finalProject: "Create an interactive art piece or visual animation."
    }, {
        title: "Social Change",
        description: "Solve real-world problems with code.",
        icon: "🌍",
        objective: "Analyze issues and prototype civic technology solutions.",
        finalProject: "Build a campaign site, chatbot, or data visualization for social impact."
    }, {
        title: "Science & Nature",
        description: "Explore the logic behind natural phenomena.",
        icon: "🧬",
        objective: "Model scientific processes and patterns using code.",
        finalProject: "Simulate a natural system or visualize scientific data."
    }, {
        title: "Everyday Tech",
        description: "Discover the tech behind your daily apps.",
        icon: "📱",
        objective: "Demystify the algorithms behind notifications, feeds, and recommendations.",
        finalProject: "Prototype a smart feature like a to-do reminder or custom alert system."
    }
];

const ctPillars = [
  {
    title: "Unit 1: Foundations of Computational Thinking",
    scenario:
      "Students join DJ Signal in building the ultimate remix set by breaking down musical problems into beats, loops, and layers.",
  },
  {
    title: "Unit 2: Programming Basics and Data",
    scenario:
      "Students code the backend of a futuristic music café where beat recipes (songs) are built using variables, lists, and objects.",
  },
  {
    title: "Unit 3: Control Structures",
    scenario:
      "Compete in a global electronic music festival where your performance depends on coding sound sequences with loops, conditionals, and functions.",
  },
  {
    title: "Unit 4: Testing and Debugging",
    scenario:
      "You’re in a high-stakes studio session. A superstar's track has bugs in the automation scripts—can you save the session before the drop?",
  },
  {
    title: "Capstone: Code DJ Showcase",
    scenario:
      "Create and perform your own Python-powered musical project—a visualizer, beat generator, or lyric bot—in front of a virtual crowd.",
  },
];

// export default function CodeDJJourneySummary() {
//   return (
//     <div className="p-6 space-y-8">
//       {levels.map((lvl, idx) => (
//         <div key={idx} className="bg-white rounded-md shadow p-4">
//           <h2 className="text-xl font-bold">{lvl.title}</h2>
//           <p className="text-gray-700 mt-1">{lvl.scenario}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

export default function QuestSelector() {
    let navigate = useNavigate();
    const [selected, setSelected] = useState(quests[1].title);
    const selectedQuest = quests.find(q => q.title === selected);
    // 
    let avatarUrl = localStorage.getItem('avatarUrl') || 'null';
    // let selected = quests[1].title;

    return ( <>
    <div className="flex align-middle items-center p-6">
        <h1 className="text-3xl font-bold mb-4 align-middle flex-auto">Choose Your Quest</h1>
        <img className="w-24 h-24 flex rounded-full align-middle" src={avatarUrl}/>
    </div>
    < div className = "grid grid-cols-2" > <div className="p-6 max-w-screen-lg mx-auto">
            <p className="mb-6 text-muted-foreground">
                Pick a quest to explore your interests while building computational thinking
                skills!
            </p>
            <div className="grid grid-cols-2 gap-6">
                {quests.map((quest, idx) => (
                    <Card
                        key={idx}
                        onClick={() => setSelected(quest.title)}
                        className={`cursor-pointer hover:shadow-lg transition ${selected === quest.title
                        ? "border-2 border-blue-500"
                        : ""}`}>
                        <CardContent className="p-4">
                            <div className="text-5xl mb-2">{quest.icon}</div>
                            <h2 className="text-xl font-semibold mb-1">{quest.title}</h2>
                            <p className="text-sm text-muted-foreground">{quest.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            
        </div>
        {
        selectedQuest && (
            <div className="p-6">
                <h2 className="text-2xl font-bold text-center mb-2">{selectedQuest.title}
                    Quest Map</h2>
                <p className="text-center text-lg text-muted-foreground mb-1">
                    <strong>Objective:</strong>
                    {selectedQuest.objective}
                </p>
                <p className="text-center text-lg text-muted-foreground mb-6">
                    <strong>Final Project:</strong>
                    {selectedQuest.finalProject}
                </p>
                <div className="grid grid-cols-1 gap-4">
                    {ctPillars.map((pillar, idx) => (
                        <Card key={idx} className="text-center">
                            <CardContent className="p-6">
                                <div className="text-2xl mb-2">{pillar.title}</div>
                                <h3 className="text-md font-book">{pillar.scenario}</h3>
                                {/* <p className="text-sm text-muted-foreground">Checkpoint {idx + 1}</p> */}
                            </CardContent>
                        </Card>
                    ))}
                </div>
                
            </div>
        )
    } </div>
    <div className="flex fixed left-0 bottom-0 right-0 justify-between">
    <Button className="mt-2" onClick={() => navigate("/")}>Back</Button>
    <div className="text-center">
                    <Button
                        className="mt-2 bg-blue-500"
                        onClick={() => {
                        navigate("/assessment")
                    }}>Start your Journey</Button>
                </div>
                </div>
    </ >);
}
