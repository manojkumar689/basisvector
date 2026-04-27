export const diagnostics: Record<string, {
  title: string
  subtitle: string
  layer: string
  whyTitle: string
  whyDesc: string
  failureModes: { title: string; desc: string }[]
  deliverables: { title: string; desc: string }[]
  nextStep: { title: string; desc: string; primaryLink: { label: string; href: string }; secondaryLink: { label: string; href: string } }
  related: { title: string; desc: string; href: string }[]
}> = {
  "gtm-efficiency-audit": {
    title: "GTM Efficiency Audit",
    subtitle: "The sales motion isn't broken -- it's inefficient. The audit quantifies where.",
    layer: "Benchmark -- Layer 1",
    whyTitle: "Productivity loss is structural, not cultural",
    whyDesc: "Lower mid-market SaaS companies almost always have functioning sales teams. What they lack is the operating infrastructure underneath: weak ICP definition, undisciplined pipeline stages, absent RevOps rigor, and multi-hour lead response times that quietly compress conversion. The motion is inefficient, not broken -- and the CAC pressure the board sees on the P&L is a symptom, not a cause. The BVC GTM Efficiency Audit quantifies the gap between the GTM you have and the GTM required for the next multiple.",
    failureModes: [
      { title: "Lead Response Time", desc: "Every hour past first-touch compresses conversion. The fix costs nothing." },
      { title: "Pipeline Stage Discipline", desc: "Undisciplined stage gates corrupt forecasting and mask close-rate reality." },
      { title: "Outbound Engine", desc: "Generic outbound is a CAC problem disguised as a volume problem." },
      { title: "RevOps Function", desc: "Without RevOps, CRM hygiene, reporting, and tech stack governance are left to chance." },
      { title: "Marketing-Sales Alignment", desc: "Mismatched lead-quality definitions are a structural revenue leak." },
      { title: "Sales Cycle Length", desc: "Long cycles are a process and messaging problem, not a market problem." },
    ],
    deliverables: [
      { title: "Diagnostic Score", desc: "Nine-dimension scorecard against BVC's PE-backed SaaS benchmark, with percentile placement per axis." },
      { title: "Prioritized Roadmap", desc: "Ranked fix list by EBITDA impact, cost to remediate, and time-to-value -- 30/60/90-day sequenced." },
      { title: "Quantified Revenue Leak", desc: "Dollar-weighted estimate of revenue recoverable in 2 quarters if the top three gaps are closed." },
    ],
    nextStep: {
      title: "From audit to action",
      desc: "The GTM Efficiency Audit produces the prioritized fix list. The Rebuild layer deploys the operating system that fixes it -- with BVC inside the business, not alongside it.",
      primaryLink: { label: "Scope an Audit", href: "/contact" },
      secondaryLink: { label: "See the Framework", href: "/framework" },
    },
    related: [
      { title: "Revenue Engine (L2 Rebuild)", desc: "The deployment layer that executes against the audit roadmap -- GTM Engineering, Pricing, Expansion.", href: "/modules/revenue-engine" },
      { title: "GTM Engineering", desc: "Replaces individual-dependent sales motion with a repeatable, system-driven pipeline.", href: "/modules/gtm-engineering" },
      { title: "Pricing Architecture", desc: "Redesigns pricing to capture value relative to customer outcomes.", href: "/modules/pricing-architecture" },
    ],
  },
  "cost-structure-teardown": {
    title: "Cost Structure Teardown",
    subtitle: "A full vendor and headcount audit that quantifies every dollar of reducible spend.",
    layer: "Benchmark -- Layer 1",
    whyTitle: "Cost bloat is invisible until measured",
    whyDesc: "Most PE-backed SaaS companies have never done a zero-based cost audit. Vendor contracts auto-renew, headcount grows by addition rather than design, and no one owns the full P&L with line-item accountability. The BVC Cost Structure Teardown maps every dollar against its EBITDA contribution -- categorized by payback period and implementation risk.",
    failureModes: [
      { title: "Vendor Sprawl", desc: "40-60% tool redundancy is the norm. Most subscriptions were never approved centrally." },
      { title: "Headcount Design", desc: "Teams grew by accretion, not architecture. Offshore-capable roles stay onshore by default." },
      { title: "Infrastructure COGS", desc: "Legacy hosting and data center costs run 3-5x higher than modern alternatives." },
      { title: "Contract Timing", desc: "Renewal windows pass without renegotiation. Leverage is never applied." },
    ],
    deliverables: [
      { title: "Cost Audit Report", desc: "Full SaaS vendor stack audit with utilization scoring and headcount model." },
      { title: "90-Day Savings Plan", desc: "Savings runway with EBITDA impact per action, sequenced by implementation." },
      { title: "Offshore Analysis", desc: "Role-by-role offshore analysis with priority ranking and cost model." },
    ],
    nextStep: {
      title: "From teardown to execution",
      desc: "The Cost Structure Teardown produces the reduction map. The Cost Engine deploys the operating changes.",
      primaryLink: { label: "Scope a Teardown", href: "/contact" },
      secondaryLink: { label: "See the Framework", href: "/framework" },
    },
    related: [
      { title: "Cost Engine (L2 Rebuild)", desc: "Offshore substitution, AI automation, and vendor compression.", href: "/modules/cost-engine" },
      { title: "Offshore Substitution", desc: "Structured offshore deployment for engineering, QA, and support.", href: "/modules/offshore-substitution" },
      { title: "Vendor Compression", desc: "90-day vendor audit and renegotiation program.", href: "/modules/vendor-compression" },
    ],
  },
  "product-gap-analysis": {
    title: "Product Gap Analysis",
    subtitle: "Identifies the gap between what the product promises and what customers actually use.",
    layer: "Benchmark -- Layer 1",
    whyTitle: "Feature bloat hides the retention problem",
    whyDesc: "Most SaaS products ship features to win deals, not retain customers. The result is a broad-but-shallow product where 60% of features are rarely used, onboarding friction drives early churn, and the roadmap is driven by sales requests rather than retention data.",
    failureModes: [
      { title: "Low Feature Utilization", desc: "60% of engineered features see minimal usage across the customer base." },
      { title: "Onboarding Friction", desc: "Customers who miss week-2 milestones are 3x more likely to churn." },
      { title: "Roadmap Misalignment", desc: "Product priorities driven by loudest customer, not retention impact data." },
      { title: "Churn Attribution Gap", desc: "No connection between specific product gaps and churn reasons." },
    ],
    deliverables: [
      { title: "Utilization Heatmap", desc: "Feature utilization scored by customer cohort with adoption patterns." },
      { title: "Churn Attribution Map", desc: "NPS and churn correlation analysis mapped to product friction points." },
      { title: "Roadmap ROI Scoring", desc: "Roadmap items ranked by retention impact vs. development cost." },
    ],
    nextStep: {
      title: "From analysis to product engine",
      desc: "The Product Gap Analysis feeds directly into the Product Engine -- AI-Native Workflows, Data Moat, and Retention Loops.",
      primaryLink: { label: "Scope an Analysis", href: "/contact" },
      secondaryLink: { label: "See the Framework", href: "/framework" },
    },
    related: [
      { title: "AI-Native Workflows", desc: "Embeds AI into core product to increase daily engagement.", href: "/modules/ai-native-workflows" },
      { title: "Retention Loops", desc: "Rebuilds onboarding and engagement for NRR above 110%.", href: "/modules/retention-loops" },
      { title: "Data Moat Build", desc: "Constructs proprietary data flywheel for competitive advantage.", href: "/modules/data-moat-build" },
    ],
  },
  "data-maturity-assessment": {
    title: "Data Maturity Assessment",
    subtitle: "60% of AI investments fail because the data foundation isn't ready.",
    layer: "Benchmark -- Layer 1",
    whyTitle: "AI readiness starts with data quality",
    whyDesc: "Before any AI deployment, the data infrastructure must be assessed for completeness, quality, and governance. Most companies underestimate the gap between having data and having AI-ready data.",
    failureModes: [
      { title: "Data Silos", desc: "Critical data trapped in disconnected systems with no unified view." },
      { title: "Quality Gaps", desc: "Incomplete, duplicated, or stale data undermines every analytical output." },
      { title: "Reporting Gaps", desc: "Board-grade KPIs require data that doesn't exist or isn't trusted." },
      { title: "Governance Absence", desc: "No data ownership model means no accountability for quality." },
    ],
    deliverables: [
      { title: "AI Readiness Score", desc: "Assessment across product, sales, and ops data pipelines." },
      { title: "Infrastructure Review", desc: "Data warehouse and pipeline architecture evaluation." },
      { title: "Governance Roadmap", desc: "Data ownership and quality improvement plan." },
    ],
    nextStep: {
      title: "From assessment to AI deployment",
      desc: "The Data Maturity Assessment determines readiness for AI-Native Workflows and Data Moat construction.",
      primaryLink: { label: "Scope an Assessment", href: "/contact" },
      secondaryLink: { label: "See the Framework", href: "/framework" },
    },
    related: [
      { title: "AI-Native Workflows", desc: "Embeds AI into core product workflows.", href: "/modules/ai-native-workflows" },
      { title: "Data Moat Build", desc: "Proprietary data flywheel for defensibility.", href: "/modules/data-moat-build" },
      { title: "AI Automation", desc: "Internal AI tooling for productivity.", href: "/modules/ai-automation" },
    ],
  },
  "technical-diligence": {
    title: "Technical Diligence",
    subtitle: "Engineering capacity consumed by maintenance is often invisible until measured.",
    layer: "Benchmark -- Layer 1",
    whyTitle: "Tech debt is a margin problem",
    whyDesc: "30-40% of engineering capacity consumed by maintenance with less than 5% adoption features. We map tech debt, architecture risk, and dev velocity to surface the drag on product throughput.",
    failureModes: [
      { title: "Codebase Complexity", desc: "Tech debt compounds silently, slowing every new feature delivery." },
      { title: "Dev Velocity", desc: "Deployment frequency below modern benchmarks, blocking product iteration." },
      { title: "Key-Person Risk", desc: "Critical systems dependent on single engineers with no documentation." },
      { title: "AI Tooling Gap", desc: "Missing Copilot/Cursor adoption that could accelerate output 30-55%." },
    ],
    deliverables: [
      { title: "Tech Debt Score", desc: "Quantified codebase complexity and debt measurement." },
      { title: "Velocity Benchmark", desc: "Dev velocity and deployment frequency against comparable companies." },
      { title: "AI Adoption Plan", desc: "Copilot and AI tooling opportunity assessment with ROI model." },
    ],
    nextStep: {
      title: "From diligence to rebuild",
      desc: "Technical Diligence feeds the Cost Engine and Product Engine for infrastructure modernization.",
      primaryLink: { label: "Scope Diligence", href: "/contact" },
      secondaryLink: { label: "See the Framework", href: "/framework" },
    },
    related: [
      { title: "AI Automation", desc: "Dev acceleration and ops automation.", href: "/modules/ai-automation" },
      { title: "AI-Native Workflows", desc: "AI embedded into core product.", href: "/modules/ai-native-workflows" },
      { title: "Cost Engine", desc: "Infrastructure and cost optimization.", href: "/modules/cost-engine" },
    ],
  },
  "nrr-retention-drivers": {
    title: "NRR & Retention Drivers",
    subtitle: "Net Revenue Retention is the single most important multiple-expansion lever.",
    layer: "Benchmark -- Layer 1",
    whyTitle: "NRR determines your exit multiple",
    whyDesc: "We decompose NRR into structural drivers -- and identify whether the ceiling is in CS, product, or pricing. Cohort-level analysis reveals the true retention story that aggregate numbers hide.",
    failureModes: [
      { title: "Gross Retention Erosion", desc: "Logo churn masked by expansion revenue creates false confidence." },
      { title: "CS Capacity Gap", desc: "Account coverage too thin to prevent at-risk accounts from churning." },
      { title: "Expansion Triggers Missing", desc: "No systematic mechanism to identify and capture expansion revenue." },
      { title: "Pricing Static", desc: "Renewal pricing hasn't changed in 2+ years despite increased value delivery." },
    ],
    deliverables: [
      { title: "NRR Decomposition", desc: "Cohort-level gross and net retention with driver attribution." },
      { title: "CS Capacity Model", desc: "Account coverage requirements vs. current CS team capacity." },
      { title: "NRR Trajectory Model", desc: "Path to 110%+ with intervention timeline and milestone gates." },
    ],
    nextStep: {
      title: "From drivers to systems",
      desc: "NRR analysis feeds the Compound Layer -- NRR >110% Systems, metrics normalization, and exit narrative.",
      primaryLink: { label: "Scope NRR Analysis", href: "/contact" },
      secondaryLink: { label: "See the Framework", href: "/framework" },
    },
    related: [
      { title: "NRR >110% Systems", desc: "CS motion, pricing, and product systems for sustained NRR.", href: "/framework#compound" },
      { title: "Retention Loops", desc: "Onboarding and engagement mechanics.", href: "/modules/retention-loops" },
      { title: "Expansion Playbooks", desc: "Land-and-expand motion for zero-CAC expansion.", href: "/modules/expansion-playbooks" },
    ],
  },
}
