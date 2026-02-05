const questions = [
  {
    id: "access",
    title: "How often will you access or edit photos?",
    options: [
      { label: "Daily", value: "daily", scores: { cloud: 2, local: 1, hybrid: 1, object: 0 } },
      { label: "Weekly", value: "weekly", scores: { cloud: 1, local: 1, hybrid: 1, object: 1 } },
      { label: "Rarely (archival)", value: "rare", scores: { cloud: 0, local: 1, hybrid: 0, object: 2 } }
    ]
  },
  {
    id: "multi",
    title: "Do you need access from multiple devices or locations?",
    options: [
      { label: "Yes, from multiple devices/locations", value: "yes", scores: { cloud: 2, local: 0, hybrid: 1, object: 1 } },
      { label: "Sometimes", value: "sometimes", scores: { cloud: 1, local: 1, hybrid: 1, object: 1 } },
      { label: "No, mostly one device", value: "no", scores: { cloud: 0, local: 2, hybrid: 0, object: 0 } }
    ]
  },
  {
    id: "internet",
    title: "How reliable is your internet connection at home?",
    options: [
      { label: "Very reliable", value: "reliable", scores: { cloud: 2, local: 0, hybrid: 1, object: 1 } },
      { label: "Sometimes unstable", value: "unstable", scores: { cloud: 1, local: 1, hybrid: 1, object: 1 } },
      { label: "Often unreliable", value: "poor", scores: { cloud: 0, local: 2, hybrid: 1, object: 0 } }
    ]
  },
  {
    id: "size",
    title: "How much storage do you need right now?",
    options: [
      { label: "Under 200 GB", value: "small", scores: { cloud: 2, local: 0, hybrid: 0, object: 0 } },
      { label: "200 GB – 2 TB", value: "mid", scores: { cloud: 1, local: 1, hybrid: 1, object: 1 } },
      { label: "2 TB – 10 TB", value: "large", scores: { cloud: 0, local: 2, hybrid: 1, object: 2 } },
      { label: "Over 10 TB", value: "xl", scores: { cloud: 0, local: 2, hybrid: 0, object: 3 } }
    ]
  },
  {
    id: "growth",
    title: "How quickly is your photo collection growing?",
    options: [
      { label: "Slow (< 50 GB/year)", value: "slow", scores: { cloud: 2, local: 0, hybrid: 0, object: 0 } },
      { label: "Moderate (50–200 GB/year)", value: "moderate", scores: { cloud: 1, local: 1, hybrid: 1, object: 1 } },
      { label: "Fast (> 200 GB/year)", value: "fast", scores: { cloud: 0, local: 2, hybrid: 1, object: 2 } }
    ]
  },
  {
    id: "budget",
    title: "What is your monthly storage budget (per TB)?",
    options: [
      { label: "Low (keep it minimal)", value: "low", scores: { cloud: 0, local: 1, hybrid: 0, object: 2 } },
      { label: "Medium (balanced)", value: "mid", scores: { cloud: 1, local: 1, hybrid: 1, object: 1 } },
      { label: "High (prioritize convenience)", value: "high", scores: { cloud: 2, local: 0, hybrid: 0, object: 0 } }
    ]
  },
  {
    id: "payment",
    title: "Which cost style do you prefer?",
    options: [
      { label: "One-time purchase (device)", value: "one", scores: { cloud: 0, local: 2, hybrid: 1, object: 0 } },
      { label: "Monthly subscription", value: "monthly", scores: { cloud: 2, local: 0, hybrid: 0, object: 1 } },
      { label: "Either is fine", value: "either", scores: { cloud: 1, local: 1, hybrid: 1, object: 2 } }
    ]
  },
  {
    id: "privacy",
    title: "How sensitive are your photos?",
    options: [
      { label: "Very sensitive", value: "high", scores: { cloud: 0, local: 2, hybrid: 1, object: 1 } },
      { label: "Somewhat sensitive", value: "medium", scores: { cloud: 1, local: 1, hybrid: 1, object: 1 } },
      { label: "Not sensitive", value: "low", scores: { cloud: 2, local: 0, hybrid: 0, object: 1 } }
    ]
  },
  {
    id: "hardware",
    title: "How do you feel about handling technical tasks like drive maintenance or manual backups?",
    options: [
      { label: "Comfortable: I can manage hardware and settings myself.", value: "yes", scores: { cloud: 0, local: 2, hybrid: 1, object: 2 } },
      { label: "Hands-off: I prefer automated systems that don't need my attention.", value: "no", scores: { cloud: 2, local: 0, hybrid: 0, object: 0 } },
      { label: "Either is fine: I'm capable of technical setup but open to automation.", value: "either", scores: { cloud: 1, local: 1, hybrid: 2, object: 1 } }
    ]
  },
  {
    id: "sharing",
    title: "Do you want easy sharing with others?",
    options: [
      { label: "Yes, frequent sharing", value: "yes", scores: { cloud: 2, local: 0, hybrid: 1, object: 0 } },
      { label: "Sometimes", value: "sometimes", scores: { cloud: 1, local: 1, hybrid: 1, object: 0 } },
      { label: "No", value: "no", scores: { cloud: 0, local: 2, hybrid: 0, object: 0 } }
    ]
  },
  {
    id: "device",
    title: "Where do you capture most of your photos?",
    options: [
      { label: "Android phone", value: "android", scores: { cloud: 2, local: 0, hybrid: 0, object: 0 } },
      { label: "iPhone", value: "iphone", scores: { cloud: 2, local: 0, hybrid: 0, object: 0 } },
      { label: "DSLR / Camera + laptop", value: "camera", scores: { cloud: 0, local: 2, hybrid: 1, object: 1 } }
    ]
  },
  {
    id: "ecosystem",
    title: "Which ecosystem do you already use most?",
    options: [
      { label: "Google (Android/Gmail/Photos)", value: "google", scores: { cloud: 2, local: 0, hybrid: 0, object: 0 } },
      { label: "Microsoft (Windows/Office)", value: "microsoft", scores: { cloud: 2, local: 0, hybrid: 0, object: 0 } },
      { label: "Apple (iPhone/iCloud)", value: "apple", scores: { cloud: 2, local: 0, hybrid: 0, object: 0 } },
      { label: "No preference", value: "none", scores: { cloud: 1, local: 1, hybrid: 0, object: 0 } }
    ]
  },
  {
    id: "portability",
    title: "Do you want to avoid being locked into a single provider?",
    options: [
      { label: "Yes, avoid lock-in", value: "yes", scores: { cloud: 0, local: 1, hybrid: 1, object: 2 } },
      { label: "Not a big concern", value: "no", scores: { cloud: 2, local: 0, hybrid: 0, object: 0 } }
    ]
  }
];

