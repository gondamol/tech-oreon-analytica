export const navSolutions = [
  {
    label: "Marketing",
    to: "/solutions/marketing",
    blurb: "Brand tracking, message testing, audience segmentation and launch research for Kenyan markets."
  },
  {
    label: "Risk & Compliance",
    to: "/solutions/risk-compliance",
    blurb: "Monitor narrative risk, conduct issues, misinformation and escalation signals before they spread."
  },
  {
    label: "Customer Experience",
    to: "/solutions/customer-experience",
    blurb: "Map journeys, surface pain points and compare service experience across counties, branches or segments."
  },
  {
    label: "Customer Service",
    to: "/solutions/customer-service",
    blurb: "Turn feedback from calls, WhatsApp, web forms and social channels into a clear action queue."
  }
];

export const navResources = [
  {
    label: "Context-specific labelling",
    to: "/resources/news/make-your-data-more-meaningful-with-context-specific-labelling",
    blurb: "Turn raw feedback into meaningful categories leaders can act on."
  },
  {
    label: "Net sentiment",
    to: "/labels/net-sentiment",
    blurb: "A clearer way to express public mood and brand approval over time."
  },
  {
    label: "Case studies",
    to: "/resources/case-studies",
    blurb: "Selected examples of research and intelligence delivery patterns."
  }
];

export const credibilityMetrics = [
  { value: 8, suffix: "+", label: "years per founder", detail: "Research, analytics and field systems depth." },
  {
    value: 4,
    suffix: "",
    label: "East African countries",
    detail: "Leadership experience across Kenya, Uganda, Rwanda and Tanzania."
  },
  {
    value: 5,
    prefix: "$",
    suffix: "M+",
    label: "portfolio exposure",
    detail: "Research value represented through founder-led work."
  },
  {
    value: 1000,
    suffix: "+",
    label: "research staff trained",
    detail: "Enumerator and analyst support across multiple programmes."
  }
];

export const engineStages = [
  {
    title: "Raw Kenyan signal capture",
    summary:
      "Phone interviews, WhatsApp responses, SMS prompts, social media conversations, USSD flows and field CAPI feeds enter the same intelligence stream.",
    note: "Built for counties, towns, estates and rural field teams."
  },
  {
    title: "Tech Oreon research engine",
    summary:
      "Researchers and AI-assisted coding classify issues, tone, risk, sentiment, influencers, voter mood, brand preference and service pain points.",
    note: "Human judgement stays in the loop for quality control and context."
  },
  {
    title: "Validation and weighting",
    summary:
      "Sampling controls, callbacks, demographic balancing, language checks, field QC and dashboard monitoring turn noisy responses into trustworthy evidence.",
    note: "Designed for fast-moving opinion work without sacrificing rigour."
  },
  {
    title: "Actionable county intelligence",
    summary:
      "Clients receive decision-ready dashboards, briefs, maps, message tests, voter mood trackers and recommendation memos that can be acted on the same day.",
    note: "From campaign war rooms to boardrooms and donor reviews."
  }
];

