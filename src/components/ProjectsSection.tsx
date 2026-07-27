import { motion } from "framer-motion";
import { CalendarDays, Tag } from "lucide-react";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="section-eyebrow">أعمالنا</span>
          <h2 className="section-title mt-4">من إنجازاتنا السابقة</h2>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-white border border-cream-300 rounded-xl2 p-6 shadow-card"
            >
              <h3 className="font-display font-bold text-navy text-lg">{project.title}</h3>
              <p className="mt-2 text-sm text-ink-light leading-7">{project.description}</p>
              <div className="mt-5 flex items-center gap-4 flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-navy bg-navy-50 px-3 py-1 rounded-full">
                  <Tag size={13} />
                  {project.serviceType}
                </span>
                {project.date && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-ink-light">
                    <CalendarDays size={13} />
                    {project.date}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
