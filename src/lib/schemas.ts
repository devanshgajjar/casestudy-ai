export interface KPI {
  name: string;
  before: number;
  after: number;
  unit: string;
}

export interface Field {
  id: string;
  type: 'text' | 'chips' | 'list' | 'assets' | 'kpi';
  req: boolean;
  max?: number;
  maxItems?: number;
  options?: string[];
  accept?: string[];
  placeholder?: string;
}

export interface Section {
  id: string;
  title?: string;
  description?: string;
  fields: Field[];
}

export interface Template {
  id: string;
  name: string;
  description: string;
  sections: Section[];
}

export const templates: Template[] = [
  {
    id: "ui",
    name: "UI Case Study",
    description: "Show redesign impact with before/after clarity",
    sections: [
      {
        id: "header",
        title: "Project Overview",
        fields: [
          { id: "title", type: "text", req: true, max: 80, placeholder: "e.g., Redesigning Checkout Flow" },
          { id: "goal", type: "text", req: true, placeholder: "e.g., Increase checkout conversion" },
          { id: "product", type: "text", req: true, placeholder: "e.g., E-commerce platform" },
          { id: "audience", type: "text", req: true, placeholder: "e.g., First-time mobile shoppers" },
          { id: "timeframe", type: "text", req: true, placeholder: "e.g., May–July 2025" }
        ]
      },
      {
        id: "problem",
        title: "Problem & Context",
        fields: [
          { 
            id: "issues", 
            type: "chips", 
            req: true, 
            maxItems: 2,
            options: ["confusing hierarchy", "low contrast", "unclear CTAs", "poor mobile UX", "cluttered layout", "slow loading", "accessibility issues"],
            placeholder: "Top 1-2 UX/UI issues you tackled"
          },
          { id: "why_matters", type: "text", req: true, placeholder: "Why it mattered (business/user impact in one sentence)" }
        ]
      },
      {
        id: "solution",
        title: "Solution & Evidence",
        fields: [
          { id: "moves", type: "list", req: true, maxItems: 3, placeholder: "Key design moves (3 bullets max)" },
          { id: "before", type: "assets", accept: ["image"], req: true, placeholder: "Before screenshots" },
          { id: "after", type: "assets", accept: ["image"], req: true, placeholder: "After screenshots" }
        ]
      },
      {
        id: "results",
        title: "Results",
        fields: [
          { id: "primary_kpi", type: "kpi", req: true },
          { id: "secondary_signal", type: "text", req: false, placeholder: "Secondary signal (optional)" }
        ]
      }
    ]
  },
  {
    id: "ux",
    name: "UX Case Study", 
    description: "Demonstrate reasoning, research → iteration → outcome",
    sections: [
      {
        id: "header",
        title: "Project Overview",
        fields: [
          { id: "title", type: "text", req: true, max: 80, placeholder: "e.g., Streamlining Auto-Pay Setup" },
          { id: "goal", type: "text", req: true, placeholder: "e.g., Reduce setup abandonment by 40%" },
          { id: "product", type: "text", req: true, placeholder: "e.g., Banking mobile app" },
          { id: "audience", type: "text", req: true, placeholder: "e.g., New customers setting up recurring payments" },
          { id: "timeframe", type: "text", req: true, placeholder: "e.g., March–August 2025" }
        ]
      },
      {
        id: "problem",
        title: "Problem Framing",
        fields: [
          { id: "user_problem", type: "text", req: true, placeholder: "User problem (1 sentence, user's words if possible)" },
          { id: "top_task", type: "text", req: true, placeholder: "Top task you optimized" }
        ]
      },
      {
        id: "research",
        title: "Research & Insight",
        fields: [
          { 
            id: "sources", 
            type: "chips", 
            req: true,
            options: ["interviews", "analytics", "usability tests", "support logs", "heuristic review"],
            placeholder: "Evidence source(s)"
          },
          { id: "insights", type: "list", maxItems: 2, req: true, placeholder: "1-2 insights that changed the design" }
        ]
      },
      {
        id: "solution",
        title: "Solution & Iteration",
        fields: [
          { id: "changes", type: "list", maxItems: 3, req: true, placeholder: "Key UX changes (flows/patterns) – 3 bullets max" },
          { id: "artifacts", type: "assets", accept: ["image", "figma", "pdf"], req: false, placeholder: "Flows, wireframes, prototype (optional)" }
        ]
      },
      {
        id: "results",
        title: "Results",
        fields: [
          { id: "primary_kpi", type: "kpi", req: true },
          { id: "qual_outcome", type: "text", req: false, placeholder: "Qualitative outcome (optional)" }
        ]
      }
    ]
  },
  {
    id: "social",
    name: "Social Case Study",
    description: "Prove content/design moved the needle",
    sections: [
      {
        id: "header", 
        title: "Campaign Overview",
        fields: [
          { id: "title", type: "text", req: true, max: 80, placeholder: "e.g., #SaveWithUs Instagram Campaign" },
          { id: "goal", type: "text", req: true, placeholder: "e.g., Grow saves by 30%" },
          { id: "product", type: "text", req: true, placeholder: "e.g., Fintech savings app" },
          { id: "audience", type: "text", req: true, placeholder: "e.g., Gen Z savers aged 18-25" },
          { id: "timeframe", type: "text", req: true, placeholder: "e.g., Q2 2025" }
        ]
      },
      {
        id: "campaign",
        title: "Campaign Basics", 
        fields: [
          { 
            id: "channels", 
            type: "chips", 
            req: true,
            options: ["instagram", "x", "linkedin", "youtube", "facebook", "tiktok", "other"],
            placeholder: "Channel(s)"
          },
          { id: "objective", type: "text", req: true, placeholder: "Campaign objective (one line)" }
        ]
      },
      {
        id: "creative",
        title: "Creative & Distribution",
        fields: [
          { id: "pillars", type: "list", maxItems: 3, req: true, placeholder: "Content pillars (up to 3)" },
          { id: "volume", type: "text", req: true, placeholder: "e.g., 12 posts over 4 weeks" },
          { id: "creatives", type: "assets", accept: ["image", "video"], req: true, placeholder: "Representative creatives" }
        ]
      },
      {
        id: "results",
        title: "Results",
        fields: [
          { id: "primary_kpi", type: "kpi", req: true },
          { id: "secondary_signal", type: "text", req: false, placeholder: "Secondary growth signal (optional)" }
        ]
      }
    ]
  }
];

export function getTemplate(id: string): Template | undefined {
  return templates.find(t => t.id === id);
}

export function computeKPIDelta(kpi: KPI): { absolute: number; percentage: number; formatted: string } {
  const absolute = kpi.after - kpi.before;
  const percentage = kpi.before !== 0 ? (absolute / kpi.before) * 100 : 0;
  const sign = absolute >= 0 ? '+' : '';
  const pctFormatted = `${sign}${Math.round(percentage)}%`;
  
  return {
    absolute,
    percentage,
    formatted: `${kpi.before}${kpi.unit} → ${kpi.after}${kpi.unit} (**${pctFormatted}**)`
  };
}