export const labels = [
  {
    name: "Sentiment",
    short: "See who is warming up, staying neutral, or turning sharply negative.",
    detail:
      "Useful for issue heat, candidate mood, brand approval and tracking the emotional direction of public conversation over time.",
    outputs: ["Positive vs negative shifts", "County mood snapshots", "Approval trend lines"]
  },
  {
    name: "Topics",
    short: "Group messy responses into themes like jobs, healthcare, cost of living and roads.",
    detail:
      "Lets teams compare what people are really talking about across counties, audience groups, or market segments.",
    outputs: ["Issue salience ranking", "Theme clustering", "Cross-county comparison"]
  },
  {
    name: "Risk",
    short: "Flag warning signs before backlash, rumor escalation or trust erosion spreads.",
    detail:
      "Strong for political environments, brand crises and community programs where dissatisfaction needs fast escalation.",
    outputs: ["Reputation alerts", "Risk heatmaps", "Escalation triggers"]
  },
  {
    name: "Conduct",
    short: "Separate complaints about behaviour, service failures, corruption or abuse of process.",
    detail:
      "Helps institutions distinguish operational failures from deeper conduct and credibility concerns.",
    outputs: ["Incident coding", "Misconduct grouping", "Accountability dashboards"]
  },
  {
    name: "Journey",
    short: "Map the path from awareness to action, usage, dropout or repeat support.",
    detail:
      "Especially useful for voter mobilisation, customer journeys and public program participation funnels.",
    outputs: ["Drop-off points", "Engagement stages", "Response funnels"]
  },
  {
    name: "Priority",
    short: "Rank what matters most instead of drowning decision-makers in equal-weight findings.",
    detail:
      "Combines issue severity, urgency and frequency so leaders know what to fix, answer or emphasise first.",
    outputs: ["Priority queues", "Top actions", "War-room summaries"]
  },
  {
    name: "Channels",
    short: "Know where the signal is strongest: call centers, WhatsApp, radio, TikTok, X or field teams.",
    detail:
      "Shows how communication patterns shift by audience and where intervention or listening should deepen next.",
    outputs: ["Channel mix", "Platform comparison", "Distribution maps"]
  },
  {
    name: "Vulnerability",
    short: "Surface the groups experiencing the sharpest pain or exclusion.",
    detail:
      "Useful for development programs, service-delivery studies and issue framing where equity matters.",
    outputs: ["At-risk segments", "Equity findings", "Population flags"]
  }
];

export const homeResourceCards = [
  {
    eyebrow: "Resource article",
    title: "Make data meaningful with context-specific labels",
    body:
      "A deeper look at how labels transform raw responses into structured intelligence that teams can compare, summarise and act on.",
    to: "/resources/news/make-your-data-more-meaningful-with-context-specific-labelling"
  },
  {
    eyebrow: "Measurement framework",
    title: "Understand net sentiment before the next briefing",
    body:
      "See how positive and negative mood can be turned into a clean score for polling trackers, brand studies and narrative monitoring.",
    to: "/labels/net-sentiment"
  },
  {
    eyebrow: "Selected work",
    title: "Explore case studies and delivery patterns",
    body:
      "Examples of the kind of research, dashboarding and insight translation our founders bring into Tech Oreon projects.",
    to: "/resources/case-studies"
  }
];

export const methodologyModes = [
  {
    name: "Live CATI",
    strap: "Human-led phone conversations",
    detail:
      "Best for persuasion diagnostics, high-value stakeholder interviews and contexts where probing, language switching and rapport matter."
  },
  {
    name: "SMS and WhatsApp",
    strap: "Low-friction mobile reach",
    detail:
      "Useful for rapid pulse checks, opt-in audience engagement, callback funnels and short message tests in urban and peri-urban settings."
  },
  {
    name: "IVR and mobile web",
    strap: "Scaled remote collection",
    detail:
      "Helpful when speed and coverage matter, especially for short instruments, voter mood snapshots and broad issue salience tracking."
  },
  {
    name: "CAPI fieldwork",
    strap: "Face-to-face county ground truth",
    detail:
      "Ideal for rural populations, hard-to-reach respondents and projects needing observational context, showcards or longer structured questionnaires."
  },
  {
    name: "Weighting and callbacks",
    strap: "Quality and representativeness",
    detail:
      "We layer callback logic, quota controls, post-stratification, language checks and supervisor review so faster collection still holds up analytically."
  },
  {
    name: "War-room dashboards",
    strap: "Delivery for action",
    detail:
      "Results are translated into map views, talking point shifts, risk alerts and recommendation summaries that senior teams can use immediately."
  }
];

export const localityChips = ["Nairobi", "Kisumu", "Siaya", "Homa Bay", "Migori", "Kisii", "Kakamega", "Mombasa"];

export const institutionRibbon = [
  "Georgetown University",
  "KEMRI",
  "KNBS",
  "Global Fund",
  "EU-linked observation work",
  "KenGen",
  "Multimedia University"
];

