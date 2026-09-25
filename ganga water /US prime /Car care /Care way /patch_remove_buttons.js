const fs = require('fs');
const path = 'city-way-cabs/src/components/hero/Hero.tsx';
let content = fs.readFileSync(path, 'utf8');

const buttonsBlock = `          {/* Mobile Bottom Action Buttons (Call / WhatsApp) */}
          <div className="flex md:hidden gap-3 w-full mt-4 pb-4">
            <a href={\`tel:\${businessData.phone}\`} className="flex-1 bg-navy hover:bg-navy-light text-white rounded-xl py-3.5 font-semibold text-[14.5px] flex items-center justify-center gap-2 transition-colors">
              <Phone size={16} />
              Call Now
            </a>
            <a href={\`https://wa.me/\${businessData.whatsapp}\`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary hover:bg-primary-dark text-white rounded-xl py-3.5 font-semibold text-[14.5px] flex items-center justify-center gap-2 transition-colors">
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>`;

content = content.replace(buttonsBlock, '');
fs.writeFileSync(path, content);
