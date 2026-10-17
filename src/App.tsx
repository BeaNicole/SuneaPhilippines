import { useEffect, useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Mail, MapPin, Menu, Phone, Sun, X } from 'lucide-react';

const projects = [
  { id: '01', name: 'Mesa / 01', place: 'High desert · Utility scale', type: 'Ground mount', size: '18.4 MWp', className: 'landscape-one', metric: 'Illustrative output · 31.2 GWh / yr' },
  { id: '02', name: 'Stillwater Works', place: 'River district · Industrial', type: 'Rooftop', size: '2.8 MWp', className: 'landscape-two', metric: 'Illustrative output · 4.6 GWh / yr' },
  { id: '03', name: 'Northline Commons', place: 'Inland valley · Community', type: 'Canopy + storage', size: '640 kWp', className: 'landscape-three', metric: 'Illustrative storage · 1.2 MWh' },
];

// Replace this image in public/images, or change this path to your image filename.
const solarImage = '/images/solar-image.jpg';

const filters = ['All work', 'Ground mount', 'Rooftop', 'Canopy + storage'];

function BrandMark() {
  return (
    <span className="inline-flex h-12 items-stretch border border-[#292722]/20 bg-[#f6f3eb] text-[#292722]">
      <span className="grid w-12 shrink-0 place-items-center bg-[#e85d20] text-[#fff8e8]">
        <Sun size={21} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span className="flex flex-col justify-center gap-0.5 px-2.5 leading-tight">
        <span className="text-[11px] font-bold uppercase tracking-[.18em]">Sunea</span>
        <span className="text-[8px] uppercase tracking-[.04em]">
          Solar &amp; Lighting<br />Retail OPC
        </span>
      </span>
    </span>
  );
}