export const founderCards = [
  {
    role: "Co-Founder and Lead Data Strategist",
    name: "Nichodemus Amollo",
    summary:
      "Senior research leader with 8+ years across East African public health, livelihoods, social protection and evaluation work. Brings sampling rigour, biostatistics, causal analysis, field quality systems and decision-grade reporting.",
    extras:
      "Published researcher, native Dholuo speaker, and MSc Epidemiology & Biostatistics candidate with experience spanning multi-country dashboards, RCT design and evidence translation for leadership teams.",
    skills: ["Polling design", "Biostatistics", "ETL and dashboards", "Field leadership", "Quantitative strategy"],
    contactLabel: "Request full profile",
    contactHref: "mailto:info@techoreonanalytica.com?subject=Leadership%20Profile%20Request%20-%20Nichodemus%20Amollo"
  },
  {
    role: "Co-Founder and Director, Technology, Data and Digital Intelligence",
    name: "Evance Omondi Otieno",
    summary:
      "Technology entrepreneur and data analyst with 8+ years in ICT systems design, research operations, digital transformation, secure field technology and live monitoring environments.",
    extras:
      "Leads the infrastructure behind collection, dashboards, social listening, data governance and cyber-secure delivery. Also brings enterprise execution experience from Sigmoid Logistics and Oreonet.",
    skills: ["Research tech", "Digital intelligence", "Power BI and R Shiny", "Cybersecurity governance", "ICT delivery"],
    contactLabel: "Request full profile",
    contactHref: "mailto:info@techoreonanalytica.com?subject=Leadership%20Profile%20Request%20-%20Evance%20Omondi%20Otieno"
  }
];

