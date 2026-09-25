export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "10-travel-tips-comfortable-intercity-journey",
    title: "10 Travel Tips for a Comfortable Intercity Journey",
    excerpt: "Simple tips to make your long distance travel safe, comfortable and stress-free.",
    content: "Intercity travel opens up new experiences... (Full content goes here in CMS)",
    category: "Travel Tips",
    author: "Ramesh Kumar",
    date: "May 10, 2024",
    readTime: "5 min read"
  }
];
