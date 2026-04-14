// ---------- Navbar titles
const enNavbarData = {
  title: " Farnaz Faraji ",
  Home: "Home",
  Research: "Research",
  Teaching: "Teaching",
  Work: "Work Experience",
  AsIAm: "As I Am",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: "Farnaz (Naz) Faraji",
  jobTitle:
    "Interdisciplinary Researcher in Heritage, Landscapes and Built Environment",
  home_title: "About me",
  home_content: `
  <div>
    <p>Interdisciplinary researcher specialising in landscape and heritage studies, with a focus on how cultural and environmental knowledge of landscapes is produced, interpreted, and translated into heritage policy and planning. My work combines spatial analysis (GIS, PPGIS) with qualitative and archival approaches to examine landscape change, heritage narratives, and governance, particularly in the Middle East and European contexts.</p>
    <p>I have experience working across research and practice, including policy-oriented projects, and contribute to debates in landscape archaeology, critical heritage studies, and the role of research in shaping sustainability and heritage policy.</p>
    <h2 class='title'>Education</h2>
    <ul>
      <li><strong>PhD in History and Heritage of Cultural Landscapes and Urban Environments</strong>, Vrije Universiteit Amsterdam (VUA), Netherlands (2022 &ndash; 2025)</li>
      <li><strong>Master of Arts, Conservation and Rehabilitation of Urban Heritage</strong>, College of Fine Arts, University of Tehran, Iran (2016 &ndash; 2019)</li>
      <li><strong>Bachelor of Science, Architecture</strong>, University of Tabriz, Iran (2011 &ndash; 2015)</li>
    </ul>
    <h2 class='title'>Grants and Funding</h2>
    <p><strong>Marie Sk&#322;odowska-Curie Doctoral Fellowship (Horizon 2020)</strong>: Cultural Heritage and the Planning of European Landscapes (HERILAND), 2021 &ndash; 2024. Doctoral researcher within the EU-funded HERILAND network (Marie Sk&#322;odowska-Curie Actions).</p>
  </div>
  `,
};

// ---------- Research page data
const enResearchPageData = {
  type_one_title: "Journal Papers",
  type_one_items: [
    {
      title: `Remapping Belonging: Integrating Immigrant Perceptions into Historic Landscape Characterisation through PPGIS.`,
      abstract: `Landscape Research.`,
      date: "Accepted",
      link: "",
      github: "",
      download: "",
      writers: ["Faraji, F.", "van Manen, N.", "Carrer, F.", "Burgers, G."],
    },
    {
      title: `Development of the Planning Framework of the Conservation for World Heritage Site of Maymand Cultural Landscape.`,
      abstract: `Culture of Islamic Architecture and Urbanism Journal. Volume 8, Issue 2. DOI: 10.52547/ciauj.8.2.501`,
      date: "2023",
      link: "https://doi.org/10.52547/ciauj.8.2.501",
      github: "",
      writers: ["Moradi, S.", "Faraji, F.", "Fadaei Nezhad, S."],
    },
    {
      title: `Automatic Localization of Caravanserais in Satellite Images using Image Processing Techniques based on Deep Learning.`,
      abstract: `Journal of Circuits, Data and System Analysis.`,
      date: "2023",
      link: "https://sanad.iau.ir/fa/Article/848525",
      github: "",
      writers: ["Salari, M. H.", "Shayegan, M. A.", "Faraji, F."],
    },
  ],

  type_two_title: "Book Chapters",
  type_two_items: [
    {
      title: `Seeking Inclusivity with PPGIS: Lessons Learned from Three Heritage-themed Case Studies Across Europe.`,
      abstract: `In: A Research Agenda for Participatory Mapping and PPGIS. Edward Elgar.`,
      date: "2026",
      link: "",
      github: "",
      writers: ["Ducci, M.", "Faraji, F.", "Swiderski, M."],
    },
  ],

  type_three_title: "Conference Papers and Presentations",
  type_three_items: [
    {
      title: `Landscape Characterisation in Non-European Contexts: Firuzabad Archaeological Landscape in Iran.`,
      abstract: `Landscape Archaeology Conference in Otto-Friedrich-University Bamberg, Germany.`,
      date: "2026",
      link: "",
      github: "",
      writers: ["Faraji, F.", "Fadaei Nezhad, S."],
    },
    {
      title: `Belongingness in the in-between fields: Migrants' Perception of English Urban Landscapes; Case Study of Newcastle Upon Tyne.`,
      abstract: `History & Heritage, AMPS Prague Conference. Online Presentation.`,
      date: "2023",
      link: "https://www.youtube.com/watch?v=I2u1l0pO1A",
      github: "",
      writers: ["Faraji, F."],
    },
  ],

  type_four_title: "",
  type_four_items: [],
};

