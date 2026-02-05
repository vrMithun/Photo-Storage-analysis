# Decision Tree and Question Design

This document defines the question set and the decision logic used in the recommendation engine. The goal is to keep the questions **clear, minimal, and high‑signal** while still producing a reliable recommendation.

## Design Principles

- **User‑first language:** Avoid technical jargon where possible.
- **High signal per question:** Each question should meaningfully change the recommendation.
- **Explainability:** Every recommendation must map back to specific answers.
- **India‑specific context:** Consider internet reliability, budget sensitivity, and family sharing needs.

## Recommendation Buckets

1. **Consumer Cloud Storage** (Google One / OneDrive / iCloud class)
2. **Cloud Object Storage** (AWS S3 / Azure Blob / GCP Storage for advanced users)
3. **Local Storage** (external HDD/SSD or NAS)
4. **Hybrid** (local primary + cloud backup)

## Question Set (MVP)

Each question is deliberately framed with 2–4 options to avoid confusion. The list below is the **minimum set** needed to produce a stable recommendation.

### Q1. Access Pattern
**Question:** How often will you access or edit photos?
- Daily
- Weekly
- Rarely (archival)

**Why it matters:** Frequent access favors cloud or fast local storage; archival access favors low‑cost cloud or local cold storage.

### Q2. Multi‑Device Access
**Question:** Do you need access from multiple devices or locations?
- Yes, from multiple devices/locations
- Sometimes
- No, mostly one device

**Why it matters:** Strong signal for cloud or hybrid vs local.

### Q3. Internet Reliability
**Question:** How reliable is your internet connection at home?
- Very reliable
- Sometimes unstable
- Often unreliable

**Why it matters:** Cloud requires dependable connectivity; unreliable internet pushes toward local or hybrid.

### Q4. Storage Size (Now)
**Question:** How much storage do you need right now?
- Under 200 GB
- 200 GB – 2 TB
- 2 TB – 10 TB
- Over 10 TB

**Why it matters:** Large volumes increase costs on consumer cloud; may push to local or hybrid.

### Q5. Expected Growth (Next 2–3 Years)
**Question:** How quickly is your photo collection growing?
- Slow (< 50 GB/year)
- Moderate (50–200 GB/year)
- Fast (> 200 GB/year)

**Why it matters:** Growth rate affects long‑term cost and may require scalable storage.

### Q6. Budget Preference
**Question:** Which cost style do you prefer?
- One‑time purchase (device)
- Monthly subscription
- Either is fine

**Why it matters:** Directs toward local vs cloud vs hybrid.

### Q7. Privacy/Security Sensitivity
**Question:** How sensitive are your photos?
- Very sensitive (family/private)
- Somewhat sensitive
- Not sensitive

**Why it matters:** High sensitivity increases preference for local or privacy‑focused cloud/hybrid.

### Q8. Willingness to Manage Hardware
**Question:** Are you comfortable managing storage hardware (drives, backups)?
- Yes, I can manage it
- Not really

**Why it matters:** If not comfortable, cloud is more suitable.

### Q9. Sharing & Collaboration
**Question:** Do you want easy sharing with family members?
- Yes, frequent sharing
- Sometimes
- No

**Why it matters:** Sharing features are strongest in consumer cloud platforms.

### Q10. Ecosystem Preference
**Question:** Which ecosystem do you already use most?
- Google (Android/Gmail/Photos)
- Microsoft (Windows/Office)
- Apple (iPhone/iCloud)
- No preference

**Why it matters:** Ecosystem match reduces friction and improves usability.

## Decision Logic (High‑Level)

We compute a score for each recommendation bucket based on user answers. The final recommendation is the highest score with clear tie‑break rules.

### Primary Signals

- **Cloud Score** increases with: multi‑device access, reliable internet, low hardware willingness, desire for sharing.
- **Local Score** increases with: unreliable internet, high privacy sensitivity, preference for one‑time cost, hardware willingness.
- **Hybrid Score** increases with: high privacy sensitivity + need for access + moderate internet + desire for backup resilience.
- **Object Storage Score** increases with: very large storage volume + archival access + advanced user (inferred by hardware willingness + cost tolerance).

### Tie‑Break Rules

- If **privacy sensitivity is high** and **multi‑device access is high**, prefer **Hybrid**.
- If **internet is unreliable**, prefer **Local** or **Hybrid** over pure cloud.
- If **storage > 2 TB** and **access is rare**, prefer **Object Storage** or **Local** depending on hardware willingness.
- If **sharing is frequent** and **internet is reliable**, prefer **Consumer Cloud**.

## Output Explanation Template (MVP)

Each recommendation will include:

- **Primary recommendation** (one of the 4 buckets).
- **Why this fits** — 3–5 bullet points linked to their answers.
- **Tradeoffs** — 1–2 cautions (e.g., cloud costs or hardware risk).
- **Simple next step** — e.g., “Use local drive + cloud backup.”

## Validation Strategy

Before adding real pricing, we will test the decision tree with 5–10 sample profiles:

- Student with phone photos and stable internet
- Family with 2–3 TB of photos and weak internet
- Photographer with large archival data, high privacy
- Tech‑savvy user who wants full control
- Casual user who only needs phone sync

We’ll verify the outputs feel intuitive and adjust weights accordingly.
