import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { Container } from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import { siteImages } from "@/data/images";
import { Calendar, Clock, Globe, MessageCircle, Share2, ArrowRight, User, ShieldCheck } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return constructMetadata({ title: "Post Not Found" });
  return constructMetadata({ title: `${post.title} | Blog`, description: post.excerpt });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="bg-slate-50 pt-12 pb-24">
      <Container className="grid lg:grid-cols-[1fr_350px] gap-12">
        
        {/* Main Content Area */}
        <div className="w-full">
           <div className="text-[10px] font-bold tracking-widest uppercase text-white bg-brand-green px-3 py-1 rounded w-fit mb-6">
             {post.category}
           </div>
           
           <h1 className="text-4xl md:text-[44px] font-black text-brand-deep-navy mb-6 leading-[1.15]">
             {post.title}
           </h1>
           <p className="text-lg text-slate-600 mb-8 font-medium">{post.excerpt}</p>
           
           <div className="flex flex-wrap items-center justify-between pb-8 border-b border-slate-200 mb-8">
             <div className="flex items-center gap-6 text-sm font-bold text-slate-500">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center"><User className="w-5 h-5 text-slate-400"/></div>
                 <div>
                   <div className="font-black text-brand-deep-navy leading-tight">{post.author}</div>
                   <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Travel Expert</div>
                 </div>
               </div>
               <div className="flex items-center gap-2 border-l border-slate-300 pl-6"><Calendar className="w-4 h-4"/> {post.date}</div>
               <div className="flex items-center gap-2 border-l border-slate-300 pl-6"><Clock className="w-4 h-4"/> {post.readTime}</div>
             </div>
             
             <div className="flex items-center gap-3">
               <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Share:</span>
               <div className="flex gap-2">
                 <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors"><Globe className="w-3.5 h-3.5 text-slate-600"/></button>
                 <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors"><MessageCircle className="w-3.5 h-3.5 text-slate-600"/></button>
                 <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors"><Share2 className="w-3.5 h-3.5 text-slate-600"/></button>
               </div>
             </div>
           </div>

           <div className="w-full h-[480px] bg-slate-200 rounded-3xl mb-12 flex items-center justify-center shadow-sm overflow-hidden relative">
              <CloudinaryImage publicId={siteImages.blog.featured.publicId} alt={siteImages.blog.featured.alt} fill priority />
           </div>

           <article className="prose prose-lg max-w-none prose-headings:text-brand-deep-navy prose-a:text-brand-green text-slate-600">
             <p className="font-medium text-[17px] leading-relaxed">{post.content}</p>
             {/* Simulated numbered list based exactly on screenshot style */}
             <div className="space-y-10 mt-12">
               {[1,2,3,4,5].map(num => (
                 <div key={num} className="flex gap-5">
                   <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                     {num}
                   </div>
                   <div>
                     <h3 className="text-xl font-black text-brand-deep-navy mb-2 mt-1">Plan Your Journey Point {num}</h3>
                     <p className="text-slate-600 m-0 leading-relaxed">Check the best routes, expected travel time, and traffic updates. Planning ahead helps you avoid delays and unnecessary stress.</p>
                   </div>
                 </div>
               ))}
             </div>
           </article>

           <div className="mt-16 bg-brand-light-green rounded-3xl p-10 flex items-center justify-between border border-green-100 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10">
                <ShieldCheck className="w-64 h-64 text-brand-green" />
              </div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md border-4 border-green-50">
                  <ShieldCheck className="w-10 h-10 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-brand-deep-navy mb-2">Travel Safe. Travel Smart.</h3>
                  <p className="text-sm text-brand-deep-navy/80 mb-6 font-medium max-w-md">With City Way Cabs, you get verified drivers, clean & comfortable cars and on-time service every time you travel.</p>
                  <button className="bg-brand-green text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-brand-dark-green transition-colors flex items-center gap-2 shadow-premium">
                    Book Your Ride Now <ArrowRight className="w-4 h-4"/>
                  </button>
                </div>
              </div>
           </div>
        </div>

        {/* Sidebar matching screenshot */}
        <div className="w-full space-y-8 mt-12 lg:mt-0">
          
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)]">
            <h3 className="font-black text-2xl text-brand-deep-navy mb-8">About the Author</h3>
            <div className="flex items-center gap-5 mb-6">
               <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center shrink-0 overflow-hidden"><User className="w-6 h-6 text-slate-400"/></div>
               <div>
                 <div className="font-black text-brand-deep-navy text-lg leading-tight mb-1">{post.author}</div>
                 <div className="text-[11px] font-bold uppercase tracking-widest text-brand-text-muted">Travel Expert</div>
               </div>
            </div>
            <p className="text-sm text-slate-600 mb-8 font-medium leading-relaxed">{post.author} is a travel expert with 10+ years of experience in intercity travel and tourism.</p>
            <div className="flex gap-3">
                 <button className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-brand-light-green hover:text-brand-green transition-colors"><Globe className="w-4 h-4"/></button>
                 <button className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-brand-light-green hover:text-brand-green transition-colors"><MessageCircle className="w-4 h-4"/></button>
                 <button className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-brand-light-green hover:text-brand-green transition-colors"><Share2 className="w-4 h-4"/></button>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)]">
            <h3 className="font-black text-2xl text-brand-deep-navy mb-6">Categories</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-sm font-bold text-brand-green bg-brand-light-green p-4 rounded-2xl border border-brand-green/20">
                 <span className="flex items-center gap-3"><ArrowRight className="w-4 h-4"/> Travel Tips</span>
                 <span className="text-brand-green">12</span>
              </li>
              <li className="flex justify-between items-center text-sm font-bold text-brand-deep-navy p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                 <span className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-slate-400"/> Destinations</span>
                 <span className="text-slate-400">7</span>
              </li>
              <li className="flex justify-between items-center text-sm font-bold text-brand-deep-navy p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                 <span className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-slate-400"/> Intercity Travel</span>
                 <span className="text-slate-400">8</span>
              </li>
            </ul>
          </div>

        </div>
      </Container>
    </div>
  );
}
