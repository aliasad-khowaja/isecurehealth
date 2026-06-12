"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "es";

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({
  language: "en",
  setLanguage: () => undefined,
});

const spanish: Record<string, string> = {
  "Home": "Inicio",
  "About": "Nosotros",
  "About Us": "Sobre nosotros",
  "Services": "Servicios",
  "How It Works": "Cómo funciona",
  "Contact": "Contacto",
  "Free Consultation": "Consulta gratuita",
  "Get Free Consultation": "Obtén una consulta gratuita",
  "View Services": "Ver servicios",
  "Learn more": "Más información",
  "Get a Quote": "Solicitar cotización",
  "Explore": "Explorar",
  "Get In Touch": "Contáctanos",
  "Start With Confidence": "Comienza con confianza",
  "Personal guidance to help individuals and families find healthcare coverage that fits their needs and budget.": "Orientación personal para ayudar a personas y familias a encontrar cobertura médica que se adapte a sus necesidades y presupuesto.",
  "Get clear, personalized support at no cost to you.": "Recibe apoyo claro y personalizado sin costo.",
  "Request a Consultation": "Solicitar una consulta",
  "Privacy Policy": "Política de privacidad",
  "All rights reserved.": "Todos los derechos reservados.",
  "Mon–Fri: 9 AM–6 PM": "Lun–Vie: 9 AM–6 PM",
  "Sat–Sun: Closed": "Sáb–Dom: Cerrado",

  "Personal healthcare guidance": "Orientación médica personalizada",
  "Affordable healthcare starts with a conversation.": "La atención médica asequible comienza con una conversación.",
  "iSecure Health helps individuals and families understand their options and find healthcare solutions that fit their lives, needs, and budgets.": "iSecure Health ayuda a personas y familias a comprender sus opciones y encontrar soluciones de salud que se adapten a sus vidas, necesidades y presupuestos.",
  "Personalized support": "Apoyo personalizado",
  "No-cost consultation": "Consulta sin costo",
  "Healthcare that fits you": "Atención médica que se adapta a ti",
  "Real people.": "Personas reales.",
  "Clear answers.": "Respuestas claras.",
  "Better options.": "Mejores opciones.",
  "You don’t have to navigate healthcare decisions alone. We bring patience, clarity, and personal attention to every conversation.": "No tienes que tomar decisiones de salud por tu cuenta. Aportamos paciencia, claridad y atención personal a cada conversación.",
  "personal guidance": "orientación personal",
  "Local": "Local",
  "Houston-area service": "servicio en el área de Houston",
  "Guidance you can trust": "Orientación en la que puedes confiar",
  "We are here to help": "Estamos aquí para ayudarte",
  "Find health coverage that’s right for you": "Encuentra la cobertura médica adecuada para ti",
  "Medicare & Medicaid Options": "Opciones de Medicare y Medicaid",
  "Understand available coverage and find support that fits your healthcare needs and budget.": "Comprende la cobertura disponible y encuentra apoyo que se adapte a tus necesidades médicas y presupuesto.",
  "Health Insurance Options": "Opciones de seguro médico",
  "Explore personalized health insurance solutions for individuals and families.": "Explora soluciones de seguro médico personalizadas para personas y familias.",
  "Life Insurance Options": "Opciones de seguro de vida",
  "Help protect the people you love with coverage shaped around your family’s future.": "Ayuda a proteger a tus seres queridos con cobertura diseñada para el futuro de tu familia.",
  "Employer & Group Insurance": "Seguro para empleadores y grupos",
  "Practical coverage guidance for businesses, teams, and growing organizations.": "Orientación práctica de cobertura para empresas, equipos y organizaciones en crecimiento.",
  "Travel & Short-Term Insurance": "Seguro de viaje y a corto plazo",
  "Flexible protection for travel, temporary needs, and periods of transition.": "Protección flexible para viajes, necesidades temporales y períodos de transición.",
  "Dental & Vision Insurance": "Seguro dental y de visión",
  "Round out your healthcare coverage with options for routine dental and vision care.": "Completa tu cobertura médica con opciones de atención dental y de visión de rutina.",
  "Why iSecure Health": "Por qué iSecure Health",
  "Personal attention makes all the difference.": "La atención personal marca la diferencia.",
  "Healthcare is personal. Your guidance should be too. We take the time to listen, understand, and help you move forward without pressure.": "La atención médica es personal. Tu orientación también debe serlo. Nos tomamos el tiempo para escuchar, comprender y ayudarte a avanzar sin presión.",
  "Clear, honest guidance": "Orientación clara y honesta",
  "We explain your options in plain language so you can make an informed choice.": "Explicamos tus opciones con palabras sencillas para que puedas tomar una decisión informada.",
  "Your family, health priorities, and budget shape every recommendation.": "Tu familia, prioridades de salud y presupuesto dan forma a cada recomendación.",
  "People-first service": "Servicio centrado en las personas",
  "You receive patient, attentive help from the first conversation onward.": "Recibes ayuda paciente y atenta desde la primera conversación.",
  "Less stress, more clarity": "Menos estrés, más claridad",
  "We simplify a complicated process and stay available when questions come up.": "Simplificamos un proceso complicado y estamos disponibles cuando surgen preguntas.",
  "A simpler way forward": "Una manera más sencilla de avanzar",
  "How it works": "Cómo funciona",
  "Three straightforward steps. One supportive guide from start to finish.": "Tres pasos sencillos. Un guía atento de principio a fin.",
  "Tell us what you need": "Cuéntanos qué necesitas",
  "Share your priorities, budget, and any questions in a free conversation.": "Comparte tus prioridades, presupuesto y preguntas en una conversación gratuita.",
  "Review clear options": "Revisa opciones claras",
  "We help you compare suitable healthcare solutions without the confusion.": "Te ayudamos a comparar soluciones de salud adecuadas sin confusión.",
  "Choose with confidence": "Elige con confianza",
  "Get personal guidance as you make the choice that feels right for you.": "Recibe orientación personal mientras tomas la decisión adecuada para ti.",
  "Our achievements": "Nuestros logros",
  "Recognition earned through service and dedication": "Reconocimiento obtenido mediante servicio y dedicación",
  "We’re proud to be recognized by trusted healthcare and insurance partners for our commitment to the people we serve.": "Nos enorgullece el reconocimiento de socios confiables de salud y seguros por nuestro compromiso con las personas a quienes servimos.",
  "Certificates": "Certificados",
  "Achievement Badges": "Insignias de logros",
  "2022 Certificate of Recognition": "Certificado de reconocimiento 2022",
  "2023 Certificate of Recognition": "Certificado de reconocimiento 2023",
  "2024 Certificate of Recognition": "Certificado de reconocimiento 2024",
  "2025 Certificate of Recognition": "Certificado de reconocimiento 2025",
  "2026 Medicare Training Certificate": "Certificado de capacitación de Medicare 2026",
  "2019 Circle of Champions Badge": "Insignia Círculo de Campeones 2019",
  "2020 Elite Circle of Champions Badge": "Insignia Élite Círculo de Campeones 2020",
  "2021 Elite Circle of Champions Badge": "Insignia Élite Círculo de Campeones 2021",
  "2022 Elite Circle of Champions Badge": "Insignia Élite Círculo de Campeones 2022",
  "2023 Elite Circle of Champions Badge": "Insignia Élite Círculo de Campeones 2023",
  "2024 Elite Circle of Champions Badge": "Insignia Élite Círculo de Campeones 2024",
  "2025 Elite Circle of Champions Badge": "Insignia Élite Círculo de Campeones 2025",
  "Leading healthcare partners": "Socios líderes en atención médica",
  "Our trusted providers": "Nuestros proveedores de confianza",
  "Connecting you with respected health insurance providers so you can explore coverage with confidence.": "Te conectamos con proveedores de seguros médicos respetados para que explores la cobertura con confianza.",
  "Client experiences": "Experiencias de clientes",
  "Support that people remember": "Apoyo que las personas recuerdan",
  "“The process finally made sense.”": "“El proceso finalmente tuvo sentido.”",
  "iSecure Health explained everything clearly and helped me feel confident about my family’s next step.": "iSecure Health explicó todo claramente y me ayudó a sentir confianza sobre el próximo paso de mi familia.",
  "“Patient, helpful, and easy to reach.”": "“Paciente, servicial y fácil de contactar.”",
  "I never felt rushed or pressured. Every question was answered with care.": "Nunca me sentí apresurado ni presionado. Cada pregunta fue respondida con atención.",
  "“Exactly the guidance we needed.”": "“Exactamente la orientación que necesitábamos.”",
  "They listened to what mattered to us and made a complicated decision feel manageable.": "Escucharon lo que era importante para nosotros e hicieron que una decisión complicada fuera manejable.",
  "Houston-area client": "Cliente del área de Houston",
  "Individual client": "Cliente individual",
  "Family client": "Cliente familiar",

  "About iSecure Health": "Sobre iSecure Health",
  "Healthcare guidance with a human touch.": "Orientación médica con un toque humano.",
  "We believe everyone deserves to understand their healthcare choices and feel confident about the path forward.": "Creemos que todos merecen comprender sus opciones de atención médica y sentirse seguros del camino a seguir.",
  "Our approach": "Nuestro enfoque",
  "We put your needs before the paperwork.": "Ponemos tus necesidades antes que el papeleo.",
  "“Our purpose is simple: listen closely, explain clearly, and help every client make a choice that supports their health and financial well-being.”": "“Nuestro propósito es sencillo: escuchar atentamente, explicar con claridad y ayudar a cada cliente a elegir una opción que apoye su salud y bienestar financiero.”",
  "Healthcare options can feel complicated, but choosing one doesn’t have to. iSecure Health brings personal attention and practical guidance to individuals and families throughout Houston and surrounding communities.": "Las opciones de atención médica pueden parecer complicadas, pero elegir una no tiene por qué serlo. iSecure Health brinda atención personal y orientación práctica a personas y familias en Houston y comunidades cercanas.",
  "We take time to learn what matters to you, answer questions in plain language, and help you consider solutions that align with your needs. No pressure. No one-size-fits-all recommendations. Just thoughtful support.": "Nos tomamos el tiempo para conocer lo que te importa, responder preguntas con palabras sencillas y ayudarte a considerar soluciones alineadas con tus necesidades. Sin presión. Sin recomendaciones genéricas. Solo apoyo atento.",
  "What guides us": "Lo que nos guía",
  "Values you can feel in every conversation": "Valores que puedes sentir en cada conversación",
  "Who we serve": "A quién servimos",
  "Individuals, families, self-employed professionals, and people navigating life changes.": "Personas, familias, profesionales independientes y quienes atraviesan cambios de vida.",
  "What we simplify": "Lo que simplificamos",
  "The language, comparisons, and questions that can make healthcare decisions overwhelming.": "El lenguaje, las comparaciones y las preguntas que pueden hacer abrumadoras las decisiones de salud.",
  "What you receive": "Lo que recibes",
  "Clear answers, personal support, and a knowledgeable partner focused on your priorities.": "Respuestas claras, apoyo personal y un socio experto enfocado en tus prioridades.",

  "Our services": "Nuestros servicios",
  "Personalized support for better healthcare decisions.": "Apoyo personalizado para mejores decisiones de salud.",
  "Whatever brings you here, we’ll meet you with clear answers, practical guidance, and solutions shaped around your life.": "Cualquiera que sea el motivo que te trae aquí, te ofreceremos respuestas claras, orientación práctica y soluciones adaptadas a tu vida.",
  "How we help": "Cómo ayudamos",
  "Guidance for every step of the journey": "Orientación para cada paso del camino",
  "Our work begins with listening. From there, we help you understand your choices and find the right direction.": "Nuestro trabajo comienza escuchando. A partir de ahí, te ayudamos a comprender tus opciones y encontrar el rumbo adecuado.",
  "Individual Healthcare Guidance": "Orientación médica individual",
  "Personal support to help you explore healthcare solutions suited to your health priorities and budget.": "Apoyo personal para ayudarte a explorar soluciones de salud adecuadas a tus prioridades y presupuesto.",
  "Family Healthcare Solutions": "Soluciones médicas familiares",
  "Thoughtful guidance for households seeking practical coverage options for every stage of family life.": "Orientación atenta para hogares que buscan opciones prácticas de cobertura para cada etapa de la vida familiar.",
  "Option Review & Comparison": "Revisión y comparación de opciones",
  "A clear, side-by-side look at the details that can affect your care and costs.": "Una comparación clara de los detalles que pueden afectar tu atención y tus costos.",
  "Life Change Support": "Apoyo durante cambios de vida",
  "Guidance when a move, job change, marriage, or other transition affects your healthcare needs.": "Orientación cuando una mudanza, cambio de empleo, matrimonio u otra transición afecta tus necesidades de salud.",
  "Healthcare Education": "Educación sobre atención médica",
  "Plain-language answers that help you understand terminology, tradeoffs, and important questions to ask.": "Respuestas sencillas que te ayudan a comprender términos, consideraciones y preguntas importantes.",
  "Ongoing Client Support": "Apoyo continuo al cliente",
  "A familiar point of contact when questions come up or your needs evolve over time.": "Un punto de contacto conocido cuando surgen preguntas o tus necesidades cambian con el tiempo.",
  "Start with a conversation, not a commitment.": "Comienza con una conversación, no un compromiso.",
  "Your initial consultation is an opportunity to ask questions, share your situation, and learn how we may be able to help. There’s no pressure and no obligation.": "Tu consulta inicial es una oportunidad para hacer preguntas, compartir tu situación y conocer cómo podemos ayudarte. No hay presión ni obligación.",
  "During your consultation, we’ll discuss:": "Durante tu consulta, hablaremos de:",
  "Your current healthcare situation": "Tu situación médica actual",
  "The needs and priorities most important to you": "Las necesidades y prioridades más importantes para ti",
  "Questions or concerns about available options": "Preguntas o inquietudes sobre las opciones disponibles",
  "A clear and practical next step": "Un próximo paso claro y práctico",

  "A clear process, centered around you.": "Un proceso claro, centrado en ti.",
  "Healthcare decisions can be complex. Our approach keeps them personal, understandable, and manageable from the very first conversation.": "Las decisiones de salud pueden ser complejas. Nuestro enfoque las mantiene personales, comprensibles y manejables desde la primera conversación.",
  "Three simple steps": "Tres pasos sencillos",
  "From questions to clarity": "De las preguntas a la claridad",
  "Start with a free consultation": "Comienza con una consulta gratuita",
  "Tell us about your situation, priorities, and questions. We listen first so our guidance begins with a real understanding of what matters to you.": "Cuéntanos sobre tu situación, prioridades y preguntas. Primero escuchamos para comprender realmente lo que es importante para ti.",
  "No-cost introductory conversation": "Conversación inicial sin costo",
  "A comfortable, pressure-free experience": "Una experiencia cómoda y sin presión",
  "Time to ask your most important questions": "Tiempo para hacer tus preguntas más importantes",
  "Explore your options": "Explora tus opciones",
  "We help you look at suitable healthcare solutions and understand the important details in clear, everyday language.": "Te ayudamos a explorar soluciones médicas adecuadas y comprender los detalles importantes con palabras claras y cotidianas.",
  "Personalized option review": "Revisión personalizada de opciones",
  "Clear explanation of costs and considerations": "Explicación clara de costos y consideraciones",
  "Answers tailored to your situation": "Respuestas adaptadas a tu situación",
  "Make a confident choice": "Toma una decisión con confianza",
  "Once you understand the possibilities, we support you in choosing the direction that fits your needs and budget.": "Una vez que comprendas las posibilidades, te apoyamos para elegir la dirección que se adapte a tus necesidades y presupuesto.",
  "Patient decision support": "Apoyo paciente para tomar decisiones",
  "Help with your next steps": "Ayuda con tus próximos pasos",
  "A resource you can return to": "Un recurso al que puedes volver",
  "Schedule your consultation": "Programa tu consulta",
  "What to expect": "Qué esperar",
  "A helpful conversation, never a sales pitch.": "Una conversación útil, nunca un discurso de ventas.",
  "Our role is to help you understand your options and feel ready to decide. You set the pace, and your priorities stay at the center.": "Nuestro papel es ayudarte a comprender tus opciones y sentirte preparado para decidir. Tú marcas el ritmo y tus prioridades permanecen en el centro.",

  "Frequently asked questions": "Preguntas frecuentes",
  "Straightforward answers to help you get started.": "Respuestas claras para ayudarte a comenzar.",
  "Have a question about our process or what to expect? You may find the answer below. We’re always happy to talk, too.": "¿Tienes preguntas sobre nuestro proceso o qué esperar? Puedes encontrar la respuesta a continuación. También estaremos encantados de conversar contigo.",
  "Here to help": "Aquí para ayudarte",
  "Questions are always welcome.": "Las preguntas siempre son bienvenidas.",
  "Understanding your healthcare choices begins with asking the right questions. We’ll take the time to answer them clearly.": "Comprender tus opciones de salud comienza con hacer las preguntas correctas. Nos tomaremos el tiempo para responderlas claramente.",
  "Ask Us a Question": "Haznos una pregunta",
  "What does iSecure Health do?": "¿Qué hace iSecure Health?",
  "Is the initial consultation really free?": "¿La consulta inicial es realmente gratuita?",
  "Who do you work with?": "¿Con quién trabajan?",
  "What should I bring to my consultation?": "¿Qué debo llevar a mi consulta?",
  "Will you explain my options in plain language?": "¿Explicarán mis opciones con palabras sencillas?",
  "Do you only serve Houston?": "¿Solo atienden Houston?",
  "What happens after I choose a solution?": "¿Qué sucede después de elegir una solución?",
  "How do I get started?": "¿Cómo comienzo?",
  "We help individuals and families understand healthcare options and find solutions that align with their needs and budget. Our approach is personal, educational, and focused on making the process easier to navigate.": "Ayudamos a personas y familias a comprender opciones de salud y encontrar soluciones alineadas con sus necesidades y presupuesto. Nuestro enfoque es personal, educativo y centrado en facilitar el proceso.",
  "Yes. Your first consultation is complimentary and comes with no obligation. It is a chance to share your situation, ask questions, and learn how we may be able to help.": "Sí. Tu primera consulta es gratuita y sin obligación. Es una oportunidad para compartir tu situación, hacer preguntas y conocer cómo podemos ayudarte.",
  "We support individuals, families, self-employed professionals, and people whose healthcare needs have changed because of a move, job transition, marriage, or another life event.": "Apoyamos a personas, familias, profesionales independientes y quienes han visto cambiar sus necesidades de salud por una mudanza, cambio laboral, matrimonio u otro evento de vida.",
  "It helps to have a general idea of your healthcare priorities, budget, household needs, and any questions you want answered. We will guide the conversation from there.": "Es útil tener una idea general de tus prioridades de salud, presupuesto, necesidades del hogar y preguntas. Nosotros guiaremos la conversación.",
  "Absolutely. Clear explanations are central to our service. We break down important details and help you understand the practical considerations behind each option.": "Por supuesto. Las explicaciones claras son fundamentales para nuestro servicio. Desglosamos los detalles importantes y te ayudamos a comprender las consideraciones prácticas de cada opción.",
  "Our primary service area is Houston, Texas and surrounding communities. Contact us to discuss your location and how we may be able to assist.": "Nuestra área principal de servicio es Houston, Texas y comunidades cercanas. Contáctanos para hablar sobre tu ubicación y cómo podemos ayudarte.",
  "Our support does not disappear after your decision. We remain available as a knowledgeable point of contact when questions arise or your needs change.": "Nuestro apoyo no termina después de tu decisión. Seguimos disponibles como un punto de contacto experto cuando surgen preguntas o cambian tus necesidades.",
  "Request a free consultation through our contact page. We will follow up to learn more about your needs and schedule a convenient time to talk.": "Solicita una consulta gratuita mediante nuestra página de contacto. Nos comunicaremos para conocer tus necesidades y programar un momento conveniente para conversar.",

  "Get in touch": "Ponte en contacto",
  "Let’s talk about what you need.": "Hablemos de lo que necesitas.",
  "A clearer path to affordable healthcare starts with a simple conversation. Tell us how we can help, and a member of our team will be in touch.": "Un camino más claro hacia una atención médica asequible comienza con una conversación sencilla. Cuéntanos cómo podemos ayudarte y un miembro de nuestro equipo se comunicará contigo.",
  "Start your free consultation": "Comienza tu consulta gratuita",
  "Share a few details and we’ll follow up to learn more about your situation. There’s no pressure and no obligation.": "Comparte algunos detalles y nos comunicaremos para conocer mejor tu situación. No hay presión ni obligación.",
  "Call us": "Llámanos",
  "Email us": "Envíanos un correo",
  "Visit us": "Visítanos",
  "Office hours": "Horario de atención",
  "Monday": "Lunes",
  "Tuesday": "Martes",
  "Wednesday": "Miércoles",
  "Thursday": "Jueves",
  "Friday": "Viernes",
  "Saturday": "Sábado",
  "Sunday": "Domingo",
  "Closed": "Cerrado",
  "We respect your privacy.": "Respetamos tu privacidad.",
  "Your information is used only to respond to your request and provide the support you’ve asked for.": "Tu información se utiliza únicamente para responder a tu solicitud y brindar el apoyo que has pedido.",
  "Full Name": "Nombre completo",
  "Your full name": "Tu nombre completo",
  "Email": "Correo electrónico",
  "Phone Number": "Número de teléfono",
  "Message": "Mensaje",
  "Tell us a little about what you're looking for.": "Cuéntanos un poco sobre lo que buscas.",
  "Request Free Consultation": "Solicitar consulta gratuita",
  "By submitting this form, you agree that iSecure Health may contact you about your request.": "Al enviar este formulario, aceptas que iSecure Health pueda contactarte sobre tu solicitud.",

  "Privacy policy": "Política de privacidad",
  "Your privacy matters to us.": "Tu privacidad nos importa.",
  "This policy explains how iSecure Health collects, uses, and protects information shared with us.": "Esta política explica cómo iSecure Health recopila, utiliza y protege la información compartida con nosotros.",
  "Information We Collect": "Información que recopilamos",
  "How We Use Information": "Cómo usamos la información",
  "How We Protect Information": "Cómo protegemos la información",
  "Information Sharing": "Cómo compartimos información",
  "Your Choices": "Tus opciones",
  "Policy Updates": "Actualizaciones de la política",
  "Contact Us": "Contáctanos",
  "Effective date: June 11, 2026": "Fecha de vigencia: 11 de junio de 2026",
  "We may collect information you provide directly through our contact form or during conversations with us, including your name, email address, phone number, and details you choose to share about your healthcare needs.": "Podemos recopilar información que proporciones directamente mediante nuestro formulario de contacto o conversaciones, incluido tu nombre, correo electrónico, teléfono y detalles que elijas compartir sobre tus necesidades de salud.",
  "We use the information you provide to respond to inquiries, deliver requested services, communicate with you, improve our services, and comply with applicable legal obligations.": "Utilizamos la información que proporcionas para responder consultas, prestar servicios solicitados, comunicarnos contigo, mejorar nuestros servicios y cumplir obligaciones legales aplicables.",
  "We take reasonable administrative and technical measures to protect personal information from unauthorized access, disclosure, alteration, or destruction.": "Tomamos medidas administrativas y técnicas razonables para proteger la información personal contra acceso, divulgación, alteración o destrucción no autorizados.",
  "We do not sell your personal information. We may share information only when necessary to provide requested services, when you authorize us to do so, or when required by law.": "No vendemos tu información personal. Podemos compartir información únicamente cuando sea necesario para prestar servicios solicitados, cuando nos autorices o cuando la ley lo exija.",
  "You may contact us to ask about, correct, or request deletion of personal information you have provided, subject to applicable legal and recordkeeping requirements.": "Puedes contactarnos para consultar, corregir o solicitar la eliminación de la información personal que hayas proporcionado, sujeto a requisitos legales y de conservación de registros.",
  "We may update this policy as our practices evolve. Changes will be posted on this page with an updated effective date.": "Podemos actualizar esta política a medida que evolucionen nuestras prácticas. Los cambios se publicarán en esta página con una fecha de vigencia actualizada.",
  "If you have questions about this privacy policy, contact us at hello@isecurehealth.com or (346) 779-3786.": "Si tienes preguntas sobre esta política de privacidad, contáctanos en hello@isecurehealth.com o al (346) 779-3786.",
  "This website provides general information and is not a substitute for professional medical or legal advice.": "Este sitio web ofrece información general y no sustituye el asesoramiento médico o legal profesional.",

  "Your healthier future starts here": "Tu futuro más saludable comienza aquí",
  "Healthcare decisions feel easier with the right guide.": "Las decisiones de salud son más fáciles con el guía adecuado.",
  "Tell us what matters to you. We’ll help you understand your options and move forward with confidence.": "Cuéntanos qué es importante para ti. Te ayudaremos a comprender tus opciones y avanzar con confianza.",
  "Close gallery": "Cerrar galería",
  "Previous achievement": "Logro anterior",
  "Next achievement": "Logro siguiente",
};