const resultProfiles = {
  cloud: {
    title: "Consumer Cloud Storage",
    summary: "Best for easy access, sharing, and hands-off backups across devices.",
    tradeoffs: [
      "Ongoing subscription costs can grow as storage increases.",
      "Requires reliable internet and trust in a provider."
    ],
    nextStep: "Pick a plan in your preferred ecosystem and enable automatic backup + sharing.",
    reliability: "High (Provider Managed)",
    complexity: "Simple (App Setup)",
    plans: {
      small: "100GB - 200GB (₹130 - ₹210/mo)",
      mid: "2TB (₹650/mo)",
      large: "5TB+ (₹1,600+/mo)"
    }
  },
  local: {
    title: "Local Storage",
    summary: "Best for control, privacy, and independence from internet connectivity.",
    tradeoffs: [
      "You must manage backups and hardware maintenance.",
      "Remote sharing is less convenient."
    ],
    nextStep: "Use a high-quality external drive or NAS and set a monthly backup reminder.",
    reliability: "Variable (User Managed)",
    complexity: "Moderate (Hardware)",
    plans: {
      small: "1TB External HDD (~₹4,000)",
      mid: "2TB - 4TB Portable SSD (~₹12k - ₹25k)",
      large: "8TB+ Desktop RAID (~₹40k+)"
    }
  },
  hybrid: {
    title: "Hybrid Storage",
    summary: "Best balance: keep a local copy for speed and a cloud backup for safety.",
    tradeoffs: [
      "Two systems to maintain (local + cloud).",
      "Costs include both device purchase and subscription."
    ],
    nextStep: "Store the master library locally and sync a compressed backup to cloud.",
    reliability: "Highest (Redundant)",
    complexity: "Higher (Sync Logic)",
    plans: {
      small: "HDD (₹4k) + 100GB Cloud (₹130/mo)",
      mid: "SSD (₹12k) + 2TB Cloud (₹650/mo)",
      large: "NAS (₹35k) + 5TB Cloud (₹1.6k/mo)"
    }
  },
  object: {
    title: "Cloud Object Storage",
    summary: "Best for very large archives and long-term storage with low access needs.",
    tradeoffs: [
      "Setup is more technical and less friendly for most users.",
      "Costs can rise with frequent access or data retrieval."
    ],
    nextStep: "Consider AWS S3 / Azure Blob / GCP Storage only if you are comfortable with setup.",
    reliability: "Extreme (99.999999999%)",
    complexity: "Professional (API/CLI)",
    plans: {
      small: "Pay-as-you-go (~₹0.10 per GB/mo)",
      mid: "Glacier Archive (~₹80 per TB/mo)",
      large: "Deep Archive (~₹1,000 for 10TB/mo)"
    }
  }
};

