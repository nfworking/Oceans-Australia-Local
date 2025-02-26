export const SITE_TITLE = "Oceans Australia"
export const SITE_DESCRIPTION = "Protect our reefs, Preserve our future"

export const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "What we as a company do", href: "/solutions" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Click here to have some fun", href: "/quiz" },
]

export const HERO_CONTENT = {
  title: "Protect our reefs, Preserve our future",
  description:
    "Learn how you can create a better future for our marine life and the emerging generations",
  cta1: "Get Involved",
  cta2: "Learn More",
}

export const MARINE_LIFE_SECTION = {
  title: "Explore Australias Marine Life",
  models: [
    {
      name: "Clownfish",
      modelSrc: "/3d/export.glb",
      skyboxSrc: "/4k.jpg",
      environmentSrc: "/face5.jpg",
    },
    {
      name: "Sea Turtle",
      modelSrc: "/3d/export.glb",
      skyboxSrc: "/4k.jpg",
      environmentSrc: "/face5.jpg",
    },
    {
      name: "Coral Formation",
      modelSrc: "/3d/export.glb",
      skyboxSrc: "/4k.jpg",
      environmentSrc: "/face5.jpg",
    },
    {
      name: "Reef Shark",
      modelSrc: "/3d/export.glb",
      skyboxSrc: "/4k.jpg",
      environmentSrc: "/face5.jpg",
    },

  ],
}

export const CONTENT_CARDS = [
  {
    title: "Threats to Coral Reefs",
    description: "Learn about the various threats facing coral reefs and how they impact these delicate ecosystems.",
    content: [
      "Climate change and ocean acidification",
      "Overfishing and destructive fishing practices",
      "Pollution and coastal development",
      "Invasive species and oil spills",
    ],
  },
  {
    title: "Get Involved",
    description: "Discover ways you can contribute to coral reef conservation efforts and make a difference.",
    content: [
      "Volunteer for local reef clean-up initiatives",
      "Support sustainable fishing practices",
      "Reduce your carbon footprint",
      "Educate others about coral reef conservation",
    ],
  },
  {
    title: "Conservation Solutions",
    description: "Explore innovative solutions and ongoing projects aimed at protecting and restoring coral reefs.",
    content: [
      "Coral restoration and propagation programs",
      "Marine protected areas and no-take zones",
      "Sustainable tourism practices",
      "Advanced monitoring and early warning systems",
    ],
  },
]

export const ABOUT_CONTENT = {
  title: "About Coral Reef Conservation",
  mission:
    "Our mission is to protect and preserve coral reefs worldwide through education, research, and community engagement.",
  vision:
    "We envision a world where coral reefs thrive, supporting diverse marine ecosystems and benefiting coastal communities for generations to come.",
  history:
    "Founded in 2010, our organization has been at the forefront of coral reef conservation efforts. We've partnered with marine biologists, environmental agencies, and local communities to develop sustainable solutions for reef protection.",
  achievements: [
    "Restored over 50,000 square meters of coral reef",
    "Established 5 new marine protected areas",
    "Educated more than 100,000 people about coral reef conservation",
    "Implemented sustainable fishing practices in 20 coastal communities",
    "Helped the new generation explore the coral reef through immersive experiences"
  ],
  team: [
    {
      name: "Dr. Emily Chen",
      role: "Marine Biologist",
      bio: "Dr. Chen has over 15 years of experience in coral reef ecology and restoration techniques.",
    },
    {
      name: "Mark Johnson",
      role: "Conservation Policy Expert",
      bio: "Mark specializes in developing and implementing policies for marine protected areas.",
    },
    {
      name: "Sarah Thompson",
      role: "Community Outreach Coordinator",
      bio: "Sarah works closely with local communities to promote sustainable practices and education.",
    },
  ],
}

export const SOLUTIONS_CONTENT = {
  title: "Our Solutions",
  intro: "We employ a variety of innovative approaches to protect and restore coral reefs:",
  solutions: [
    {
      title: "Coral Restoration",
      description:
        "We cultivate coral fragments in nurseries and transplant them onto degraded reefs to accelerate recovery.",
      steps: [
        "How out on expeditions to explore potential heritage sites",
        "Take populaiton numbers to gather important data",
        "Introduce new fish to continue the growning of local fauna",
        "Monitor and maintain restored areas",
      ],
    },
    {
      title: "Sustainable Tourism",
      description:
        "We work with local communities to develop eco-friendly tourism practices that protect reefs while supporting economies.",
      practices: [
        "Implement carrying capacity limits for popular reef sites",
        "Provide education and guidelines for responsible snorkeling and diving",
        "Promote reef-safe sunscreen use",
        "Develop alternative livelihoods for communities dependent on reef resources",
      ],
    },
    {
      title: "Marine Protected Areas",
      description:
        "We advocate for the establishment and effective management of marine protected areas to safeguard critical reef ecosystems.",
      benefits: [
        "Preserve biodiversity and ecosystem functions",
        "Provide refuge for endangered species",
        "Support sustainable fisheries through spillover effects",
        "Enhance resilience to climate change impacts",
      ],
    },
    {
      title: "Climate Action",
      description:
        "We promote policies and practices that mitigate climate change impacts on coral reefs, such as reducing carbon emissions and ocean acidification.",
      initiatives: [
        "Advocate for stronger climate policies at local and global levels",
        "Support renewable energy transitions in coastal communities",
        "Promote blue carbon initiatives (e.g., mangrove restoration)",
        "Develop climate-resilient coral species through selective breeding",
      ],
    },
  ],
}

