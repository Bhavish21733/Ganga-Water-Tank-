import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blog";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = constructMetadata({
  title: "Travel Tips & Insights | City Way Cabs Blog",
  description: "Helpful tips, travel guides, and latest updates to make your intercity journeys better.",
});

export default function BlogIndexPage() {
  return (
    <div className="pt-12 pb-24 bg-slate-50 min-h-screen">
      <Container>
        <SectionHeading 
          title="Travel Tips, Guides & Insights" 
          subtitle="Helpful tips, travel guides, and latest updates to make your intercity journeys better."
          align="center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-48 bg-slate-200 w-full overflow-hidden flex items-center justify-center">
                 <span className="text-slate-400">Image Placeholder</span>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-brand-green uppercase tracking-wider mb-2">{post.category}</div>
                <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-green transition-colors">{post.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