const tieBreakers = (scores, answers) => {
  const privacy = answers.privacy;
  const multi = answers.multi;
  const internet = answers.internet;
  const size = answers.size;
  const access = answers.access;
  const hardware = answers.hardware;

  // If internet is unreliable, heavily penalize cloud and boost local/hybrid
  if (internet === "poor") {
    scores.local += 3;
    scores.hybrid += 2;
    scores.cloud = Math.max(0, scores.cloud - 3);
    scores.object = Math.max(0, scores.object - 2);
  } else if (internet === "unstable") {
    scores.local += 1;
    scores.hybrid += 1;
    scores.cloud = Math.max(0, scores.cloud - 1);
  }

  // High privacy + Multi-device NEED = Hybrid (Best balance)
  if (privacy === "high" && multi === "yes") {
    scores.hybrid += 3;
    scores.cloud = Math.max(0, scores.cloud - 1);
  }

  // Professional / Advanced Cloud Selection
  // If user is comfortable with hardware/tech (or open to it) AND has large size or portability needs
  if (hardware !== "no" && (size === "large" || size === "xl" || answers.portability === "yes")) {
    scores.object += (hardware === "yes" ? 2 : 1);
  }

  // Large archival needs
  if ((size === "large" || size === "xl") && access === "rare") {
    if (hardware !== "no") {
      scores.object += (hardware === "yes" ? 4 : 2);
    } else {
      scores.local += 3;
    }
  }

  // Tie-break: If Cloud and Object are close, and hardware comfort is high, prefer Object
  if (Math.abs(scores.cloud - scores.object) <= 1 && hardware !== "no") {
    scores.object += (hardware === "yes" ? 2 : 1);
  }

  // ecosystem lock-in vs portability
  if (answers.portability === "yes") {
    scores.local += 1;
    scores.hybrid += 1;
    scores.object += 1; // Object storage is the most portable (no lock-in)
    scores.cloud = Math.max(0, scores.cloud - 2);
  }

  return scores;
};

const questionForm = document.getElementById("questionForm");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

const primaryBadge = document.getElementById("primaryBadge");
const primaryTitle = document.getElementById("primaryTitle");
const primarySummary = document.getElementById("primarySummary");
const whyList = document.getElementById("whyList");
const tradeoffList = document.getElementById("tradeoffList");
const nextStep = document.getElementById("nextStep");
const reasonPills = document.getElementById("reasonPills");
const platformPick = document.getElementById("platformPick");
const rejectionList = document.getElementById("rejectionList");

