const DATA = {
  nome: "Nicolly Alcântara",
  cargo: "Analista de dados júnior",
  cidade: "Queluz, SP",
  disponivel: "Disponível para oportunidades",
  idade: new Date().getFullYear() - 2004 - (new Date() < new Date(new Date().getFullYear(), 11, 15) ? 1 : 0),
  hero: "Jovem, curiosa e cheia de planos, levo a sério o que entrego: dados bem tratados, processos documentados e dashboards claros em Power BI, SQL e Excel.",
  destaques: ["Organizada e detalhista", "Boa com documentação", "Sempre aprendendo"],
  sobre: [
    "Sou tecnóloga em Análise e Desenvolvimento de Sistemas pela Fatec (2025), com formação complementar em Análise de Dados e Business Intelligence.",
    "No dia a dia, organizo e valido informações, acompanho demandas e ajudo a melhorar processos. Gosto de transformar dados em indicadores e dashboards que respondem a perguntas reais.",
    "Sou muito boa com documentação: mapeio processos, levanto requisitos e deixo tudo registrado de forma clara para a equipe. Levo o mesmo cuidado para cada análise.",
    "Uso SQL, Excel avançado e Power BI, e sigo o CRISP-DM nos meus projetos de análise. Busco minha oportunidade nas áreas de dados, banco de dados e análise de informações."
  ],
  fatos: [
    ["Idade", null],
    ["Formação", "Tecnóloga em ADS, Fatec (2025)"],
    ["Foco", "SQL, Excel e Power BI"],
    ["Localização", null]
  ],
  formacao: [
    {titulo: "Tecnologia em Análise e Desenvolvimento de Sistemas", onde: "Fatec Prof. Waldomiro May", quando: "Concluído em 2025", texto: "Base em programação, bancos de dados, engenharia de software e levantamento de requisitos."},
    {titulo: "Microsoft Power BI para Business Intelligence e Data Science", onde: "Data Science Academy", quando: "72 horas", texto: "Curso completo de Power BI, da preparação dos dados à criação de dashboards."},
    {titulo: "Análise de Dados e Inteligência de Negócios", onde: "Gran Faculdade", quando: "30 horas", texto: "Fundamentos de análise de dados aplicados a decisões de negócio."},
    {titulo: "Cursos de Power BI e Excel", onde: "Fundação Bradesco e Alura", quando: "4 a 8 horas cada", texto: "Análise de dados no Power BI, tabelas e gráficos dinâmicos e automação de tarefas com macros no Excel."},
    {titulo: "Ensino Médio integrado ao Técnico em Desenvolvimento de Sistemas", onde: "Etec Prof. José Sant'ana de Castro", quando: "Concluído em 2022", texto: "Primeiro contato com lógica de programação e desenvolvimento de sistemas."}
  ],
  experiencia: [
    {titulo: "Auxiliar de Docente de Informática", onde: "Centro Estadual de Educação Tecnológica Paula Souza", quando: "Out/2024 — atualmente", texto: "Organizo e atualizo registros no Excel e em sistemas, confiro e valido informações, acompanho demandas e apoio professores e estudantes em um ambiente com mais de 100 estações de trabalho."},
    {titulo: "Estagiária de T.I.", onde: "Prefeitura Municipal de Queluz", quando: "Out/2023 — Set/2024", texto: "Organizei e conferi informações sobre ativos e demandas de TI, analisei dados para apoiar o setor e dei suporte a servidores públicos."},
    {titulo: "Projeto acadêmico: SIGPRO, sistema de gestão de professores", onde: "Fatec", quando: "Projeto da graduação", texto: "Levantei necessidades, mapeei processos, defini requisitos e propus uma solução para otimizar a substituição de professores."}
  ],
  competencias: [
    {titulo: "Power BI e dashboards", nivel: "Intermediário / avançado", itens: ["Dashboards interativos", "Indicadores (KPI)", "Power Query", "DAX", "Relatórios"]},
    {titulo: "SQL e bancos de dados", itens: ["SQL", "SQL Server", "MySQL", "Bancos relacionais", "Validação de dados"]},
    {titulo: "Excel avançado", nivel: "Avançado", itens: ["Tabelas dinâmicas", "Gráficos dinâmicos", "Macros", "Análise de dados"]},
    {titulo: "Documentação e processos", destaque: true, texto: "Registro cada etapa com clareza, para que a equipe entenda o trabalho e consiga dar continuidade.", itens: ["Documentação de processos", "Levantamento de requisitos", "Mapeamento de processos", "Organização de informações"]},
    {titulo: "Análise de dados", itens: ["CRISP-DM", "Preparação e tratamento", "Qualidade e consistência", "Interpretação de dados"]},
    {titulo: "Jeito de trabalhar", itens: ["Organizada", "Analítica", "Resolução de problemas", "Atendimento e suporte", "Inglês técnico"]}
  ],
  projetos: [
    {titulo: "Balanço patrimonial com visual de matriz", tipo: "Finanças", texto: "Balanço patrimonial em Power BI com matriz hierárquica de contas, de 2019 a 2023. O Ativo Total e o Passivo + PL fecham em 6,46 mi, com patrimônio líquido de 3,66 mi, e o gráfico mostra a evolução dos lucros acumulados.", tech: ["Power BI"], link: "", repo: "https://github.com/NicollyOAlcantara/lab03-balanco-patrimonial-powerbi", img: "assets/projetos/balanco-patrimonial.jpg", galeria: ["assets/projetos/balanco-patrimonial.jpg"]},
    {titulo: "Análise de dados financeiros", tipo: "Finanças", texto: "Dashboard com R$ 1,92 mi em receitas, R$ 1,15 mi em despesas e margem de lucro de 39,96%. As vendas respondem por cerca de 71% das receitas, e o administrativo é a maior despesa. Inclui análise por componente, valores por ano e segmentação.", tech: ["Power BI", "DAX", "Power Query", "Excel"], link: "", repo: "https://github.com/NicollyOAlcantara/analise-dados-financeiros-powerbi", img: "assets/projetos/financeiro.jpg", galeria: ["assets/projetos/financeiro.jpg"]},
    {titulo: "Vendas globais por país e segmento", tipo: "Vendas", texto: "Dashboard com 12,64 mi em vendas, filtrado por segmento, ano e país. Suprimentos concentra 61% das vendas, e o mapa mostra a média por país e a prioridade de entrega.", tech: ["Power BI"], link: "", repo: "https://github.com/NicollyOAlcantara/projeto-power-bi-vendas-globais", img: "assets/projetos/vendas-globais.jpg", galeria: ["assets/projetos/vendas-globais/1.jpg"]},
    {titulo: "Vendas, custos e margem de lucro", tipo: "Vendas", texto: "Análise de 2014 com valor de venda por modo de envio, custo de envio por mercado, lucro por categoria e margem de lucro ao longo do ano.", tech: ["Power BI"], link: "", repo: "https://github.com/NicollyOAlcantara/projeto-power-bi-vendas-kpi", img: "assets/projetos/vendas-kpi.jpg", galeria: ["assets/projetos/vendas-kpi/1.jpg"]},
    {titulo: "Performance comercial de vendas", tipo: "Vendas", texto: "Dashboard com narrativa inteligente e principais influenciadores de vendas. A Brastemp lidera entre 12 fabricantes, com 25,8% do total, e o segmento Corporativo é o que mais eleva o valor de venda.", tech: ["Power BI","CRISP-DM"], link: "", repo: "https://github.com/NicollyOAlcantara/mini-projeto-power-bi-comercial", img: "assets/projetos/comercial.jpg", galeria: ["assets/projetos/comercial/1.jpg", "assets/projetos/comercial/2.jpg", "assets/projetos/comercial/3.jpg", "assets/projetos/comercial/4.jpg", "assets/projetos/comercial/5.jpg"]},
    {titulo: "Campanha de marketing", tipo: "Marketing", texto: "Quatro visões sobre 1.999 clientes: perfil, comportamento de compra, resultado da campanha e padrões por país. Só 16% compraram, e quem comprou tem salário médio maior (59 mil contra 51 mil).", tech: ["Power BI","CRISP-DM"], link: "", repo: "https://github.com/NicollyOAlcantara/mini-projeto-power-bi-marketing", img: "assets/projetos/marketing.jpg", galeria: ["assets/projetos/marketing/1.jpg", "assets/projetos/marketing/2.jpg", "assets/projetos/marketing/3.jpg", "assets/projetos/marketing/4.jpg", "assets/projetos/marketing/5.jpg"]},
    {titulo: "Pessoas e RH", tipo: "RH", texto: "Panorama de 1.400 funcionários da área de dados: salário médio de R$ 6,93 mil, 11,29 anos de experiência, funções, envolvimento no trabalho e disponibilidade para hora extra.", tech: ["Power BI","CRISP-DM"], link: "", repo: "https://github.com/NicollyOAlcantara/mini-projeto-power-bi-rh", img: "assets/projetos/rh.jpg", galeria: ["assets/projetos/rh/1.jpg"]},
    {titulo: "Entregas e prazos na logística", tipo: "Logística", texto: "54 mil entregas analisadas, das quais 47 mil no prazo e 13% com atraso. O dashboard compara canais, equipes, meses e cidades com mais atrasos.", tech: ["Power BI"], link: "", repo: "https://github.com/NicollyOAlcantara/mini-projeto-04-analise-logistica", img: "assets/projetos/logistica.jpg", galeria: ["assets/projetos/logistica/1.jpg"]}
  ],
  curriculo: "assets/curriculo-nicolly-alcantara.pdf",
  contato: {
    titulo: "Vamos fazer um JOIN?",
    texto: "Estou buscando minha oportunidade na área de dados. Me chame para uma conversa ou acompanhe meus projetos no GitHub.",
    links: [["E-mail", "mailto:nicollyoalcantara@icloud.com"], ["LinkedIn", "https://www.linkedin.com/in/nicollyalcantara"], ["GitHub", "https://github.com/NicollyOAlcantara"], ["Baixar currículo", "assets/curriculo-nicolly-alcantara.pdf"]]
  }
};
