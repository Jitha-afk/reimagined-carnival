export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  gradient: string;
  status: 'reading' | 'completed';
  progress?: number;
  completedDate?: string;
  icon: string;
}

export const currentlyReading: Book[] = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    description: "An easy and proven way to build good habits and break bad ones.",
    gradient: "from-indigo-500 to-purple-600",
    status: "reading",
    progress: 65,
    icon: "📖"
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    description: "Rules for focused success in a distracted world.",
    gradient: "from-pink-500 to-rose-500",
    status: "reading",
    progress: 40,
    icon: "📖"
  },
  {
    id: 3,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description: "A tour of the mind and explains the two systems that drive the way we think.",
    gradient: "from-cyan-400 to-blue-500",
    status: "reading",
    progress: 25,
    icon: "📖"
  }
];

export const completedBooks: Book[] = [
  {
    id: 4,
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    description: "A guide to wealth and happiness based on Naval's wisdom.",
    gradient: "from-pink-400 to-yellow-300",
    status: "completed",
    completedDate: "December 2023",
    icon: "✓"
  },
  {
    id: 5,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description: "A brief history of humankind from the Stone Age to the modern age.",
    gradient: "from-teal-400 to-indigo-900",
    status: "completed",
    completedDate: "November 2023",
    icon: "✓"
  },
  {
    id: 6,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description: "Timeless lessons on wealth, greed, and happiness.",
    gradient: "from-emerald-300 to-pink-200",
    status: "completed",
    completedDate: "October 2023",
    icon: "✓"
  },
  {
    id: 7,
    title: "Essentialism",
    author: "Greg McKeown",
    description: "The disciplined pursuit of less but better.",
    gradient: "from-rose-400 to-pink-200",
    status: "completed",
    completedDate: "September 2023",
    icon: "✓"
  },
  {
    id: 8,
    title: "Can't Hurt Me",
    author: "David Goggins",
    description: "Master your mind and defy the odds through mental toughness.",
    gradient: "from-amber-200 to-orange-400",
    status: "completed",
    completedDate: "August 2023",
    icon: "✓"
  },
  {
    id: 9,
    title: "The 4-Hour Work Week",
    author: "Tim Ferriss",
    description: "Escape the 9-5, live anywhere, and join the new rich.",
    gradient: "from-red-400 to-blue-200",
    status: "completed",
    completedDate: "July 2023",
    icon: "✓"
  }
];
