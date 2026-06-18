import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Rocket, Code2, Zap, Mail,
  Linkedin, Github, Twitter, Globe,
} from 'lucide-react';

import shobbableDashboard from '../assets/shobbable-dashboard.png';
import shobbableStorefront from '../assets/shobbable-storefront.png';
import makwelani from '../assets/makwelani.png';
import fairfare from '../assets/fairfare.png';
import warehouseBoys from '../assets/warehouse-boys.png';
import urbanPlayroom from '../assets/urban-playroom.png';

/* ─── animation helpers ──────────────────────────────────── */
const ease = [0.25, 0.46, 0.45, 0.94] as const;

const up = (delay = 0) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease } },
});

const slideIn = (delay = 0) => ({
  hidden:  { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, delay, ease } },
});

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const inView = { once: true, margin: '-80px' };

/* ─── reusable components ────────────────────────────────── */

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  company: string;
  bg: string;
  delay: number;
}
const RoleCard: React.FC<RoleCardProps> = ({ icon, title, company, bg, delay }) => (
  <motion.div
    variants={slideIn(delay)}
    className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 flex items-center gap-4 shadow-card hover:shadow-card-hover transition-shadow duration-300"
  >
    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${bg}`}>
      {icon}
    </div>
    <div>
      <p className="font-semibold text-gray-900 dark:text-white text-sm leading-tight">{title}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{company}</p>
    </div>
  </motion.div>
);

interface FocusCardProps {
  icon: React.ReactNode;
  title: string;
  company: string;
  description: string;
  iconBg: string;
  labelColor: string;
}
const FocusCard: React.FC<FocusCardProps> = ({
  icon, title, company, description, iconBg, labelColor,
}) => (
  <motion.div
    variants={up()}
    className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
  >
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shrink-0 ${iconBg}`}>
      {icon}
    </div>
    <span className={`text-xs font-semibold uppercase tracking-wider mb-1 ${labelColor}`}>{company}</span>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  gradient: string;
  delay: number;
  image?: string;
  liveUrl?: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title, description, techs, gradient, delay, image, liveUrl,
}) => (
  <motion.div
    variants={up(delay)}
    className="group bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
  >
    {image ? (
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          loading="lazy"
        />
      </div>
    ) : (
      <div className={`h-44 ${gradient} relative flex items-center justify-center`}>
        <span className="text-white/[0.15] font-black text-8xl select-none leading-none">
          {title[0]}
        </span>
      </div>
    )}
    <div className="p-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {techs.map(t => (
            <span
              key={t}
              className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
              {t}
            </span>
          ))}
        </div>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title}`}
            className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-g-blue hover:text-g-blue dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200"
          >
            <Globe className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

/* ─── data ───────────────────────────────────────────────── */

const TECH_STACK = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Express',
  'Firebase', 'AWS', 'Docker', 'MySQL', 'PostgreSQL',
  'Tailwind CSS', 'OpenAI APIs',
];

const EXPERIENCE = [
  {
    title: 'Tech Lead',
    company: 'Yelah',
    period: '2024 – Present',
    dot: 'bg-g-green',
    description: 'Leading engineering teams and architecture decisions, scaling technical infrastructure while mentoring developers and driving product velocity.',
  },
  {
    title: 'Founder',
    company: 'Shobbable',
    period: '2023 – Present',
    dot: 'bg-g-blue',
    description: 'Building a creator-commerce platform from the ground up — product strategy, design, engineering, payments infrastructure, and go-to-market execution.',
  },
  {
    title: 'Product Engineer',
    company: 'Various Startup & Client Projects',
    period: '2020 – 2024',
    dot: 'bg-purple-500',
    description: 'Shipped products across SaaS, ecommerce, fintech, and marketplace verticals. Focused on turning ideas into working, revenue-generating software.',
  },
];

/* ─── page ───────────────────────────────────────────────── */

const Home: React.FC = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main className="bg-white dark:bg-gray-950">

      {/* ════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 pb-20 overflow-hidden">
        {/* dot-grid background */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            opacity: 0.5,
          }}
        />
        {/* top + bottom fade */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-transparent to-white dark:from-gray-950 dark:via-transparent dark:to-gray-950"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* left — copy */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={up(0)}>
                <span className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-g-blue dark:text-blue-400 border border-blue-100 dark:border-blue-900 mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-g-green animate-pulse" />
                  Based in Pretoria, South Africa
                </span>
              </motion.div>

              <motion.h1
                variants={up(0.08)}
                className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.07] tracking-tight mb-6"
              >
                Building products that help{' '}
                <span className="text-g-blue">businesses grow.</span>
              </motion.h1>

              <motion.p
                variants={up(0.16)}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-[520px]"
              >
                I'm Rorisang Petja, a Tech Lead at Yelah and founder of Shobbable.
                I design, build, and launch digital products that solve real
                business problems.
              </motion.p>

              <motion.div variants={up(0.24)} className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo('work')}
                  className="inline-flex items-center gap-2 bg-g-blue hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98]"
                >
                  View My Work <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo('shobbable')}
                  className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-full border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-g-blue hover:text-g-blue dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200 active:scale-[0.98]"
                >
                  Explore Shobbable
                </button>
              </motion.div>
            </motion.div>

            {/* right — role cards */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="hidden lg:flex flex-col gap-4 max-w-sm ml-auto"
            >
              <RoleCard
                icon={<Rocket className="w-5 h-5 text-g-blue" />}
                title="Startup Founder"
                company="Shobbable"
                bg="bg-blue-50 dark:bg-blue-950/50"
                delay={0.35}
              />
              <RoleCard
                icon={<Code2 className="w-5 h-5 text-g-green" />}
                title="Tech Lead"
                company="Yelah"
                bg="bg-green-50 dark:bg-green-950/50"
                delay={0.45}
              />
              <RoleCard
                icon={<Zap className="w-5 h-5 text-g-yellow" />}
                title="Product Builder"
                company="Independent Projects"
                bg="bg-yellow-50 dark:bg-yellow-950/50"
                delay={0.55}
              />

              {/* stat chips */}
              <motion.div variants={slideIn(0.65)} className="grid grid-cols-3 gap-3 mt-2">
                {[
                  { value: '4+', label: 'Years building' },
                  { value: '10+', label: 'Products shipped' },
                  { value: '2',   label: 'Active roles' },
                ].map(s => (
                  <div
                    key={s.label}
                    className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-4 text-center shadow-sm"
                  >
                    <p className="text-2xl font-bold text-gray-900 dark:text-white leading-none">{s.value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          ABOUT
      ════════════════════════════════════════════════════ */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="py-24 bg-gray-50 dark:bg-gray-900/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p variants={up()} className="section-label mb-3">About</motion.p>
              <motion.h2 variants={up(0.08)} className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Building technology that moves businesses forward.
              </motion.h2>
            </div>
            <div>
              <motion.p variants={up(0.08)} className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                I'm a software engineer, entrepreneur, and product builder based in
                South Africa. My focus is creating technology that helps businesses
                sell, operate, and grow online.
              </motion.p>
              <motion.p variants={up(0.14)} className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                Over the years I've worked across SaaS, ecommerce, AI automation,
                fintech, and marketplace products.
              </motion.p>
              <motion.p variants={up(0.20)} className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Today I lead technical initiatives at Yelah while building Shobbable,
                a platform helping creators and merchants monetize their audiences.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ════════════════════════════════════════════════════
          CURRENT FOCUS
      ════════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={up()} className="text-center mb-14">
            <p className="section-label mb-3">Current Focus</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              What I'm working on
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <FocusCard
              icon={<Rocket className="w-6 h-6 text-g-blue" />}
              title="Founder"
              company="Shobbable"
              description="Building a creator-commerce platform that helps creators and merchants monetize their audiences through customizable storefronts, payments, and commerce tools."
              iconBg="bg-blue-50 dark:bg-blue-950/50"
              labelColor="text-g-blue dark:text-blue-400"
            />
            <FocusCard
              icon={<Code2 className="w-6 h-6 text-g-green" />}
              title="Tech Lead"
              company="Yelah"
              description="Leading technical initiatives, architecture decisions, and engineering execution while helping scale products and teams."
              iconBg="bg-green-50 dark:bg-green-950/50"
              labelColor="text-g-green dark:text-green-400"
            />
            <FocusCard
              icon={<Zap className="w-6 h-6 text-g-yellow" />}
              title="Builder"
              company="Independent Projects"
              description="Experimenting with AI, automation, ecommerce systems, fintech products, and marketplace platforms."
              iconBg="bg-yellow-50 dark:bg-yellow-950/50"
              labelColor="text-yellow-600 dark:text-yellow-400"
            />
          </div>
        </div>
      </motion.section>

      {/* ════════════════════════════════════════════════════
          SHOBBABLE
      ════════════════════════════════════════════════════ */}
      <motion.section
        id="shobbable"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="py-24 bg-gray-50 dark:bg-gray-900/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* copy */}
            <div>
              <motion.div variants={up()}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-g-blue dark:text-blue-400 border border-blue-100 dark:border-blue-900 mb-6 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-g-blue" />
                  Featured Startup
                </span>
              </motion.div>

              <motion.h2 variants={up(0.08)} className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                Building Shobbable
              </motion.h2>

              <motion.p variants={up(0.14)} className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                Shobbable is a creator-commerce platform that helps creators turn
                their audience into customers.
              </motion.p>

              <motion.p variants={up(0.20)} className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                The platform enables users to create storefronts, sell products,
                accept payments, and manage their online business from a single link.
              </motion.p>

              <motion.div variants={up(0.26)} className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  My Role
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Founder', 'Product Designer', 'Software Engineer'].map(r => (
                    <span
                      key={r}
                      className="text-sm font-medium px-4 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={up(0.32)}>
                <a
                  href="https://shobbable.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-g-blue hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <Globe className="w-4 h-4" />
                  Visit Shobbable
                </a>
              </motion.div>
            </div>

            {/* product showcase */}
            <motion.div variants={up(0.16)} className="space-y-4">
              {/* main screenshot in browser frame */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl">
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 flex items-center gap-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-g-red" />
                    <span className="w-3 h-3 rounded-full bg-g-yellow" />
                    <span className="w-3 h-3 rounded-full bg-g-green" />
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-700 rounded-md px-4 py-1 text-xs text-gray-400 text-center mx-2">
                    shobbable.com
                  </div>
                </div>
                <img
                  src={shobbableDashboard}
                  alt="Shobbable analytics dashboard"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* two thumbnail screenshots */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md">
                  <img src={shobbableStorefront} alt="Shobbable storefront customisation" className="w-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md">
                  <img src={shobbableDashboard} alt="Shobbable analytics" className="w-full object-cover" loading="lazy" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ════════════════════════════════════════════════════
          SELECTED PROJECTS
      ════════════════════════════════════════════════════ */}
      <motion.section
        id="work"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={up()} className="mb-14">
            <p className="section-label mb-3">Selected Projects</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Products I've built
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Warehouse Boys"
              description="Full e-commerce website with a custom CMS, ClickUp API integration for order management, and Google Maps API for store location and delivery."
              techs={['React', 'Sanity CMS', 'ClickUp API', 'Google Maps', 'PayFast']}
              gradient="bg-gradient-to-br from-g-blue to-blue-700"
              image={warehouseBoys}
              liveUrl="https://warehouseboys.co.za"
              delay={0.08}
            />
            <ProjectCard
              title="Urban Playroom SA"
              description="Lead generation website for a local printing business — multi-step quote form, SendGrid email automation, and Google & Facebook Pixel tracking."
              techs={['React', 'SendGrid', 'Google Pixel', 'Facebook Pixel']}
              gradient="bg-gradient-to-br from-g-green to-emerald-700"
              image={urbanPlayroom}
              liveUrl="https://www.urbanplayroomsa.co.za/"
              delay={0.16}
            />
            <ProjectCard
              title="Makwelani"
              description="A landing page for a non-profit helping small orphanages and children's homes meet legal, safety, and compliance standards — so every child can grow up protected."
              techs={['React', 'Tailwind CSS', 'Non-profit']}
              gradient="bg-gradient-to-br from-purple-500 to-violet-700"
              image={makwelani}
              liveUrl="https://makwelani-org.netlify.app/"
              delay={0.24}
            />
            <ProjectCard
              title="FairFare"
              description="One platform for Finance, Procurement & Travel teams. Combines decision intelligence and corporate booking to ensure every trip is optimised, compliant, and executed seamlessly."
              techs={['React', 'Tailwind CSS', 'SaaS', 'B2B']}
              gradient="bg-gradient-to-br from-g-red to-rose-700"
              image={fairfare}
              liveUrl="https://fairfare-landing-page.netlify.app/"
              delay={0.32}
            />
          </div>
        </div>
      </motion.section>

      {/* ════════════════════════════════════════════════════
          EXPERIENCE
      ════════════════════════════════════════════════════ */}
      <motion.section
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="py-24 bg-gray-50 dark:bg-gray-900/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={up()} className="mb-14">
            <p className="section-label mb-3">Experience</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Where I've worked
            </h2>
          </motion.div>

          <div className="max-w-2xl">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.title + exp.company}
                variants={up(i * 0.1)}
                className="relative flex gap-8 pb-12 last:pb-0"
              >
                {/* timeline spine */}
                <div className="flex flex-col items-center pt-2 w-3 shrink-0">
                  <span className={`w-3 h-3 rounded-full ${exp.dot} z-10`} />
                  {i < EXPERIENCE.length - 1 && (
                    <span className="w-px flex-1 bg-gray-200 dark:bg-gray-700 mt-2" />
                  )}
                </div>
                {/* content */}
                <div className="-mt-0.5">
                  <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <span className="text-gray-500 dark:text-gray-400 font-medium">{exp.company}</span>
                  </div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 font-medium">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ════════════════════════════════════════════════════
          TECH STACK
      ════════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={up()} className="text-center mb-14">
            <p className="section-label mb-3">Tech Stack</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Tools I build with
            </h2>
          </motion.div>

          <motion.div variants={up(0.08)} className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map(tech => (
              <span
                key={tech}
                className="text-sm font-medium px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-transparent hover:border-g-blue/40 hover:text-g-blue dark:hover:text-blue-400 transition-all duration-200 cursor-default select-none"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ════════════════════════════════════════════════════
          PHILOSOPHY
      ════════════════════════════════════════════════════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="py-28 bg-gray-900 dark:bg-gray-950"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p variants={up()} className="text-g-blue font-medium text-sm uppercase tracking-widest mb-6">
            How I Think
          </motion.p>
          <motion.blockquote
            variants={up(0.08)}
            className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-8"
          >
            "Great products are built where technology meets real business problems."
          </motion.blockquote>
          <motion.p variants={up(0.14)} className="text-gray-400 text-lg leading-relaxed mb-4">
            I enjoy turning ideas into products that customers actually use and pay for.
          </motion.p>
          <motion.p variants={up(0.20)} className="text-gray-400 text-lg leading-relaxed">
            Whether I'm leading engineering teams, building startups, or experimenting
            with new technologies, my focus remains the same: creating solutions that
            deliver measurable value.
          </motion.p>
        </div>
      </motion.section>

      {/* ════════════════════════════════════════════════════
          CONTACT
      ════════════════════════════════════════════════════ */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={inView}
        variants={stagger}
        className="py-28"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p variants={up()} className="section-label mb-3">Contact</motion.p>
          <motion.h2 variants={up(0.08)} className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Let's Build Something
          </motion.h2>
          <motion.p variants={up(0.14)} className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you're launching a startup, scaling a product, or exploring
            AI solutions, I'd love to hear about it.
          </motion.p>

          <motion.div variants={up(0.20)} className="flex flex-wrap justify-center gap-4 mb-14">
            <a
              href="mailto:rorisang@hellorory.dev"
              className="inline-flex items-center gap-3 bg-g-blue hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              rorisang@hellorory.dev
            </a>
          </motion.div>

          <motion.div variants={up(0.26)} className="flex justify-center gap-4">
            {[
              {
                href:  'https://www.linkedin.com/in/rorisang-petja-4b663931a/',
                label: 'LinkedIn',
                icon:  <Linkedin className="w-5 h-5" />,
              },
              {
                href:  'https://github.com/rohree',
                label: 'GitHub',
                icon:  <Github className="w-5 h-5" />,
              },
              {
                href:  'https://x.com',
                label: 'X / Twitter',
                icon:  <Twitter className="w-5 h-5" />,
              },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-g-blue hover:text-g-blue dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.section>

    </main>
  );
};

export default Home;
