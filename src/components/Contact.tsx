"use client";

import { site } from "@/config/site";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

export default function Contact() {

  return (
    <section id="contacto" className="motion-section py-20 bg-gradient-to-br from-blue-50 to-white" data-motion>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="motion-title">Contacto</span>
            </h2>
            <p className="text-lg text-gray-600">
              Escribinos por WhatsApp y te respondemos al toque
            </p>
            <div className="mt-5 flex justify-center">
              <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[#0B5ED7] to-[#084BB0]" />
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-center mb-8">
                <motion.a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center px-8 py-4 bg-[#0B5ED7] text-white font-semibold rounded-xl hover:bg-[#084BB0] transition-all shadow-lg mb-6"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Hablar por WhatsApp
                </motion.a>
              </div>

            <div className="space-y-4 mb-8">
              {[
                { icon: "📞", label: "Teléfono", value: site.phoneInternational },
                { icon: "🕐", label: "Horarios", value: site.hours },
                ...(site.zones ? [{ icon: "📍", label: "Zonas", value: site.zones }] : []),
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    className="text-gray-500"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {item.icon}
                  </motion.span>
                  <div>
                    <p className="font-medium text-gray-900">{item.label}</p>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