function App() {
  const [filter, setFilter] = useState('All work');
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = filter === 'All work' ? projects : projects.filter((project) => project.type === filter);

  useEffect(() => {
    document.title = 'Sunea Solar — Solar Project Highlights';
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute('content', 'Solar project highlights for Sunea Solar & Lighting Retail OPC. Project names and performance figures shown are illustrative samples.');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13 });
    document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page-grain overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#37342d]/10 bg-[#f6f3eb]/90 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="inline-flex items-center" aria-label="Sunea Solar & Lighting Retail OPC, back to top" onClick={closeMenu} data-testid="link-brand">
            <BrandMark />
          </a>
          <nav className="hidden items-center gap-9 text-[12px] font-medium text-[#5e5a51] md:flex" aria-label="Main navigation">
            <a className="nav-link" href="#work">Selected work</a>
            <a className="nav-link" href="#approach">Approach</a>
            <a className="nav-link" href="#impact">By the numbers</a>
          </nav>
          <a href="#work" className="hidden items-center gap-2 rounded-full border border-[#332f29]/25 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[.11em] transition hover:border-[#e85d20] hover:bg-[#e85d20] hover:text-[#fff9ed] md:flex">Explore projects <ArrowDownRight size={14} /></a>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-[#332f29]/20 md:hidden" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
        {menuOpen && <nav className="grid gap-5 border-t border-[#37342d]/10 bg-[#f6f3eb] px-6 py-6 text-sm md:hidden" aria-label="Mobile navigation"><a href="#work" onClick={closeMenu}>Selected work</a><a href="#approach" onClick={closeMenu}>Approach</a><a href="#impact" onClick={closeMenu}>By the numbers</a></nav>}
      </header>

      <main id="top">
        <section className="relative flex min-h-[730px] items-end pt-28 md:min-h-[840px]">
          <div className="absolute inset-0">
            <img src={solarImage} alt="Solar project featured by Sunea Solar" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#211e1a]/85 via-[#211e1a]/15 to-[#211e1a]/10" />
            <div className="absolute inset-0 bg-[#6c4a2e]/10 mix-blend-multiply" />
          </div>
          <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-12 items-end gap-6 px-5 pb-12 sm:px-8 md:pb-16 lg:px-12">
            <div className="col-span-12 md:col-span-9 lg:col-span-8">
              <p className="reveal mb-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[.22em] text-[#f7d77b]"><span className="h-px w-9 bg-[#f7d77b]" /> A living portfolio / 2025</p>
              <h1 className="display reveal delay-1 max-w-[980px] text-[clamp(4rem,10vw,9.3rem)] leading-[.82] text-[#fbf4e5]">Power, in<br />its place.</h1>
              <p className="reveal delay-2 mt-8 max-w-[480px] text-base leading-7 text-[#f3ebdd]/85 md:text-lg">A closer look at solar projects shaped by their surroundings — and the people who make them work.</p>
              <a href="#work" className="reveal delay-3 mt-9 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.16em] text-[#fff8e8]"><span className="grid h-10 w-10 place-items-center rounded-full border border-white/40 transition hover:bg-[#f0b52e] hover:text-[#29251f]"><ArrowDown size={15} /></span> Start exploring</a>
            </div>
            <div className="col-span-12 flex items-end justify-between border-t border-white/30 pt-4 text-[10px] uppercase tracking-[.14em] text-white/75 md:col-span-3 md:justify-end md:border-0 md:pt-0">
              <span>Places in focus</span><span className="mono md:ml-5">01 — 03</span>
            </div>
          </div>
          <div className="sun-orbit absolute right-[12%] top-[20%] hidden h-[138px] w-[138px] rounded-full border border-[#ffe09b]/45 md:block"><span className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-[#f6c54c]" /></div>
        </section>

        <section id="approach" className="relative bg-[#f6f3eb] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mx-auto grid max-w-[1260px] gap-12 md:grid-cols-12 md:gap-8">
            <div className="reveal md:col-span-4"><p className="mono text-[10px] uppercase tracking-[.18em] text-[#e85d20]">01 / The premise</p><div className="mt-8 h-px w-full bg-[#c9c2b3]" /></div>
            <div className="md:col-span-7 md:col-start-6">
              <h2 className="display reveal text-[clamp(2.5rem,5vw,5.2rem)] leading-[.95]">Good energy<br />belongs <span className="text-[#e85d20]">somewhere.</span></h2>
              <div className="reveal delay-1 mt-8 grid gap-6 text-[15px] leading-7 text-[#625d53] sm:grid-cols-2">
                <p>Every site has its own geometry: a roofline to follow, a horizon to respect, a demand curve to meet. The work starts by listening to the place.</p>
                <p>These illustrative studies make that work visible. Not just the panel count, but the careful decisions that turn available sunlight into useful power.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="bg-[#292722] px-5 py-20 text-[#f6f3eb] sm:px-8 md:py-28 lg:px-12">
          <div className="mx-auto max-w-[1260px]">
            <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
              <div><p className="reveal mono text-[10px] uppercase tracking-[.18em] text-[#efb936]">02 / Selected work</p><h2 className="display reveal delay-1 mt-5 text-[clamp(3.3rem,7vw,6.3rem)] leading-[.85]">Three places.<br /><span className="text-[#e85d20]">One bright idea.</span></h2></div>
              <div className="reveal delay-2 max-w-[340px] text-sm leading-6 text-[#c7c0b4]">An illustrative portfolio across landscapes, rooftops and shared spaces. Select a typology to explore.</div>
            </div>
            <div className="reveal mb-8 flex flex-wrap gap-2" aria-label="Filter projects">
              {filters.map((item) => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[.12em] transition ${filter === item ? 'border-[#efb936] bg-[#efb936] text-[#292722]' : 'border-white/20 text-[#d4cec3] hover:border-white/60'}`}>{item}</button>)}
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {visibleProjects.map((project, index) => <article key={project.id} className={`project-card reveal ${index === 0 ? '' : `delay-${index}`} group border border-white/15 bg-[#33312b]`}>
                <a href="#impact" className="block">
                  <div className={`relative h-[250px] overflow-hidden md:h-[300px] ${project.className}`}>
                    <img src={solarImage} alt={`${project.name}, an illustrative solar project`} className="project-image h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#201e1b]/70 to-transparent" />
                    <span className="absolute left-5 top-5 mono text-[10px] text-white/85">{project.id} / CASE STUDY</span>
                    <span className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full border border-white/60 text-white transition group-hover:border-[#efb936] group-hover:bg-[#efb936] group-hover:text-[#292722]"><ArrowUpRight size={16} /></span>
                    <span className="display absolute bottom-4 left-5 text-4xl text-white">{project.name}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-4 text-[10px] uppercase tracking-[.12em] text-[#aaa397]"><span>{project.place}</span><span className="text-[#efb936]">{project.type}</span></div>
                    <div className="mt-6 flex items-end justify-between border-t border-white/15 pt-4"><span className="display text-3xl">{project.size}</span><span className="mono max-w-[145px] text-right text-[9px] leading-4 text-[#bdb6aa]">{project.metric}</span></div>
                  </div>
                </a>
              </article>)}
            </div>
            {visibleProjects.length === 0 && <p className="py-12 text-center text-sm text-[#aaa397]">No projects in this view.</p>}
            <p className="mt-6 text-right mono text-[9px] uppercase tracking-[.1em] text-[#aaa397]">Project names, system sizes and all performance figures are illustrative samples.</p>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#e9b32e] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="absolute -right-28 -top-36 h-[430px] w-[430px] rounded-full border border-[#302a1e]/15 md:right-[8%] md:top-[-55%] md:h-[600px] md:w-[600px]" />
          <div className="absolute -right-12 -top-20 h-[300px] w-[300px] rounded-full border border-[#302a1e]/15 md:right-[14%] md:top-[-37%] md:h-[440px] md:w-[440px]" />
          <div className="relative mx-auto grid max-w-[1260px] gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7"><p className="reveal mono text-[10px] uppercase tracking-[.18em]">03 / Built around the brief</p><h2 className="display reveal delay-1 mt-6 max-w-[780px] text-[clamp(3.5rem,8vw,7.4rem)] leading-[.85]">Different ground.<br />Different answers.</h2></div>
            <p className="reveal delay-2 max-w-[350px] text-sm leading-6 text-[#473c25] md:col-span-4 md:col-start-9">The most effective system is rarely a copy of the last one. We look for the fit between site, use and ambition — then make the infrastructure feel like it belongs.</p>
          </div>
          <div className="relative mx-auto mt-16 max-w-[1260px] border-t border-[#302a1e]/30">
            <div className="grid md:grid-cols-3">
              {[['01', 'Read the site', 'Sun path, structural limits and the shape of the land set the first coordinates.'], ['02', 'Shape the system', 'Generation, storage and connection are balanced against the real use case.'], ['03', 'Make it last', 'Service access, monitoring and thoughtful detailing matter long after commissioning.']].map(([number, title, copy], i) => <div key={number} className={`reveal ${i ? `delay-${i}` : ''} border-b border-[#302a1e]/30 py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0`}>
                <span className="mono text-[10px] text-[#684918]">{number} — METHOD</span><h3 className="display mt-6 text-3xl">{title}</h3><p className="mt-3 max-w-[300px] text-sm leading-6 text-[#51442a]">{copy}</p>
              </div>)}
            </div>
          </div>
        </section>

        <section id="impact" className="bg-[#f6f3eb] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
          <div className="mx-auto max-w-[1260px]">
            <div className="grid gap-10 md:grid-cols-12 md:items-end">
              <div className="md:col-span-6"><p className="reveal mono text-[10px] uppercase tracking-[.18em] text-[#e85d20]">04 / In perspective</p><h2 className="display reveal delay-1 mt-6 text-[clamp(3.4rem,7vw,6.2rem)] leading-[.88]">The work,<br />in <span className="text-[#e85d20]">numbers.</span></h2></div>
              <p className="reveal delay-2 max-w-[370px] text-sm leading-6 text-[#625d53] md:col-span-4 md:col-start-9">A useful way to see the scale of a system is to consider the energy it can make and the role it can play on-site.</p>
            </div>
            <div className="mt-16 grid border-t border-[#c9c2b3] sm:grid-cols-2 lg:grid-cols-4">
              {[['21.8', 'MWp', 'Illustrative combined capacity'], ['37.0', 'GWh', 'Illustrative annual generation'], ['1.2', 'MWh', 'Illustrative storage capacity'], ['03', 'sites', 'Illustrative project studies']].map(([value, unit, caption], i) => <div key={caption} className={`reveal ${i ? `delay-${Math.min(i, 3)}` : ''} border-b border-[#c9c2b3] py-8 sm:pr-5 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0`}>
                <div className="flex items-baseline gap-2"><span className="display text-[clamp(3.5rem,7vw,6rem)] leading-none">{value}</span><span className="mono text-[11px] uppercase text-[#e85d20]">{unit}</span></div>
                <p className="mt-4 max-w-[175px] text-[11px] leading-5 text-[#625d53]">{caption}</p>
              </div>)}
            </div>
            <p className="mono mt-5 text-[9px] uppercase tracking-[.12em] text-[#777064]">All figures on this page are illustrative samples, not measured project results.</p>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#d95c22] px-5 py-24 text-[#fff5e4] sm:px-8 md:py-32 lg:px-12">
          <div className="absolute inset-y-0 right-0 -z-10 w-[52%] opacity-20"><img src={solarImage} alt="" className="h-full w-full object-cover [mask-image:linear-gradient(to_left,black,transparent)]" /></div>
          <div className="mx-auto grid max-w-[1260px] gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8"><p className="reveal mono text-[10px] uppercase tracking-[.18em] text-[#ffdc8e]">05 / The next site is yours</p><h2 className="display reveal delay-1 mt-6 text-[clamp(3.5rem,8vw,7.3rem)] leading-[.84]">Start with<br />the place.</h2></div>
            <div className="reveal delay-2 md:col-span-4"><p className="mb-7 max-w-[310px] text-sm leading-6 text-[#ffead3]">Every project begins with a different question. Explore the studies above, or return to the top and take another look.</p><a href="#work" className="inline-flex items-center gap-3 rounded-full bg-[#f2c34e] px-6 py-4 text-[10px] font-semibold uppercase tracking-[.14em] text-[#30251a] transition hover:bg-[#fff0be]">Back to selected work <ArrowUpRight size={15} /></a></div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#292722] px-5 py-12 text-[#e8e1d5] sm:px-8 md:py-16 lg:px-12">
        <div className="mx-auto max-w-[1260px]">
          <div className="grid gap-10 border-b border-white/20 pb-10 md:grid-cols-[minmax(200px,1fr)_2fr] md:gap-8">
            <a href="#top" className="inline-flex w-fit items-start" aria-label="Sunea Solar & Lighting Retail OPC, back to top" data-testid="link-footer-brand">
              <BrandMark />
            </a>
            <div className="grid gap-8 sm:grid-cols-2">
              <section aria-labelledby="head-office-heading">
                <h2 id="head-office-heading" className="mono text-[10px] font-semibold uppercase tracking-[.14em] text-[#efb936]">Head office</h2>
                <p className="mt-3 text-sm font-medium text-[#f6f3eb]">Sunea Solar &amp; Lighting Retail OPC</p>
                <div className="mt-4 flex gap-3">
                  <Mail size={15} className="mt-0.5 shrink-0 text-[#efb936]" aria-hidden="true" />
                  <a href="mailto:suneasalesph@gmail.com" className="break-all text-xs text-[#e8e1d5] hover:text-[#efb936]" data-testid="link-contact-email">suneasalesph@gmail.com</a>
                </div>
                <div className="mt-3 flex gap-3">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-[#efb936]" aria-hidden="true" />
                  <address className="text-xs not-italic leading-5 text-[#e8e1d5]" data-testid="text-head-office-address">2nd Floor Ysabelle Building, Belfast Avenue,<br />Quezon City, Philippines 1118</address>
                </div>
              </section>
              <section aria-labelledby="branch-heading">
                <h2 id="branch-heading" className="mono text-[10px] font-semibold uppercase tracking-[.14em] text-[#efb936]">Branch</h2>
                <div className="mt-3 flex gap-3">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-[#efb936]" aria-hidden="true" />
                  <address className="text-xs not-italic leading-5 text-[#e8e1d5]" data-testid="text-branch-address">B6 L1-B Mc-Arthur Highway, Juliana City,<br />San Fernando, Pampanga 2000, Philippines</address>
                </div>
                <div className="mt-4 flex gap-3">
                  <Phone size={15} className="mt-0.5 shrink-0 text-[#efb936]" aria-hidden="true" />
                  <a href="tel:0301952813" className="text-xs text-[#e8e1d5] hover:text-[#efb936]" data-testid="link-branch-phone-primary">030 195 2813</a>
                </div>
                <div className="mt-3 flex gap-3">
                  <Phone size={15} className="mt-0.5 shrink-0 text-[#efb936]" aria-hidden="true" />
                  <a href="tel:0458600901" className="text-xs text-[#e8e1d5] hover:text-[#efb936]" data-testid="link-branch-phone-secondary">0458600901</a>
                </div>
              </section>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 pt-6 text-[9px] uppercase tracking-[.13em] sm:flex-row sm:items-center">
            <span className="text-[#a9a297]">Project names, system sizes, and performance figures are illustrative samples</span>
            <a href="#top" className="inline-flex items-center gap-2 hover:text-[#efb936]" data-testid="link-return-to-top">Return to beginning <ArrowUpRight size={13} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