export const GET_INVOLVED_CONTENT = {
  title: "Get Involved",
  intro: "There are many ways you can contribute to coral reef conservation:",
  ways: [
    {
      title: "Volunteer",
      description:
        "Join our local and international volunteer programs to assist with reef monitoring, clean-ups, and community education.",
      opportunities: [
        "Reef Check surveys",
        "Beach and underwater clean-ups",
        "Coral nursery maintenance",
        "Community outreach and education programs",
      ],
    },
    {
      title: "Donate",
      description:
        "Your financial support helps fund our conservation projects, research initiatives, and educational programs.",
      impactAreas: [
        "Coral restoration projects",
        "Marine protected area establishment and management",
        "Scientific research and monitoring",
        "Environmental education materials and workshops",
      ],
    },
    {
      title: "Spread Awareness",
      description:
        "Share information about coral reef conservation on social media and in your community to educate others.",
      channels: [
        "Social media campaigns",
        "Community presentations",
        "School outreach programs",
        "Eco-friendly business partnerships",
      ],
    },
    {
      title: "Adopt Sustainable Practices",
      description:
        "Make eco-friendly choices in your daily life, such as reducing plastic use and choosing reef-safe sunscreen.",
      actions: [
        "Use reusable bags, bottles, and utensils",
        "Choose sustainable seafood options",
        "Reduce water consumption and runoff",
        "Support eco-friendly businesses and products",
      ],
    },
  ],
}

export const QUIZZES = [
  {
    id: 1,
    title: "Coral Reef Basics",
    questions: [
      {
        question: "What percentage of the ocean floor do coral reefs cover?",
        options: ["Less than 1%", "5-10%", "15-20%", "More than 25%"],
        correctAnswer: 0,
        explanation:
          "Despite covering less than 1% of the ocean floor, coral reefs support an estimated 25% of all marine species.",
      },
      {
        question: "Which of the following is NOT a threat to coral reefs?",
        options: ["Climate change", "Overfishing", "Pollution", "Increased rainfall"],
        correctAnswer: 3,
        explanation:
          "While increased rainfall itself is not a direct threat, climate change, overfishing, and pollution are major threats to coral reefs.",
      },
      {
        question: "What is coral bleaching?",
        options: [
          "A natural process of coral growth",
          "When corals expel the algae living in their tissues",
          "A method to clean coral reefs",
          "The process of coral reproduction",
        ],
        correctAnswer: 1,
        explanation:
          "Coral bleaching occurs when corals expel the symbiotic algae living in their tissues due to stress, often caused by increased water temperatures.",
      },
    ],
  },
  {
    id: 2,
    title: "Marine Life in Coral Reefs",
    questions: [
      {
        question: "Which of these animals is NOT typically found in coral reefs?",
        options: ["Clownfish", "Sea turtles", "Polar bears", "Parrotfish"],
        correctAnswer: 2,
        explanation:
          "Polar bears are not found in coral reef ecosystems. They inhabit the Arctic region, far from tropical and subtropical coral reefs.",
      },
      {
        question: "What do corals primarily feed on?",
        options: ["Plankton", "Seaweed", "Small fish", "Sand"],
        correctAnswer: 0,
        explanation:
          "Corals primarily feed on plankton, which they capture using their tentacles. They also receive nutrients from symbiotic algae living in their tissues.",
      },
      {
        question: "Which of these is a type of coral?",
        options: ["Brain coral", "Lung coral", "Heart coral", "Liver coral"],
        correctAnswer: 0,
        explanation:
          "Brain coral is a real type of coral, named for its appearance which resembles a brain. The other options are not actual types of coral.",
      },
    ],
  },
  {
    id: 3,
    title: "Coral Reef Conservation",
    questions: [
      {
        question: "What is the primary goal of coral restoration?",
        options: [
          "To create artificial reefs",
          "To increase tourism",
          "To rebuild degraded coral populations",
          "To study coral genetics",
        ],
        correctAnswer: 2,
        explanation:
          "The primary goal of coral restoration is to rebuild and rehabilitate degraded coral populations, helping to restore the ecosystem's health and biodiversity.",
      },
      {
        question: "Which of the following is a sustainable fishing practice?",
        options: [
          "Using dynamite to catch fish",
          "Implementing catch limits",
          "Bottom trawling",
          "Fishing during spawning seasons",
        ],
        correctAnswer: 1,
        explanation:
          "Implementing catch limits is a sustainable fishing practice that helps maintain fish populations. The other options are harmful or unsustainable practices.",
      },
      {
        question: "What is a Marine Protected Area (MPA)?",
        options: [
          "A type of coral",
          "A zone where fishing is unrestricted",
          "A designated area where human activity is limited to protect marine ecosystems",
          "A deep-sea research station",
        ],
        correctAnswer: 2,
        explanation:
          "A Marine Protected Area is a designated zone where human activity is regulated to protect marine ecosystems, including coral reefs and associated species.",
      },
    ],
  },
]