// ---------- Teaching page data
const enTeachingPageData = {
  title: "Teaching",
  content: `
    <div class='research_content'>
        <h4 style="font-size: 1.1rem">Teaching Assistant</h4>
        <p><em>College of Fine Arts, University of Tehran, Iran (Jan 2020 &ndash; Aug 2021)</em></p>
        <p>Teaching modules for Bachelors and Masters programmes:</p>
        <ul>
          <li>Research Methodology</li>
          <li>Urban Heritage Pathologies</li>
          <li>Conservation Design for Historic Sites and Monuments</li>
          <li>Adaptive Reuse Strategies</li>
        </ul>
        <p>Supervising Masters Dissertations.</p>
    </div>
  `,
};

// ---------- Work page data
const enWorkPageData = {
  title: "Work Experience",
  items: [
    {
      title: "Heritage & Engagement Officer",
      company: "Tyne and Wear Building Preservation Trust",
      startData: "Jun 2024",
      endDate: "Jun 2025",
      location: "Newcastle Upon Tyne, UK",
      abstract:
        "Tyne Derwent Way Project. Designing and delivering community engagement programmes exploring local heritage and landscape narratives; organising participatory workshops with local communities and youth groups to foster dialogue around heritage and place; producing heritage interpretation materials, including podcasts and public exhibitions.",
      achievements: [
        "Coordinated heritage outreach activities and reported project outcomes to institutional partners",
        "Contributed to the translation of community-based heritage research into public-facing outputs and stakeholder engagement",
      ],
    },
    {
      title: "Research Assistant",
      company: "Newcastle University",
      startData: "Jun 2021",
      endDate: "Jun 2024",
      location: "Newcastle Upon Tyne, UK",
      abstract:
        "School of History, Classics and Archeology. Conducted independent and collaborative research within an interdisciplinary heritage project.",
      achievements: [
        "Presented research findings at international workshops and conferences",
        "Assisted in organising international masterclasses on digital heritage, democratisation and shifting identities",
        "Prepared periodic research reports for EU-funded projects and partner institutions",
        "Supported publication development and identification of research funding opportunities",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "University of Tehran",
      startData: "Jan 2020",
      endDate: "Aug 2021",
      location: "Tehran, Iran",
      abstract:
        "College of Fine Arts. Teaching modules for Bachelors and Masters: Research Methodology, Urban Heritage Pathologies, Conservation Design for Historic Sites and Monuments, Adaptive Reuse Strategies; Supervising Masters Dissertations.",
      achievements: [],
    },
    {
      title: "Research Assistant",
      company: "University of Tehran / Tehran Municipality",
      startData: "Jul 2019",
      endDate: "Aug 2020",
      location: "Tehran, Iran",
      abstract:
        "Mapping the Architectural Industrial Heritage. Acquired, structured and managed large spatial and archival datasets using ArcGIS and Web GIS platforms.",
      achievements: [
        "Converted and integrated analogue and legacy datasets into digital GIS environments",
        "Designed a web-based GIS platform to support long-term access, updating and stakeholder use",
        "Worked with municipal and institutional partners to align data structures with planning and heritage needs",
      ],
    },
    {
      title: "Project Co-manager",
      company: "Tehran Municipality, Renovation Office",
      startData: "May 2019",
      endDate: "Jul 2020",
      location: "Tehran, Iran",
      abstract:
        "Heritage & Urban Conservation. Desk-based assessment of the Lalehzar street in Tehran city centre to prepare for heritage conservation and restoration planning including project and staff management.",
      achievements: [
        "Contributed to heritage policy and planning frameworks",
        "Linked research to urban governance and decision-making",
        "Preparing the conservation plans as part of the urban and architectural heritage conservationists",
      ],
    },
    {
      title: "Urban Heritage Conservation Consultant",
      company: "Paramadan Architectural and Urban Planning Co.",
      startData: "Jan 2019",
      endDate: "Jan 2020",
      location: "Tehran, Iran",
      abstract:
        "Desk-based assessment of the heritage and touristic destinations in Tehran (all municipalities). Review and proposal of tourism-funding opportunities for eligible sites and urban heritage-led regeneration plans.",
      achievements: [],
    },
  ],
};

// ---------- As I Am page data
const enAsIAmPageData = {
  title: "As I Am",
  content: `
    <div>
      <p>This is where I share a bit about who I am beyond my academic work &mdash; my hobbies, interests, and writings.</p>
      <p>Coming soon...</p>
    </div>
  `,
};
