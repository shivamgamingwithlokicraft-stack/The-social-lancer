export const teamData = [
  {
    slug: "founder",
    name: "Founder Name",
    role: "Leadership",
    designation: "Founder & Director",
    bio: "Leading the strategic vision and client relationships for The Social Lancer. Ensuring every campaign aligns with business goals.",
    responsibilities: ["Business Direction", "Client Relationships", "Final Project Approvals"],
    skills: ["Strategy", "Business Development", "Client Success"],
  },
  {
    slug: "strategist",
    name: "Strategist Name",
    role: "Strategy",
    designation: "Lead Strategist",
    bio: "Expert in audience research, content pillars, and platform selection. Translating brand goals into actionable social strategies.",
    responsibilities: ["Content Strategy", "Audience Research", "Growth Planning"],
    skills: ["Data Analysis", "Content Calendars", "Competitor Research"],
  },
  {
    slug: "designer",
    name: "Designer Name",
    role: "Creative",
    designation: "Senior Graphic Designer",
    bio: "Bringing brand visions to life through compelling visuals, carousel designs, and maintaining strict visual consistency.",
    responsibilities: ["Graphic Design", "Brand Assets", "Visual Consistency"],
    skills: ["Photoshop", "Illustrator", "Typography"],
  },
  {
    slug: "video-editor",
    name: "Video Editor Name",
    role: "Creative",
    designation: "Reels & Video Creator",
    bio: "Specializing in short-form video, hook development, and motion graphics to capture attention and drive engagement.",
    responsibilities: ["Reels Production", "Motion Graphics", "Video Formatting"],
    skills: ["Premiere Pro", "After Effects", "CapCut"],
  }
];

export const responsibilityMatrix = [
  { activity: "Content Strategy", primary: "Strategist Name", support: "Creative Team" },
  { activity: "Graphic Design", primary: "Designer Name", support: "Director" },
  { activity: "Reels Production", primary: "Video Editor Name", support: "Strategist" },
  { activity: "Content Publishing", primary: "Strategist Name", support: "Designer" },
  { activity: "Client Communication", primary: "Founder Name", support: "Strategist" },
];