import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Send, MapPin } from 'lucide-react';

const up = (delay = 0) => ({
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const } },
});

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-g-blue/50 ${
      errors[field]
        ? 'border-g-red'
        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
    }`;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={up()} className="section-label mb-3">Contact</motion.p>
          <motion.h1 variants={up(0.08)} className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Let's Build Something
          </motion.h1>
          <motion.p variants={up(0.14)} className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
            Whether you're launching a startup, scaling a product, or exploring
            AI solutions, I'd love to hear about it.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* left — info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={up()} className="space-y-6 mb-10">
              {[
                {
                  icon: <Mail className="w-5 h-5 text-g-blue" />,
                  bg:   'bg-blue-50 dark:bg-blue-950/50',
                  heading: 'Email',
                  text: 'rorisang@hellorory.dev',
                  sub:  'Best way to reach me',
                },
                {
                  icon: <MapPin className="w-5 h-5 text-g-green" />,
                  bg:   'bg-green-50 dark:bg-green-950/50',
                  heading: 'Location',
                  text: 'Pretoria, South Africa',
                  sub:  'Open to remote & international projects',
                },
              ].map(item => (
                <div key={item.heading} className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.heading}</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{item.text}</p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={up(0.08)}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Find me on</p>
              <div className="flex gap-3">
                {[
                  { href: 'https://www.linkedin.com/in/rorisang-petja-4b663931a/', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                  { href: 'https://github.com/rohree',                              icon: <Github   className="w-5 h-5" />, label: 'GitHub'   },
                  { href: 'https://x.com',                                          icon: <Twitter  className="w-5 h-5" />, label: 'X'        },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-full flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-g-blue hover:text-g-blue dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* right — form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {sent ? (
              <motion.div
                variants={up()}
                className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-3xl p-10 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-g-green flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message sent!</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={stagger}
                onSubmit={handleSubmit}
                noValidate
                className="bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-8 space-y-5"
              >
                <motion.div variants={up()}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Full Name <span className="text-g-red">*</span>
                  </label>
                  <input
                    id="name" name="name" type="text"
                    value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass('name')}
                  />
                  {errors.name && <p className="text-g-red text-xs mt-1.5">{errors.name}</p>}
                </motion.div>

                <motion.div variants={up(0.04)}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Email Address <span className="text-g-red">*</span>
                  </label>
                  <input
                    id="email" name="email" type="email"
                    value={form.email} onChange={handleChange}
                    placeholder="you@company.com"
                    className={inputClass('email')}
                  />
                  {errors.email && <p className="text-g-red text-xs mt-1.5">{errors.email}</p>}
                </motion.div>

                <motion.div variants={up(0.08)}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Message <span className="text-g-red">*</span>
                  </label>
                  <textarea
                    id="message" name="message" rows={5}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <p className="text-g-red text-xs mt-1.5">{errors.message}</p>}
                </motion.div>

                <motion.div variants={up(0.12)}>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 bg-g-blue hover:bg-blue-600 text-white font-semibold py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99]"
                  >
                    {sending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
