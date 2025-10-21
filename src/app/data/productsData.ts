// app/data/productsData.ts
export interface Feature {
    title: string;
    description: string;
  }
  
  export interface Spec {
    label: string;
    value: string;
  }
  
  export interface ProductData {
    slug: string; // for dynamic route
    title: string;
    tagline: string;
    image1: string;
    image2: string;
    usps: string[];
    benefits: string[];
    features: Feature[];
    specs: Spec[];
  }
  
  // export const products: ProductData[] = [
  //   {
  //     slug: "energy-efficient-intelligent-geyser",
  //     title: "Energy Efficient Intelligent Hybrid Geyser",
  //     tagline: "Smart Heating. Maximum Efficiency. Ultimate Convenience.",
  //     image1: "/eNoris.jpg",
  //     image2:'/Noris.png',
  //     usps: [
  //       "Bluetooth Controlled",
  //       "Gas Detection & Ignition",
  //       "Two Time Settings",
  //       "Saves Gas / Electricity",
  //       "Special Steel Body / Tank"
  //     ],
  //     benefits: [
  //       "Saves up to 60% energy",
  //       "Automatically switches between gas and electricity",
  //       "Smart programmable timer for ON/OFF control",
  //       "Pilotless and hassle-free ignition system"
  //     ],
  //     features: [
  //       { title: "Bluetooth Controlled", description: "Program ON/OFF times and priority of gas or electricity directly from your smartphone." },
  //       { title: "Gas Detection & Ignition", description: "Automatically detects gas and ignites burner when gas priority is set." },
  //       { title: "Two Time Settings", description: "Supports two programmable time zones to automate operation." },
  //       { title: "Energy Efficiency", description: "Saves gas and electricity through intelligent microprocessor-based control." },
  //       { title: "Durable Construction", description: "Made with special steel tank and superior insulation for durability." }
  //     ],
  //     specs: [
  //       { label: "Tank Gauge", value: "11/12" },
  //       { label: "Body Gauge", value: "22" },
  //       { label: "Warranty", value: "1 Year" }
  //     ]
  //   },
  //   {
  //     slug: "intelligent-air-purifier",
  //     title: "Intelligent Electric Geyser",
  //     tagline: "Smart Heating. Safe Operation. Ultimate Comfort.",
  //     image1: "/AirPurifier.jpg",
  //     image2:'/AirPurifierFilter.jpg',
  //     usps: [
  //       "Intelligent Operation",
  //       "Two Time Settings",
  //       "No Water/Dry-Run Protection",
  //       "Electric Shock Protection",
  //       "Heating Power Selection",
  //       "Overheat Protection",
  //       "Durable Construction",
  //       "Mobile App Control"
  //     ],
  //     benefits: [
  //       "Saves up to 60% energy",
  //       "Fully Bluetooth-controlled via mobile app",
  //       "Enhanced safety with shock and dry-run protection",
  //       "Durable design for long life and reliable performance"
  //     ],
  //     features: [
  //       { title: "Intelligent Operation", description: "Hassle-free control via smartphone with Bluetooth connectivity." },
  //       { title: "Two Time Settings", description: "Two programmable zones to automatically turn heater ON/OFF." },
  //       { title: "Safety Features", description: "Includes dry-run, electric shock, and overheat protection." },
  //       { title: "Heating Power Selection", description: "Adjust power settings as needed for efficiency and comfort." },
  //       { title: "Durable Body", description: "Constructed with a special steel tank for long-lasting use." }
  //     ],
  //     specs: [
  //       { label: "Tank Gauge", value: "14" },
  //       { label: "Body Gauge", value: "22" },
  //       { label: "Warranty", value: "1 Year" }
  //     ]
  //   }
  // ];
  

  export const products: ProductData[] = [
    {
      slug: "intelligent-air-purifier",
      title: "Intelligent Air Purifier",
      tagline: "AI-Based Air-Purity Control Extends filter Life",
      image1: "/AirPurifier.jpg",
      image2:'/Air-Purifier-Broucher-4..png',
      usps: [
        "AI-Based Air-Purity Control Extends filter Life",
        "Air Quality index Measurement by Laser Sensor",
        "Three Filters: Anti Bacteria + HEPA H13 + Activated Carbon",
        "Removes 99% of air borne contamination and Bacteria",
        "Auto and Multi airflow control Modes",
        "Timer and sleep Mode"
      ],
      benefits: [
        "Extends filter Life",
        "Removes 99% of air borne contamination and Bacteria",
        "Removes airborne impurities like dust, Bacteria, and Micro-organisms",
        "Removes volatile organic compounds, chemical Pollutants, harmful odor and smell",
        "Eliminates 99% of Air Borne Particles as small as 0.2 Microns, like smoke Pollen and Allergens"
      ],
      features: [
        {
          title: "Anti Bacteria Filter",
          description: "Removes air borne impurities like dust, Bacteria, and Micro-organisms from the air."
        },
        {
          title: "Activated Carbon Filter",
          description: "Removes volatile organic compounds, chemical Pollutants, harmful odor and smell."
        },
        {
          title: "HEPA H13 Filter",
          description: "Eliminates 99% of Air Borne Particles as small as 0.2 Microns, like smoke Pollen and Allergens."
        },
        {
          title: "Air Quality index Measurement",
          description: "Measurement performed by Laser Sensor."
        },
        {
          title: "Control Modes",
          description: "Features Auto and Multi airflow control Modes, plus Timer and sleep Mode."
        }
      ],
      specs: [
        { label: "Noise Level", value: "54 dB" },
        { label: "Clean Air Deliver Rate (CADR)", value: "235 m³/h" },
        { label: "Filtration", value: "3-Stage True HEPA Air Purifier" }
      ]
    },
    {
      slug: "enoris-intelligent-electric-geyser",
      title: "Intelligent Electric Geyser",
      tagline: "e-NORIS Intelligent Geyser is a sophisticated microprocessor-based system.",
      image1: "/eNoris.jpg", 
      image2: "/eNORIS-Poster.jpg", 
      usps: [
        "Intelligent Operation (Bluetooth-controlled)",
        "Two Time Settings",
        "No Water/Dry-Run Protection",
        "Electric Shock Protection",
        "Heating Power Selection",
        "Over Heat Protection",
        "Durable Construction (Special Steel Body/Tank)",
        "Mobile App Control"
      ],
      benefits: [
        "Hassle-free and Bluetooth-controlled via mobile phone.",
        "Saves 60% Energy (Intelligent Energy Saving Technology).",
        "Programmable to automatically turn 'ON' and 'OFF' at preset times."
      ],
      features: [
        {
          title: "Intelligent Operation",
          description: "Hassle-free and Bluetooth-controlled via mobile phone."
        },
        {
          title: "Two Time Settings",
          description: "Two programmable time setting zones. User can program the electric heater to automatically turn 'ON' and 'OFF' at your preset times."
        },
        {
          title: "Protection",
          description: "Includes No Water/Dry-Run Protection, Electric Shock Protection, and Over Heat Protection."
        },
        {
          title: "Durable Construction",
          description: "Features a Special Steel Body/Tank."
        },
        {
          title: "Mobile App Control",
          description: "Allows programming and control of the geyser via a mobile application."
        }
      ],
      specs: [
        { label: "Tank Gauge", value: "14" },
        { label: "Body Gauge", value: "22" },
        { label: "Warranty", value: "1 Year" }
      ]
    },
    {
      slug: "noris-intelligent-hybrid-geyser",
      title: "Intelligent Hybrid Geyser",
      tagline: "NORIS Intelligent Geyser is a sophisticated microprocessor-based system.",
      image1: "/Noris.png", 
      image2: "/NORIS-Poster.jpg", 
      usps: [
        "Bluetooth Controlled",
        "Gas Detection & Ignition (Pilotless and Hassle-free)",
        "Two Time Settings",
        "Saves Gas / Electricity",
        "Special Steel Body/Tank",
        "Mobile App Control"
      ],
      benefits: [
        "Saves 60% Energy (Intelligent Energy Saving Technology).",
        "Saves energy through advanced technology and superior insulation.",
        "Pilotless and Hassle-free automatic ignition."
      ],
      features: [
        {
          title: "Bluetooth Controlled",
          description: "Program 'ON/OFF' Times and Priority of GAS or ELECTRICITY from your Mobile."
        },
        {
          title: "Gas Detection & Ignition",
          description: "It detects GAS and automatically ignites burner at preset time when GAS priority is set (Pilotless and Hassle-free)."
        },
        {
          title: "Two Time Settings",
          description: "Two programmable time settings (zones) for setting the Burner/Electric Heater 'ON' and 'OFF' at your preset times."
        },
        {
          title: "Saves Gas / Electricity",
          description: "Saves energy through advanced technology and superior insulation."
        },
        {
          title: "Durable Construction",
          description: "Features a Special Steel Body/Tank."
        }
      ],
      specs: [
        { label: "Tank Gauge", value: "11/12" },
        { label: "Body Gauge", value: "22" },
        { label: "Warranty", value: "1 Year" }
      ]
    }
  ];
  