const tierValue = document.getElementById("tierValue");
const costValue = document.getElementById("costValue");
const setupComplexity = document.getElementById("setupComplexity");
const reliabilityValue = document.getElementById("reliabilityValue");
const planContext = document.getElementById("planContext");

const radarCanvas = document.getElementById("radar");
const ctx = radarCanvas.getContext("2d");
const downloadBtn = document.getElementById("downloadBtn");

const renderQuestions = () => {
  questionForm.innerHTML = "";
  questions.forEach((q, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "question";

    const title = document.createElement("div");
    title.className = "question-title";
    title.textContent = `${index + 1}. ${q.title}`;

    const options = document.createElement("div");
    options.className = "option-group";

    q.options.forEach((opt) => {
      const label = document.createElement("label");
      label.className = "option";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = q.id;
      input.value = opt.value;
      input.addEventListener("change", handleChange);

      const text = document.createElement("span");
      text.textContent = opt.label;

      label.appendChild(input);
      label.appendChild(text);
      options.appendChild(label);
    });

    wrapper.appendChild(title);
    wrapper.appendChild(options);
    questionForm.appendChild(wrapper);
  });
};

const collectAnswers = () => {
  const answers = {};
  questions.forEach((q) => {
    const selected = document.querySelector(`input[name="${q.id}"]:checked`);
    if (selected) {
      answers[q.id] = selected.value;
    }
  });
  return answers;
};

const calculateScores = (answers) => {
  const scores = { cloud: 0, local: 0, hybrid: 0, object: 0 };
  questions.forEach((q) => {
    const choice = q.options.find((opt) => opt.value === answers[q.id]);
    if (choice) {
      Object.entries(choice.scores).forEach(([key, value]) => {
        scores[key] += value;
      });
    }
  });
  return tieBreakers(scores, answers);
};

const pickRecommendation = (scores) => {
  const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return { key: entries[0][0], scores };
};

const buildWhy = (answers) => {
  const reasons = [];
  if (answers.multi === "yes") reasons.push("Universal access is a priority; cloud-integrated models serve this best.");
  if (answers.internet === "poor") reasons.push("With unreliable internet, moving your primary storage locally ensures constant access.");
  if (answers.privacy === "high") reasons.push("To protect sensitive photos, we prioritized models with high user control and encryption.");
  if (answers.size === "xl" || answers.size === "large") reasons.push("Large storage volumes are more cost-efficient on local drives or object storage tiers.");
  if (answers.sharing === "yes") reasons.push("Frequent family sharing is most seamless through established consumer cloud ecosystems.");
  if (answers.portability === "yes") reasons.push("You want to avoid vendor lock-in, so we prioritized open or portable storage strategies.");
  if (answers.hardware === "no") reasons.push("Since you prefer not to manage hardware, we focused on automated cloud-based maintenance.");
  if (answers.hardware === "either") reasons.push("You are open to partial technical setup, allowing for more robust backup structures.");

  if (reasons.length < 3) {
    reasons.push("This approach balances your specific needs for cost and reliability.");
  }

  return reasons.slice(0, 5);
};

const buildPills = (answers) => {
  const pills = [];
  if (answers.internet === "poor") pills.push("Offline-safe");
  if (answers.multi === "yes") pills.push("Anywhere access");
  if (answers.privacy === "high") pills.push("Privacy-first");
  if (answers.payment === "one") pills.push("No monthly fee");
  if (answers.sharing === "yes") pills.push("Family ready");
  if (answers.portability === "yes") pills.push("Vendor independent");
  return pills.slice(0, 4);
};