export const solutionPages = {
  marketing: {
    eyebrow: "Solution",
    title: "Marketing intelligence and message testing",
    lead:
      "See how audiences react to your brand, campaign or offer before you spend more money pushing it.",
    intro:
      "This solution helps brands, campaign teams and institutions understand positioning, message resonance, demand and audience differences in a Kenyan context.",
    features: [
      {
        title: "Brand perception tracking",
        body: "Track what people trust, question or reject, and see how that changes by county, segment or campaign moment."
      },
      {
        title: "Message testing",
        body: "Compare different taglines, promises, offers or talking points before rollout and see which ones land."
      },
      {
        title: "Audience segmentation",
        body: "Break findings down by geography, age, income band, language group or voter profile so action stays targeted."
      },
      {
        title: "Pricing and affordability",
        body: "Measure willingness to pay, price pressure and household trade-offs before adjusting pricing or bundle strategy."
      },
      {
        title: "Competitor watch",
        body: "See who is winning share of voice, preference and emotional loyalty in the same market or issue space."
      },
      {
        title: "Launch diagnostics",
        body: "Stress-test a new product, campaign push or communications burst before the bigger spend goes out."
      }
    ],
    outputs: ["Brand trackers", "Audience segments", "Message scorecards", "Launch briefs"],
    related: ["/labels/net-sentiment", "/resources/case-studies"]
  },
  "risk-compliance": {
    eyebrow: "Solution",
    title: "Risk, compliance and reputation monitoring",
    lead:
      "Catch reputation threats, misinformation waves and conduct issues early enough to respond with confidence.",
    intro:
      "We combine digital monitoring, issue coding and escalation logic so risk teams can distinguish background noise from the signals that need action.",
    features: [
      {
        title: "Risk triage",
        body: "Separate passing complaints from serious threats involving trust erosion, mobilisation, fraud exposure or service breakdown."
      },
      {
        title: "Conduct and fraud coding",
        body: "Classify reports involving misconduct, bribery, abuse of process, leakage or non-compliant behaviour."
      },
      {
        title: "Narrative monitoring",
        body: "Track how accusations, misinformation or credibility issues are spreading online and across field feedback."
      },
      {
        title: "Escalation thresholds",
        body: "Set rules for what should trigger a same-day alert, a management memo or a full investigation workflow."
      },
      {
        title: "Heatmaps and case clustering",
        body: "View incident patterns by branch, county, channel or team so problem areas stand out immediately."
      },
      {
        title: "Leadership reporting",
        body: "Turn complex risk streams into short executive updates with priorities, context and recommended next steps."
      }
    ],
    outputs: ["Risk dashboards", "Escalation alerts", "Integrity summaries", "Narrative heatmaps"],
    related: [
      "/resources/news/make-your-data-more-meaningful-with-context-specific-labelling",
      "/labels/net-sentiment"
    ]
  },
  "customer-experience": {
    eyebrow: "Solution",
    title: "Customer experience and journey insight",
    lead:
      "Understand what people go through before, during and after they interact with your service.",
    intro:
      "We combine survey data, call-center feedback, WhatsApp messages, field visits and journey mapping to show where experience is working and where it is breaking.",
    features: [
      {
        title: "Journey mapping",
        body: "Follow the full path from awareness to uptake, usage, frustration, dropout or repeat use."
      },
      {
        title: "Satisfaction and effort tracking",
        body: "Measure satisfaction, friction and task difficulty so you can see whether service is improving or slipping."
      },
      {
        title: "Pain-point coding",
        body: "Classify complaints into service delays, staff behaviour, communication gaps, access barriers or process failures."
      },
      {
        title: "Segment comparison",
        body: "Compare experience across counties, branches, customer types or vulnerable groups instead of reporting one average score."
      },
      {
        title: "Voice-of-customer analysis",
        body: "Blend structured ratings with open-ended feedback so teams understand not just what score changed, but why."
      },
      {
        title: "Improvement priorities",
        body: "Rank the moments in the journey that deserve immediate fixes, not just more observation."
      }
    ],
    outputs: ["Journey maps", "Pain-point dashboards", "Satisfaction trends", "Improvement priorities"],
    related: ["/resources/news/make-your-data-more-meaningful-with-context-specific-labelling", "/consulting"]
  },
  "customer-service": {
    eyebrow: "Solution",
    title: "Customer service operations and response support",
    lead:
      "Turn scattered customer messages into a clear queue your service team can respond to faster and more consistently.",
    intro:
      "This solution helps service teams unify feedback from calls, WhatsApp, web forms, branch logs and social channels so nothing important gets buried.",
    features: [
      {
        title: "Unified feedback view",
        body: "Bring multiple service channels into one workflow so complaints are no longer trapped in separate inboxes."
      },
      {
        title: "Priority labelling",
        body: "Tag urgent cases like cancellation risk, repeat complaints, fraud flags or vulnerable-customer issues first."
      },
      {
        title: "Agent assist summaries",
        body: "Generate clean case summaries and next-step notes so frontline teams spend less time decoding the history."
      },
      {
        title: "Channel mix monitoring",
        body: "See where demand is spiking, where response times are slipping and which channels need reinforcement."
      },
      {
        title: "Service recovery tracking",
        body: "Track whether follow-up actions were completed, whether customers calmed down and where cases keep reappearing."
      },
      {
        title: "Management dashboards",
        body: "Give supervisors live views of ticket load, recurring issues, response bottlenecks and unresolved hotspots."
      }
    ],
    outputs: ["Ticket queues", "Channel dashboards", "Response summaries", "Service alerts"],
    related: ["/consulting", "/resources/case-studies"]
  }
};

export const solutionAliases = {
  "public-opinion": "marketing",
  "market-research": "marketing",
  "digital-intelligence": "risk-compliance",
  "field-dashboards": "customer-service"
};

