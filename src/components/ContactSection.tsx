import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6">
      <div className="container max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display font-medium tracking-wider uppercase text-sm mb-3">Contact</p>
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
            Let's work together.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            I'm always open to new projects and collaborations. Let's turn your ideas into powerful, growth-driven digital solutions.
          </p>
          
          <a 
            href="mailto:hello@ianbaterna.com" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-lg hover:opacity-90 transition-opacity glow"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>

          <div className="flex justify-center gap-6 mt-12">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