const buildRejections = (winner, answers) => {
  const rejections = [];
  
  if (winner !== "cloud") {
    if (answers.privacy === "high") rejections.push("Standard Cloud: Too much external control for your privacy requirements.");
    if (answers.internet === "poor") rejections.push("Standard Cloud: Inaccessible without a faster/more stable internet connection.");
  }
  
  if (winner !== "local") {
    if (answers.multi === "yes") rejections.push("Pure Local: Cannot easily access photos from multiple devices.");
    if (answers.hardware === "no") rejections.push("Pure Local: Too much manual effort for maintenance and hardware upkeep.");
  }
  
  if (winner !== "hybrid") {
    if (winner === "cloud" && answers.hardware === "no") rejections.push("Hybrid: More complex than you need given your preference for full automation.");
    if (winner === "local" && answers.internet === "poor") rejections.push("Hybrid: Remote sync features wouldn't function reliably in your location.");
  }
  
  if (winner !== "object" && winner !== "hybrid") {
    if (answers.hardware === "no") rejections.push("Object Storage: Technical complexity is higher than your preference.");
  }

  // Fallback if no specific rejections triggered
  if (rejections.length === 0) {
    rejections.push("Alternate options did not match your primary security or workflow goals.");
  }

  return rejections.slice(0, 3);
};

const pickPlatform = (bucket, answers) => {
  if (bucket === "local") {
    const base = (answers.size === "xl" || answers.size === "large") ? "High-Capacity NAS (e.g. Synology/QNAP)" : "External SSD/HDD (e.g. Samsung T7/WD Passport)";
    return {
      service: base,
      strategy: "Keep your library on physical drives. Use the '3-2-1' rule: 3 copies, 2 different media, 1 offsite."
    };
  }

  if (bucket === "hybrid") {
    const localPart = (answers.size === "xl" || answers.size === "large") ? "Local NAS" : "High-speed External Drive";
    const cloudPart = answers.ecosystem === "apple" ? "iCloud Photos" :
      answers.ecosystem === "microsoft" ? "OneDrive" :
      "Google Photos";
    return {
      service: cloudPart,
      strategy: `${localPart} for daily speed + ${cloudPart} for mobile sync and emergency backup.`
    };
  }

  if (bucket === "object") {
    const provider = answers.ecosystem === "microsoft" ? "Microsoft Azure" :
      answers.ecosystem === "google" ? "Google Cloud (GCP)" :
      "Amazon Web Services (AWS)";
    const specificService = provider === "Microsoft Azure" ? "Azure Blob Storage" :
      provider === "Google Cloud (GCP)" ? "GCP Cloud Storage" :
      "AWS S3 (Simple Storage Service)";

    return {
      service: `${provider}`,
      strategy: `Professional-grade ${specificService}. Best for massive collections (> 2 TB) and power users who want maximum control and lowest cost per TB.`
    };
  }

  const consumer = answers.ecosystem === "apple" ? "iCloud+" :
    answers.ecosystem === "microsoft" ? "Microsoft 365 / OneDrive" :
    "Google One";
  if (answers.device === "android") {
    return {
      service: consumer,
      strategy: `Seamless integration with Android. Enable 'Storage Saver' to free up phone space.`
    };
  }
  if (answers.device === "iphone") {
    return {
      service: "iCloud+",
      strategy: "Deep integration with iOS. Use 'Optimize iPhone Storage' for smooth device performance."
    };
  }
  return {
    service: consumer,
    strategy: `${consumer} with desktop folder sync enabled.`
  };
};

