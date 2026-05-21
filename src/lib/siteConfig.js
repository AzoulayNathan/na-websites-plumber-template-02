const siteConfig = {
  businessName: "{businessName}",
  city: "{city}",
  phone: "{phone}",
  email: "{email}",
  services: [
    {
      id: "service1",
      title: "{primaryService1}",
      perspective: "When water stops flowing normally, the goal is not just to clear it — it is to understand why it happened.",
      detail: "Diagnosis before action. The cause matters as much as the fix."
    },
    {
      id: "service2",
      title: "{primaryService2}",
      perspective: "A leak left unattended can cause more damage in hours than the repair itself. Speed and precision matter.",
      detail: "Locating the source is always the first step."
    },
    {
      id: "service3",
      title: "{primaryService3}",
      perspective: "No hot water disrupts daily life fast. Understanding whether it is the unit, the supply or the thermostat saves time.",
      detail: "Assessment helps determine repair or replacement."
    },
    {
      id: "service4",
      title: "{primaryService4}",
      perspective: "From installations to adjustments, plumbing work is about getting the details right the first time.",
      detail: "Planned work benefits from a clear quote and timeline."
    }
  ],
  serviceAreas: [
    "{serviceArea1}",
    "{serviceArea2}",
    "{serviceArea3}",
    "{serviceArea4}",
    "{serviceArea5}"
  ],
  problems: [
    {
      id: "leak",
      label: "Leak",
      advice: "Turn off the water supply if accessible. Call before the damage spreads.",
      icon: "droplet"
    },
    {
      id: "blocked-wc",
      label: "Blocked WC",
      advice: "Avoid flushing repeatedly. Call if water rises or the blockage returns.",
      icon: "circle-off"
    },
    {
      id: "blocked-sink",
      label: "Blocked sink",
      advice: "Check for visible debris near the drain. Avoid using chemical products before calling.",
      icon: "waves"
    },
    {
      id: "water-heater",
      label: "Water heater",
      advice: "If leaking, turn off the power supply. Do not touch electrical parts near water.",
      icon: "thermometer"
    },
    {
      id: "plumbing-work",
      label: "Plumbing work",
      advice: "For planned work, a quote request helps clarify the scope and timing.",
      icon: "wrench"
    }
  ],
  trustPoints: [
    { title: "Explained before action", description: "Clear explanation of the problem and proposed work before starting." },
    { title: "Contact visible on mobile", description: "Phone number always accessible, no hidden contact forms." },
    { title: "Clean intervention mindset", description: "Respect for the space and attention to cleanliness during work." },
    { title: "Quote request for non-urgent work", description: "Planned jobs start with a proper assessment and written quote." }
  ],
  steps: [
    { number: "01", title: "Call or message", description: "Reach out by phone or through the quote form." },
    { number: "02", title: "Explain the problem", description: "Describe what you see — a photo helps." },
    { number: "03", title: "First assessment", description: "Initial diagnosis based on your description." },
    { number: "04", title: "Clear explanation", description: "Work explained before any action begins." },
    { number: "05", title: "Intervention", description: "Work carried out with clarity and care." }
  ],
  beforeArrival: [
    { title: "Water leak", advice: "Turn off the water supply if you can access the stopcock safely." },
    { title: "Electricity nearby", advice: "Keep all electrical devices away from standing water." },
    { title: "Blocked WC", advice: "Do not flush repeatedly — this can cause overflow." },
    { title: "Water heater issue", advice: "Switch off the power supply. Avoid touching wet electrical parts." },
    { title: "Take a photo", advice: "A picture of the problem helps explain the situation quickly." }
  ]
};

export default siteConfig;