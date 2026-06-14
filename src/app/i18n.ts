"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export type Language = "es" | "en";

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "es";

  const storedLanguage = window.localStorage.getItem("language");

  if (storedLanguage === "en") return "en";

  return "es";
};

const resources = {
  es: {
    translation: {
      nav: {
        brand: "EoW Party",
        home: "Inicio",
        information: "Información",
        dressCode: "Dress Code",
        form: "Formulario",
      },

      home: {
        eyebrow: "Mhares · 12 de agosto de 2026",
        title: "The End of the World Party",
        lead:
          "Estimados amig@s,",
        intro:
          "Sólo quedan dos meses para el clímax que supondrá el primer eclipse solar total en la España continental en 114 años, sin duda será un momento mágico y trascendental para nuestra generación que merece una celebración a lo grande",
        formButton: "Rellenar formulario",
        informationButton: "Info eclipse",
        eclipseInfo: "Info eclipse",
        message:
          "Para ultimar todos los detalles, los Hermanos Buades os pedimos por favor que rellenéis el formulario y aprovechamos para daros a continuación información detallada del evento.",

        eventCard: {
          label: "Evento privado",
          day: "12",
          month: "Agosto",
          year: "2026",
          place: "Mhares Sea Club",
          description: "Day Party · Eclipse · EoW Vibes",
        },

        schedule: {
          day11: {
            date: "11 de agosto",
            title: "Cena cocktail pre-eclipse",
            time: "20:30 – 23:30",
            location: "Mariluz – Es Baluard, Palma centro.",
            description:
              "Velada para romper el hielo entre los invitados y disfrutar de las vistas sobre la muralla y el puerto. SRC (opcional)",
          },

          day12: {
            date: "12 de agosto",
            title: "EoW Party & Eclipse",
            items: [
              {
                time: "11:00 – 11:15",
                text: "Recogida en autobús en punto de encuentro seleccionado",
              },
              {
                time: "12:00 – 18:00",
                text: "Day Party by the pool. Dress code: Mediterranean casual.",
              },
              {
                time: "18:00 – 00:00",
                text: "EoW Party & Eclipse. Dress code: EoW vibes.",
              },
              {
                time: "00:00 – 00:30",
                text: "Vuelta en autocar al mismo punto de encuentro (siempre que no se haya acabado el mundo tal como esperamos)",
              },
              {
                time: "00:30 – indefinido",
                text: "After party opcional y hoy por hoy desconocida",
              },
            ],
          },
        },

        notes: {
  amenities: {
    title: "Habrá a disposición de todos los invitados:",
    items: [
      "Comida y bebida en abundancia.",
      "Toallas de piscina y playa.",
      "Cabinas y tocadores para el cambio de vestuario.",
      "Servicio de guardarropa.",
      "Gafas especiales de eclipse tematizadas. ¡La salud visual lo primero!",
    ],
  },
  invitation:
  "Os recordamos que la invitación es <important>personal, nominal e intransferible</important>, y las plazas son muy limitadas, ya que cada hermano tiene su cupo. Si al final no pudierais asistir, por favor hacédnoslo saber cuánto antes.",
},
      },

      information: {
        eyebrow: "Información del eclipse",
        title: "Eclipse Solar Total",
        date: "12 de agosto de 2026",
        lead:
          "Nos encontramos ante el acontecimiento astronómico y emocional más importante que vivirá nuestro país en todo el siglo XXI.",

        factsLabel: "Una combinación irrepetible",
        facts: [
          "Será el primer eclipse total visible desde la península en más de un siglo.",
          "Cruzará zonas muy pobladas de España, desde Galicia y terminando en Baleares.",
          "Ocurrirá en pleno verano, al atardecer, con una luz extremadamente dramática y ópticamente con el sol en su máximo tamaño.",
          "Y llega en una época hiperconectada, donde millones de personas lo vivirán simultáneamente como experiencia colectiva… ¡y tú estarás ahí!",
        ],

        timeline: {
          title: "Fases del eclipse",
          location: "Mallorca",
          rows: [
            { phase: "Inicio eclipse parcial", time: "19:38" },
            { phase: "Máximo eclipse", time: "20:32" },
            {
              phase: "Duración de la oscuridad total",
              time: "1 minuto 36 segundos",
            },
            { phase: "Puesta de sol", time: "20:48" },
          ],
        },

        storyHeader: {
          eyebrow: "La teoría de Mhares",
          title: "¿Pero qué creemos que va a pasar realmente ese día?",
          text:
            "Hasta ahora los datos objetivos. A partir de aquí empieza la parte más incierta, cinematográfica y probablemente memorable de la noche.",
        },

        stories: {
          anomaly: {
            number: "01",
            label: "La anomalía",
            title: "La ciencia comparece",
            paragraphs: [
              "A las 11:13, pocas horas antes del famoso y esperado eclipse solar total, únicamente visible sobre Mallorca en el atardecer, la NASA, la ESA y varias agencias espaciales comparecen conjuntamente.",
              "El mensaje es breve y sorprendentemente poco tranquilizador.",
            ],
            quote:
              "Estamos observando un fenómeno astronómico que no coincide con ninguno de nuestros modelos actuales. No disponemos de una explicación satisfactoria. Pero todo indica que la órbita terrestre va a sufrir una fuerte alteración durante el eclipse de hoy. Las consecuencias son desconocidas. Recomendamos a la población permanecer cerca de sus hogares con medios básicos de supervivencia mientras continuamos evaluando la situación.",
            closing:
              "Por primera vez, la ciencia no sabe qué va a ocurrir.",
          },

          rumor: {
            number: "02",
            label: "El rumor",
            title: "Todo empieza a circular",
            paragraphs: [
              "La incredulidad da paso al miedo, y éste a la anarquía. Los supermercados se vacían. Las teorías se multiplican. Los gobiernos piden calma. El mundo se va a acabar.",
              "Y en las redes aparece un rumor. Nadie sabe de dónde sale ni si tiene algún fundamento científico.",
              "Pero el rumor se extiende con una velocidad extraordinaria.",
              "Según una combinación de cálculos improvisados, mapas compartidos, teorías improbables y una cantidad preocupante de memes, el rumor afirma que el Sea Club “MHARES” en la bella Bahía de Palma será uno de los primeros lugares donde volverá a verse la luz después del eclipse… eso si es que vuelve la luz.",
            ],
          },

          confluence: {
  number: "03",
  label: "La confluencia",
  title: "La confluencia",
  paragraphs: [
    "Así que, ya sea por miedo, por curiosidad, por respeto, por oportunismo o por hedonismo, al caer la tarde, personas muy distintas comienzan a concentrarse allí, en el resort. ¿Pero quiénes son exactamente? Aún no lo sabemos, pero puede que aparezcan:",
  ],
  list: [
    "Navegantes de recreo queriendo volver a tierra",
    "Hippies cósmicos",
    "Milicias veganas",
    "Gurús solares",
    "Autoridades locales",
    "Hordas festivaleras",
    "Escapados de un after de Magaluf",
    "Cazadores de ovnis",
    "Terapeutas alternativos",
    "Reinas del tarot",
    "Dimonis de sa Part Forana",
    "Hare Krishnas, franciscanos y clarisas",
    "Millonarios organizados con pasajes al nuevo mundo",
    "Adivinos bronceados",
    "Los Pet Shop Boys",
    "Sectarios milenaristas",
    "O una batukada al completo",
  ],
  afterListParagraphs: [
    "Buscan verlo con sus propios ojos, quieren ser los primeros, o buscan respuestas, quizás señales, supervivencia, una posición privilegiada, prioridad en el nuevo mundo o simplemente evasión, diversión, compañía y una copa.",
    "Y mientras el eclipse se aproxima, MHARES se convierte en un inesperado punto de encuentro para todas las formas posibles de enfrentarse al fin del mundo.",
    "Tú, que tienes motivos de peso, decides también que no puedes faltar.",
  ],
},
        },
      },

      dressCode: {
        button: "Click aquí para inspiración",
        title: "EoW Vibes",
        subtitle: "INSPIRACIÓN & DRESS CODE",

        intro: [
          "Nadie sabe qué va a ocurrir, pero todo el mundo tiene una teoría.",
          "Algunos creen que comienza una nueva era. Otros creen que todo es una exageración.",
          "Algunos buscan una explicación científica. Otros una explicación espiritual.",
          "Algunos han salido corriendo con lo puesto.",
          "Y algunos simplemente han decidido vestirse para la ocasión."
        ],

        charactersLabel: "Así que, por si te inspiran algo",
        charactersTitle: "Puede que aparezcan:",
        characters: [
          "Navegantes de recreo queriendo volver a tierra",
          "Hippies cósmicos",
          "Milicias veganas",
          "Gurús solares",
          "Autoridades locales",
          "Escapados de un after de Magaluf",
          "Cazadores de ovnis",
          "Terapeutas alternativos.",
          "Hare Krishnas, franciscanos y clarisas",
          "Millonarios organizados con pasajes al nuevo mundo",
          "Adivinos bronceados",
          "Sectarios milenaristas",
          "El padre Ángel",
          "O una batukada.",
        ],

        concept:
          "Pero a la hora de vestirse, la idea no es replicar personajes. La idea es parecer personas que han recibido exactamente la misma noticia y reaccionan de formas completamente distintas.",

        inspirationLabel: "Inspiración visual:",
        inspiration: [
          "Eclipses.",
          "Cielos nocturnos.",
          "Glamour cósmico.",
          "Decadencia estival.",
          "Lujo mediterráneo.",
          "El fin del mundo, pero con buen gusto.",
        ],

        colorsLabel: "Colores:",
        colors: [
          "Negro solar.",
          "Blanco roto.",
          "Plata.",
          "Azul medianoche.",
          "Arena.",
          "Reflejos metálicos.",
        ],

        yes: {
          kicker: "La",
          title: "END OF THE WORLD PARTY",
          subtitle: "dice SÍ a:",
          items: [
            "Looks elegantes con un punto extraño.",
            "Sunglasses de noche.",
            "Brillos sutiles.",
            'Estética "rich people at the end of civilization".',
            "Detalles astrales, futuristas o discretamente apocalípticos",
          ],
        },

        no: {
          kicker: "La",
          title: "END OF THE WORLD PARTY",
          subtitle: "dice NO WAY a:",
          items: [
            "Disfraces completos.",
            "Cosplay del fin del mundo.",
            "Maquillaje temático exagerado.",
            "Máscaras",
          ],
        },

        closing:
          "Y sí, las túnicas de secta están permitidas, siempre que sean bonitas y parezcan de Missoni",
      },
    },
  },

  en: {
    translation: {
      nav: {
        brand: "EoW Party",
        home: "Home",
        information: "Information",
        dressCode: "Dress Code",
        form: "Form",
      },

      home: {
        eyebrow: "Mhares, August 12, 2026",
        title: "The End of the World Party",
        lead: "Dear friends,",
        intro:
          "Only two months remain until the climax of the first total solar eclipse visible from mainland Spain in 114 years. It will undoubtedly be a magical and transcendental moment for our generation, one that deserves a grand celebration",
        formButton: "Fill in the following form",
        eclipseInfo: "Eclipse info",
        informationButton: "Eclipse info",
        message:
          "In order to finalise all the details, the Buades Bros kindly ask you to fill in the following form. We also take this opportunity to share detailed information about the event below.",

        eventCard: {
          label: "Private event",
          day: "12",
          month: "August",
          year: "2026",
          place: "Mhares Sea Club",
          description: "Day Party · Eclipse · EoW Vibes",
        },

        schedule: {
          day11: {
            date: "August 11, 2026 – Palma",
            title: "Pre-eclipse cocktail dinner",
            time: "20:30 – 23:30",
            location:
              "Pre-eclipse cocktail dinner at Mariluz – Es Baluard (Palma city centre).",
            description:
              "An evening to break the ice among guests and enjoy views over the city walls and the harbour. RSVP (optional).",
          },

          day12: {
            date: "August 12, 2026 – Mhares Sea Club, Llucmajor",
            title: "EoW Party & Eclipse",
            items: [
              {
                time: "11:00 – 11:15",
                text: "Bus pickup at selected meeting point",
              },
              {
                time: "12:00 – 18:00",
                text: "Day Party by the pool. Dress code: Mediterranean casual",
              },
              {
                time: "18:00 – 00:00",
                text: "EoW Party & Eclipse. Dress code: EoW vibes",
              },
              {
                time: "00:00 – 00:30",
                text:
                  "Coach return to the same meeting point (as long as the world hasn’t ended as we expect)",
              },
              {
                time: "00:30 – indefinitely",
                text: "Optional after-party, location currently unknown",
              },
            ],
          },
        },

        notes: {
  amenities: {
    title: "Available to all guests:",
    items: [
      "Food and drink in abundance.",
      "Changing cabins and dressing rooms for those who need a full outfit change in private.",
      "Coat check service.",
      "Themed eclipse glasses. Eye health comes first!",
    ],
  },
  invitation:
  "Please note that the invitation is <important>personal and non-transferable</important>, and spaces are very limited, as each brother has his own quota. If you are unable to attend, please let us know as soon as possible.",
},
      },

      information: {
        eyebrow: "LINK 1",
        title: "Information about the Solar Eclipse",
        date: "of August 12, 2026",
        lead:
          "We are witnessing the most important astronomical and emotional event our country will experience in the entire 21st century.",

        factsLabel: "A combination of unrepeatable factors:",
        facts: [
          "It will be the first total eclipse visible from the mainland in over a century;",
          "It will cross heavily populated areas of Spain, from Galicia all the way to the Balearic Islands;",
          "It will occur in the height of summer, at dusk, with an extraordinarily dramatic light and the sun at its apparent maximum size;",
          "It arrives in a hyperconnected age, where millions of people will experience it simultaneously as a collective event… and you will be there!",
        ],

        timeline: {
          title: "PHASE",
          location: "TIME",
          rows: [
            { phase: "Start of partial eclipse", time: "19:38" },
            { phase: "Maximum eclipse", time: "20:32" },
            {
              phase: "Duration of total darkness",
              time: "1 minute 36 seconds",
            },
            { phase: "Sunset", time: "20:48" },
          ],
        },

        storyHeader: {
          eyebrow: "Those are the objective facts.",
          title:
            "But what do we really think will happen that day at Mhares?",
          text: "",
        },

        stories: {
          anomaly: {
            number: "1",
            label: "THE ANOMALY",
            title: "THE ANOMALY",
            paragraphs: [
              "At 11:13 — just hours before the famous and long-awaited total solar eclipse, visible only over Mallorca at dusk — NASA, the ESA, and several space agencies hold a joint press conference.",
              "The message is brief and surprisingly unsettling.",
            ],
            quote:
              "We are observing an astronomical phenomenon that does not match any of our current models. We have no satisfactory explanation. But all indications suggest that Earth's orbit will undergo a significant alteration during today's eclipse. The consequences are unknown. We recommend that the population remain close to their homes with basic survival supplies while we continue to assess the situation.",
            closing:
              "For the first time, science doesn't know what is going to happen.",
          },

          rumor: {
            number: "2",
            label: "THE RUMOUR",
            title: "THE RUMOUR",
            paragraphs: [
              "Disbelief gives way to fear, and fear to anarchy. Supermarkets are emptied. Theories multiply. Governments call for calm. The world is ending.",
              "And then, a rumour surfaces online. No one knows where it comes from or whether it has any scientific basis.",
              "But the rumour spreads with extraordinary speed.",
              'According to a combination of improvised calculations, shared maps, improbable theories, and a worrying number of memes, the rumour claims that the Sea Club "MHARES" in the beautiful Bay of Palma will be one of the first places where light returns after the eclipse… if light returns at all.',
            ],
          },

          confluence: {
  number: "03",
  label: "The confluence",
  title: "The Confluence",
  paragraphs: [
    "So, whether out of fear, curiosity, reverence, opportunism, or hedonism, as evening falls, very different kinds of people begin to gather there, at the resort. But who exactly? We don’t know yet, but among them there may appear:",
  ],
  list: [
    "Recreational sailors wanting to return to shore",
    "Cosmic hippies",
    "Vegan militias",
    "Solar gurus",
    "Local authorities",
    "Festival-goers in hordes",
    "Escapees from a Magaluf after-party",
    "UFO hunters",
    "Alternative therapists",
    "Tarot queens",
    "Dimonis de sa Part Forana",
    "Hare Krishnas, Franciscans, and Poor Clares",
    "Organized millionaires with tickets to the new world",
    "Tanned fortune tellers",
    "The Pet Shop Boys",
    "Millenarian cultists",
    "Or an entire batucada band",
  ],
  afterListParagraphs: [
    "They seek to witness it with their own eyes, to be the first, or to find answers — perhaps signs, survival, a privileged position, priority in the new world, or simply escape, fun, company, and a drink.",
    "And as the eclipse draws near, MHARES becomes an unexpected gathering point for every possible way of facing the end of the world.",
    "You, with good reason, decide that you cannot miss this.",
  ],
},
        },
      },

      dressCode: {
        button: "Click here for inspiration",
        eyebrow: "LINK 3",
        title: "EoW Vibes",
        subtitle: "Inspiration & Dress Code",

        intro: [
          "Nobody knows what is going to happen, but everyone has a theory.",
          "Some believe a new era is beginning.",
          "Others think this is all an overreaction.",
          "Some are looking for a scientific explanation.",
          "Others are looking for a spiritual one.",
          "Some have run out in whatever they were wearing.",
          "And some have simply decided to dress for the occasion.",
        ],

        charactersLabel: "So, for a little inspiration",
        charactersTitle: "you might encounter:",
        characters: [
          "Leisure sailors trying to get back to shore",
          "Cosmic hippies",
          "Vegan militias",
          "Solar gurus",
          "Local authorities",
          "Festival hordes",
          "Escapees from a Magaluf after-party",
          "UFO hunters",
          "Alternative therapists",
          "Tarot queens",
          "Dimonis de sa Part Forana",
          "Hare Krishnas, Franciscans, and Poor Clares",
          "Organised millionaires with tickets to the new world",
          "Tanned fortune-tellers",
          "The Pet Shop Boys",
          "Millenarian cultists",
          "Or an entire batucada band",
        ],

        concept:
          "But when it comes to getting dressed, the idea is not to replicate characters. The idea is to look like people who have received exactly the same news and are reacting to it in completely different ways.",

        inspirationLabel: "Visual Inspiration",
        inspiration: [
          "Eclipses",
          "Night skies",
          "Cosmic glamour",
          "Summer decadence",
          "Mediterranean splendour",
          "The end of the world, but with good taste",
        ],

        colorsLabel: "Colours",
        colors: [
          "Solar black",
          "Off-white",
          "Silver",
          "Midnight blue",
          "Sand",
          "Metallic reflections",
        ],

        yes: {
          kicker: "The",
          title: "END OF THE WORLD PARTY",
          subtitle: "says YES to:",
          items: [
            "Elegant looks with an edge of the unexpected",
            "Sunglasses at night",
            "Glitter and rhinestones",
            "Astral and futuristic details",
            "Apocalyptic psychedelia",
            "New Age spirituality",
          ],
        },

        no: {
          kicker: "The",
          title: "END OF THE WORLD PARTY",
          subtitle: "says NO WAY to:",
          items: [
            "Full costumes",
            "Over-the-top thematic makeup",
            "Masks",
          ],
        },

        closing:
          "And yes, cult robes are permitted — provided they are beautiful and mystical in just the right measure.",
      },
    },
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export default i18n;