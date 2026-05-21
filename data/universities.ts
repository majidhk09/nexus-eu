// =============================================================
//   NEXUS EU — UNIVERSITY DATA
// =============================================================
//   👋 HEY! THIS IS THE FILE YOU EDIT.
//
//   To change a fee, deadline, programme list, or anything else
//   about a university — just find it below and edit the text
//   between the quotes. Save the file, push to GitHub, and
//   Vercel will redeploy your site automatically in ~1 minute.
//
//   TO ADD A NEW UNIVERSITY:
//   Copy any block between `{` and `},` and paste it at the
//   bottom of the list. Then change the values.
//
//   ⚠️  IMPORTANT:
//   - Always keep quotes around text "like this"
//   - Always keep commas at the end of each line
//   - The `slug` is what shows in the URL — keep it lowercase
//     with hyphens, no spaces
// =============================================================

export type Programme = {
  name: string;
  level: "Bachelor" | "Master" | "PhD" | "Integrated";
  duration: string;          // e.g. "4 years" or "1.5 years"
  field: string;             // e.g. "Engineering", "Medicine"
  fee: string;               // e.g. "€4,500/year"
  language: string;          // e.g. "English"
};

export type University = {
  slug: string;              // URL-safe id — e.g. "vilnius-university"
  name: string;
  shortName: string;         // e.g. "VU"
  founded: number;
  city: string;
  cities?: string[];         // optional extra campuses
  overview: string;          // 2-3 sentence intro
  longOverview?: string;     // longer paragraph for the detail page
  fields: string[];          // key study fields
  degreeLevels: ("Bachelor" | "Master" | "PhD" | "Integrated")[];
  language: string;
  students: string;
  internationalRatio?: string;
  scholarships: string;
  ranking: string;
  avgFee: string;            // e.g. "€4,500 – €6,500"
  avgFeeNumber: number;      // for sorting/filtering — use the lower bound
  feeNote: string;
  livingCost: string;        // e.g. "€600 – €900 / month"
  livingNote: string;
  applicationDeadlines: {
    nonEU: string;
    EU: string;
  };
  intake: string;            // "September" or "September & February"
  englishRequirement: string;
  applicationFee?: string;
  website: string;
  applyLink?: string;
  email: string;
  whyChoose: string[];       // bullet points for detail page
  programmes: Programme[];   // full programme list
};

// =============================================================
//   UNIVERSITIES
// =============================================================

