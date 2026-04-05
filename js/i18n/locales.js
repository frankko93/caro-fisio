/**
 * Site copy by locale. Edit strings here; keys map to data-i18n="a.b.c" in HTML.
 * Arrays (experience, education, testimonials) use numeric path segments: experience.0.role
 */
(function (w) {
    'use strict';

    w.CARO_LOCALES = {
        es: {
            meta: {
                title: 'Carolina Esquivel — Fisioterapeuta',
                description:
                    'Fisioterapeuta en Mascali (Catania). Neurorehabilitación pediátrica y adultos, fisioterapia y drenaje linfático. Consultas en español e italiano.',
                ogTitle: 'Carolina Esquivel — Fisioterapeuta',
                ogDescription:
                    'Neurorehabilitación con enfoque cercano y basado en evidencia. Consultorio en Mascali, Catania.',
                ogLocale: 'es_ES',
                twitterTitle: 'Carolina Esquivel — Fisioterapeuta',
                twitterDescription: 'Neurorehabilitación pediátrica y adultos. Mascali, Catania.',
                jsonLdDescription:
                    'Fisioterapeuta especializada en neurorehabilitación pediátrica y adultos. Fisioterapia, drenaje linfático y rehabilitación neurológica.'
            },
            nav: {
                siteAria: 'Sitio',
                openMenu: 'Abrir menú de secciones',
                home: 'Inicio',
                about: 'Sobre mí',
                services: 'Servicios',
                experience: 'Experiencia',
                education: 'Formación',
                testimonials: 'Testimonios',
                contact: 'Contacto'
            },
            lang: {
                groupAria: 'Elegir idioma',
                switch: 'Idioma',
                ariaEs: 'Español',
                ariaIt: 'Italiano',
                ariaEn: 'Inglés'
            },
            hero: {
                mega: 'Movilidad',
                role: 'Fisioterapeuta',
                tagline:
                    'Fisioterapeuta especializada en neurorehabilitación y ejercicio terapéutico, dedicada a la atención integral de pacientes pediátricos y adultos.',
                subline: 'Atención en español e italiano.',
                ctaWhatsapp: 'Agendar consulta',
                ctaServices: 'Servicios',
                ctaWhatsappAria: 'Agendar consulta por WhatsApp',
                contactQuickAria: 'Contacto rápido',
                portraitAlt: 'Retrato profesional de Carolina Esquivel, fisioterapeuta'
            },
            contact: {
                whatsappHref:
                    'https://wa.me/393297819196?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.'
            },
            about: {
                eyebrow: 'Sobre mí',
                heading: 'Confianza y método',
                body:
                    'Soy fisioterapeuta especializada en neurorehabilitación con más de seis años de experiencia en pacientes neurológicos pediátricos y adultos. Trabajo con planes personalizados, evaluación funcional y acompañamiento integral del paciente y su entorno familiar.',
                statYears: 'años de experiencia',
                statFocus: 'enfoque en tu recuperación'
            },
            services: {
                eyebrow: 'Servicios',
                heading: '¿En qué puedo ayudarte?',
                intro: 'Tres ejes de trabajo. Elegí el que necesites y coordinamos una primera consulta.',
                physioTitle: 'Fisioterapia',
                physioDesc:
                    'Ejercicio terapéutico como pilar en el abordaje de las patologías motoras, promoviendo la recuperación del movimiento y la autonomía en la vida diaria.',
                lymphTitle: 'Drenaje linfático',
                lymphDesc: 'Técnica manual aplicada a patologías del sistema linfático.',
                neuroTitle: 'Rehabilitación neurológica',
                neuroDesc:
                    'Enfoque terapéutico centrado en la persona, orientado a optimizar el funcionamiento, la autonomía y la participación en la vida diaria a través de intervenciones individualizadas.'
            },
            experience: [
                {
                    role: 'Fisioterapeuta motora',
                    description: 'Centro de rehabilitación en pacientes pediátricos con patología neurológica.'
                },
                {
                    role: 'Fisioterapeuta motora',
                    description:
                        'Atención domiciliaria en pacientes pediátricos complejos con alteraciones neurológicas.'
                },
                {
                    role: 'Fisioterapeuta neuromotora',
                    description:
                        'Rehabilitación neurológica integral para pacientes jóvenes y adultos. Técnicas específicas y uso de equipamiento especializado.'
                },
                {
                    role: 'Fisioterapeuta',
                    description: 'Rehabilitación deportiva y traumatológica para socios y deportistas.'
                }
            ],
            education: [
                {
                    role: 'Córdoba, Argentina',
                    description: 'Abordaje en niños con daño neurológico.'
                },
                {
                    role: 'Clínica Castillo Morales — Córdoba',
                    description: 'Especialización en rehabilitación neurológica.'
                },
                {
                    role: 'Tecnologías para movilidad',
                    description: 'Posicionamiento funcional del paciente neurológico.'
                },
                {
                    role: 'Universidad Católica de Cuyo',
                    description: 'Licenciatura integral en anatomía, fisiología, biomecánica y neurología.'
                }
            ],
            pathFlow: {
                hint: 'Desplazate hacia abajo para activar cada etapa. Si hay varias, deslizá horizontalmente para verlas todas.'
            },
            expSection: {
                eyebrow: 'Trayectoria',
                heading: 'Experiencia profesional'
            },
            eduSection: {
                eyebrow: 'Estudios',
                heading: 'Formación académica'
            },
            testimonials: [
                {
                    quote:
                        '«Excelente profesional. En pocos meses recuperé movilidad que ya no creía posible; el plan era claro y muy humano.»',
                    name: 'María G.',
                    meta: '42 años · Recuperación neurológica'
                },
                {
                    quote:
                        '«Dedicación y rigor sin perder cercanía. Se nota que trabaja con evidencia y escucha de verdad.»',
                    name: 'Juan P.',
                    meta: '55 años · Fisioterapia motora'
                },
                {
                    quote:
                        '«Llevamos a nuestro hijo hace un año y el cambio en su autonomía es enorme. Confianza total.»',
                    name: 'Ana R.',
                    meta: '36 años · Madre de paciente pediátrico'
                },
                {
                    quote:
                        '«Tras el ictus, el seguimiento fue constante y realista. Me ayudó a volver a las actividades del día a día.»',
                    name: 'Roberto F.',
                    meta: '62 años · Rehabilitación post-ictus'
                },
                {
                    quote:
                        '«Sesiones de drenaje muy efectivas y explicadas con paciencia. Salgo sintiendo alivio real.»',
                    name: 'Elena V.',
                    meta: '29 años · Drenaje linfático'
                },
                {
                    quote:
                        '«Como deportista amateur, volví a entrenar sin miedo. Evaluación fina y ejercicios que sí puedo cumplir.»',
                    name: 'Luca M.',
                    meta: '31 años · Readaptación deportiva'
                }
            ],
            testimonialsSection: {
                eyebrow: 'Pacientes',
                heading: 'Testimonios'
            },
            contactSection: {
                eyebrow: 'Contacto',
                heading: 'Hablemos',
                lead: 'Coordinamos una primera consulta o resolvemos dudas por el canal que prefieras.',
                locationLabel: 'Ubicación',
                phoneLabel: 'Teléfono',
                emailLabel: 'Correo',
                nationality: 'Nacionalidad: Argentina',
                formTitle: 'Enviar un mensaje'
            },
            form: {
                emailSubject: 'Mensaje desde la web — Carolina Esquivel',
                srName: 'Nombre',
                srEmail: 'Email',
                srMessage: 'Mensaje',
                placeholderName: 'Nombre',
                placeholderEmail: 'Email',
                placeholderMessage: 'Mensaje',
                submit: 'Abrir correo para enviar',
                mailtoHelp:
                    'Se abrirá tu aplicación de correo con el mensaje listo; solo tenés que enviarlo.',
                sentOk:
                    'Listo. Si no se abrió el correo, escribí a caroesquivelt@gmail.com o usá el enlace de correo arriba.'
            },
            cookies: {
                bannerAria: 'Información sobre privacidad y datos',
                bannerText:
                    'Usamos almacenamiento local para recordar tu idioma y cargamos tipografías desde Google. Sin publicidad ni analítica de terceros en esta página.',
                bannerPrivacy: 'Privacidad',
                accept: 'Entendido'
            },
            footer: {
                aria: 'Pie de página',
                home: 'Inicio',
                contact: 'Contacto',
                privacy: 'Privacidad'
            },
            a11y: {
                pathFlowExperience:
                    'Línea de tiempo de experiencia: scroll vertical para activar etapas, scroll horizontal si hay más tarjetas',
                pathFlowEducation:
                    'Línea de tiempo de formación: scroll vertical para activar etapas, scroll horizontal si hay más tarjetas',
                carouselRegion: 'Testimonios de pacientes',
                carouselRoleDesc: 'carrusel',
                testimonialsChoose: 'Elegir testimonio',
                testimonialPrev: 'Testimonio anterior',
                testimonialNext: 'Testimonio siguiente',
                testimonialDot: 'Testimonio {current} de {total}'
            }
        },

        it: {
            meta: {
                title: 'Carolina Esquivel — Fisioterapista',
                description:
                    'Fisioterapista a Mascali (Catania). Neuro-riabilitazione pediatrica e dell’adulto, fisioterapia e drenaggio linfatico. Consulenze in spagnolo e italiano.',
                ogTitle: 'Carolina Esquivel — Fisioterapista',
                ogDescription:
                    'Neuro-riabilitazione con un approccio vicino e basato sulle evidenze. Studio a Mascali, Catania.',
                ogLocale: 'it_IT',
                twitterTitle: 'Carolina Esquivel — Fisioterapista',
                twitterDescription: 'Neuro-riabilitazione pediatrica e dell’adulto. Mascali, Catania.',
                jsonLdDescription:
                    'Fisioterapista specializzata in neuro-riabilitazione pediatrica e dell’adulto. Fisioterapia, drenaggio linfatico e riabilitazione neurologica.'
            },
            nav: {
                siteAria: 'Sito',
                openMenu: 'Apri il menu delle sezioni',
                home: 'Home',
                about: 'Chi sono',
                services: 'Servizi',
                experience: 'Esperienza',
                education: 'Formazione',
                testimonials: 'Testimonianze',
                contact: 'Contatti'
            },
            lang: {
                groupAria: 'Scegli la lingua',
                switch: 'Lingua',
                ariaEs: 'Spagnolo',
                ariaIt: 'Italiano',
                ariaEn: 'Inglese'
            },
            hero: {
                mega: 'Mobilità',
                role: 'Fisioterapista',
                tagline:
                    'Fisioterapista specializzata in neuro-riabilitazione ed esercizio terapeutico, dedicata all’assistenza integrale di pazienti pediatrici e adulti.',
                subline: 'Consulenze in spagnolo e italiano.',
                ctaWhatsapp: 'Prenota una visita',
                ctaServices: 'Servizi',
                ctaWhatsappAria: 'Prenota una visita su WhatsApp',
                contactQuickAria: 'Contatti rapidi',
                portraitAlt: 'Ritratto professionale di Carolina Esquivel, fisioterapista'
            },
            contact: {
                whatsappHref:
                    'https://wa.me/393297819196?text=Ciao%2C%20vorrei%20prenotare%20una%20visita.'
            },
            about: {
                eyebrow: 'Chi sono',
                heading: 'Fiducia e metodo',
                body:
                    'Sono fisioterapista specializzata in neuro-riabilitazione con oltre sei anni di esperienza in pazienti neurologici pediatrici e adulti. Lavoro con piani personalizzati, valutazione funzionale e accompagnamento integrale del paziente e del contesto familiare.',
                statYears: 'anni di esperienza',
                statFocus: 'focus sul tuo recupero'
            },
            services: {
                eyebrow: 'Servizi',
                heading: 'Come posso aiutarti?',
                intro: 'Tre ambiti di lavoro. Scegli quello che ti serve e organizziamo una prima visita.',
                physioTitle: 'Fisioterapia',
                physioDesc:
                    'Esercizio terapeutico come pilastro nell’approccio alle patologie motorie, promuovendo il recupero del movimento e l’autonomia nella vita quotidiana.',
                lymphTitle: 'Drenaggio linfatico',
                lymphDesc: 'Tecnica manuale applicata alle patologie del sistema linfatico.',
                neuroTitle: 'Riabilitazione neurologica',
                neuroDesc:
                    'Approccio terapeutico centrato sulla persona, orientato a ottimizzare il funzionamento, l\'autonomia e la partecipazione alla vita quotidiana attraverso interventi individualizzati.'
            },
            experience: [
                {
                    role: 'Fisioterapista motoria',
                    description:
                        'Centro di riabilitazione per pazienti pediatrici con patologia neurologica.'
                },
                {
                    role: 'Fisioterapista motoria',
                    description:
                        'Assistenza domiciliare per pazienti pediatrici complessi con alterazioni neurologiche.'
                },
                {
                    role: 'Fisioterapista neuromotoria',
                    description:
                        'Riabilitazione neurologica integrata per giovani e adulti. Tecniche specifiche e uso di attrezzature specializzate.'
                },
                {
                    role: 'Fisioterapista',
                    description: 'Riabilitazione sportiva e traumatologica per soci e atleti.'
                }
            ],
            education: [
                {
                    role: 'Córdoba, Argentina',
                    description: 'Approccio ai bambini con lesione neurologica.'
                },
                {
                    role: 'Clínica Castillo Morales — Córdoba',
                    description: 'Specializzazione in riabilitazione neurologica.'
                },
                {
                    role: 'Tecnologie per la mobilità',
                    description: 'Posizionamento funzionale del paziente neurologico.'
                },
                {
                    role: 'Universidad Católica de Cuyo',
                    description: 'Laurea integrata in anatomia, fisiologia, biomeccanica e neurologia.'
                }
            ],
            pathFlow: {
                hint: 'Scorri verso il basso per attivare ogni fase. Se sono più di una, scorri in orizzontale per vederle tutte.'
            },
            expSection: {
                eyebrow: 'Percorso',
                heading: 'Esperienza professionale'
            },
            eduSection: {
                eyebrow: 'Studi',
                heading: 'Formazione accademica'
            },
            testimonials: [
                {
                    quote:
                        '«Professionista eccellente. In pochi mesi ho recuperato mobilità che non credevo più possibile; piano chiaro e molto umano.»',
                    name: 'María G.',
                    meta: '42 anni · Recupero neurologico'
                },
                {
                    quote:
                        '«Dedizione e rigore senza perdere vicinanza. Si percepisce il lavoro basato su evidenze e ascolto autentico.»',
                    name: 'Juan P.',
                    meta: '55 anni · Fisioterapia motoria'
                },
                {
                    quote:
                        '«Portiamo nostro figlio da un anno e il cambiamento nella sua autonomia è enorme. Fiducia totale.»',
                    name: 'Ana R.',
                    meta: '36 anni · Madre di paziente pediatrico'
                },
                {
                    quote:
                        '«Dopo l’ictus, il follow-up è stato costante e realistico. Mi ha aiutato a tornare alle attività quotidiane.»',
                    name: 'Roberto F.',
                    meta: '62 anni · Riabilitazione post-ictus'
                },
                {
                    quote:
                        '«Sedute di drenaggio molto efficaci e spiegate con pazienza. Esco con un vero sollievo.»',
                    name: 'Elena V.',
                    meta: '29 anni · Drenaggio linfatico'
                },
                {
                    quote:
                        '«Da sportivo amatoriale, ho ripreso ad allenarmi senza paura. Valutazione attenta ed esercizi fattibili.»',
                    name: 'Luca M.',
                    meta: '31 anni · Riatletizzazione'
                }
            ],
            testimonialsSection: {
                eyebrow: 'Pazienti',
                heading: 'Testimonianze'
            },
            contactSection: {
                eyebrow: 'Contatti',
                heading: 'Parliamone',
                lead: 'Organizziamo una prima visita o rispondiamo ai dubbi sul canale che preferisci.',
                locationLabel: 'Indirizzo',
                phoneLabel: 'Telefono',
                emailLabel: 'Email',
                nationality: 'Nazionalità: Argentina',
                formTitle: 'Invia un messaggio'
            },
            form: {
                emailSubject: 'Messaggio dal sito — Carolina Esquivel',
                srName: 'Nome',
                srEmail: 'Email',
                srMessage: 'Messaggio',
                placeholderName: 'Nome',
                placeholderEmail: 'Email',
                placeholderMessage: 'Messaggio',
                submit: 'Apri email per inviare',
                mailtoHelp:
                    'Si aprirà il tuo programma di posta con il messaggio pronto; ti basterà inviarlo.',
                sentOk:
                    'Fatto. Se non si è aperta l’email, scrivi a caroesquivelt@gmail.com o usa il link in alto.'
            },
            cookies: {
                bannerAria: 'Informazioni su privacy e dati',
                bannerText:
                    'Usiamo l’archiviazione locale per ricordare la lingua e carichiamo i font da Google. Nessuna pubblicità né analytics di terze parti su questa pagina.',
                bannerPrivacy: 'Privacy',
                accept: 'Ho capito'
            },
            footer: {
                aria: 'Piè di pagina',
                home: 'Home',
                contact: 'Contatti',
                privacy: 'Privacy'
            },
            a11y: {
                pathFlowExperience:
                    'Linea del tempo dell’esperienza: scorri in verticale per attivare le fasi, in orizzontale se ci sono più schede',
                pathFlowEducation:
                    'Linea del tempo della formazione: scorri in verticale per attivare le fasi, in orizzontale se ci sono più schede',
                carouselRegion: 'Testimonianze dei pazienti',
                carouselRoleDesc: 'carosello',
                testimonialsChoose: 'Scegli una testimonianza',
                testimonialPrev: 'Testimonianza precedente',
                testimonialNext: 'Testimonianza successiva',
                testimonialDot: 'Testimonianza {current} di {total}'
            }
        },

        en: {
            meta: {
                title: 'Carolina Esquivel — Physiotherapist',
                description:
                    'Physiotherapist in Mascali (Catania). Paediatric and adult neurorehabilitation, physiotherapy and lymphatic drainage. Consultations in Spanish and Italian.',
                ogTitle: 'Carolina Esquivel — Physiotherapist',
                ogDescription:
                    'Neurorehabilitation with a caring, evidence-based approach. Practice in Mascali, Catania.',
                ogLocale: 'en_GB',
                twitterTitle: 'Carolina Esquivel — Physiotherapist',
                twitterDescription: 'Paediatric and adult neurorehabilitation. Mascali, Catania.',
                jsonLdDescription:
                    'Physiotherapist specialising in paediatric and adult neurorehabilitation. Physiotherapy, lymphatic drainage and neurological rehabilitation.'
            },
            nav: {
                siteAria: 'Website',
                openMenu: 'Open section menu',
                home: 'Home',
                about: 'About',
                services: 'Services',
                experience: 'Experience',
                education: 'Education',
                testimonials: 'Testimonials',
                contact: 'Contact'
            },
            lang: {
                groupAria: 'Choose language',
                switch: 'Language',
                ariaEs: 'Spanish',
                ariaIt: 'Italian',
                ariaEn: 'English'
            },
            hero: {
                mega: 'Mobility',
                role: 'Physiotherapist',
                tagline:
                    'Physiotherapist specialising in neurorehabilitation and therapeutic exercise, dedicated to whole-person care for paediatric and adult patients.',
                subline: 'Appointments in Spanish and Italian.',
                ctaWhatsapp: 'Book a consultation',
                ctaServices: 'Services',
                ctaWhatsappAria: 'Book a consultation on WhatsApp',
                contactQuickAria: 'Quick contact',
                portraitAlt: 'Professional portrait of Carolina Esquivel, physiotherapist'
            },
            contact: {
                whatsappHref:
                    'https://wa.me/393297819196?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment.'
            },
            about: {
                eyebrow: 'About me',
                heading: 'Trust and method',
                body:
                    'I am a physiotherapist specialising in neurorehabilitation with over six years’ experience with paediatric and adult neurological patients. I work with personalised plans, functional assessment and whole-person support for patients and families.',
                statYears: 'years of experience',
                statFocus: 'focus on your recovery'
            },
            services: {
                eyebrow: 'Services',
                heading: 'How can I help?',
                intro: 'Three areas of work. Choose what you need and we will arrange an initial consultation.',
                physioTitle: 'Physiotherapy',
                physioDesc:
                    'Therapeutic exercise as a cornerstone in addressing motor conditions, promoting recovery of movement and independence in daily life.',
                lymphTitle: 'Lymphatic drainage',
                lymphDesc: 'Manual technique for conditions of the lymphatic system.',
                neuroTitle: 'Neurological rehabilitation',
                neuroDesc:
                    'Person-centred therapeutic approach aimed at optimising functioning, independence and participation in daily life through individualised interventions.'
            },
            experience: [
                {
                    role: 'Motor physiotherapist',
                    description: 'Rehabilitation centre for paediatric patients with neurological conditions.'
                },
                {
                    role: 'Motor physiotherapist',
                    description:
                        'Home care for complex paediatric patients with neurological impairments.'
                },
                {
                    role: 'Neuromotor physiotherapist',
                    description:
                        'Comprehensive neurological rehabilitation for young people and adults. Specific techniques and specialised equipment.'
                },
                {
                    role: 'Physiotherapist',
                    description: 'Sports and trauma rehabilitation for members and athletes.'
                }
            ],
            education: [
                {
                    role: 'Córdoba, Argentina',
                    description: 'Approach for children with neurological injury.'
                },
                {
                    role: 'Clínica Castillo Morales — Córdoba',
                    description: 'Specialisation in neurological rehabilitation.'
                },
                {
                    role: 'Technologies for mobility',
                    description: 'Functional positioning of the neurological patient.'
                },
                {
                    role: 'Universidad Católica de Cuyo',
                    description: 'Degree covering anatomy, physiology, biomechanics and neurology.'
                }
            ],
            pathFlow: {
                hint: 'Scroll down to activate each stage. If there are several, swipe horizontally to see them all.'
            },
            expSection: {
                eyebrow: 'Path',
                heading: 'Professional experience'
            },
            eduSection: {
                eyebrow: 'Studies',
                heading: 'Academic background'
            },
            testimonials: [
                {
                    quote:
                        '«An excellent professional. Within months I regained mobility I no longer thought possible; the plan was clear and very human.»',
                    name: 'María G.',
                    meta: '42 · Neurological recovery'
                },
                {
                    quote:
                        '«Dedicated and rigorous without losing warmth. You can tell she works with evidence and real listening.»',
                    name: 'Juan P.',
                    meta: '55 · Motor physiotherapy'
                },
                {
                    quote:
                        '«We have brought our son for a year and the change in his independence is huge. Complete trust.»',
                    name: 'Ana R.',
                    meta: '36 · Parent of paediatric patient'
                },
                {
                    quote:
                        '«After my stroke, follow-up was steady and realistic. She helped me get back to everyday activities.»',
                    name: 'Roberto F.',
                    meta: '62 · Post-stroke rehabilitation'
                },
                {
                    quote:
                        '«Very effective drainage sessions, explained patiently. I leave feeling real relief.»',
                    name: 'Elena V.',
                    meta: '29 · Lymphatic drainage'
                },
                {
                    quote:
                        '«As an amateur athlete I trained again without fear. Sharp assessment and exercises I can actually do.»',
                    name: 'Luca M.',
                    meta: '31 · Return to sport'
                }
            ],
            testimonialsSection: {
                eyebrow: 'Patients',
                heading: 'Testimonials'
            },
            contactSection: {
                eyebrow: 'Contact',
                heading: 'Let’s talk',
                lead: 'We can arrange an initial consultation or answer questions on whichever channel you prefer.',
                locationLabel: 'Location',
                phoneLabel: 'Phone',
                emailLabel: 'Email',
                nationality: 'Nationality: Argentina',
                formTitle: 'Send a message'
            },
            form: {
                emailSubject: 'Message from website — Carolina Esquivel',
                srName: 'Name',
                srEmail: 'Email',
                srMessage: 'Message',
                placeholderName: 'Name',
                placeholderEmail: 'Email',
                placeholderMessage: 'Message',
                submit: 'Open email app to send',
                mailtoHelp:
                    'Your mail app will open with the message ready; you only need to press send.',
                sentOk:
                    'Done. If your mail app did not open, email caroesquivelt@gmail.com or use the mail link above.'
            },
            cookies: {
                bannerAria: 'Privacy and data information',
                bannerText:
                    'We use local storage to remember your language and load fonts from Google. No third-party ads or analytics on this page.',
                bannerPrivacy: 'Privacy policy',
                accept: 'OK'
            },
            footer: {
                aria: 'Footer',
                home: 'Home',
                contact: 'Contact',
                privacy: 'Privacy'
            },
            a11y: {
                pathFlowExperience:
                    'Experience timeline: scroll vertically to activate stages, horizontally if there are more cards',
                pathFlowEducation:
                    'Education timeline: scroll vertically to activate stages, horizontally if there are more cards',
                carouselRegion: 'Patient testimonials',
                carouselRoleDesc: 'carousel',
                testimonialsChoose: 'Choose testimonial',
                testimonialPrev: 'Previous testimonial',
                testimonialNext: 'Next testimonial',
                testimonialDot: 'Testimonial {current} of {total}'
            }
        }
    };
})(window);