export const caseStudies = [
  {
    category: "Public affairs",
    title: "Conflict early warning sentiment mapping",
    summary:
      "Large-scale sentiment mapping used to identify hotspot areas and likely civil reaction patterns during a politically sensitive period.",
    methods: ["Social listening", "Sentiment labelling", "Risk mapping"],
    outcome: "Delivered geographically structured risk intelligence for rapid decision support."
  },
  {
    category: "Market research",
    title: "USSD affordability study",
    summary:
      "Built a text-only mobile survey to study affordability without requiring smartphones, widening reach into low-income and rural populations.",
    methods: ["USSD survey design", "Segmentation", "Index construction"],
    outcome: "Produced affordability profiles and household-type comparisons for decision-makers."
  },
  {
    category: "Health systems",
    title: "Realtime dashboarding for longitudinal research",
    summary:
      "Designed data systems and dashboards for multi-country research programmes needing clean monitoring and dependable analytical workflows.",
    methods: ["ETL design", "R Shiny", "Longitudinal QA"],
    outcome: "Reduced reporting lag and improved visibility for research and program teams."
  },
  {
    category: "Field operations",
    title: "Survey operations and field quality systems",
    summary:
      "Structured large field teams through callback logic, daily checks, discrepancy review and dashboard-based supervision.",
    methods: ["CAPI", "Supervisor protocols", "Error-rate control"],
    outcome: "Strengthened data integrity and faster issue escalation during collection."
  },
  {
    category: "Digital inclusion",
    title: "Community digital hub concept and connectivity work",
    summary:
      "Combined technical planning and digital access thinking for underserved communities requiring better connectivity and digital service delivery.",
    methods: ["Infrastructure planning", "Community needs analysis", "Systems design"],
    outcome: "Produced implementable concepts for local digital access and service environments."
  },
  {
    category: "Institutional analytics",
    title: "Client-facing dashboard and intelligence delivery",
    summary:
      "Built dashboards and analytical reporting layers that translated operational and research data into practical executive views.",
    methods: ["Power BI", "Dashboard development", "Executive reporting"],
    outcome: "Helped institutional users move faster from raw data to action."
  }
];

export const consultingServices = [
  {
    title: "Research design advisory",
    body: "Methodology shaping, instrument design, sample planning and rapid study framing for fast-moving decisions."
  },
  {
    title: "Field deployment support",
    body: "Enumerator setup, device workflows, supervisor dashboards, callback protocols and quality assurance systems."
  },
  {
    title: "Context-aware labelling",
    body: "Custom taxonomies for sentiment, risk, topics, conduct, channels and priority based on your sector and use case."
  },
  {
    title: "Digital intelligence setup",
    body: "Social listening pipelines, narrative clustering, issue alerts and reporting flows for leadership teams."
  },
  {
    title: "Dashboard and reporting builds",
    body: "Power BI, R Shiny and reporting systems that help boards, campaign teams and programme leads see what matters."
  },
  {
    title: "Insight translation",
    body: "Executive briefs, county summaries, board decks and action notes built around decisions, not just descriptive analysis."
  }
];

export const careerValues = [
  {
    title: "Evidence with consequence",
    body: "We work on questions that matter in Kenya: public mood, service delivery, digital narratives, trust and market behaviour."
  },
  {
    title: "Field realism",
    body: "We build with the realities of county fieldwork, language diversity, low bandwidth and rapid decision pressure in mind."
  },
  {
    title: "Research plus systems",
    body: "You are not boxed into one lane. Our culture values people who can think analytically and help make delivery better."
  },
  {
    title: "Growth through responsibility",
    body: "We want people who are ready to learn fast, own work deeply and strengthen the team around them."
  }
];

export const openRoles = [
  {
    title: "Research Associate",
    type: "Core team",
    body: "Support survey design, analysis, insight writing and client-facing reporting across public affairs and market studies."
  },
  {
    title: "Field Supervisors Roster",
    type: "Project roster",
    body: "Lead enumerator teams, callback verification, metadata checks and quality control during field deployments."
  },
  {
    title: "Enumerators Network",
    type: "Project roster",
    body: "Join our county and regional field network for mixed-mode, face-to-face and mobile data collection assignments."
  },
  {
    title: "Data Visualisation Fellow",
    type: "Contract",
    body: "Help turn analysis into elegant dashboards, brief graphics, county maps and story-driven evidence products."
  }
];
