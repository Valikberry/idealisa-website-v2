import type { Language } from "@/lib/translations";

export type PostSummary = {
  id: string;
  slug: string;
  category: string;
  date: string;
  read: number;
  tint: string;
  title: string;
  excerpt: string;
};
export type BlogPost = PostSummary & {
  lead: string;
  quote: string;
  body: { h: string; p: string[] }[];
};

// Complete POSTS data from the design reference, with shared Portuguese slugs.
const en: BlogPost[] = [
  {
    id: "branding-agency",
    slug: "como-escolher-agencia-de-branding-angola",
    category: "Brand strategy",
    date: "3 September 2026",
    read: 7,
    tint: "#4A3127",
    title: "How to Choose the Right Branding Agency in Angola",
    excerpt:
      "Designing a distinctive corporate identity and a defensible position goes well beyond standard graphic design. Here is how to tell the two apart before you sign.",
    lead: "Most agencies can produce something attractive. Far fewer can tell you why it should look that way, and fewer still will say so before you have paid them.",
    quote:
      "Anyone can show you work. Ask to see the thinking that rejected work.",
    body: [
      {
        h: "What to ask in the first meeting",
        p: [
          "Ask about your business model before your logo: pricing, margins, who you lose deals to and why. An agency that does not want those answers is quoting for production, not for positioning.",
          "Ask what they would refuse to do for you. A studio that has never turned down a brief is selling capacity, and capacity is the cheapest thing in this market.",
        ],
      },
      {
        h: "Signals worth ignoring",
        p: [
          "Awards nobody in your sector has heard of, client lists with no described outcome, and mood boards presented as strategy.",
          "What matters is whether positioning gets written down before anything is designed, and whether the people in the room will still be on the work in month six.",
        ],
      },
    ],
  },
  {
    id: "twitter-ads",
    slug: "publicidade-twitter-x-angola",
    category: "Digital",
    date: "28 August 2026",
    read: 5,
    tint: "#2E7D32",
    title: "Twitter (X) Advertising in Angola",
    excerpt:
      "X is small here, loud, and unusually well connected. That combination makes it the wrong first channel and a very good second one.",
    lead: "Nobody in Angola should build a paid strategy on X. Some brands should absolutely be present on it, and for a specific reason.",
    quote: "Small audience, senior audience. Price it accordingly.",
    body: [
      {
        h: "Who is actually there",
        p: [
          "Journalists, analysts, professionals in oil, banking and telecoms, and a young diaspora that argues in public. It is not a consumer market; it is a reputation market.",
          "That makes X useful for institutions, B2B and anyone whose buyers read commentary before they read a brochure.",
        ],
      },
      {
        h: "How to spend on it",
        p: [
          "Keep budgets modest and formats plain: text with one strong line, a single link, no carousel theatre. Promote what a credible person would repost.",
          "Measure replies and saves, not reach. On this platform the signal that matters is whether someone with authority engaged, and one of those is worth ten thousand impressions.",
        ],
      },
    ],
  },
  {
    id: "social-cost",
    slug: "quanto-custa-marketing-redes-sociais-angola",
    category: "Digital",
    date: "18 August 2026",
    read: 8,
    tint: "#2E7D32",
    title: "How Much Does Social Media Marketing Cost in Angola?",
    excerpt:
      "Running a commercial enterprise in Angola without an active, aligned social presence is a choice, and so is paying for one badly. Here is what the money actually buys.",
    lead: "Nobody publishes prices, so every conversation starts with a guess. This is our honest reading of what social media management costs in this market and what changes the number.",
    quote:
      "You are not buying posts. You are buying the decision about what to post.",
    body: [
      {
        h: "What drives the price",
        p: [
          "Three things move the number more than anything else: how much original material has to be produced, how many platforms you insist on being present on, and whether someone senior is deciding the message or just filling a calendar.",
          "A page that reposts stock imagery costs a fraction of one that films monthly. Neither is wrong, but only one of them builds a brand, and pretending otherwise is how budgets get wasted.",
        ],
      },
      {
        h: "The cheapest mistake to stop making",
        p: [
          "Paying for volume before you have decided what you stand for. Thirty posts a month saying nothing in particular is more expensive than eight that say one thing clearly, because the thirty also cost you credibility.",
          "Before you ask what it costs, write down what a follower should believe about you after a year. That sentence is what you are really commissioning.",
        ],
      },
    ],
  },
  {
    id: "youtube",
    slug: "agencia-marketing-publicidade-youtube-angola",
    category: "Digital",
    date: "12 August 2026",
    read: 6,
    tint: "#4A3127",
    title: "YouTube Marketing and Advertising Agency in Angola",
    excerpt:
      "Video is the most expensive format to produce and the cheapest to distribute. Most Angolan brands get that ratio exactly backwards.",
    lead: "YouTube is the only place in this market where you can buy a minute of someone's attention for a predictable price. That makes it powerful and easy to waste.",
    quote: "If the first five seconds need explaining, the ad is already over.",
    body: [
      {
        h: "What video is genuinely good at",
        p: [
          "Explaining something that is hard to believe in text: a factory that actually exists, a service that actually works, a team that actually shows up. Trust is easier to film than to argue. When a client tells us their biggest obstacle is that nobody believes the promise, we stop writing copy and start scheduling a shoot, because the problem is not the wording. It is that the buyer has been disappointed before and has no reason to extend credit to another set of adjectives. A camera in a real place, on a real working day, with real people who know what they are talking about, settles that argument faster than any headline.",
          "It is poor at price lists, terms and anything the viewer needs to read twice. Send those to a landing page and let the film do the work of persuasion. The mistake we see most often is a thirty-second spot trying to carry the entire commercial argument: the promise, the proof, the pricing, the process and the phone number, all narrated at speed over stock footage. Video earns attention and transfers belief; text closes the loop. Split the work along that line and both halves get easier to make.",
        ],
      },
      {
        h: "How to spend the first budget",
        p: [
          "One well-made asset, cut into three lengths, tested against two audiences. Not five rushed films. The first budget is not for winning; it is for learning what your market actually responds to, and you cannot learn anything from five variables changing at once. Cut it at six seconds for reach, fifteen for consideration and forty-five for the audiences already close to buying.",
          "Measure watch time before you measure views. A cheap view that stops at three seconds tells you nothing except that the thumbnail worked. Once you know where people leave, the fix is usually cheap: a different first line, a tighter middle, a clearer ask.",
        ],
      },
    ],
  },
  {
    id: "meta-ads",
    slug: "publicidade-facebook-angola",
    category: "Digital",
    date: "6 August 2026",
    read: 6,
    tint: "#2E7D32",
    title: "Facebook Advertising in Angola",
    excerpt:
      "Meta still reaches more Angolans than any other paid channel. That is exactly why the average campaign here performs so poorly.",
    lead: "Cheap reach hides bad strategy for a long time. When the impressions are almost free, nobody notices that the offer was never clear.",
    quote: "Reach is not the result. Reach is the raw material.",
    body: [
      {
        h: "The three failures we see most",
        p: [
          "Boosting posts instead of running campaigns, so there is no structure to learn from. Selling to everyone in Angola at once, so the message flattens. And sending every click to a homepage that answers a different question.",
          "None of these are budget problems. They are decision problems that a bigger budget makes more expensive.",
        ],
      },
      {
        h: "What a serious setup looks like",
        p: [
          "A written offer, two or three audience hypotheses, one landing page per offer, and a reporting cadence someone actually reads.",
          "Then patience: this market rewards advertisers who stay recognisable for a year over those who relaunch their look every quarter.",
        ],
      },
    ],
  },
  {
    id: "branding-companies",
    slug: "melhores-empresas-branding-angola",
    category: "Brand strategy",
    date: "2 August 2026",
    read: 7,
    tint: "#4A3127",
    title: "What Makes the Best Branding Companies in Angola Different?",
    excerpt:
      "Walk into any business directory in Luanda and you will find dozens of agencies promising identity, strategy and growth. Very few will ask you an uncomfortable question.",
    lead: "The differences that matter are not in the portfolio. They are in what happens in the first three meetings, before anything is designed.",
    quote:
      "An agency that has never turned down a brief is selling capacity, not judgement.",
    body: [
      {
        h: "Signals worth trusting",
        p: [
          "They start with your business model, not your logo. They ask about pricing, margins and who you lose deals to. They put positioning in writing before showing a single visual.",
          "They also tell you when the problem is not branding. Sometimes the answer is a better offer, a faster response time or a price change, and saying so costs them the project.",
        ],
      },
      {
        h: "Signals worth ignoring",
        p: [
          "Team photos instead of case outcomes, decks heavy on adjectives, and references you are not allowed to call.",
          "The real test: ask what they would refuse to do for you and why. Vague answers mean the work will be vague too.",
        ],
      },
    ],
  },
  {
    id: "google-ads-roi",
    slug: "melhor-agencia-google-ads-angola",
    category: "Digital",
    date: "1 August 2026",
    read: 7,
    tint: "#2E7D32",
    title:
      "Which Google Ads Agency in Angola Delivers the Highest ROI in 2026?",
    excerpt:
      "Someone is being paid to manage your campaigns. There are graphs, metrics and reports. None of that is the same as return.",
    lead: "Search advertising is the most measurable money you will spend, which is why it is so often measured against the wrong thing.",
    quote:
      "A cheap click on the wrong search is the most expensive thing in the account.",
    body: [
      {
        h: "Stop reporting on clicks",
        p: [
          "Clicks, impressions and click-through rate describe the auction, not the business. The only numbers worth a monthly meeting are qualified enquiries, cost per qualified enquiry and what those enquiries closed at.",
          "If nobody can tell you what a lead is worth, the account cannot be optimised, only spent.",
        ],
      },
      {
        h: "What we check first in an audit",
        p: [
          "Whether search terms match real buying intent, whether phone calls are tracked at all, and whether the landing page answers the exact search that paid for it.",
          "Nine times out of ten the wasted budget is not in bidding. It is in the gap between the search and the page.",
        ],
      },
    ],
  },
  {
    id: "social-agency",
    slug: "como-escolher-agencia-redes-sociais-angola",
    category: "Digital",
    date: "29 July 2026",
    read: 6,
    tint: "#2E7D32",
    title: "How to Choose the Right Social Media Agency in Angola",
    excerpt:
      "New brands enter the Angolan market weekly, possibly faster than that. Choosing who speaks for yours is a bigger decision than the retainer suggests.",
    lead: "You are not hiring someone to post. You are handing over the daily voice of the company to people you will rarely see.",
    quote: "Whoever writes your captions is writing your brand.",
    body: [
      {
        h: "The three questions that separate them",
        p: [
          "Who writes the copy, and can you meet that person. Who approves before you see it. And what happens on the day something goes wrong in public.",
          "An agency that cannot answer the third question has never handled a real account, whatever the follower counts in the deck say.",
        ],
      },
      {
        h: "How to structure the first three months",
        p: [
          "Agree the message before the calendar: one sentence on what a follower should believe, three content pillars, and a tone you would defend in front of a client.",
          "Then review on substance, not volume. Saved posts, direct messages and enquiries tell you the work is landing; a busier grid tells you nothing at all.",
        ],
      },
    ],
  },
  {
    id: "adwords",
    slug: "google-adwords-angola-crescimento-pago",
    category: "Digital",
    date: "22 July 2026",
    read: 6,
    tint: "#2E7D32",
    title:
      "Google AdWords in Angola: Why Businesses Still Use It for Paid Growth",
    excerpt:
      "Three months into running Google Ads you have thousands of clicks on the dashboard. It is worth asking what any of them were for.",
    lead: "Search is the only channel where the customer describes their problem to you before you spend a kwanza. That is still unmatched, and still misused.",
    quote:
      "Search does not create demand. It collects it, which is why it is cheap to measure and easy to waste.",
    body: [
      {
        h: "Why it survives every trend",
        p: [
          "Intent. Someone typing a service and a city has already decided to buy something; the only question is from whom. No social format gives you that starting position.",
          "It is also the fastest honest test of an offer. If nobody converts on a page built to answer their exact search, the problem was never the channel.",
        ],
      },
      {
        h: "Where the money leaks",
        p: [
          "Broad match left unattended, no negative keyword list, calls untracked, and one landing page serving five different searches.",
          "Fix those four and most accounts here improve without a single extra kwanza of budget.",
        ],
      },
    ],
  },
  {
    id: "ads-strategies",
    slug: "estrategias-google-ads-gerar-contactos-angola",
    category: "Digital",
    date: "2 July 2026",
    read: 8,
    tint: "#2E7D32",
    title:
      "7 Google Ads Strategies Angolan Businesses Use to Generate More Leads",
    excerpt:
      "You have started the campaign. The budget has begun burning. Three days go by and you are still waiting for the phone to ring.",
    lead: "None of these are tricks. They are the seven things we change first when an account is spending without producing enquiries.",
    quote:
      "Most accounts do not need more budget. They need fewer bad searches.",
    body: [
      {
        h: "The first four",
        p: [
          "One: build a negative keyword list before launch, not after. Two: split brand and non-brand so brand traffic stops flattering the numbers. Three: one landing page per offer, answering the exact search. Four: track calls, because in this market most leads arrive by phone.",
          "Together these four usually cut wasted spend by a third, and they cost nothing but attention.",
        ],
      },
      {
        h: "The last three",
        p: [
          "Five: bid on your competitors only when you have a clearer offer, not a cheaper one. Six: use location and schedule limits honestly, since a lead nobody answers at 21:00 is not a lead. Seven: review search terms weekly with someone who knows the business.",
          "The seventh is the one that compounds. Every other change is a setting; that one is judgement, and judgement is what an account is actually paying for.",
        ],
      },
    ],
  },
];
const ptAO: BlogPost[] = [
  {
    id: "branding-agency",
    slug: "como-escolher-agencia-de-branding-angola",
    category: "Estratégia de marca",
    date: "3 de Setembro de 2026",
    read: 7,
    tint: "#4A3127",
    title: "Como Escolher a Agência de Branding Certa em Angola",
    excerpt:
      "Criar uma identidade corporativa distinta e uma posição defensável vai muito além de design gráfico. Aqui fica como distinguir as duas coisas antes de assinar.",
    lead: "Quase todas as agências conseguem produzir algo bonito. Muito poucas conseguem dizer-lhe porque deve ser assim, e menos ainda o dizem antes de serem pagas.",
    quote:
      "Qualquer um mostra trabalho. Peça para ver o raciocínio que recusou trabalho.",
    body: [
      {
        h: "O que perguntar na primeira reunião",
        p: [
          "Pergunte pelo modelo de negócio antes do logótipo: preços, margens, a quem perde negócios e porquê. Uma agência que não quer essas respostas está a orçamentar produção, não posicionamento.",
          "Pergunte o que se recusariam a fazer para si. Um estúdio que nunca recusou um briefing está a vender capacidade, e capacidade é o mais barato que existe neste mercado.",
        ],
      },
      {
        h: "Sinais a ignorar",
        p: [
          "Prémios que ninguém no seu sector conhece, listas de clientes sem resultados descritos e mood boards apresentados como estratégia.",
          "O que conta é se o posicionamento é escrito antes de se desenhar algo, e se as pessoas que estão na sala continuarão no projecto ao sexto mês.",
        ],
      },
    ],
  },
  {
    id: "twitter-ads",
    slug: "publicidade-twitter-x-angola",
    category: "Digital",
    date: "28 de Agosto de 2026",
    read: 5,
    tint: "#2E7D32",
    title: "Publicidade no Twitter (X) em Angola",
    excerpt:
      "O X é pequeno aqui, ruidoso e invulgarmente bem ligado. Essa combinação torna-o o primeiro canal errado e um segundo canal muito bom.",
    lead: "Ninguém em Angola deve construir uma estratégia paga sobre o X. Algumas marcas devem estar lá, e por uma razão concreta.",
    quote: "Audiência pequena, audiência sénior. Avalie em conformidade.",
    body: [
      {
        h: "Quem está lá de facto",
        p: [
          "Jornalistas, analistas, profissionais do petróleo, da banca e das telecomunicações, e uma diáspora jovem que discute em público. Não é um mercado de consumo; é um mercado de reputação.",
          "Isso torna o X útil para instituições, B2B e para quem tem compradores que leem comentários antes de lerem um catálogo.",
        ],
      },
      {
        h: "Como investir",
        p: [
          "Orçamentos contidos e formatos simples: texto com uma frase forte, um único link, sem teatro de carrosséis. Promova aquilo que uma pessoa credível partilharia.",
          "Meça respostas e guardados, não alcance. Aqui o sinal que conta é se alguém com autoridade interagiu, e um desses vale dez mil impressões.",
        ],
      },
    ],
  },
  {
    id: "social-cost",
    slug: "quanto-custa-marketing-redes-sociais-angola",
    category: "Digital",
    date: "18 de Agosto de 2026",
    read: 8,
    tint: "#2E7D32",
    title: "Quanto Custa Marketing de Redes Sociais em Angola?",
    excerpt:
      "Gerir um negócio em Angola sem uma presença social activa e alinhada é uma escolha, e pagar mal por uma também. Isto é o que o dinheiro compra de facto.",
    lead: "Ninguém publica preços, por isso cada conversa começa com um palpite. Esta é a nossa leitura honesta do que custa a gestão de redes sociais neste mercado e do que muda o número.",
    quote:
      "Não está a comprar publicações. Está a comprar a decisão sobre o que publicar.",
    body: [
      {
        h: "O que determina o preço",
        p: [
          "Três coisas movem o número mais do que tudo: quanto material original tem de ser produzido, em quantas plataformas insiste em estar, e se é alguém sénior a decidir a mensagem ou apenas a preencher um calendário.",
          "Uma página que republica imagens de banco custa uma fracção de uma que filma todos os meses. Nenhuma está errada, mas só uma constrói marca, e fingir o contrário é como se desperdiçam orçamentos.",
        ],
      },
      {
        h: "O erro mais barato de corrigir",
        p: [
          "Pagar por volume antes de decidir o que defende. Trinta publicações por mês a dizer nada em concreto são mais caras do que oito que dizem uma coisa com clareza, porque as trinta custam-lhe também credibilidade.",
          "Antes de perguntar quanto custa, escreva o que um seguidor deve acreditar sobre si ao fim de um ano. É essa frase que está realmente a encomendar.",
        ],
      },
    ],
  },
  {
    id: "youtube",
    slug: "agencia-marketing-publicidade-youtube-angola",
    category: "Digital",
    date: "12 de Agosto de 2026",
    read: 6,
    tint: "#4A3127",
    title: "Agência de Marketing e Publicidade no YouTube em Angola",
    excerpt:
      "O vídeo é o formato mais caro de produzir e o mais barato de distribuir. A maioria das marcas angolanas inverte exactamente essa proporção.",
    lead: "O YouTube é o único lugar neste mercado onde se compra um minuto de atenção a um preço previsível. Isso torna-o poderoso e fácil de desperdiçar.",
    quote:
      "Se os primeiros cinco segundos precisam de explicação, o anúncio já acabou.",
    body: [
      {
        h: "Aquilo em que o vídeo é genuinamente bom",
        p: [
          "Explicar algo difícil de acreditar em texto: uma fábrica que existe de facto, um serviço que funciona de facto, uma equipa que aparece de facto. A confiança é mais fácil de filmar do que de argumentar. Quando um cliente nos diz que o maior obstáculo é ninguém acreditar na promessa, deixamos de escrever texto e passamos a marcar filmagens, porque o problema não é a redacção. É que o comprador já foi desiludido antes e não tem razão para dar crédito a mais um conjunto de adjectivos.",
          "É mau para tabelas de preços, condições e tudo o que o espectador tem de ler duas vezes. Mande isso para uma página e deixe o filme fazer o trabalho de persuasão. O erro mais comum é um anúncio de trinta segundos a tentar carregar o argumento comercial inteiro: promessa, prova, preço, processo e telefone, narrados a correr sobre imagens de banco.",
        ],
      },
      {
        h: "Como gastar o primeiro orçamento",
        p: [
          "Um activo bem feito, cortado em três durações, testado com duas audiências. Não cinco filmes apressados. O primeiro orçamento não é para ganhar; é para aprender ao que o seu mercado responde, e não se aprende nada com cinco variáveis a mudar ao mesmo tempo.",
          "Meça tempo de visualização antes de medir visualizações. Uma visualização barata que pára aos três segundos só diz que a miniatura funcionou. Quando souber onde as pessoas saem, a correcção é normalmente barata.",
        ],
      },
    ],
  },
  {
    id: "meta-ads",
    slug: "publicidade-facebook-angola",
    category: "Digital",
    date: "6 de Agosto de 2026",
    read: 6,
    tint: "#2E7D32",
    title: "Publicidade no Facebook em Angola",
    excerpt:
      "A Meta continua a chegar a mais angolanos do que qualquer outro canal pago. É exactamente por isso que a campanha média aqui tem tão fracos resultados.",
    lead: "O alcance barato esconde má estratégia durante muito tempo. Quando as impressões são quase gratuitas, ninguém nota que a oferta nunca foi clara.",
    quote: "O alcance não é o resultado. O alcance é a matéria-prima.",
    body: [
      {
        h: "As três falhas que mais vemos",
        p: [
          "Impulsionar publicações em vez de correr campanhas, sem estrutura de onde aprender. Vender a toda a Angola ao mesmo tempo, achatando a mensagem. E enviar cada clique para uma página inicial que responde a outra pergunta.",
          "Nenhum destes é um problema de orçamento. São problemas de decisão que um orçamento maior torna mais caros.",
        ],
      },
      {
        h: "O que é uma estrutura séria",
        p: [
          "Uma oferta escrita, duas ou três hipóteses de audiência, uma página por oferta, e uma cadência de relatórios que alguém lê de facto.",
          "Depois, paciência: este mercado premia quem se mantém reconhecível durante um ano em vez de quem muda de imagem a cada trimestre.",
        ],
      },
    ],
  },
  {
    id: "branding-companies",
    slug: "melhores-empresas-branding-angola",
    category: "Estratégia de marca",
    date: "2 de Agosto de 2026",
    read: 7,
    tint: "#4A3127",
    title: "O Que Distingue as Melhores Empresas de Branding em Angola?",
    excerpt:
      "Percorra qualquer directório de empresas em Luanda e encontrará dezenas de agências a prometer identidade, estratégia e crescimento. Muito poucas lhe farão uma pergunta incómoda.",
    lead: "As diferenças que contam não estão no portfólio. Estão no que acontece nas primeiras três reuniões, antes de se desenhar qualquer coisa.",
    quote:
      "Uma agência que nunca recusou um briefing vende capacidade, não critério.",
    body: [
      {
        h: "Sinais em que vale confiar",
        p: [
          "Começam pelo seu modelo de negócio, não pelo logótipo. Perguntam por preços, margens e a quem perde negócios. Põem o posicionamento por escrito antes de mostrar um único visual.",
          "Também lhe dizem quando o problema não é a marca. Às vezes a resposta é uma oferta melhor, um tempo de resposta mais rápido ou uma mudança de preço, e dizê-lo custa-lhes o projecto.",
        ],
      },
      {
        h: "Sinais a ignorar",
        p: [
          "Fotografias de equipa em vez de resultados, apresentações cheias de adjectivos e referências que não pode telefonar.",
          "O verdadeiro teste: pergunte o que se recusariam a fazer para si e porquê. Respostas vagas significam trabalho vago.",
        ],
      },
    ],
  },
  {
    id: "google-ads-roi",
    slug: "melhor-agencia-google-ads-angola",
    category: "Digital",
    date: "1 de Agosto de 2026",
    read: 7,
    tint: "#2E7D32",
    title: "Que Agência de Google Ads em Angola Dá Mais Retorno em 2026?",
    excerpt:
      "Alguém está a ser pago para gerir as suas campanhas. Há gráficos, métricas e relatórios. Nada disso é o mesmo que retorno.",
    lead: "A publicidade em pesquisa é o dinheiro mais mensurável que vai gastar, e por isso é tantas vezes medido contra a coisa errada.",
    quote: "Um clique barato na pesquisa errada é a coisa mais cara da conta.",
    body: [
      {
        h: "Pare de reportar cliques",
        p: [
          "Cliques, impressões e taxa de cliques descrevem o leilão, não o negócio. Os únicos números que merecem uma reunião mensal são contactos qualificados, custo por contacto qualificado e o valor com que fecharam.",
          "Se ninguém lhe consegue dizer quanto vale um contacto, a conta não pode ser optimizada, apenas gasta.",
        ],
      },
      {
        h: "O que verificamos primeiro numa auditoria",
        p: [
          "Se os termos de pesquisa correspondem a intenção real de compra, se as chamadas são sequer medidas, e se a página responde exactamente à pesquisa que a pagou.",
          "Nove vezes em dez o orçamento desperdiçado não está nos lances. Está na distância entre a pesquisa e a página.",
        ],
      },
    ],
  },
  {
    id: "social-agency",
    slug: "como-escolher-agencia-redes-sociais-angola",
    category: "Digital",
    date: "29 de Julho de 2026",
    read: 6,
    tint: "#2E7D32",
    title: "Como Escolher a Agência de Redes Sociais Certa em Angola",
    excerpt:
      "Entram marcas novas no mercado angolano todas as semanas, talvez mais depressa do que isso. Escolher quem fala pela sua é uma decisão maior do que o valor do contrato sugere.",
    lead: "Não está a contratar alguém para publicar. Está a entregar a voz diária da empresa a pessoas que raramente vai ver.",
    quote: "Quem escreve as suas legendas está a escrever a sua marca.",
    body: [
      {
        h: "As três perguntas que as separam",
        p: [
          "Quem escreve o texto, e se o pode conhecer. Quem aprova antes de o senhor ver. E o que acontece no dia em que algo corre mal em público.",
          "Uma agência que não sabe responder à terceira nunca geriu uma conta a sério, digam o que disserem os números de seguidores da apresentação.",
        ],
      },
      {
        h: "Como estruturar os primeiros três meses",
        p: [
          "Acorde a mensagem antes do calendário: uma frase sobre o que um seguidor deve acreditar, três pilares de conteúdo, e um tom que defenderia à frente de um cliente.",
          "Depois avalie substância, não volume. Publicações guardadas, mensagens directas e pedidos de informação dizem-lhe que o trabalho está a chegar; uma grelha mais cheia não diz nada.",
        ],
      },
    ],
  },
  {
    id: "adwords",
    slug: "google-adwords-angola-crescimento-pago",
    category: "Digital",
    date: "22 de Julho de 2026",
    read: 6,
    tint: "#2E7D32",
    title:
      "Google AdWords em Angola: Porque Ainda Funciona no Crescimento Pago",
    excerpt:
      "Três meses a correr Google Ads e tem milhares de cliques no painel. Vale a pena perguntar para que serviu algum deles.",
    lead: "A pesquisa é o único canal onde o cliente lhe descreve o problema antes de gastar um kwanza. Isso continua sem rival, e continua mal usado.",
    quote:
      "A pesquisa não cria procura. Recolhe-a, e é por isso que é barata de medir e fácil de desperdiçar.",
    body: [
      {
        h: "Porque sobrevive a todas as modas",
        p: [
          "Intenção. Quem escreve um serviço e uma cidade já decidiu comprar algo; a única questão é a quem. Nenhum formato social lhe dá essa posição de partida.",
          "É também o teste honesto mais rápido de uma oferta. Se ninguém converte numa página feita para responder à pesquisa exacta, o problema nunca foi o canal.",
        ],
      },
      {
        h: "Onde o dinheiro se perde",
        p: [
          "Correspondência ampla sem vigilância, lista de palavras negativas inexistente, chamadas não medidas, e uma só página a servir cinco pesquisas diferentes.",
          "Corrija esses quatro pontos e a maioria das contas aqui melhora sem um kwanza adicional de orçamento.",
        ],
      },
    ],
  },
  {
    id: "ads-strategies",
    slug: "estrategias-google-ads-gerar-contactos-angola",
    category: "Digital",
    date: "2 de Julho de 2026",
    read: 8,
    tint: "#2E7D32",
    title: "7 Estratégias de Google Ads Que Geram Mais Contactos em Angola",
    excerpt:
      "A campanha arrancou. O orçamento começou a arder. Passam três dias e continua à espera que o telefone toque.",
    lead: "Nenhuma destas é um truque. São as sete coisas que mudamos primeiro quando uma conta gasta sem produzir pedidos de informação.",
    quote:
      "A maioria das contas não precisa de mais orçamento. Precisa de menos pesquisas erradas.",
    body: [
      {
        h: "As primeiras quatro",
        p: [
          "Um: construir a lista de palavras negativas antes do lançamento, não depois. Dois: separar marca de não-marca, para que o tráfego de marca deixe de embelezar os números. Três: uma página por oferta, a responder à pesquisa exacta. Quatro: medir chamadas, porque neste mercado a maioria dos contactos chega por telefone.",
          "Juntas, estas quatro cortam normalmente um terço do desperdício, e não custam nada além de atenção.",
        ],
      },
      {
        h: "As últimas três",
        p: [
          "Cinco: licitar sobre concorrentes só quando tem uma oferta mais clara, não mais barata. Seis: usar limites de localização e horário com honestidade, porque um contacto que ninguém atende às 21:00 não é um contacto. Sete: revisitar os termos de pesquisa todas as semanas com alguém que conheça o negócio.",
          "A sétima é a que se acumula. Todas as outras são configurações; essa é critério, e é critério que uma conta está de facto a pagar.",
        ],
      },
    ],
  },
];

export const BLOG_POSTS: Record<Language, BlogPost[]> = { en, "pt-AO": ptAO };

// Preserve the home page's three recent posts, derived from the full collection.
export const POSTS: Record<Language, BlogPost[]> = {
  en: BLOG_POSTS.en.slice(0, 3),
  "pt-AO": BLOG_POSTS["pt-AO"].slice(0, 3),
};
