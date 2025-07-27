import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {useNavigate} from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const quests = [
    {
        title: "Game Design",
        description: "Create and analyze your own game mechanics.",
        icon: "🎮",
        objective: "Understand game structure, player logic, and feedback systems.",
        finalProject: "Design and prototype your own playable mini-game.",
        map: "/images/map-game.png"
    }, {
        title: "Music & Remixing",
        description: "Mix beats while learning Python and loops.",
        icon: "🎵",
        objective: "Learn how code shapes rhythm, sound, and timing.",
        finalProject: "Produce a custom remix using Python and audio loops.",
        map:"/images/map-music.png"
    }, {
        title: "Art & Design",
        description: "Use code to power creative visuals.",
        icon: "🎨",
        objective: "Explore how code can generate dynamic and generative art.",
        finalProject: "Create an interactive art piece or visual animation.",
        map:"/images/map-art.png"
    }, {
        title: "Social Change",
        description: "Solve real-world problems with code.",
        icon: "🌍",
        objective: "Analyze issues and prototype civic technology solutions.",
        finalProject: "Build a campaign site, chatbot, or data visualization for social impact.",
        map:"/images/map-social.png"
    }, {
        title: "Science & Nature",
        description: "Explore the logic behind natural phenomena.",
        icon: "🧬",
        objective: "Model scientific processes and patterns using code.",
        finalProject: "Simulate a natural system or visualize scientific data.",
        map:"/images/map-nature.png"
    }, {
        title: "Everyday Tech",
        description: "Discover the tech behind your daily apps.",
        icon: "📱",
        objective: "Demystify the algorithms behind notifications, feeds, and recommendations.",
        finalProject: "Prototype a smart feature like a to-do reminder or custom alert system.",
        map:"/images/map-tech.png"
    }
];

const ctPillars = [
    {
        title: "Unit 1: Foundations of Computational Thinking",
        scenario: "Students join DJ Signal in building the ultimate remix set by breaking down musi" +
                "cal problems into beats, loops, and layers."
    }, {
        title: "Unit 2: Programming Basics and Data",
        scenario: "Students code the backend of a futuristic music café where beat recipes (songs) " +
                "are built using variables, lists, and objects."
    }, {
        title: "Unit 3: Control Structures",
        scenario: "Compete in a global electronic music festival where your performance depends on " +
                "coding sound sequences with loops, conditionals, and functions."
    }, {
        title: "Unit 4: Testing and Debugging",
        scenario: "You’re in a high-stakes studio session. A superstar's track has bugs in the auto" +
                "mation scripts—can you save the session before the drop?"
    }, {
        title: "Capstone: Code DJ Showcase",
        scenario: "Create and perform your own Python-powered musical project—a visualizer, beat ge" +
                "nerator, or lyric bot—in front of a virtual crowd."
    }
];


export default function QuestSelector() {
    let navigate = useNavigate();
    const [selected,
        setSelected] = useState(quests[1].title);
    const selectedQuest = quests.find(q => q.title === selected);
    //
    let avatarUrl = localStorage.getItem('avatarUrl') || 'null';
    // let selected = quests[1].title;

    return ( <>
    <Header title="How would you like to learn Python Programming?" avatar={true}></Header>
    <div className="p-8 border-b border-gray-800">
            <p className="text-muted-foreground">
                Pick a quest to explore your interests while building computational thinking
                skills!
            </p>
            </div>
    <main className = "grid grid-cols-3 overflow-y-scroll" >
        
        <div className="flex overflow-y-scroll flex-col p-6 max-w-screen-lg mx-auto">
            <h2 className="text-2xl font-bold text-center mb-">Select a quest</h2>
            <div className="grid grid-cols-1 gap-6 mt-6">
                {quests.map((quest, idx) => (
                    <Card
                        key={idx}
                        onClick={() => setSelected(quest.title)}
                        className={`cursor-pointer hover:shadow-lg transition ${selected === quest.title
                        ? "border-2 border-blue-500 bg-blue-100"
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
    { selectedQuest && (
        <div className="flex flex-col col-span-2 p-6 overflow-y-scroll">
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
                
                {/* {ctPillars.map((pillar, idx) => (
                    <Card key={idx} className="text-center">
                        <CardContent className="p-6">
                            <div className="text-2xl mb-2">{pillar.title}</div>
                            <h3 className="text-md font-book">{pillar.scenario}</h3>
                           
                        </CardContent>
                    </Card>
                ))} */}
                <img src={selectedQuest.map}/>
            </div>

        </div>
    )}
    </main>
    <Footer>
        <button className="px-8 py-4 rounded-xl text-white bg-gray-400" onClick={() => navigate("/dashboard ")}>Back</button>
        <button
        className="px-8 py-4 rounded-xl bg-blue-500 text-white"
        onClick={() => {
        navigate("/unit-overview")
    }}>Start your Journey</button>
                </Footer > </ >);
}