const originalText = new WeakMap<Node, string>();
const originalAttributes = new WeakMap<Element, Record<string, string>>();

function preserveWhitespace(original: string, translated: string) {
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function translateElement(root: ParentNode, language: Language) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    const parent = node.parentElement;
    if (parent && !["SCRIPT", "STYLE"].includes(parent.tagName)) {
      if (!originalText.has(node)) originalText.set(node, node.textContent ?? "");
      const original = originalText.get(node) ?? "";
      const translated = spanish[original.trim()];
      node.textContent = language === "es" && translated ? preserveWhitespace(original, translated) : original;
    }
    node = walker.nextNode();
  }

  root.querySelectorAll?.("[placeholder], [aria-label], [title]").forEach(element => {
    if (!originalAttributes.has(element)) {
      const values: Record<string, string> = {};
      ["placeholder", "aria-label", "title"].forEach(attribute => {
        const value = element.getAttribute(attribute);
        if (value) values[attribute] = value;
      });
      originalAttributes.set(element, values);
    }
    const values = originalAttributes.get(element) ?? {};
    Object.entries(values).forEach(([attribute, original]) => {
      element.setAttribute(attribute, language === "es" && spanish[original] ? spanish[original] : original);
    });
  });
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("isecure-language");
    if (saved === "es") setLanguageState("es");
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    translateElement(document.body, language);
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) translateElement(node as Element, language);
        if (node.nodeType === Node.TEXT_NODE && node.parentNode) translateElement(node.parentNode, language);
      }));
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    localStorage.setItem("isecure-language", nextLanguage);
    setLanguageState(nextLanguage);
  };

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