export const UNIVERSITIES: University[] = [
  // -----------------------------------------------------------
  {
    slug: "vilnius-university",
    name: "Vilnius University",
    shortName: "VU",
    founded: 1579,
    city: "Vilnius",
    cities: ["Vilnius", "Kaunas", "Šiauliai"],
    overview:
      "Lithuania's flagship and oldest university — established 1579. Ranked among the top 450 universities worldwide (QS 2026) and the country's #1 institution.",
    longOverview:
      "Vilnius University combines centuries of tradition with a forward-looking research culture. With 24,000+ students across 140 bachelor's and 140 master's programmes, VU spans humanities, social sciences, physical sciences, biomedicine, and technological sciences. Guided by its motto Hinc itur ad astra — 'From here, the way leads to the stars' — it remains Lithuania's most prestigious gateway to a global academic career.",
    fields: ["Medicine", "Law", "Business", "IT", "Sciences", "Humanities", "Linguistics", "Economics"],
    degreeLevels: ["Bachelor", "Master", "PhD", "Integrated"],
    language: "English",
    students: "24,000+",
    internationalRatio: "Students from 100+ countries",
    scholarships: "Tuition fee waivers & incentive scholarships available",
    ranking: "QS World Top ~446 (2026)",
    avgFee: "€4,500 – €6,500",
    avgFeeNumber: 4500,
    feeNote:
      "Average across most Bachelor/Master programmes. Medicine & Dentistry can reach €13,000+/yr. Application fee separate.",
    livingCost: "€600 – €900 / month",
    livingNote:
      "Typical Vilnius student lifestyle (rent shared, transport, food).",
    applicationDeadlines: {
      nonEU: "1 May 2026 (or until places fill)",
      EU: "1 July 2026",
    },
    intake: "September",
    englishRequirement: "IELTS 6.0 / TOEFL 75 minimum (varies by programme)",
    applicationFee: "€100 (non-refundable)",
    website: "https://www.vu.lt/en",
    applyLink: "https://apply.vu.lt",
    email: "admissions@cr.vu.lt",
    whyChoose: [
      "Lithuania's No. 1 university and one of Central Europe's oldest",
      "Top 450 globally per QS World University Rankings",
      "Wide range of English-taught Bachelor, Master & PhD programmes",
      "Interdisciplinary and flexible study options",
      "Tuition fee reductions for outstanding students",
      "Located in the heart of UNESCO-heritage Vilnius Old Town",
      "Dedicated mentor and support system for international students",
    ],
    programmes: [
      { name: "Medicine", level: "Integrated", duration: "6 years", field: "Medicine", fee: "€13,000/year", language: "English" },
      { name: "Dentistry", level: "Integrated", duration: "5 years", field: "Medicine", fee: "€13,000/year", language: "English" },
      { name: "Business and Finance", level: "Bachelor", duration: "3.5 years", field: "Business", fee: "€4,500/year", language: "English" },
      { name: "International Business", level: "Bachelor", duration: "3.5 years", field: "Business", fee: "€4,500/year", language: "English" },
      { name: "Global Marketing", level: "Bachelor", duration: "3.5 years", field: "Business", fee: "€4,500/year", language: "English" },
      { name: "Politics of Global Challenges", level: "Bachelor", duration: "4 years", field: "Politics", fee: "€4,500/year", language: "English" },
      { name: "English Philology", level: "Bachelor", duration: "4 years", field: "Linguistics", fee: "€4,000/year", language: "English" },
      { name: "Software Engineering", level: "Bachelor", duration: "3.5 years", field: "IT", fee: "€5,500/year", language: "English" },
      { name: "Information Systems and Cyber Security", level: "Bachelor", duration: "3.5 years", field: "IT", fee: "€5,500/year", language: "English" },
      { name: "Data Science", level: "Master", duration: "1.5 years", field: "IT", fee: "€5,500/year", language: "English" },
      { name: "Finance and Banking", level: "Master", duration: "1.5 years", field: "Business", fee: "€5,000/year", language: "English" },
      { name: "International Business Management", level: "Master", duration: "2 years", field: "Business", fee: "€5,000/year", language: "English" },
      { name: "Digital Marketing", level: "Master", duration: "1.5 years", field: "Business", fee: "€5,000/year", language: "English" },
      { name: "International and European Law", level: "Master", duration: "1.5 years", field: "Law", fee: "€5,000/year", language: "English" },
      { name: "Quantitative Economics", level: "Bachelor", duration: "3 years", field: "Economics", fee: "€4,500/year", language: "English" },
      { name: "Molecular Biotechnology", level: "Master", duration: "2 years", field: "Sciences", fee: "€5,500/year", language: "English" },
    ],
  },

  // -----------------------------------------------------------
  {
    slug: "kaunas-university-of-technology",
    name: "Kaunas University of Technology",
    shortName: "KTU",
    founded: 1922,
    city: "Kaunas",
    overview:
      "Lithuania's leading technical research university and the largest Baltic hub for engineering, IT and applied sciences. Home to the biggest science & tech park in the Baltics.",
    longOverview:
      "KTU has been a Baltic leader in innovation since 1922. With 9,000 students and 1,000 academic staff, it offers cutting-edge research and strong industry partnerships with global giants like Hitachi, Samsung, NATO, Schneider Electric, Barclays, BASF, and Festo. The campus hosts the Baltics' first academic Startup Space and the only Bloomberg Financial Markets Lab in the region.",
    fields: ["Engineering", "IT", "AI", "Robotics", "Business", "Architecture", "Chemistry", "Aviation"],
    degreeLevels: ["Bachelor", "Master", "PhD"],
    language: "English",
    students: "9,000",
    internationalRatio: "International cohort across 80+ countries",
    scholarships: "Merit-based & external scholarships available",
    ranking: "QS World #750–800",
    avgFee: "€3,500 – €5,500",
    avgFeeNumber: 3500,
    feeNote:
      "Varies by faculty; engineering & IT programmes mid-range. Aviation engineering at higher end.",
    livingCost: "€500 – €800 / month",
    livingNote: "Kaunas is ~5% cheaper than Vilnius — student-friendly city.",
    applicationDeadlines: {
      nonEU: "1 May 2026",
      EU: "1 July 2026",
    },
    intake: "September (some February intakes)",
    englishRequirement: "IELTS 5.5 / TOEFL 65 (programme-dependent)",
    applicationFee: "€100",
    website: "https://en.ktu.edu",
    applyLink: "https://apply.ktu.edu",
    email: "international@ktu.lt",
    whyChoose: [
      "Lithuania's #1 technical university",
      "Largest science & technology park in the Baltics",
      "Industry partnerships with NATO, Hitachi, Samsung, Barclays",
      "Liberal individual study plan for each student",
      "Internships in Lithuanian and European companies",
      "Erasmus and 80+ bilateral mobility agreements",
      "Scholarships available for international students",
    ],
    programmes: [
      { name: "Artificial Intelligence", level: "Bachelor", duration: "4 years", field: "IT", fee: "€4,800/year", language: "English" },
      { name: "Informatics", level: "Bachelor", duration: "4 years", field: "IT", fee: "€4,500/year", language: "English" },
      { name: "Intelligent Robotics Systems", level: "Bachelor", duration: "4 years", field: "Engineering", fee: "€4,800/year", language: "English" },
      { name: "Mechatronics", level: "Bachelor", duration: "4 years", field: "Engineering", fee: "€4,500/year", language: "English" },
      { name: "Aviation Engineering", level: "Bachelor", duration: "4 years", field: "Aviation", fee: "€5,500/year", language: "English" },
      { name: "Mechanical Engineering", level: "Bachelor", duration: "4 years", field: "Engineering", fee: "€4,500/year", language: "English" },
      { name: "Architecture", level: "Integrated", duration: "5 years", field: "Architecture", fee: "€5,000/year", language: "English" },
      { name: "Business Digitalization Management", level: "Bachelor", duration: "4 years", field: "Business", fee: "€4,200/year", language: "English" },
      { name: "Industrial Engineering", level: "Bachelor", duration: "4 years", field: "Engineering", fee: "€4,500/year", language: "English" },
      { name: "Artificial Intelligence in Computer Science", level: "Master", duration: "2 years", field: "IT", fee: "€5,000/year", language: "English" },
      { name: "Data Science and Artificial Intelligence", level: "Master", duration: "1.5 years", field: "IT", fee: "€5,000/year", language: "English" },
      { name: "International Business", level: "Master", duration: "2 years", field: "Business", fee: "€4,800/year", language: "English" },
      { name: "Aeronautical Engineering", level: "Master", duration: "2 years", field: "Aviation", fee: "€5,500/year", language: "English" },
      { name: "Biomedical Engineering", level: "Master", duration: "2 years", field: "Engineering", fee: "€5,200/year", language: "English" },
    ],
  },

  // -----------------------------------------------------------
  {
    slug: "lithuanian-university-of-health-sciences",
    name: "Lithuanian University of Health Sciences",
    shortName: "LSMU",
    founded: 1922,
    city: "Kaunas",
    overview:
      "The country's largest biomedical institution — top destination for international students chasing Medicine, Dentistry, Pharmacy and Veterinary Medicine in English.",
    longOverview:
      "LSMU integrates studies, research and clinical practice through its Medical Academy and Veterinary Academy. Its hospital — Kauno Klinikos — is the largest in the Baltic countries with 2,100+ doctors and 78,000+ patients annually. Degrees are recognised across the EU, and graduates are eligible for USMLE (USA) and PLAB (UK) examinations.",
    fields: ["Medicine", "Dentistry", "Pharmacy", "Veterinary", "Nursing", "Public Health", "Psychology"],
    degreeLevels: ["Bachelor", "Master", "PhD", "Integrated"],
    language: "English",
    students: "8,000+",
    internationalRatio: "1,850+ international students from 88 countries (28%)",
    scholarships: "Incentive & one-time merit scholarships available",
    ranking: "QS By Subject (Medicine) #601–650",
    avgFee: "€8,000 – €13,600",
    avgFeeNumber: 8000,
    feeNote:
      "Medicine ~€12,500–13,000/yr · Dentistry ~€13,600/yr · Veterinary ~€8,000–10,500/yr · Pharmacy ~€5,600/yr · Nursing ~€4,300/yr.",
    livingCost: "€500 – €800 / month",
    livingNote: "Kaunas — affordable city, large medical campus near centre.",
    applicationDeadlines: {
      nonEU: "1 April 2026",
      EU: "1 July 2026",
    },
    intake: "September",
    englishRequirement: "IELTS 6.0 / TOEFL 80 (Medicine higher)",
    applicationFee: "€150",
    website: "https://lsmu.lt/en",
    applyLink: "https://apply.lsmuni.lt",
    email: "study@lsmu.lt",
    whyChoose: [
      "Largest medical institution in Lithuania",
      "Degrees recognised across the EU under Lisbon Convention",
      "Graduates eligible for USMLE (USA) and PLAB (UK) exams",
      "Hospital partnerships in Germany, Israel, Spain, UK, USA",
      "Collaborates with 140+ European, American and Asian universities",
      "WHO collaboration centre",
      "28% international student population — globally diverse cohort",
    ],
    programmes: [
      { name: "Medicine", level: "Integrated", duration: "6 years", field: "Medicine", fee: "€12,600–13,100/year", language: "English" },
      { name: "Odontology (Dentistry)", level: "Integrated", duration: "5 years", field: "Medicine", fee: "€13,600/year", language: "English" },
      { name: "Veterinary Medicine", level: "Integrated", duration: "6 years", field: "Veterinary", fee: "€9,000–10,500/year", language: "English" },
      { name: "Pharmacy", level: "Integrated", duration: "5 years", field: "Pharmacy", fee: "€5,600/year", language: "English" },
      { name: "Nursing", level: "Bachelor", duration: "4 years", field: "Nursing", fee: "€4,300/year", language: "English" },
      { name: "Health Psychology", level: "Bachelor", duration: "4 years", field: "Psychology", fee: "€3,836/year", language: "English" },
      { name: "Physiotherapy", level: "Bachelor", duration: "4 years", field: "Health", fee: "€4,300/year", language: "English" },
      { name: "Occupational Therapy", level: "Bachelor", duration: "4 years", field: "Health", fee: "€4,300/year", language: "English" },
      { name: "Medical and Veterinary Genetics", level: "Bachelor", duration: "3.5 years", field: "Sciences", fee: "€3,836/year", language: "English" },
      { name: "Dental Hygiene", level: "Bachelor", duration: "4 years", field: "Medicine", fee: "€4,300/year", language: "English" },
      { name: "Applied Public Health", level: "Master", duration: "2 years", field: "Public Health", fee: "€4,500/year", language: "English" },
      { name: "Clinical Health Psychology", level: "Master", duration: "2 years", field: "Psychology", fee: "€4,500/year", language: "English" },
      { name: "Food Science", level: "Master", duration: "2 years", field: "Sciences", fee: "€4,500/year", language: "English" },
      { name: "Animal Science", level: "Master", duration: "2 years", field: "Veterinary", fee: "€5,000/year", language: "English" },
    ],
  },

  // -----------------------------------------------------------
  {
    slug: "vilnius-gediminas-technical-university",
    name: "Vilnius Gediminas Technical University",
    shortName: "VILNIUS TECH",
    founded: 1956,
    city: "Vilnius",
    overview:
      "Lithuania's biggest engineering-focused research university — 10 faculties covering aviation, civil engineering, IT, architecture, transport and more. Ranked top 2.1% globally.",
    longOverview:
      "VILNIUS TECH has 8,400+ students with 13.5% international representation. The university hosts the most modern Civil Engineering Research Centre in Eastern Europe, the biggest Mobile Applications Laboratory in Lithuania, and the Creativity & Innovation Centre 'LinkMenų Fabrikas'. With 500+ business partners and 450+ partner universities across 66 countries, VILNIUS TECH leads Lithuania in Erasmus student exchanges.",
    fields: ["Engineering", "IT", "Architecture", "Aviation", "Transport", "Business", "FinTech"],
    degreeLevels: ["Bachelor", "Master", "PhD", "Integrated"],
    language: "English",
    students: "8,400+",
    internationalRatio: "13.5% international",
    scholarships: "Partial tuition discounts available",
    ranking: "QS Engineering & Tech Top 256",
    avgFee: "€3,500 – €5,500",
    avgFeeNumber: 3500,
    feeNote:
      "Engineering & IT typically mid-range; FinTech & Aerospace at higher end. €100 application + €200 registration fee.",
    livingCost: "€600 – €900 / month",
    livingNote: "Vilnius — capital city, more vibrant social scene.",
    applicationDeadlines: {
      nonEU: "1 May 2026",
      EU: "1 July 2026",
    },
    intake: "September",
    englishRequirement: "IELTS 5.5 / TOEFL 75 (varies)",
    applicationFee: "€100",
    website: "https://vilniustech.lt",
    applyLink: "https://apply.vilniustech.lt",
    email: "admissions@vilniustech.lt",
    whyChoose: [
      "Top 2.1% of universities globally",
      "QS Top 256 in Engineering & Technology",
      "70% of programmes in Engineering, IT and Technological Sciences",
      "Lithuania's leader in Erasmus student exchanges",
      "500+ business partners across Europe",
      "Located in the capital city of Vilnius",
      "Civil Engineering Research Centre — best in Eastern Europe",
    ],
    programmes: [
      { name: "Architecture", level: "Integrated", duration: "5 years", field: "Architecture", fee: "€5,000/year", language: "English" },
      { name: "Civil Engineering", level: "Bachelor", duration: "4 years", field: "Engineering", fee: "€4,000/year", language: "English" },
      { name: "Mechanical Engineering", level: "Bachelor", duration: "4 years", field: "Engineering", fee: "€4,200/year", language: "English" },
      { name: "Information Systems Engineering", level: "Bachelor", duration: "4 years", field: "IT", fee: "€4,500/year", language: "English" },
      { name: "Computer Engineering", level: "Bachelor", duration: "4 years", field: "IT", fee: "€4,500/year", language: "English" },
      { name: "Information Technologies", level: "Bachelor", duration: "4 years", field: "IT", fee: "€4,500/year", language: "English" },
      { name: "Applied Artificial Intelligence", level: "Bachelor", duration: "4 years", field: "IT", fee: "€5,000/year", language: "English" },
      { name: "Business Management", level: "Bachelor", duration: "4 years", field: "Business", fee: "€3,800/year", language: "English" },
      { name: "Financial Engineering", level: "Bachelor", duration: "4 years", field: "FinTech", fee: "€5,000/year", language: "English" },
      { name: "Automotive Engineering", level: "Bachelor", duration: "4 years", field: "Engineering", fee: "€4,200/year", language: "English" },
      { name: "Mechatronics and Robotics", level: "Bachelor", duration: "4 years", field: "Engineering", fee: "€4,500/year", language: "English" },
      { name: "Aerospace Engineering", level: "Master", duration: "2 years", field: "Aviation", fee: "€5,500/year", language: "English" },
      { name: "Financial Engineering (FinTech)", level: "Master", duration: "1.5 years", field: "FinTech", fee: "€5,500/year", language: "English" },
      { name: "Information and IT Security", level: "Master", duration: "2 years", field: "IT", fee: "€5,000/year", language: "English" },
    ],
  },

  // -----------------------------------------------------------
  {
    slug: "vytautas-magnus-university",
    name: "Vytautas Magnus University",
    shortName: "VMU",
    founded: 1922,
    city: "Kaunas",
    overview:
      "Lithuania's leading liberal arts university — flexible study path design, minor + major options, and 30+ foreign language courses. Strong in social sciences and humanities.",
    longOverview:
      "VMU is one of the few universities in the Baltic region offering a comprehensive liberal arts education. Students can change and organise their schedules freely, minor in one field and major in another, travel on international exchanges, and prepare with 30+ foreign language courses. More and more lectures, courses, and whole programmes are taught in English by international professors.",
    fields: ["Business", "Politics", "Performing Arts", "IT", "Biology", "Sustainability", "Languages"],
    degreeLevels: ["Bachelor", "Master", "PhD"],
    language: "English",
    students: "~7,000",
    internationalRatio: "Multilingual, international community",
    scholarships: "Fee waivers & merit-based aid",
    ranking: "QS World #741–750",
    avgFee: "€3,000 – €5,000",
    avgFeeNumber: 3000,
    feeNote: "Most BA & MA programmes within this range; specialised tracks vary.",
    livingCost: "€450 – €750 / month",
    livingNote:
      "VMU offers guaranteed Year-1 dormitory; monthly expenses ~€450 (uni estimate).",
    applicationDeadlines: {
      nonEU: "May 1, 2026 (BA) · April 1, 2026 (MA)",
      EU: "July 1, 2026",
    },
    intake: "September & February",
    englishRequirement: "IELTS 5.5 / TOEFL 70",
    applicationFee: "€100",
    website: "https://www.vdu.lt/en",
    applyLink: "https://vytautasmagnus.dreamapply.com",
    email: "studies@vdu.lt",
    whyChoose: [
      "Liberal arts education — minor and major flexibility",
      "30+ foreign language courses available",
      "Performing Arts ranked QS Top #51–100",
      "Guaranteed Year-1 dormitory accommodation",
      "Monthly living expenses among the lowest in Lithuania (~€450)",
      "Active mentor support system for international students",
      "Two annual intakes — September and February",
    ],
    programmes: [
      { name: "Business Administration", level: "Bachelor", duration: "4 years", field: "Business", fee: "€3,500/year", language: "English" },
      { name: "English Philology", level: "Bachelor", duration: "4 years", field: "Languages", fee: "€3,500/year", language: "English" },
      { name: "Informatics Systems", level: "Bachelor", duration: "4 years", field: "IT", fee: "€4,000/year", language: "English" },
      { name: "Biology and Genetics", level: "Bachelor", duration: "4 years", field: "Biology", fee: "€4,200/year", language: "English" },
      { name: "Biotechnology", level: "Bachelor", duration: "4 years", field: "Biology", fee: "€4,200/year", language: "English" },
      { name: "Political Studies: World Politics and Economy", level: "Bachelor", duration: "4 years", field: "Politics", fee: "€3,500/year", language: "English" },
      { name: "Performing Arts", level: "Bachelor", duration: "4 years", field: "Performing Arts", fee: "€4,500/year", language: "English" },
      { name: "Sustainable Engineering", level: "Bachelor", duration: "4 years", field: "Sustainability", fee: "€4,000/year", language: "English" },
      { name: "Diplomacy and International Relations", level: "Master", duration: "2 years", field: "Politics", fee: "€4,000/year", language: "English" },
      { name: "Marketing and International Commerce", level: "Master", duration: "2 years", field: "Business", fee: "€4,000/year", language: "English" },
      { name: "Sports Business MBA", level: "Master", duration: "1.5 years", field: "Business", fee: "€5,000/year", language: "English" },
      { name: "Applied Informatics", level: "Master", duration: "2 years", field: "IT", fee: "€4,500/year", language: "English" },
      { name: "Future Media and Journalism", level: "Master", duration: "1.5 years", field: "Media", fee: "€4,000/year", language: "English" },
      { name: "Ecology and Climate Change", level: "Master", duration: "2 years", field: "Sustainability", fee: "€4,200/year", language: "English" },
    ],
  },

  // -----------------------------------------------------------
  {
    slug: "mykolas-romeris-university",
    name: "Mykolas Romeris University",
    shortName: "MRU",
    founded: 1990,
    city: "Vilnius",
    overview:
      "Lithuania's largest social-sciences university — #1 in Law. Highly international (11% intl students from 65 countries) and known for Law, Psychology, Business and Communication.",
    longOverview:
      "MRU offers Bachelor, Master and Doctoral programmes across 10 study fields: Law, Psychology, Communication, Informatics, Philology, Social Work, Management, Economics, Finance, and Public Administration. With 5,900 students and a multicultural campus 20 minutes from Vilnius city centre, it ranks #1 in Lithuania for Law studies and #137 in the QS Emerging Europe & Central Asia ranking.",
    fields: ["Law", "Psychology", "Business", "Cybersecurity", "Communication", "Public Administration"],
    degreeLevels: ["Bachelor", "Master", "PhD"],
    language: "English",
    students: "~5,900",
    internationalRatio: "11% international from 65 countries",
    scholarships: "International scholarships & mobility funding",
    ranking: "QS By Subject (Law) Top 250",
    avgFee: "€2,500 – €4,500",
    avgFeeNumber: 2500,
    feeNote: "Bachelors tend to be lower-end; MBA & LL.M. specialisations higher.",
    livingCost: "€600 – €900 / month",
    livingNote: "Campus 20 min from Vilnius centre — dorm only 5 min away.",
    applicationDeadlines: {
      nonEU: "1 May 2026",
      EU: "1 July 2026",
    },
    intake: "September & February",
    englishRequirement: "IELTS 6.0 / TOEFL 75",
    applicationFee: "€100",
    website: "https://www.mruni.eu/en",
    applyLink: "https://apply.mruni.eu",
    email: "study@mruni.eu",
    whyChoose: [
      "#1 in Law studies among all Lithuanian universities",
      "Top 250 globally per QS World University Rankings by Subject (Law)",
      "Most international university in Lithuania",
      "Scholarships for international students",
      "Free introductory week for international newcomers",
      "King Sejong Institute — free Korean language courses",
      "Many free services: gyms, language courses, dance studios, etc.",
    ],
    programmes: [
      { name: "Psychology", level: "Bachelor", duration: "3.5 years", field: "Psychology", fee: "€3,200/year", language: "English" },
      { name: "Communication and Digital Marketing", level: "Bachelor", duration: "3 years", field: "Communication", fee: "€3,000/year", language: "English" },
      { name: "Law and Global Security", level: "Bachelor", duration: "3.5 years", field: "Law", fee: "€3,500/year", language: "English" },
      { name: "Business Management and Startup Building", level: "Bachelor", duration: "3 years", field: "Business", fee: "€3,000/year", language: "English" },
      { name: "Global Business and Modern Marketing", level: "Bachelor", duration: "3 years", field: "Business", fee: "€3,000/year", language: "English" },
      { name: "Game Development and Digital Animation", level: "Bachelor", duration: "4 years", field: "IT", fee: "€3,800/year", language: "English" },
      { name: "Digital Media Design", level: "Bachelor", duration: "4 years", field: "Design", fee: "€3,500/year", language: "English" },
      { name: "International Law", level: "Master", duration: "1.5 years", field: "Law", fee: "€4,200/year", language: "English" },
      { name: "Cybersecurity Management", level: "Master", duration: "2 years", field: "Cybersecurity", fee: "€4,500/year", language: "English" },
      { name: "Financial Management", level: "Master", duration: "1.5 years", field: "Finance", fee: "€4,000/year", language: "English" },
      { name: "Business Administration, MBA", level: "Master", duration: "1 year", field: "Business", fee: "€5,500/year", language: "English" },
      { name: "European Union Law and Governance", level: "Master", duration: "1.5 years", field: "Law", fee: "€4,500/year", language: "English" },
      { name: "Mediation (LL.M.)", level: "Master", duration: "1 year", field: "Law", fee: "€4,500/year", language: "English" },
      { name: "Project Management", level: "Master", duration: "1.5 years", field: "Business", fee: "€4,000/year", language: "English" },
    ],
  },

  // -----------------------------------------------------------
  {
    slug: "ism-university-of-management-and-economics",
    name: "ISM University of Management and Economics",
    shortName: "ISM",
    founded: 1999,
    city: "Vilnius",
    overview:
      "Lithuania's top private business school and the first in the Baltics with AACSB accreditation. Co-founded by BI Norwegian Business School.",
    longOverview:
      "Located on Gedimino Avenue in the heart of Vilnius, ISM is Lithuania's premier business school. Founded by BI Norwegian Business School (Europe's largest), ISM holds the prestigious AACSB accreditation (the first in the Baltics) and has earned five out of five Palmes of Excellence from Eduniversal. ISM students enjoy double-degree options with leading European and American universities, 100+ exchange partners, and a faculty that's 50%+ international.",
    fields: ["Business", "Finance", "Economics", "Marketing", "Management", "Data Analytics"],
    degreeLevels: ["Bachelor", "Master", "PhD"],
    language: "English",
    students: "2,000+",
    internationalRatio: "1 in 3 students own a business",
    scholarships: "Merit-based & need-based aid",
    ranking: "Eduniversal 5 Palmes of Excellence",
    avgFee: "€5,500 – €8,500",
    avgFeeNumber: 5500,
    feeNote: "Private uni — premium pricing; double-degree options with European & US partners.",
    livingCost: "€600 – €900 / month",
    livingNote: "Located on Gedimino Ave — heart of Vilnius.",
    applicationDeadlines: {
      nonEU: "1 May 2026",
      EU: "1 July 2026",
    },
    intake: "September",
    englishRequirement: "IELTS 6.5 / TOEFL 90",
    applicationFee: "€100",
    website: "https://www.ism.lt/en",
    applyLink: "https://apply.ism.lt",
    email: "ism@ism.lt",
    whyChoose: [
      "First university in the Baltics with AACSB accreditation",
      "5 out of 5 Palmes of Excellence (Eduniversal)",
      "Co-founded by BI Norwegian Business School",
      "100+ exchange partner universities",
      "50%+ international faculty",
      "Double-degree options with European and American universities",
      "98% of graduates work within their degree field",
    ],
    programmes: [
      { name: "Economics and Politics", level: "Bachelor", duration: "3.5 years", field: "Economics", fee: "€6,500/year", language: "English" },
      { name: "International Business and Communication", level: "Bachelor", duration: "3.5 years", field: "Business", fee: "€6,500/year", language: "English" },
      { name: "Finance", level: "Bachelor", duration: "3.5 years", field: "Finance", fee: "€6,500/year", language: "English" },
      { name: "Business Management and Marketing", level: "Bachelor", duration: "3.5 years", field: "Business", fee: "€6,500/year", language: "English" },
      { name: "Economics and Data Analytics", level: "Bachelor", duration: "3.5 years", field: "Data Analytics", fee: "€7,000/year", language: "English" },
      { name: "Entrepreneurship and Innovation", level: "Bachelor", duration: "3 years", field: "Business", fee: "€7,500/year", language: "English" },
      { name: "International Marketing and Management", level: "Master", duration: "2 years", field: "Marketing", fee: "€8,000/year", language: "English" },
      { name: "Financial Economics", level: "Master", duration: "2 years", field: "Finance", fee: "€8,000/year", language: "English" },
      { name: "Global Leadership and Strategy", level: "Master", duration: "1.5 years", field: "Management", fee: "€8,500/year", language: "English" },
      { name: "Innovation and Technology Management", level: "Master", duration: "1.5 years", field: "Management", fee: "€8,000/year", language: "English" },
      { name: "Business Sustainability Management", level: "Master", duration: "1.5 years", field: "Management", fee: "€8,000/year", language: "English" },
    ],
  },

  // -----------------------------------------------------------
  {
    slug: "lcc-international-university",
    name: "LCC International University",
    shortName: "LCC",
    founded: 1991,
    city: "Klaipėda",
    overview:
      "A Lithuanian–Canadian–American joint venture offering a North-American style liberal arts education. Christian academic community with strong English-only environment.",
    longOverview:
      "LCC International University offers accredited Bachelor's and Master's programmes in social sciences and humanities. As a liberal arts university with a Christian worldview, each programme includes multidisciplinary core courses that foster critical thinking, conflict transformation, and leadership. Located in Klaipėda, the most budget-friendly of Lithuania's major cities, LCC has a strong international student community from 50+ nationalities.",
    fields: ["Business", "International Relations", "Psychology", "English", "Theology", "TESOL"],
    degreeLevels: ["Bachelor", "Master"],
    language: "English",
    students: "~600",
    internationalRatio: "50+ nationalities",
    scholarships: "Over €470,000/yr in financial aid awarded",
    ranking: "North American style liberal arts",
    avgFee: "€4,500 – €6,500",
    avgFeeNumber: 4500,
    feeNote: "Private institution; generous aid often offsets sticker price.",
    livingCost: "€500 – €750 / month",
    livingNote: "Klaipėda — most budget-friendly of major cities, coastal port.",
    applicationDeadlines: {
      nonEU: "1 May 2026",
      EU: "1 July 2026",
    },
    intake: "September & January",
    englishRequirement: "IELTS 6.0 / TOEFL 79",
    applicationFee: "€100",
    website: "https://lcc.lt",
    applyLink: "https://admissions.lcc.lt/bachelors-form",
    email: "study@lcc.lt",
    whyChoose: [
      "North American style liberal arts education",
      "All instruction fully in English",
      "Diverse international community (50+ nationalities)",
      "€470,000+ in financial aid awarded annually",
      "Located in Klaipėda — most affordable Lithuanian city",
      "Strong critical thinking and leadership focus",
      "Two annual intakes",
    ],
    programmes: [
      { name: "International Business Administration", level: "Bachelor", duration: "4 years", field: "Business", fee: "€5,500/year", language: "English" },
      { name: "Global Business and Public Engagement", level: "Bachelor", duration: "4 years", field: "Business", fee: "€5,500/year", language: "English" },
      { name: "International Relations and Development", level: "Bachelor", duration: "4 years", field: "International Relations", fee: "€5,500/year", language: "English" },
      { name: "Psychology", level: "Bachelor", duration: "4 years", field: "Psychology", fee: "€5,500/year", language: "English" },
      { name: "English Language and Literature", level: "Bachelor", duration: "4 years", field: "English", fee: "€5,000/year", language: "English" },
      { name: "Theology", level: "Bachelor", duration: "4 years", field: "Theology", fee: "€5,000/year", language: "English" },
      { name: "MA - IINGOL", level: "Master", duration: "2 years", field: "International Relations", fee: "€6,500/year", language: "English" },
      { name: "MA - TESOL", level: "Master", duration: "2 years", field: "Education", fee: "€6,500/year", language: "English" },
    ],
  },

  // -----------------------------------------------------------
  {
    slug: "klaipeda-university",
    name: "Klaipėda University",
    shortName: "KU",
    founded: 1991,
    city: "Klaipėda",
    overview:
      "The Baltic region's leader in marine sciences — also strong in social sciences, engineering and health. Owns research vessels and 60+ scientific labs.",
    longOverview:
      "Klaipėda University is an internationally accredited state university with the slogan 'Here You Are Visible!'. Member of the European University 'EU-CONEXUS', students at KU gain mobility opportunities to study minor programmes in coastal sustainability at six universities across the EU. The university operates research vessels including 'Mintis', the sailboat 'Brabander', and the yacht 'Odyssey', making it a Baltic leader in marine research.",
    fields: ["Marine Sciences", "Engineering", "Health", "Business", "IT", "Humanities"],
    degreeLevels: ["Bachelor", "Master", "PhD"],
    language: "English",
    students: "International cohort from 27+ countries",
    scholarships: "For selected programmes",
    ranking: "Baltic leader in marine studies",
    avgFee: "€1,600 – €3,500",
    avgFeeNumber: 1600,
    feeNote: "Among the most affordable public universities in Lithuania.",
    livingCost: "€500 – €750 / month",
    livingNote: "Klaipėda — coastal city with relaxed pace and lower rents.",
    applicationDeadlines: {
      nonEU: "1 June 2026",
      EU: "1 July 2026",
    },
    intake: "September & February",
    englishRequirement: "IELTS 5.5 / TOEFL 70",
    applicationFee: "€100",
    website: "https://www.ku.lt/en",
    applyLink: "https://apply.ku.lt",
    email: "klaipeda.university@ku.lt",
    whyChoose: [
      "Most affordable public university in Lithuania",
      "Baltic region leader in marine sciences",
      "European University 'EU-CONEXUS' membership",
      "Access to research vessels and 60+ scientific labs",
      "Two annual intakes — September and February",
      "Coastal lifestyle with lower cost of living",
      "Strong in social sciences, engineering, and health",
    ],
    programmes: [
      { name: "English Philology", level: "Bachelor", duration: "4 years", field: "Languages", fee: "€2,200/year", language: "English" },
      { name: "Informatics", level: "Bachelor", duration: "4 years", field: "IT", fee: "€2,500/year", language: "English" },
      { name: "Mechanical Engineering", level: "Bachelor", duration: "4 years", field: "Engineering", fee: "€2,500/year", language: "English" },
      { name: "Electrical Engineering", level: "Bachelor", duration: "4 years", field: "Engineering", fee: "€2,500/year", language: "English" },
      { name: "Physical Geography and Oceanography", level: "Bachelor", duration: "4 years", field: "Marine Sciences", fee: "€2,800/year", language: "English" },
      { name: "Management", level: "Bachelor", duration: "3.5 years", field: "Business", fee: "€2,200/year", language: "English" },
      { name: "Economics", level: "Bachelor", duration: "3.5 years", field: "Economics", fee: "€2,200/year", language: "English" },
      { name: "Marine Transport Engineering", level: "Bachelor", duration: "4 years", field: "Marine Sciences", fee: "€3,000/year", language: "English" },
      { name: "Shipping and Port Engineering", level: "Master", duration: "2 years", field: "Marine Sciences", fee: "€3,200/year", language: "English" },
      { name: "Joint Master: Marine Biotechnology", level: "Master", duration: "2 years", field: "Marine Sciences", fee: "€3,500/year", language: "English" },
      { name: "Business Management", level: "Master", duration: "2 years", field: "Business", fee: "€2,800/year", language: "English" },
      { name: "Health Care Management", level: "Master", duration: "2 years", field: "Health", fee: "€2,800/year", language: "English" },
    ],
  },

  // -----------------------------------------------------------
  {
    slug: "european-humanities-university",
    name: "European Humanities University",
    shortName: "EHU",
    founded: 1992,
    city: "Vilnius",
    overview:
      "Liberal arts university located in the heart of Vilnius Old Town (UNESCO heritage). Transdisciplinary curriculum focused on critical thinking, design, media and humanities.",
    longOverview:
      "EHU promotes a transdisciplinary approach combined with critical thinking skills that empower students to develop innovative solutions and ideas. Fully integrated into the vibrant life of the Lithuanian capital, its campus is located in the very heart of UNESCO World Heritage-listed Vilnius Old Town in the premises of a former 18th-century Augustinian monastery.",
    fields: ["Media", "Visual Design", "International Law", "Politics", "Philosophy", "Theatre"],
    degreeLevels: ["Bachelor", "Master", "Integrated"],
    language: "English (some programmes in Russian)",
    students: "~1,400",
    scholarships: "Partial waivers available",
    ranking: "Liberal arts specialist",
    avgFee: "€3,500 – €5,000",
    avgFeeNumber: 3500,
    feeNote: "Stable pricing across most BA/MA programmes.",
    livingCost: "€600 – €900 / month",
    livingNote: "Campus inside Old Town — cultural epicentre of the capital.",
    applicationDeadlines: {
      nonEU: "1 June 2026",
      EU: "1 July 2026",
    },
    intake: "September",
    englishRequirement: "IELTS 5.5",
    applicationFee: "€100",
    website: "https://en.ehu.lt",
    email: "consult@ehu.lt",
    whyChoose: [
      "Campus inside UNESCO-heritage Vilnius Old Town",
      "Transdisciplinary liberal arts education",
      "Focus on critical thinking and innovation",
      "Programmes in English and Russian",
      "Smaller, intimate community",
      "Strong in media, design, and humanities",
      "Cultural and political crossroads location",
    ],
    programmes: [
      { name: "Media and Communication", level: "Bachelor", duration: "4 years", field: "Media", fee: "€4,000/year", language: "English" },
      { name: "European Heritage", level: "Bachelor", duration: "4 years", field: "Humanities", fee: "€4,000/year", language: "English" },
      { name: "Visual Design", level: "Bachelor", duration: "4 years", field: "Design", fee: "€4,500/year", language: "English" },
      { name: "International Law and Law of the European Union", level: "Integrated", duration: "5 years", field: "Law", fee: "€4,800/year", language: "English" },
      { name: "World Politics and Economics", level: "Bachelor", duration: "4 years", field: "Politics", fee: "€4,000/year", language: "English" },
      { name: "Philosophy", level: "Bachelor", duration: "4 years", field: "Philosophy", fee: "€3,800/year", language: "English" },
      { name: "Theatre Art and Acting", level: "Bachelor", duration: "4 years", field: "Theatre", fee: "€4,500/year", language: "English" },
      { name: "Computer Science", level: "Bachelor", duration: "3.5 years", field: "IT", fee: "€4,500/year", language: "English" },
      { name: "Cultural Heritage Development", level: "Master", duration: "1.5 years", field: "Humanities", fee: "€4,500/year", language: "English" },
      { name: "Public Policy", level: "Master", duration: "1.5 years", field: "Politics", fee: "€4,500/year", language: "English" },
      { name: "Gender Studies", level: "Master", duration: "1.5 years", field: "Humanities", fee: "€4,500/year", language: "English" },
    ],
  },

  // -----------------------------------------------------------
  {
    slug: "vilnius-academy-of-arts",
    name: "Vilnius Academy of Arts",
    shortName: "VDA",
    founded: 1793,
    city: "Vilnius",
    cities: ["Vilnius", "Kaunas", "Klaipėda", "Telšiai"],
    overview:
      "The oldest and largest art academy in the Baltic region. Four campuses, 30+ art & design workshops, and the country's deepest tradition in fine arts, design and architecture.",
    longOverview:
      "Established in 1793 as an Architecture department at the Chief School of the Grand Duchy of Lithuania, VDA is the biggest and oldest state art academy in the Baltic region. Today it has 1,800+ students across four cities — Vilnius (fine arts, design, architecture), Kaunas (glass art, ceramics), Klaipėda (graphic design, modern art), and Telšiai (metal art, restoration). 180+ Erasmus partners across the EU.",
    fields: ["Fine Arts", "Design", "Architecture", "Photography", "Animation", "Restoration"],
    degreeLevels: ["Bachelor", "Master", "PhD"],
    language: "English (selected programmes)",
    students: "1,800+",
    scholarships: "Limited, merit-based",
    ranking: "Baltic region's premier art academy",
    avgFee: "€3,500 – €5,000",
    avgFeeNumber: 3500,
    feeNote: "Studio-heavy programmes may carry additional material fees.",
    livingCost: "€600 – €900 / month",
    livingNote:
      "Cost depends on faculty city — Telšiai cheapest, Vilnius highest.",
    applicationDeadlines: {
      nonEU: "1 May 2026",
      EU: "1 July 2026",
    },
    intake: "September",
    englishRequirement: "IELTS 5.5",
    applicationFee: "€100",
    website: "https://www.vda.lt/en",
    applyLink: "https://apply.vda.lt",
    email: "international@vda.lt",
    whyChoose: [
      "Oldest art academy in the Baltic region (founded 1793)",
      "50+ accredited study programmes",
      "Four campuses across Lithuania",
      "30+ art and design workshops with modern equipment",
      "180+ Erasmus partner institutions across the EU",
      "Off-campus facilities like Nida Art Colony and Panemunė Castle",
      "Active gallery network for student work exhibitions",
    ],
    programmes: [
      { name: "Design (Vilnius)", level: "Bachelor", duration: "4 years", field: "Design", fee: "€4,200/year", language: "English" },
      { name: "Sculpture (Vilnius)", level: "Bachelor", duration: "4 years", field: "Fine Arts", fee: "€4,000/year", language: "English" },
      { name: "Textile and Art Design (Vilnius)", level: "Bachelor", duration: "4 years", field: "Design", fee: "€4,200/year", language: "English" },
      { name: "Architecture (Kaunas)", level: "Integrated", duration: "5 years", field: "Architecture", fee: "€5,000/year", language: "English" },
      { name: "Interior Design (Kaunas)", level: "Bachelor", duration: "4 years", field: "Design", fee: "€4,200/year", language: "English" },
      { name: "Interior Design (Klaipėda)", level: "Bachelor", duration: "4 years", field: "Design", fee: "€4,000/year", language: "English" },
      { name: "Graphic Design (Klaipėda)", level: "Bachelor", duration: "4 years", field: "Design", fee: "€4,000/year", language: "English" },
      { name: "Metal Art and Jewelry (Telšiai)", level: "Bachelor", duration: "4 years", field: "Fine Arts", fee: "€3,800/year", language: "English" },
      { name: "Photography and Media Arts (Vilnius)", level: "Master", duration: "2 years", field: "Photography", fee: "€4,800/year", language: "English" },
      { name: "Animation (Vilnius)", level: "Master", duration: "2 years", field: "Animation", fee: "€4,800/year", language: "English" },
      { name: "Restoration of Art and Interior Heritage (Vilnius)", level: "Master", duration: "2 years", field: "Restoration", fee: "€4,800/year", language: "English" },
      { name: "Visual Communication Design (Vilnius)", level: "Master", duration: "2 years", field: "Design", fee: "€4,800/year", language: "English" },
    ],
  },

  // -----------------------------------------------------------
  {
    slug: "lithuanian-academy-of-music-and-theatre",
    name: "Lithuanian Academy of Music and Theatre",
    shortName: "LMTA",
    founded: 1933,
    city: "Vilnius",
    cities: ["Vilnius", "Klaipėda"],
    overview:
      "Internationally recognised conservatory training professionals in music, theatre, dance and film. Hosts 500+ public performances annually.",
    longOverview:
      "Founded in 1933, LMTA is Lithuania's premier conservatory with ~1,000 students across three faculties — two in Vilnius and one in Klaipėda. The academy collaborates with Lithuania's leading practitioners in performance and creative environments. With three concert halls, three dance studios, a cinema hall, theatre studio, opera studio, and recording studio, LMTA hosts around 500 artistic events annually — most of them public and free.",
    fields: ["Music Performance", "Composition", "Dance", "Theatre", "Film", "Music Production"],
    degreeLevels: ["Bachelor", "Master", "PhD"],
    language: "English (selected programmes)",
    students: "~1,000",
    scholarships: "Limited — merit-based",
    ranking: "Top performing arts institution in Baltics",
    avgFee: "€4,500 – €6,500",
    avgFeeNumber: 4500,
    feeNote: "Performance programmes typically include 1-on-1 instrument tuition.",
    livingCost: "€600 – €900 / month",
    livingNote: "Located on Gedimino Ave, central Vilnius.",
    applicationDeadlines: {
      nonEU: "1 May 2026",
      EU: "1 July 2026",
    },
    intake: "September",
    englishRequirement: "IELTS 5.5",
    applicationFee: "€100",
    website: "https://lmta.lt/en",
    email: "admission@lmta.lt",
    whyChoose: [
      "Lithuania's premier music and performing arts conservatory",
      "Tuition by leading practitioners and visiting international artists",
      "Three concert halls, dance studios, theatre and opera studios",
      "500+ artistic events hosted annually",
      "Recording studio and Music Innovation Studies Centre",
      "Campuses in Vilnius and Klaipėda",
      "Strong collaboration with creative industry",
    ],
    programmes: [
      { name: "Music Performance (Vilnius)", level: "Bachelor", duration: "4 years", field: "Music", fee: "€5,500/year", language: "English" },
      { name: "Music Performance (Klaipėda)", level: "Bachelor", duration: "4 years", field: "Music", fee: "€5,000/year", language: "English" },
      { name: "Music Studies (Vilnius)", level: "Bachelor", duration: "4 years", field: "Music", fee: "€5,500/year", language: "English" },
      { name: "Dance (Vilnius)", level: "Bachelor", duration: "4 years", field: "Dance", fee: "€5,500/year", language: "English" },
      { name: "Dance Subcultures (Klaipėda)", level: "Bachelor", duration: "4 years", field: "Dance", fee: "€5,000/year", language: "English" },
      { name: "Music Performance (Vilnius/Klaipėda)", level: "Master", duration: "2 years", field: "Music", fee: "€6,000/year", language: "English" },
      { name: "Composition (Vilnius)", level: "Master", duration: "2 years", field: "Music", fee: "€6,000/year", language: "English" },
    ],
  },

  // -----------------------------------------------------------
  {
    slug: "lithuanian-sports-university",
    name: "Lithuanian Sports University",
    shortName: "LSU",
    founded: 1934,
    city: "Kaunas",
    overview:
      "The only specialised sports & movement science university in Lithuania, with 90+ years of tradition. Shanghai Ranking #123 globally.",
    longOverview:
      "LSU has been uniting Movement and Sports Science for over eight decades. The university focuses on sport, physical activity, rehabilitation, and active leisure. Among LSU alumni are world-renowned coaches, famous athletes, and champions and prize-winners of the Olympic Games and World/European championships. In the Shanghai Ranking's Global Ranking of Sport Science Schools and Departments, LSU has reached #123 — its highest position to date.",
    fields: ["Physiotherapy", "Sports Coaching", "Sports Management", "Tourism", "Public Health"],
    degreeLevels: ["Bachelor", "Master", "PhD"],
    language: "English",
    students: "Specialised focus",
    internationalRatio: "Academic exchange with 100+ universities",
    scholarships: "For selected programmes",
    ranking: "Shanghai Global Sport Sci. #123",
    avgFee: "€2,500 – €4,000",
    avgFeeNumber: 2500,
    feeNote: "Masters typically €1,000–€3,000/yr for EU; non-EU slightly higher.",
    livingCost: "€500 – €800 / month",
    livingNote: "Kaunas — balanced cost-to-quality for students.",
    applicationDeadlines: {
      nonEU: "1 June 2026",
      EU: "1 July 2026",
    },
    intake: "September",
    englishRequirement: "IELTS 5.5",
    applicationFee: "€100",
    website: "https://www.lsu.lt/en",
    email: "admission@lsu.lt",
    whyChoose: [
      "Only specialised sports & movement science university in Lithuania",
      "90+ years of sports science tradition (since 1934)",
      "Shanghai Global Ranking of Sport Science Schools: #123",
      "Academic exchange with 100+ universities worldwide",
      "Alumni include Olympic and World championship medalists",
      "Strong focus on sport, rehabilitation, and active leisure",
      "Sports coaching is the most popular programme",
    ],
    programmes: [
      { name: "BSc Physiotherapy", level: "Bachelor", duration: "4 years", field: "Health", fee: "€3,500/year", language: "English" },
      { name: "BSc Sports Coaching", level: "Bachelor", duration: "4 years", field: "Sports", fee: "€3,000/year", language: "English" },
      { name: "BSc Sports and Tourism Management", level: "Bachelor", duration: "3 years", field: "Tourism", fee: "€3,000/year", language: "English" },
      { name: "Exercise, Nutrition and Stress Management", level: "Bachelor", duration: "4 years", field: "Health", fee: "€3,500/year", language: "English" },
      { name: "MSc Tourism and Sports Management", level: "Master", duration: "2 years", field: "Tourism", fee: "€3,500/year", language: "English" },
      { name: "MSc Public Health and Physical Activity", level: "Master", duration: "2 years", field: "Public Health", fee: "€3,500/year", language: "English" },
      { name: "MSc Advanced Practice Physiotherapy", level: "Master", duration: "2 years", field: "Health", fee: "€4,000/year", language: "English" },
      { name: "MSc Sports Physiology", level: "Master", duration: "2 years", field: "Sports", fee: "€3,800/year", language: "English" },
      { name: "International MSc Basketball Coaching and Management", level: "Master", duration: "2 years", field: "Sports", fee: "€4,000/year", language: "English" },
      { name: "International Master in Performance Analysis of Sport", level: "Master", duration: "2 years", field: "Sports", fee: "€4,000/year", language: "English" },
      { name: "MSc Adapted Physical Activity", level: "Master", duration: "2 years", field: "Health", fee: "€3,800/year", language: "English" },
    ],
  },

  // -----------------------------------------------------------
  {
    slug: "kazimieras-simonavicius-university",
    name: "Kazimieras Simonavičius University",
    shortName: "KSU",
    founded: 2003,
    city: "Vilnius",
    overview:
      "Private university known as 'Europe's choice for Aviation Management' and home to the Baltics' only Fashion Industry Bachelor's degree.",
    longOverview:
      "Founded in 2003, KSU is an accredited private institution renowned for innovation and entrepreneurship. While famous for its Aviation Management and Fashion Industry programmes, KSU also covers Business, Public Administration, Communication, and more. The university offers two intakes per year (September and February), small study groups, and international certifications (IATA, ICAO) — making it ideal for students wanting flexibility and global recognition.",
    fields: ["Aviation Management", "Fashion", "Business", "Cinema", "Communication"],
    degreeLevels: ["Bachelor", "Master"],
    language: "English",
    students: "Smaller cohort, international focus",
    scholarships: "Limited merit-based",
    ranking: "Specialised — Aviation & Fashion",
    avgFee: "€3,000 – €4,500",
    avgFeeNumber: 3000,
    feeNote: "Two intakes per year — Sep & Feb. Aviation programme premium-tier.",
    livingCost: "€600 – €900 / month",
    livingNote: "Central Vilnius — close to airport for aviation students.",
    applicationDeadlines: {
      nonEU: "1 June 2026 (Sep) · 1 Nov 2026 (Feb)",
      EU: "1 August 2026",
    },
    intake: "September & February",
    englishRequirement: "IELTS 5.5",
    applicationFee: "€100",
    website: "https://www.ksu.lt",
    applyLink: "https://apply.ksu.lt",
    email: "admission@ksu.lt",
    whyChoose: [
      "Europe's recognised destination for Aviation Management studies",
      "Baltics' only Bachelor's degree in Fashion Industry",
      "International certificates: IATA, ICAO",
      "Two intakes per year — September and February",
      "Small study groups with personalised attention",
      "Online study options available",
      "Erasmus study visits included",
    ],
    programmes: [
      { name: "Aviation Management", level: "Bachelor", duration: "3.5 years", field: "Aviation", fee: "€4,500/year", language: "English" },
      { name: "Aviation Management Online", level: "Bachelor", duration: "3.5 years", field: "Aviation", fee: "€3,800/year", language: "English" },
      { name: "Business Management", level: "Bachelor", duration: "3.5 years", field: "Business", fee: "€3,200/year", language: "English" },
      { name: "Fashion Industry", level: "Bachelor", duration: "3.5 years", field: "Fashion", fee: "€3,800/year", language: "English" },
      { name: "Cinema Industry Management", level: "Bachelor", duration: "3.5 years", field: "Cinema", fee: "€3,500/year", language: "English" },
      { name: "Contemporary Communication and Media", level: "Bachelor", duration: "3.5 years", field: "Communication", fee: "€3,200/year", language: "English" },
      { name: "Aviation Management", level: "Master", duration: "1.5 years", field: "Aviation", fee: "€4,500/year", language: "English" },
      { name: "Organizational Innovation and Management", level: "Master", duration: "1.5 years", field: "Business", fee: "€3,800/year", language: "English" },
      { name: "Integrated Communication", level: "Master", duration: "1.5 years", field: "Communication", fee: "€3,500/year", language: "English" },
      { name: "Fashion Management", level: "Master", duration: "1.5 years", field: "Fashion", fee: "€3,800/year", language: "English" },
    ],
  },
];

// =============================================================
//   HELPER FUNCTIONS — leave these alone
// =============================================================
export const getUniversityBySlug = (slug: string) =>
  UNIVERSITIES.find((u) => u.slug === slug);

export const getAllCities = () =>
  Array.from(new Set(UNIVERSITIES.map((u) => u.city))).sort();

export const getAllFields = () =>
  Array.from(new Set(UNIVERSITIES.flatMap((u) => u.fields))).sort();
