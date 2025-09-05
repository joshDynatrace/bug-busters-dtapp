export interface QuizQuestion {
  id: number;
  bugHeading: string;
  bugDescription: string;
  hints: string[];
  question: string;
  answers: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
}

export const QUIZ_TIMER_INITIAL = 1800; // 30 minutes in seconds
export const POINTS_PER_CORRECT_ANSWER = 100;

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    bugHeading: "Play Bugzappers and Clear the Scores",
    bugDescription: "There are a few bugs in the Bugzapper app and your mission is to find them by investigating the application and using Dynatrace to help your investigation. Open the bugzappers game in your browser (if its not open, go to the codespaces 'Ports' tab and open the app on port 30200 in your browser). To start, play a game to make sure there are some top scores on the scoreboard.",
    hints: [
      "Try to clear the scores from the Top Scores. What do you notice?",
      "Try to use the Distributed Tracing App to understand which API calls are being made. Filter on the asteroids-game service. Press 'ctrl/cmd + K' in Dynatrace and type 'Distributed Tracing' to find the app",
      "Use the Live Debugger to set a breakpoint in the part of the code that's responsible for clearing the scores. Press 'ctrl/cmd + K' in Dynatrace and type 'Live Debugger' to find the app. Click the purple pencil icon to set a Live Debugger filter. Use the bugzapper namespace as the filter. The source code repository should populate automatically."
    ],
    question: "What is the most likely cause of a memory leak in the user authentication system?",
    answers: [
      {
        id: "a",
        text: "Using too many CSS animations",
        isCorrect: false
      },
      {
        id: "b",
        text: "Event listeners not being removed on component unmount",
        isCorrect: true
      },
      {
        id: "c",
        text: "Having too many API endpoints",
        isCorrect: false
      },
      {
        id: "d",
        text: "Using inline styles instead of CSS classes",
        isCorrect: false
      }
    ]
  },
  {
    id: 2,
    bugHeading: "Bug in Past Game Stats",
    bugDescription: "Now that you've played a game, you can view your game stats by clicking on the 'View Game Stats' button. Now click on 'Past Game Stats' to view the past game stats. What do you notice?",
    hints: [
      "Try to use the Distributed Tracing App to understand which API calls are being made. Filter on the asteroids-game service.",
      "Go to the Asteroids Game service in the Services app and check out the Logs. Notice there are some failures. Press 'ctrl/cmd + K' in Dynatrace and type 'Services' to find the app.",
      "Based on the error logs, use the Live Debugger to set a breakpoint in the part of the code that is responsible for storing the game stats when a game ends."
    ],
    question: "Which scenario is most likely to cause an infinite loop in data processing?",
    answers: [
      {
        id: "a",
        text: "Using forEach instead of map for array operations",
        isCorrect: false
      },
      {
        id: "b",
        text: "A recursive function without a proper base case",
        isCorrect: true
      },
      {
        id: "c",
        text: "Loading too much data at once",
        isCorrect: false
      },
      {
        id: "d",
        text: "Using synchronous operations instead of async",
        isCorrect: false
      }
    ]
  },
  {
    id: 3,
    bugHeading: "Todo App: Clear Completed Tasks",
    bugDescription: "Now that you're an expert bug finder from finding bugs in the Bugzapper game, let's look at another app - the Todo App. There are a few bugs in the app that we'll need to investigate. Open the Todo app and add a few tasks. Complete some of them by clicking to the left of the task and then Clear the completed tasks. What happens?",
    hints: [
      "Open up the distributed traces app to make sure API calls work as expected and understand which calls were made to the backend. Press 'ctrl/cmd + K' in Dynatrace and type 'Distributed Tracing' to find the app.",
      "Open the Live Debugger to set a breakpoint in the the function called when you clear Todos. Press 'ctrl/cmd + K' in Dynatrace and type 'Live Debugger' to find the app. Click the purple pencil icon to set a Live Debugger filter. Use the namespace todoapp as your Live Debugger filter.",
      "Why are the Todo tasks not getting cleared after looking at the code?"
    ],
    question: "What's the best way to prevent race conditions when making multiple API calls?",
    answers: [
      {
        id: "a",
        text: "Make all API calls synchronous",
        isCorrect: false
      },
      {
        id: "b",
        text: "Use proper async/await with Promise.all() or sequential execution",
        isCorrect: true
      },
      {
        id: "c",
        text: "Add random delays between API calls",
        isCorrect: false
      },
      {
        id: "d",
        text: "Cache all API responses permanently",
        isCorrect: false
      }
    ]
  },
  {
    id: 4,
    bugHeading: "Todo App: Issue with Special Characters",
    bugDescription: "Let's add a todo task with some special characters such as exclamation points. What do you notice? Where is the bug?",
    hints: [
      "Use the distributed tracing app to filter traces based on the app name, kubernetes namespace, or workload names to see which services are being called. Press 'ctrl/cmd + K' in Dynatrace and type 'Distributed Tracing' to find the app.",
      "Use the Live Debugger to set a breakpoint in the part of the code you found to analyze the data. Press 'ctrl/cmd + K' in Dynatrace and type 'Live Debugger' to find the app. Click the purple pencil icon to set a Live Debugger filter. Use the namespace todoapp as your Live Debugger filter.",
      "What's happening to the todotitle as it gets added to our list of todos?"
    ],
    question: "What's the most effective way to optimize React component rendering performance?",
    answers: [
      {
        id: "a",
        text: "Use inline functions for all event handlers",
        isCorrect: false
      },
      {
        id: "b",
        text: "Implement React.memo() and useMemo() strategically",
        isCorrect: true
      },
      {
        id: "c",
        text: "Avoid using useState hook",
        isCorrect: false
      },
      {
        id: "d",
        text: "Render all components at the same time",
        isCorrect: false
      }
    ]
  }
];
