// ── 30 Sundays — Sample Trip Dataset ──────────────────────────────────────
// 4 couples at different post-booking stages

const TRIPS = {

  bali: {
    id: "bali",
    couple: { name1: "Arjun", name2: "Priya", initials: "A&P" },
    origin: "Mumbai",
    destination: "Bali",
    route: "Mumbai → Bali",
    dates: "May 7–14, 2025",
    daysLeft: 7,
    stage: "pretrip", // pretrip | visa | documents | departure | ontrip
    stageLabel: "Final Prep",
    bookingId: "BL-4821",
    hotel: "The Layar, Seminyak",
    flightOut: "AI-380 · 09:40 BOM",
    flightBack: "AI-381",
    airline: "Air India",
    baggage: { cabin: "7 kg", checkin: "23 kg" },
    weather: "Warm 28–32°C, afternoon showers",
    visa: { required: false, type: "Visa on Arrival", cost: "$35 USD", note: "No pre-approval needed — get at DPS airport" },
    carRental: false,
    activities: ["Waterfall trek (Day 2)", "Tanah Lot sunset (Day 3)", "Cooking class (Day 4)", "Ubud rice terraces (Day 5)", "Free beach day (Day 6)"],
    emoji: "🌴",
    statusColor: "#27ae60",
    statusBg: "#edfff5",
    statusBrd: "#b0e0c0",
    progress: { done: 4, total: 8, pct: "50%" },
    checklist: {
      done: [
        { icon: "✈️", title: "Flights confirmed", meta: "AI-380 · May 7, 09:40 BOM → DPS" },
        { icon: "🏨", title: "Hotel booked", meta: "The Layar, Seminyak · 7 nights" },
        { icon: "📋", title: "Visa on Arrival noted", meta: "No pre-booking needed — $35 cash at airport" },
        { icon: "💉", title: "No vaccinations required", meta: "Hepatitis A recommended but not mandatory" }
      ],
      now: {
        title: "Pack your bags",
        meta: "Departs in 7 days · Air India allows 23 kg check-in",
        pills: ["Day 2 waterfall trek", "Afternoon showers", "Temple visits"],
        items: [
          "Lightweight clothes (heat + humidity)",
          "Rain jacket + water shoes (waterfall trek, Day 2)",
          "Sunscreen SPF 50+ and insect repellent",
          "Modest cover-up for temples",
          "USD cash ~$70 (VoA $35/person + initial exchange)"
        ],
        tip: { label: "Baggage note", text: "23 kg check-in + 7 kg cabin. Bali shopping is great — leave some room!" },
        cta: { label: "Full Packing List →", link: "chat.html?trip=bali&q=packing" }
      },
      upcoming: [
        { icon: "🛫", title: "Web check-in opens", meta: "May 5 · 48 hrs before · airindia.com" },
        { icon: "🖨️", title: "Print / save documents", meta: "Boarding pass, hotel booking, return ticket" },
        { icon: "💴", title: "Exchange currency", meta: "USD → IDR at DPS or Seminyak changers" },
        { icon: "📞", title: "Save emergency contacts", meta: "30 Sundays support + hotel number" }
      ]
    },
    chat: {
      welcome: "Hey Arjun! 👋 You've got <strong>7 days</strong> to Bali. I can help with packing, flight check-in, visa, currency, or local tips.",
      tipLabel: "Heads up",
      tipText: "Afternoon showers in Bali in May. Your waterfall trek is Day 2 — I'll factor that in.",
      quickReplies: ["🎒 Packing list", "🛫 Check-in", "💴 Currency", "🌴 Local tips"],
      responses: {
        packing: `Here's your personalised packing list for Bali:<ul class="bubble-list"><li>Lightweight cotton/linen clothes (heat + humidity)</li><li>Rain jacket + water shoes <em>(waterfall trek, Day 2)</em></li><li>Compact umbrella</li><li>Sunscreen SPF 50+ and insect repellent</li><li>Modest cover-up for temple visits</li><li>Power bank for outdoor days</li><li>USD cash ~$70 (VoA $35/person + initial exchange)</li></ul><div class="tip-card"><div class="tip-label">Baggage note</div><div class="tip-text">Air India allows 23 kg check-in + 7 kg cabin. Bali shopping is great — pack light!</div></div>`,
        checkin: `<strong>Air India AI-380 check-in:</strong><ul class="bubble-list"><li>Web check-in opens <strong>May 5</strong> (48 hrs before)</li><li>Check in at airindia.com using Booking #BL-4821</li><li>Airport: Terminal 2, CSIA Mumbai · Arrive <strong>3 hrs early</strong></li></ul><div class="tip-card"><div class="tip-label">Don't forget</div><div class="tip-text">Carry passport + boarding pass + $70 USD cash for Visa on Arrival ($35/person).</div></div>`,
        currency: `<strong>Currency for Bali (IDR):</strong><ul class="bubble-list"><li>Carry $70 USD cash for Visa on Arrival ($35/person)</li><li>Exchange more at DPS Airport or Seminyak changers</li><li>Recommended: $200–250 USD equivalent total</li><li>Cards accepted at hotels; cash for local warungs</li></ul><div class="tip-card"><div class="tip-label">Tip</div><div class="tip-text">Count your Rupiah at the counter — use authorised changers only.</div></div>`,
        visa: `<strong>Visa for Bali (Indian Passport):</strong><ul class="bubble-list"><li>Visa on Arrival (VoA) — no pre-approval needed</li><li>Available at DPS Airport · $35 USD per person</li><li>Valid for 30 days, extendable once</li></ul><div class="tip-card"><div class="tip-label">Pro tip</div><div class="tip-text">Apply for e-VoA online at molina.imigrasi.go.id to skip the airport queue.</div></div>`,
        default: `I've checked your trip details for Bali. <div class="source-tag">✦ Trip context · May 2025</div>`
      }
    }
  },

  paris: {
    id: "paris",
    couple: { name1: "Rahul", name2: "Sneha", initials: "R&S" },
    origin: "Delhi",
    destination: "Paris",
    route: "Delhi → Paris",
    dates: "Jun 20–30, 2025",
    daysLeft: 51,
    stage: "visa",
    stageLabel: "Visa Phase",
    bookingId: "EU-2947",
    hotel: "Hôtel des Grands Boulevards",
    flightOut: "AF-186 · 03:30 DEL",
    flightBack: "AF-187",
    airline: "Air France",
    baggage: { cabin: "12 kg", checkin: "23 kg" },
    weather: "Mild 18–24°C, occasional showers",
    visa: { required: true, type: "Schengen Visa", cost: "€80", status: "Application submitted", vfsDate: "Apr 28", note: "Documents submitted. Awaiting appointment at VFS Paris." },
    carRental: false,
    activities: ["Eiffel Tower (Day 1)", "Louvre (Day 2)", "Versailles day trip (Day 4)", "Seine cruise (Day 6)", "Montmartre walk (Day 8)"],
    emoji: "🗼",
    statusColor: "#f39c12",
    statusBg: "#fff8e6",
    statusBrd: "#f9d77e",
    progress: { done: 3, total: 10, pct: "30%" },
    checklist: {
      done: [
        { icon: "✈️", title: "Flights booked", meta: "AF-186 · Jun 20, 03:30 DEL → CDG" },
        { icon: "🏨", title: "Hotel booked", meta: "Hôtel des Grands Boulevards, Paris · 10 nights" },
        { icon: "📄", title: "Visa documents compiled", meta: "Submitted to VFS on Apr 28" }
      ],
      now: {
        title: "Visa in progress",
        meta: "Submitted Apr 28 · Processing: 15–20 working days",
        pills: ["Schengen Visa", "VFS Delhi", "~15–20 days"],
        items: [
          "Passport submitted with VFS — do not apply for other travel",
          "Track status at vfsglobal.com using reference #VFS-8821",
          "Decision expected by May 22–28 (worst case)",
          "If approved: verify dates, entry count, and destination country"
        ],
        tip: { label: "What if it's delayed?", text: "Schengen processing is currently 15–20 working days at Delhi VFS. Your departure is Jun 20 — you have buffer. Contact 30 Sundays if no update by May 25." },
        cta: { label: "Ask about Schengen docs →", link: "chat.html?trip=paris&q=visa" }
      },
      upcoming: [
        { icon: "🛡️", title: "Travel insurance", meta: "Mandatory for Schengen — buy before visa approval" },
        { icon: "💶", title: "Euro currency plan", meta: "Best exchange: Thomas Cook or Niyo card" },
        { icon: "📱", title: "Europe SIM / roaming plan", meta: "Airtel/Jio international or Holafly eSIM" },
        { icon: "🛫", title: "Check-in opens", meta: "Jun 18 · 48 hrs before · airfrance.com" },
        { icon: "🖨️", title: "Print documents", meta: "Visa copy, hotel booking, insurance" },
        { icon: "💉", title: "No vaccinations required", meta: "None mandatory for India → France" },
        { icon: "📞", title: "Save emergency contacts", meta: "Indian Embassy Paris: +33-1-40-50-7070" }
      ]
    },
    chat: {
      welcome: "Hey Rahul! Your Schengen visa was submitted on Apr 28. Processing takes <strong>15–20 working days</strong> — expect a decision around May 22–28. Ask me anything about the Paris trip.",
      tipLabel: "Visa status",
      tipText: "Documents submitted to VFS Delhi on Apr 28. Track at vfsglobal.com · Ref: VFS-8821",
      quickReplies: ["📄 Visa status", "💶 Currency", "📋 Documents to carry", "🗺️ Paris tips"],
      responses: {
        visa: `<strong>Schengen Visa — Current Status:</strong><ul class="bubble-list"><li>Application submitted: <strong>Apr 28 at VFS Delhi</strong></li><li>Reference: VFS-8821</li><li>Processing time: 15–20 working days</li><li>Expected decision: <strong>May 22–28</strong></li><li>Track at vfsglobal.com/india</li></ul><div class="tip-card"><div class="tip-label">If no update by May 25</div><div class="tip-text">Contact 30 Sundays directly — we'll follow up with VFS on your behalf. Your departure is Jun 20, you still have buffer.</div></div>`,
        packing: `<strong>Paris packing list (10 days, June):</strong><ul class="bubble-list"><li>Smart-casual clothes — Paris is stylish, avoid overly casual looks at restaurants</li><li>Light jacket (18–24°C, occasional showers)</li><li>Comfortable walking shoes (10–15k steps/day)</li><li>Power adapter (Type E sockets in France)</li><li>Small day backpack for museum days</li><li>Euros + Forex/Niyo card</li></ul><div class="tip-card"><div class="tip-label">Note</div><div class="tip-text">Air France allows 23 kg check-in + 12 kg cabin on this route.</div></div>`,
        currency: `<strong>Currency for Paris (EUR):</strong><ul class="bubble-list"><li>Recommended: Niyo Global or Scapia card (no forex markup)</li><li>Exchange at Thomas Cook or BookMyForex before travel</li><li>Carry €200–300 cash for smaller expenses</li><li>Cards accepted almost everywhere in Paris</li></ul><div class="tip-card"><div class="tip-label">Tip</div><div class="tip-text">Avoid airport exchange counters — rates are poor. Exchange at BCD or Thomas Cook in Delhi before departure.</div></div>`,
        default: `I've checked your Paris trip details. <div class="source-tag">✦ Trip context · Jun 2025</div>`
      }
    }
  },

  dubai: {
    id: "dubai",
    couple: { name1: "Kabir", name2: "Meera", initials: "K&M" },
    origin: "Pune",
    destination: "Dubai",
    route: "Pune → Dubai",
    dates: "May 2–7, 2025",
    daysLeft: 2,
    stage: "departure",
    stageLabel: "Departing Soon",
    bookingId: "DXB-0391",
    hotel: "Atlantis The Palm",
    flightOut: "EK-511 · 06:00 PNQ",
    flightBack: "EK-512",
    airline: "Emirates",
    baggage: { cabin: "7 kg", checkin: "30 kg" },
    weather: "Hot 38–42°C, sunny",
    visa: { required: true, type: "UAE Visa on Arrival", cost: "Free", note: "Indian passport gets free 30-day visa on arrival at Dubai airport" },
    carRental: false,
    activities: ["Burj Khalifa (Day 1)", "Desert safari (Day 2)", "Dubai Mall + Fountain (Day 3)", "Gold & Spice Souk (Day 4)", "Free beach day (Day 5)"],
    emoji: "🏙️",
    statusColor: "#e74c3c",
    statusBg: "#fff0ef",
    statusBrd: "#f9c0bc",
    progress: { done: 7, total: 9, pct: "78%" },
    checklist: {
      done: [
        { icon: "✈️", title: "Flights confirmed", meta: "EK-511 · May 2, 06:00 PNQ → DXB" },
        { icon: "🏨", title: "Hotel confirmed", meta: "Atlantis The Palm · 5 nights" },
        { icon: "📄", title: "Visa on Arrival confirmed", meta: "Indian passport — free 30-day VoA at DXB" },
        { icon: "🛡️", title: "Travel insurance active", meta: "Policy #TI-88321 · covers medical + trip cancellation" },
        { icon: "💱", title: "Forex organised", meta: "AED 500 + international card ready" },
        { icon: "✅", title: "Web check-in done", meta: "Seats 14A & 14B · Boarding pass saved" },
        { icon: "🌡️", title: "Weather checked", meta: "38–42°C · Sunscreen and light cottons packed" }
      ],
      now: {
        title: "Final documents check",
        meta: "Departing in 2 days · EK-511, 06:00 — Reach PNQ by 03:00",
        pills: ["Departs May 2", "Terminal 1 PNQ", "3 hrs early"],
        items: [
          "Passport valid 6+ months beyond May 7",
          "Boarding passes (saved to phone + screenshot backup)",
          "Hotel booking confirmation printout",
          "Travel insurance card / PDF",
          "AED 500 cash + Niyo/Forex card"
        ],
        tip: { label: "Airport alert", text: "Pune Airport is small — check-in closes 45 min before. Reach PNQ Terminal by 03:00 AM for 06:00 departure." },
        cta: { label: "What to carry to airport →", link: "chat.html?trip=dubai&q=airport" }
      },
      upcoming: [
        { icon: "🚗", title: "Airport cab booked?", meta: "Early morning — confirm pickup time tonight" },
        { icon: "📞", title: "Save local SIM plan", meta: "Du or Etisalat eSIM — buy online before arrival" }
      ]
    },
    chat: {
      welcome: "Hey Kabir! You're <strong>2 days from Dubai</strong> 🏙️ Everything's looking great. Let me do a final check — any last questions before you fly?",
      tipLabel: "Departure alert",
      tipText: "EK-511 departs 06:00 from PNQ Terminal 1. Reach airport by 03:00 AM. Confirm your cab pickup tonight.",
      quickReplies: ["📋 Documents to carry", "🚗 Airport tips", "🏖️ Dubai Day 1", "☀️ Weather forecast"],
      responses: {
        packing: `<strong>Final Dubai packing check:</strong><ul class="bubble-list"><li>Lightweight cotton clothes (38–42°C, very sunny)</li><li>Sunscreen SPF 50 — essential</li><li>Formal attire for Atlantis dining</li><li>Swimwear for Palm beach + pool</li><li>Modest clothing for Dubai Mall / public areas</li></ul><div class="tip-card"><div class="tip-label">Emirates baggage</div><div class="tip-text">30 kg check-in + 7 kg cabin. You're good.</div></div>`,
        checkin: `<strong>You're already checked in!</strong> ✓<ul class="bubble-list"><li>Seats: 14A & 14B confirmed</li><li>Boarding pass: saved to your phone</li><li>Airport: PNQ Terminal 1</li><li>Reporting time: <strong>03:00 AM on May 2</strong> for 06:00 departure</li></ul>`,
        default: `Final check for your Dubai trip — you're nearly ready! <div class="source-tag">✦ Trip context · May 2025</div>`
      }
    }
  },

  tokyo: {
    id: "tokyo",
    couple: { name1: "Rohan", name2: "Divya", initials: "R&D" },
    origin: "Chennai",
    destination: "Tokyo",
    route: "Chennai → Tokyo",
    dates: "Jun 1–10, 2025",
    daysLeft: 32,
    stage: "documents",
    stageLabel: "Planning Phase",
    bookingId: "JP-7203",
    hotel: "Park Hyatt Tokyo, Shinjuku",
    flightOut: "NH-827 · 23:45 MAA",
    flightBack: "NH-828",
    airline: "ANA (All Nippon Airways)",
    baggage: { cabin: "10 kg", checkin: "23 kg" },
    weather: "Mild 20–25°C, humid, occasional rain",
    visa: { required: true, type: "Japan Visa (Sticker)", cost: "₹1,650", status: "Not yet applied", note: "Apply at VFS Japan in Chennai — 5–7 working days processing" },
    carRental: false,
    activities: ["Shibuya crossing (Day 1)", "Tsukiji outer market breakfast (Day 2)", "Akihabara (Day 3)", "Nikko day trip (Day 4)", "Harajuku + Omotesando (Day 5)", "Arashiyama Bamboo (Day 7)", "TeamLab (Day 8)"],
    emoji: "🏯",
    statusColor: "#8e44ad",
    statusBg: "#f9f0ff",
    statusBrd: "#d7b5f5",
    progress: { done: 2, total: 10, pct: "20%" },
    checklist: {
      done: [
        { icon: "✈️", title: "Flights booked", meta: "NH-827 · Jun 1, 23:45 MAA → NRT" },
        { icon: "🏨", title: "Hotel booked", meta: "Park Hyatt Tokyo, Shinjuku · 9 nights" }
      ],
      now: {
        title: "Apply for Japan Visa",
        meta: "Apply at VFS Japan Chennai · Processing 5–7 working days",
        pills: ["Japan sticker visa", "VFS Chennai", "Apply by May 15"],
        items: [
          "Passport (original + 2 copies, valid till Dec 2025)",
          "2 passport photos (white background, 45×35mm)",
          "Confirmed flight tickets (both ways)",
          "Hotel booking confirmation (all nights)",
          "Bank statement last 6 months (balance ≥ ₹1.5L)",
          "Leave letter / employer letter (Rohan + Divya)",
          "Filled application form from VFS Japan website"
        ],
        tip: { label: "Apply by", text: "Visa takes 5–7 working days. Apply by May 15 to receive before Jun 1. VFS Chennai: 9 AM–1 PM weekdays only." },
        cta: { label: "Japan visa checklist →", link: "chat.html?trip=tokyo&q=visa" }
      },
      upcoming: [
        { icon: "🛡️", title: "Travel insurance", meta: "Recommended — Japan medical costs are high" },
        { icon: "💴", title: "Yen currency plan", meta: "Japan is still largely cash-based — carry ¥50,000+" },
        { icon: "📱", title: "Japan SIM / Pocket WiFi", meta: "Buy eSIM via Airalo or rent Pocket WiFi at NRT" },
        { icon: "🚄", title: "JR Pass (optional)", meta: "Worth it if doing Nikko + Kyoto day trips" },
        { icon: "🛫", title: "Check-in opens", meta: "May 30 · 48 hrs before · ana.co.jp" },
        { icon: "🖨️", title: "Print documents", meta: "Visa, hotel, return ticket, insurance" },
        { icon: "🍱", title: "Customs note", meta: "Declare all food items — Japan customs is strict" },
        { icon: "📞", title: "Save emergency contacts", meta: "Indian Embassy Tokyo: +81-3-3262-2391" }
      ]
    },
    chat: {
      welcome: "Hey Rohan! Your Tokyo trip is in <strong>32 days</strong>. The big priority right now is the Japan visa — apply at VFS Chennai by May 15. Ask me anything!",
      tipLabel: "Action needed",
      tipText: "Japan visa not yet applied. VFS Chennai takes 5–7 working days. Apply by May 15 to avoid risk.",
      quickReplies: ["📄 Japan visa docs", "💴 Currency tips", "🍱 Customs rules", "🚄 JR Pass worth it?"],
      responses: {
        visa: `<strong>Japan Visa — Documents Required:</strong><ul class="bubble-list"><li>Passport (original + 2 photocopies)</li><li>2 passport photos (white background, 45×35mm)</li><li>Confirmed flight tickets (both ways)</li><li>Hotel booking confirmation for all nights</li><li>Bank statement — last 6 months (balance ≥ ₹1.5L)</li><li>Leave letter or employer letter (both applicants)</li><li>Filled form from VFS Japan website</li></ul><div class="tip-card"><div class="tip-label">Apply by May 15</div><div class="tip-text">VFS Chennai processes in 5–7 working days. Submit by May 15 for Jun 1 departure. Office hours: 9 AM–1 PM weekdays only.</div></div>`,
        packing: `<strong>Tokyo packing list (10 days, June):</strong><ul class="bubble-list"><li>Smart-casual + one formal set (Park Hyatt dining)</li><li>Light layers (20–25°C, some rain)</li><li>Compact umbrella (always carry)</li><li>Comfortable walking shoes (12k+ steps daily)</li><li>Power adapter (Type A, same as India — no adapter needed)</li><li>Reusable bag (plastic bags often charged in Japan)</li></ul><div class="tip-card"><div class="tip-label">Cash</div><div class="tip-text">Japan is largely cash-based. Carry ¥50,000–70,000 (₹28,000–40,000). 7-Eleven and Post Office ATMs accept foreign cards.</div></div>`,
        currency: `<strong>Currency for Tokyo (JPY):</strong><ul class="bubble-list"><li>Japan is largely cash-dependent — carry ¥50,000–70,000</li><li>Best exchange: BookMyForex or Niyo card (no forex markup)</li><li>ATMs: 7-Eleven and Post Office accept international cards</li><li>Many small restaurants and temples are cash only</li></ul><div class="tip-card"><div class="tip-label">Tip</div><div class="tip-text">IC Card (Suica/Pasmo) for metro — load ¥3,000–5,000. Available at NRT airport.</div></div>`,
        default: `I've checked your Tokyo trip details. <div class="source-tag">✦ Trip context · Jun 2025</div>`
      }
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined') module.exports = TRIPS;
