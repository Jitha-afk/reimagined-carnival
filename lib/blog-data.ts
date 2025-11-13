export interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string[];
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Power of Consistent Learning",
    date: "2024-01-15",
    content: [
      "In today's fast-paced world, continuous learning has become more important than ever. Whether it's picking up a new skill, reading books, or exploring new technologies, the journey of learning never truly ends...",
      "I've found that dedicating just 30 minutes a day to learning something new can compound into significant growth over time. The key is consistency, not intensity."
    ],
    tags: ["Learning", "Personal Growth"]
  },
  {
    id: 2,
    title: "Building Better Habits",
    date: "2024-01-08",
    content: [
      "Habits shape our lives more than we realize. From the moment we wake up to when we go to bed, our daily routines are governed by habits we've built over time...",
      "The secret to building better habits isn't willpower—it's designing systems that make good choices the default option. Start small, stay consistent, and watch transformation happen."
    ],
    tags: ["Productivity", "Habits"]
  },
  {
    id: 3,
    title: "Embracing Minimalism in the Digital Age",
    date: "2023-12-28",
    content: [
      "With endless notifications, apps, and digital distractions, our attention has become fragmented. Minimalism isn't just about owning fewer things—it's about creating space for what truly matters...",
      "I've started applying minimalist principles to my digital life: fewer apps, intentional screen time, and regular digital detoxes. The clarity and focus that results is remarkable."
    ],
    tags: ["Minimalism", "Digital Wellness"]
  }
];
