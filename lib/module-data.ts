export const modules: Record<string, {
  title: string
  subtitle: string
  engine: string
  layer: string
  desc: string
  capabilities: string[]
  related: { title: string; desc: string; href: string }[]
}> = {
  "revenue-engine": {
    title: "Revenue Engine", subtitle: "Rebuilds the sales motion with AI-enhanced tooling, automated sequences, and rep enablement.",
    engine: "Revenue", layer: "Rebuild -- Layer 2",
    desc: "More pipeline from the same headcount. The Revenue Engine combines GTM Engineering, Pricing Architecture, and Expansion Playbooks to drive top-line growth without proportional cost increase.",
    capabilities: ["AI-powered outbound sequencing", "CRM architecture rebuild", "Sales playbook codification", "RevOps forecast and attribution", "Value-based repricing", "Expansion trigger design"],
    related: [
      { title: "GTM Engineering", desc: "System-driven pipeline replacing individual-dependent sales.", href: "/modules/gtm-engineering" },
      { title: "Pricing Architecture", desc: "Value-based repricing with minimal churn.", href: "/modules/pricing-architecture" },
      { title: "Expansion Playbooks", desc: "Land-and-expand motion, zero CAC expansion.", href: "/modules/expansion-playbooks" },
    ],
  },
  "gtm-engineering": {
    title: "GTM Engineering", subtitle: "Replaces individual-dependent sales with a repeatable, system-driven pipeline.",
    engine: "Revenue", layer: "Rebuild -- Layer 2",
    desc: "AI-powered outbound sequencing, CRM architecture, sales playbooks, and RevOps cadence -- all deployed to rebuild the GTM motion from systems up.",
    capabilities: ["AI-powered outbound sequencing and lead scoring", "CRM architecture rebuild with pipeline hygiene", "Sales playbook codification", "RevOps: forecast, attribution, pipeline review cadence", "Rep enablement and onboarding acceleration"],
    related: [
      { title: "Revenue Engine", desc: "The parent engine.", href: "/modules/revenue-engine" },
      { title: "Pricing Architecture", desc: "Companion pricing module.", href: "/modules/pricing-architecture" },
      { title: "GTM Efficiency Audit", desc: "The diagnostic that feeds this module.", href: "/diagnose/gtm-efficiency-audit" },
    ],
  },
  "pricing-architecture": {
    title: "Pricing Architecture", subtitle: "A 1% price increase drives 11x the EBITDA impact of a 1% volume increase.",
    engine: "Revenue", layer: "Rebuild -- Layer 2",
    desc: "We design and execute value-based repricing with minimal churn. Value metric identification, tier restructuring, and price increase sequencing.",
    capabilities: ["Value metric identification", "Willingness-to-pay research", "Tier and packaging restructure", "Price increase sequencing by cohort", "At-risk account management during transition"],
    related: [
      { title: "Revenue Engine", desc: "The parent engine.", href: "/modules/revenue-engine" },
      { title: "Expansion Playbooks", desc: "Post-pricing expansion motion.", href: "/modules/expansion-playbooks" },
      { title: "NRR & Retention Drivers", desc: "Retention analysis that informs pricing.", href: "/diagnose/nrr-retention-drivers" },
    ],
  },
  "expansion-playbooks": {
    title: "Expansion Playbooks", subtitle: "Expansion revenue carries no CAC.",
    engine: "Revenue", layer: "Rebuild -- Layer 2",
    desc: "Builds the land-and-expand motion that converts single-seat wins into enterprise accounts.",
    capabilities: ["Expansion trigger design -- usage, seat, milestone signals", "CS-led growth motion and account tiering", "QBR and executive sponsor program", "Multi-product cross-sell sequencing"],
    related: [
      { title: "Revenue Engine", desc: "The parent engine.", href: "/modules/revenue-engine" },
      { title: "NRR >110% Systems", desc: "Compound layer NRR systems.", href: "/framework#compound" },
      { title: "Retention Loops", desc: "Product-side retention mechanics.", href: "/modules/retention-loops" },
    ],
  },
  "cost-engine": {
    title: "Cost Engine", subtitle: "Offshore substitution, AI automation, and vendor compression.",
    engine: "Cost", layer: "Rebuild -- Layer 2",
    desc: "Three coordinated cost levers: structured offshore deployment, AI-driven automation, and vendor renegotiation.",
    capabilities: ["Offshore role analysis and deployment", "AI support deflection and dev acceleration", "Vendor audit and renegotiation", "Blended cost model with EBITDA timeline"],
    related: [
      { title: "Offshore Substitution", desc: "Structured offshore deployment.", href: "/modules/offshore-substitution" },
      { title: "AI Automation", desc: "Internal AI tooling.", href: "/modules/ai-automation" },
      { title: "Vendor Compression", desc: "90-day vendor program.", href: "/modules/vendor-compression" },
    ],
  },
  "offshore-substitution": {
    title: "Offshore Substitution", subtitle: "Capacity expansion at a lower cost basis -- not a cost cut.",
    engine: "Cost", layer: "Rebuild -- Layer 2",
    desc: "Structured offshore deployment for engineering, QA, support, and back-office with quality gates and IP protection.",
    capabilities: ["Role-by-role offshore analysis", "Vendor selection and legal structure", "Transition playbook with quality gates", "Blended cost model and EBITDA impact"],
    related: [
      { title: "Cost Engine", desc: "The parent engine.", href: "/modules/cost-engine" },
      { title: "AI Automation", desc: "Complementary automation.", href: "/modules/ai-automation" },
      { title: "Cost Structure Teardown", desc: "The diagnostic.", href: "/diagnose/cost-structure-teardown" },
    ],
  },
  "ai-automation": {
    title: "AI Automation", subtitle: "Recover capacity without headcount.",
    engine: "Cost", layer: "Rebuild -- Layer 2",
    desc: "Deploys AI tooling across internal workflows: support deflection, dev acceleration, and ops automation.",
    capabilities: ["Support deflection via AI triage", "Copilot/Cursor deployment for engineering", "Finance and ops workflow automation", "ROI model per automation with payback"],
    related: [
      { title: "Cost Engine", desc: "The parent engine.", href: "/modules/cost-engine" },
      { title: "Offshore Substitution", desc: "Offshore capacity expansion.", href: "/modules/offshore-substitution" },
      { title: "AI-Native Workflows", desc: "Product-facing AI.", href: "/modules/ai-native-workflows" },
    ],
  },
  "vendor-compression": {
    title: "Vendor Compression", subtitle: "Most SaaS companies have 40-60% tool redundancy.",
    engine: "Cost", layer: "Rebuild -- Layer 2",
    desc: "A structured 90-day vendor audit and renegotiation program that eliminates redundancy and leverages cross-portfolio benchmarks.",
    capabilities: ["Full stack audit with utilization scoring", "Consolidation map: retire, merge, renegotiate", "Contract renegotiation with leverage analysis", "Savings projected by 30/60/90 days"],
    related: [
      { title: "Cost Engine", desc: "The parent engine.", href: "/modules/cost-engine" },
      { title: "Cost Structure Teardown", desc: "The diagnostic.", href: "/diagnose/cost-structure-teardown" },
      { title: "AI Automation", desc: "Tool replacement via AI.", href: "/modules/ai-automation" },
    ],
  },
  "product-engine": {
    title: "Product Engine", subtitle: "AI-native product adds switching cost and defensibility.",
    engine: "Product", layer: "Rebuild -- Layer 2",
    desc: "AI-Native Workflows, Data Moat Build, and Retention Loops -- preventing retention leakage from offsetting Revenue and Cost gains.",
    capabilities: ["AI feature roadmap by retention impact", "Proprietary data flywheel construction", "Onboarding milestone redesign", "Sticky feature identification"],
    related: [
      { title: "AI-Native Workflows", desc: "AI embedded in core product.", href: "/modules/ai-native-workflows" },
      { title: "Data Moat Build", desc: "Proprietary data advantage.", href: "/modules/data-moat-build" },
      { title: "Retention Loops", desc: "Engagement mechanics for NRR.", href: "/modules/retention-loops" },
    ],
  },
  "ai-native-workflows": {
    title: "AI-Native Workflows", subtitle: "AI as a workflow upgrade, not a bolt-on.",
    engine: "Product", layer: "Rebuild -- Layer 2",
    desc: "Embeds AI into the core product -- increasing daily engagement and making the product harder to displace.",
    capabilities: ["AI feature roadmap by retention impact", "Workflow audit: where AI reduces friction", "Build vs. buy analysis for LLM/ML", "AI adoption metrics and feedback loops"],
    related: [
      { title: "Product Engine", desc: "The parent engine.", href: "/modules/product-engine" },
      { title: "Data Moat Build", desc: "Data advantage construction.", href: "/modules/data-moat-build" },
      { title: "Data Maturity Assessment", desc: "AI readiness diagnostic.", href: "/diagnose/data-maturity-assessment" },
    ],
  },
  "data-moat-build": {
    title: "Data Moat Build", subtitle: "Proprietary data creates durable competitive advantage.",
    engine: "Product", layer: "Rebuild -- Layer 2",
    desc: "Constructs the proprietary data flywheel that becomes a key component of the exit narrative.",
    capabilities: ["Unique dataset identification", "Customer data aggregation architecture", "Benchmark product design (data-as-a-feature)", "Data moat narrative for investors"],
    related: [
      { title: "Product Engine", desc: "The parent engine.", href: "/modules/product-engine" },
      { title: "AI-Native Workflows", desc: "Product AI features.", href: "/modules/ai-native-workflows" },
      { title: "Exit Narrative Construction", desc: "How data moat drives exit.", href: "/framework#compound" },
    ],
  },
  "retention-loops": {
    title: "Retention Loops", subtitle: "The structural prerequisite for NRR above 110%.",
    engine: "Product", layer: "Rebuild -- Layer 2",
    desc: "Rebuilds onboarding and engagement mechanics that drive customers from activated to deeply embedded.",
    capabilities: ["Onboarding milestone redesign", "In-product engagement trigger system", "CS early-warning model: churn prediction", "Sticky feature identification"],
    related: [
      { title: "Product Engine", desc: "The parent engine.", href: "/modules/product-engine" },
      { title: "NRR & Retention Drivers", desc: "Retention diagnostic.", href: "/diagnose/nrr-retention-drivers" },
      { title: "Expansion Playbooks", desc: "Revenue expansion motion.", href: "/modules/expansion-playbooks" },
    ],
  },
}
