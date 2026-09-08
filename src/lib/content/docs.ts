// Exact DOCS copy from design-reference/Idealisa website design (2)/Idealisa Site.dc.html.
import type { Language } from "@/lib/translations";

export type DocKey = "privacy" | "terms" | "cookies" | "testimonials";
export type DocContent = {
  eyebrow: string;
  title: string;
  sub: string;
  updated: string;
  sections: { h: string; p: string[] }[];
};

export const docs: Record<DocKey, Record<Language, DocContent>> = {
  privacy: {
    en: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      sub: "How Idealisa collects, uses and protects the personal data of clients, candidates and visitors.",
      updated: "1 September 2026",
      sections: [
        {
          h: "1. Who we are",
          p: [
            "Idealisa is a brand strategy, corporate communication and project management company registered in Luanda, Angola, with offices at Maculusso, Rua Lourenço Mendes da Conceição. For any question about this policy, write to geral@idealisa.ao.",
          ],
        },
        {
          h: "2. What we collect",
          p: [
            "When you contact us we collect the information you choose to give: name, company, email address, telephone number and the content of your message. When you subscribe to our writing we collect your email address only.",
            "When you visit this site we collect basic technical data, pages viewed, approximate region, device type and referring source, used in aggregate to understand which of our writing is useful.",
          ],
        },
        {
          h: "3. Why we use it",
          p: [
            "To reply to enquiries, to prepare proposals, to deliver contracted work, to send the monthly letter you asked for, and to meet our legal and accounting obligations. We do not sell personal data, and we do not share it with third parties for their own marketing.",
          ],
        },
        {
          h: "4. Client confidentiality",
          p: [
            "Material shared with us during an engagement, strategy documents, financials, internal research, unpublished plans, is treated as confidential by default, whether or not a separate non-disclosure agreement exists. Access inside Idealisa is limited to the team working on that engagement.",
          ],
        },
        {
          h: "5. How long we keep it",
          p: [
            "Enquiry correspondence is kept for two years. Contractual and accounting records are kept for the period Angolan law requires. Newsletter subscriptions are kept until you unsubscribe, which you can do from any email we send.",
          ],
        },
        {
          h: "6. Your rights",
          p: [
            "You may ask us what personal data we hold about you, ask for it to be corrected, or ask for it to be deleted where we have no legal obligation to keep it. Write to geral@idealisa.ao and we will respond within thirty days.",
          ],
        },
      ],
    },
    "pt-AO": {
      eyebrow: "Legal",
      title: "Política de Privacidade",
      sub: "Como a Idealisa recolhe, utiliza e protege os dados pessoais de clientes, candidatos e visitantes.",
      updated: "1 de Setembro de 2026",
      sections: [
        {
          h: "1. Quem somos",
          p: [
            "A Idealisa é uma empresa de estratégia de marca, comunicação corporativa e gestão de projectos registada em Luanda, Angola, com escritórios no Maculusso, Rua Lourenço Mendes da Conceição. Para qualquer questão sobre esta política, escreva para geral@idealisa.ao.",
          ],
        },
        {
          h: "2. O que recolhemos",
          p: [
            "Quando nos contacta, recolhemos a informação que decide dar-nos: nome, empresa, endereço de email, número de telefone e o conteúdo da sua mensagem. Quando subscreve os nossos textos, recolhemos apenas o endereço de email.",
            "Quando visita este site, recolhemos dados técnicos básicos, páginas vistas, região aproximada, tipo de dispositivo e origem da visita, usados de forma agregada para perceber quais dos nossos textos são úteis.",
          ],
        },
        {
          h: "3. Porque a utilizamos",
          p: [
            "Para responder a pedidos, preparar propostas, entregar trabalho contratado, enviar a carta mensal que solicitou e cumprir as nossas obrigações legais e contabilísticas. Não vendemos dados pessoais nem os partilhamos com terceiros para marketing próprio.",
          ],
        },
        {
          h: "4. Confidencialidade do cliente",
          p: [
            "O material partilhado connosco durante um trabalho, documentos de estratégia, informação financeira, investigação interna, planos não publicados, é tratado como confidencial por defeito, exista ou não um acordo de confidencialidade separado. O acesso dentro da Idealisa está limitado à equipa afecta a esse trabalho.",
          ],
        },
        {
          h: "5. Durante quanto tempo guardamos",
          p: [
            "A correspondência de contacto é guardada durante dois anos. Os registos contratuais e contabilísticos são guardados pelo período exigido pela lei angolana. As subscrições da newsletter mantêm-se até cancelar, o que pode fazer a partir de qualquer email que enviamos.",
          ],
        },
        {
          h: "6. Os seus direitos",
          p: [
            "Pode pedir-nos que dados pessoais seus detemos, pedir a sua correcção ou pedir a sua eliminação quando não exista obrigação legal de os manter. Escreva para geral@idealisa.ao e responderemos no prazo de trinta dias.",
          ],
        },
      ],
    },
  },
  terms: {
    en: {
      eyebrow: "Legal",
      title: "Terms of Service",
      sub: "The terms under which Idealisa provides strategy, communication, project management and technology services.",
      updated: "1 September 2026",
      sections: [
        {
          h: "1. Scope of work",
          p: [
            "Every engagement is governed by a written proposal setting out objectives, deliverables, timeline, responsibilities and fees. Where these terms and a signed proposal differ, the proposal prevails.",
          ],
        },
        {
          h: "2. Client responsibilities",
          p: [
            "Timely access to the information, people and approvals a project requires is part of the delivery. Where approvals are delayed, timelines move accordingly and we will confirm the new dates in writing rather than absorb the delay silently.",
          ],
        },
        {
          h: "3. Fees and payment",
          p: [
            "Fees are quoted as a fixed figure per phase unless stated otherwise. Invoices are payable within thirty days of issue. Third-party costs, media, production, licences, travel, are quoted separately and passed through without margin unless agreed.",
          ],
        },
        {
          h: "4. Intellectual property",
          p: [
            "On full payment, ownership of final approved deliverables transfers to the client. Working files, unselected concepts and our internal methods, frameworks and templates remain the property of Idealisa.",
            "Fonts, photography and software licensed from third parties remain subject to their own licences, which we will identify at handover.",
          ],
        },
        {
          h: "5. Confidentiality",
          p: [
            "Both parties undertake to keep confidential information private, during the engagement and after it ends. We may reference the client's name and published work in our portfolio unless the proposal states otherwise.",
          ],
        },
        {
          h: "6. Ending an engagement",
          p: [
            "Either party may end a retainer with thirty days' written notice. Work completed and costs committed up to that date remain payable. Fixed-scope projects may be paused once for up to sixty days without penalty.",
          ],
        },
        {
          h: "7. Governing law",
          p: [
            "These terms are governed by the law of the Republic of Angola. Disputes will be addressed first through good-faith discussion between the named leads on both sides.",
          ],
        },
      ],
    },
    "pt-AO": {
      eyebrow: "Legal",
      title: "Termos de Serviço",
      sub: "Os termos ao abrigo dos quais a Idealisa presta serviços de estratégia, comunicação, gestão de projectos e tecnologia.",
      updated: "1 de Setembro de 2026",
      sections: [
        {
          h: "1. Âmbito do trabalho",
          p: [
            "Cada trabalho é regido por uma proposta escrita que define objectivos, entregáveis, calendário, responsabilidades e honorários. Havendo divergência entre estes termos e uma proposta assinada, prevalece a proposta.",
          ],
        },
        {
          h: "2. Responsabilidades do cliente",
          p: [
            "O acesso atempado à informação, às pessoas e às aprovações que um projecto exige faz parte da entrega. Havendo atraso nas aprovações, os prazos deslocam-se em conformidade e confirmaremos as novas datas por escrito em vez de absorver o atraso em silêncio.",
          ],
        },
        {
          h: "3. Honorários e pagamento",
          p: [
            "Os honorários são apresentados como valor fixo por fase, salvo indicação em contrário. As facturas são pagáveis no prazo de trinta dias após emissão. Custos de terceiros, media, produção, licenças, deslocações, são orçamentados à parte e debitados sem margem, salvo acordo diferente.",
          ],
        },
        {
          h: "4. Propriedade intelectual",
          p: [
            "Com o pagamento integral, a propriedade dos entregáveis finais aprovados transfere-se para o cliente. Ficheiros de trabalho, conceitos não seleccionados e os nossos métodos, modelos e ferramentas internas permanecem propriedade da Idealisa.",
            "Tipos de letra, fotografia e software licenciados a terceiros mantêm-se sujeitos às respectivas licenças, que identificaremos no momento da entrega.",
          ],
        },
        {
          h: "5. Confidencialidade",
          p: [
            "Ambas as partes se obrigam a manter privada a informação confidencial, durante o trabalho e depois do seu termo. Podemos referir o nome do cliente e o trabalho publicado no nosso portefólio, salvo indicação em contrário na proposta.",
          ],
        },
        {
          h: "6. Terminar um trabalho",
          p: [
            "Qualquer das partes pode terminar uma avença com trinta dias de aviso escrito. O trabalho concluído e os custos assumidos até essa data permanecem devidos. Projectos de âmbito fixo podem ser suspensos uma vez, até sessenta dias, sem penalização.",
          ],
        },
        {
          h: "7. Lei aplicável",
          p: [
            "Estes termos regem-se pela lei da República de Angola. Os litígios serão tratados, em primeiro lugar, através de discussão de boa-fé entre os responsáveis designados de ambas as partes.",
          ],
        },
      ],
    },
  },
  cookies: {
    en: {
      eyebrow: "Legal",
      title: "Cookie Policy",
      sub: "What this site stores on your device, why it stores it, and how to switch it off.",
      updated: "1 September 2026",
      sections: [
        {
          h: "1. What cookies are",
          p: [
            "Cookies are small text files a site places on your device so it can remember something between pages or between visits. Some are set by us, some by the services we use to understand how the site performs.",
          ],
        },
        {
          h: "2. What we use",
          p: [
            "Strictly necessary cookies keep the site working: your language choice and the state of forms you are filling in. Analytics cookies tell us which pages are read and where people leave, in aggregate. Marketing cookies are used only when a campaign is running, to avoid showing you the same advert repeatedly.",
          ],
        },
        {
          h: "3. Third parties",
          p: [
            "Analytics and advertising are handled by Google and Meta. Embedded content, a map or a video, may set cookies from that provider when it loads. We do not sell data to anyone.",
          ],
        },
        {
          h: "4. Turning them off",
          p: [
            "Every browser lets you block or delete cookies in its settings. Blocking the strictly necessary ones may break forms and language switching; blocking the rest changes nothing about how the site works for you.",
          ],
        },
        {
          h: "5. Questions",
          p: [
            "Write to geral@idealisa.ao and we will tell you exactly what is set on our side.",
          ],
        },
      ],
    },
    "pt-AO": {
      eyebrow: "Legal",
      title: "Política de Cookies",
      sub: "O que este site guarda no seu dispositivo, porquê, e como desligar.",
      updated: "1 de Setembro de 2026",
      sections: [
        {
          h: "1. O que são cookies",
          p: [
            "Cookies são pequenos ficheiros de texto que um site coloca no seu dispositivo para recordar algo entre páginas ou entre visitas. Alguns são definidos por nós, outros pelos serviços que usamos para perceber o desempenho do site.",
          ],
        },
        {
          h: "2. O que utilizamos",
          p: [
            "Os cookies estritamente necessários mantêm o site a funcionar: a sua escolha de idioma e o estado dos formulários que está a preencher. Os cookies de analítica dizem-nos que páginas são lidas e onde as pessoas saem, de forma agregada. Os cookies de marketing são usados apenas quando há campanha activa, para não lhe mostrar o mesmo anúncio repetidamente.",
          ],
        },
        {
          h: "3. Terceiros",
          p: [
            "A analítica e a publicidade são geridas pela Google e pela Meta. Conteúdo incorporado, um mapa ou um vídeo, pode definir cookies desse fornecedor ao carregar. Não vendemos dados a ninguém.",
          ],
        },
        {
          h: "4. Como desligar",
          p: [
            "Qualquer navegador permite bloquear ou apagar cookies nas definições. Bloquear os estritamente necessários pode quebrar formulários e a troca de idioma; bloquear os restantes não altera nada no funcionamento do site.",
          ],
        },
        {
          h: "5. Dúvidas",
          p: [
            "Escreva para geral@idealisa.ao e dizemos-lhe exactamente o que é definido do nosso lado.",
          ],
        },
      ],
    },
  },
  testimonials: {
    en: {
      eyebrow: "Clients",
      title: "Testimonials",
      sub: "What the teams we work with say about the work, in their own words.",
      updated: "1 September 2026",
      sections: [],
    },
    "pt-AO": {
      eyebrow: "Clientes",
      title: "Testemunhos",
      sub: "O que dizem as equipas com quem trabalhamos, pelas suas próprias palavras.",
      updated: "1 de Setembro de 2026",
      sections: [],
    },
  },
};

export const docUi = {
  en: {
    updated: "Last updated",
    reviewSource: "Reviews collected with Cignature",
  },
  "pt-AO": {
    updated: "Última actualização",
    reviewSource: "Avaliações recolhidas com a Cignature",
  },
};