const renderRecommendation = () => {
  const answers = collectAnswers();
  const answeredCount = Object.keys(answers).length;
  if (answeredCount < questions.length) {
    primaryBadge.textContent = `Finish ${questions.length - answeredCount} more`;
    primaryTitle.textContent = "Recommendation Pending";
    primarySummary.textContent = "Answer the remaining questions for a research-backed recommendation.";
    whyList.innerHTML = "";
    tradeoffList.innerHTML = "";
    rejectionList.innerHTML = "";
    nextStep.textContent = "";
    reasonPills.innerHTML = "";
    platformPick.textContent = "";
    downloadBtn.style.display = "none";
    drawRadar({ cloud: 0, local: 0, hybrid: 0, object: 0 });
    return;
  }

  downloadBtn.style.display = "block";

  const scores = calculateScores(answers);
  const { key } = pickRecommendation(scores);
  const profile = resultProfiles[key];
  const platform = pickPlatform(key, answers);

  primaryBadge.textContent = "Expert Recommendation";
  primaryTitle.textContent = platform.service;
  primarySummary.textContent = profile.summary;

  whyList.innerHTML = "";
  buildWhy(answers).forEach((reason) => {
    const li = document.createElement("li");
    li.textContent = reason;
    whyList.appendChild(li);
  });

  tradeoffList.innerHTML = "";
  profile.tradeoffs.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    tradeoffList.appendChild(li);
  });

  rejectionList.innerHTML = "";
  buildRejections(key, answers).forEach((reason) => {
    const li = document.createElement("li");
    li.textContent = reason;
    rejectionList.appendChild(li);
  });

  nextStep.textContent = profile.nextStep;
  platformPick.textContent = platform.strategy;

  // Plan details
  const sizeKey = answers.size === "small" ? "small" : (answers.size === "mid" ? "mid" : "large");
  tierValue.textContent = answers.size.toUpperCase();
  costValue.textContent = profile.plans[sizeKey];
  setupComplexity.textContent = profile.complexity;
  reliabilityValue.textContent = profile.reliability;
  planContext.textContent = `Based on your current library size and ${answers.growth} expected growth.`;

  reasonPills.innerHTML = "";
  buildPills(answers).forEach((pill) => {
    const span = document.createElement("span");
    span.className = "pill";
    span.textContent = pill;
    reasonPills.appendChild(span);
  });

  drawRadar(scores);
};

const handleChange = () => {
  renderRecommendation();
};

const drawRadar = (scores) => {
  const categories = ["cloud", "local", "hybrid", "object"];
  const maxScore = Math.max(8, ...Object.values(scores));
  const center = { x: radarCanvas.width / 2, y: radarCanvas.height / 2 };
  const radius = 90;

  ctx.clearRect(0, 0, radarCanvas.width, radarCanvas.height);
  ctx.strokeStyle = "#d8c6b3";
  ctx.lineWidth = 1;

  // Draw background rings
  for (let i = 1; i <= 4; i += 1) {
    ctx.beginPath();
    const r = (radius / 4) * i;
    ctx.arc(center.x, center.y, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Draw axes
  categories.forEach((_, index) => {
    const angle = (Math.PI * 2 * index) / categories.length - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(center.x + Math.cos(angle) * radius, center.y + Math.sin(angle) * radius);
    ctx.stroke();
  });

  const points = categories.map((cat, index) => {
    const angle = (Math.PI * 2 * index) / categories.length - Math.PI / 2;
    const value = (scores[cat] || 0) / maxScore;
    return {
      x: center.x + Math.cos(angle) * radius * value,
      y: center.y + Math.sin(angle) * radius * value
    };
  });

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  points.slice(1).forEach((pt) => ctx.lineTo(pt.x, pt.y));
  ctx.closePath();
  ctx.fillStyle = "rgba(15, 76, 92, 0.25)";
  ctx.fill();
  ctx.strokeStyle = "#0f4c5c";
  ctx.lineWidth = 2;
  ctx.stroke();

  categories.forEach((cat, index) => {
    const angle = (Math.PI * 2 * index) / categories.length - Math.PI / 2;
    const labelX = center.x + Math.cos(angle) * (radius + 20);
    const labelY = center.y + Math.sin(angle) * (radius + 20);
    ctx.fillStyle = "#5f5a52";
    ctx.font = "bold 11px Space Grotesk";
    ctx.textAlign = "center";
    ctx.fillText(cat.toUpperCase(), labelX, labelY);
  });
};

startBtn.addEventListener("click", () => {
  document.getElementById("questionnaire").scrollIntoView({ behavior: "smooth" });
});

resetBtn.addEventListener("click", () => {
  questionForm.reset();
  renderRecommendation();
});

downloadBtn.addEventListener("click", () => {
  window.print();
});

renderQuestions();
renderRecommendation();
