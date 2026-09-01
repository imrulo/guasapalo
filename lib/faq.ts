export type FaqItem = {
  q: string;
  a: string;
};

export const homeFaq: FaqItem[] = [
  {
    q: "¿Tengo que contar mi vida?",
    a: "No. Escribes GUASA. Con la palabra alcanza. Después, tres preguntas. No hay formulario ni confesión pública.",
  },
  {
    q: "¿Hay PDF o curso grabado?",
    a: "No. El dueño no vende descargas. Lo que sale de la sesión se queda en tu boca, no en un archivo que se reenvía.",
  },
  {
    q: "¿Cómo se paga y se agenda?",
    a: "Por WhatsApp. Crypto y transferencias se coordinan ahí. Se agenda cuando llega el comprobante. No hay checkout en esta web.",
  },
  {
    q: "¿Es terapia?",
    a: "No. Es entrenamiento práctico de 45 minutos. No tratamos trauma, violencia ni disfunción clínica. Si eso es lo que buscas, este no es el lugar.",
  },
];

export const fullFaq: FaqItem[] = [
  ...homeFaq,
  {
    q: "¿Para quién es esto?",
    a: "Hombres hispanohablantes, +18, que se traban cuando ella pide que le hablen. Si eres ella, hay una línea aparte en /mujeres. Se escribe PIDE. Misma sesión, se trabaja cómo pedir.",
  },
  {
    q: "¿Qué preparo para la sesión?",
    a: "Cinco mensajes reales de texto. No fotos. No nudes. El chat. Con eso se trabaja.",
  },
  {
    q: "¿Qué pasa en los 45 minutos?",
    a: "Revisión de lo que ya escribiste. Diez o doce frases a tu tono. Las dices. Las ajustamos. Sales con una tarea de 48 horas. No es un show.",
  },
  {
    q: "¿Y el pack de 3?",
    a: "179 USD. Misma lógica: se paga, se agenda. Sirve si una sola noche no te alcanza para meter el hábito en la boca.",
  },
  {
    q: "¿Queda grabación?",
    a: "La sesión es por video, en privado. No hay producto descargable ni material para reenviar. Confidencialidad: no publicamos chats ni nombres.",
  },
  {
    q: "¿Y si esta semana no es distancia, es cámara?",
    a: "Se trabaja igual. Dices GUASA y en las tres preguntas se aclara el terreno. Chat y cámara no se entrenan igual; no mezclamos las herramientas.",
  },
];
