const fs = require('fs');
const path = 'city-way-cabs/src/components/hero/Hero.tsx';
let content = fs.readFileSync(path, 'utf8');

const oldEyebrow = `<span className="inline-block text-primary font-bold text-[13px] tracking-wide uppercase bg-transparent px-0 md:px-2 md:py-1 md:bg-primary/5 rounded-md">
              Reliable Rides. Always.
            </span>`;

const newEyebrow = `<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 shadow-sm shadow-primary/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary font-bold text-[11px] md:text-[12px] tracking-[0.15em] uppercase">
                Reliable Rides. Always.
              </span>
            </div>`;

content = content.replace(oldEyebrow, newEyebrow);
fs.writeFileSync(path, content);
