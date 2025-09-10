import { callOpenAIChat } from "@/lib/ai";

interface CaseStudyData {
  id: string;
  title: string;
  template: string;
  answers: Record<string, any>;
  designer: string;
}

interface MarketingContent {
  heroTitle: string;
  heroSubtitle: string;
  highlights: {
    metric: string;
    label: string;
    icon: string;
  }[];
  tagline: string;
}

export async function generateMarketingContent(
  designer: string,
  caseStudies: CaseStudyData[]
): Promise<MarketingContent> {
  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey || apiKey === 'sk-test-key' || caseStudies.length === 0) {
    return generateFallbackContent(designer, caseStudies);
  }

  try {
    const systemPrompt = `You are an expert marketing copywriter specializing in design portfolios. Your job is to create compelling, personalized marketing copy for designers based on their case study portfolio.

Key principles:
- Write in a confident, professional tone that showcases expertise
- Focus on results, impact, and unique value proposition
- Use action-oriented language that resonates with potential clients
- Highlight quantifiable achievements when available
- Keep copy concise but impactful
- Avoid generic design jargon, focus on business impact

Generate content that positions the designer as a strategic partner who delivers measurable results.`;

    const userPrompt = `Create personalized marketing content for designer "${designer}" based on their portfolio:

CASE STUDIES OVERVIEW:
${caseStudies.map((cs, i) => `
${i + 1}. ${cs.title} (${cs.template.toUpperCase()})
   - Goal: ${cs.answers.goal || cs.answers.objective || 'Not specified'}
   - Product: ${cs.answers.product || 'Not specified'}
   - Audience: ${cs.answers.audience || 'Not specified'}
   - KPI: ${cs.answers.primary_kpi ? `${cs.answers.primary_kpi.name}: ${cs.answers.primary_kpi.before}${cs.answers.primary_kpi.unit} → ${cs.answers.primary_kpi.after}${cs.answers.primary_kpi.unit}` : 'Not specified'}
   - Timeline: ${cs.answers.timeframe || 'Not specified'}
`).join('')}

PORTFOLIO STATS:
- Total Projects: ${caseStudies.length}
- Specialties: ${[...new Set(caseStudies.map(cs => cs.template))].join(', ')}
- Industries: ${[...new Set(caseStudies.map(cs => cs.answers.product).filter(Boolean))].join(', ') || 'Various'}

Generate JSON response with:
{
  "heroTitle": "MAXIMUM 3 words that describe the designer (e.g. 'UI Expert', 'Design Leader', 'UX Specialist')",
  "heroSubtitle": "MAXIMUM 20 words describing their value and impact",
  "highlights": [
    {
      "metric": "Impressive number or achievement",
      "label": "What the metric represents",
      "icon": "relevant emoji"
    }
  ],
  "tagline": "MAXIMUM 10 words summarizing their impact"
}

Create 3 highlights that showcase their best achievements, growth metrics, or unique strengths. Focus on business impact over design process.`;

    const response = await callOpenAIChat({
      apiKey,
      system: systemPrompt,
      user: userPrompt
    });

    try {
      // Clean the response - remove markdown code blocks if present
      let cleanedResponse = response.trim();
      if (cleanedResponse.startsWith('```json')) {
        cleanedResponse = cleanedResponse.replace(/^```json\s*/, '').replace(/\s*```$/, '');
      } else if (cleanedResponse.startsWith('```')) {
        cleanedResponse = cleanedResponse.replace(/^```\s*/, '').replace(/\s*```$/, '');
      }
      
      const content = JSON.parse(cleanedResponse);
      return validateAndNormalizeContent(content, designer, caseStudies);
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      console.error('Raw response:', response);
      return generateFallbackContent(designer, caseStudies);
    }
  } catch (error) {
    console.error('Marketing AI error:', error);
    return generateFallbackContent(designer, caseStudies);
  }
}

function validateAndNormalizeContent(
  content: any, 
  designer: string, 
  caseStudies: CaseStudyData[]
): MarketingContent {
  // Ensure all required fields exist with fallbacks
  return {
    heroTitle: content.heroTitle || `${designer}'s Design Portfolio`,
    heroSubtitle: content.heroSubtitle || `Explore innovative design solutions that drive real business results across ${caseStudies.length} featured projects.`,
    highlights: (content.highlights || []).slice(0, 3).map((h: any) => ({
      metric: h.metric || caseStudies.length.toString(),
      label: h.label || "Projects Completed",
      icon: h.icon || "🎨"
    })),
    tagline: content.tagline || "Design that delivers measurable impact"
  };
}

function generateFallbackContent(
  designer: string, 
  caseStudies: CaseStudyData[]
): MarketingContent {
  const templates = [...new Set(caseStudies.map(cs => cs.template))];
  const templateNames = {
    ui: "UI Design",
    ux: "UX Research", 
    social: "Social Media"
  };
  
  // Extract some basic metrics
  const totalProjects = caseStudies.length;
  const specialties = templates.map(t => templateNames[t as keyof typeof templateNames] || t).join(" & ");
  
  // Try to find a standout KPI
  let standoutKPI = null;
  for (const cs of caseStudies) {
    if (cs.answers.primary_kpi?.before && cs.answers.primary_kpi?.after) {
      const improvement = ((cs.answers.primary_kpi.after - cs.answers.primary_kpi.before) / cs.answers.primary_kpi.before) * 100;
      if (improvement > 20) { // Significant improvement
        standoutKPI = {
          metric: `${Math.round(improvement)}%`,
          label: "Average Improvement",
          icon: "📈"
        };
        break;
      }
    }
  }

  const highlights = [
    {
      metric: totalProjects.toString(),
      label: "Case Studies",
      icon: "🎨"
    },
    standoutKPI || {
      metric: templates.length.toString(),
      label: "Specialties",
      icon: "⚡"
    },
    {
      metric: [...new Set(caseStudies.map(cs => cs.answers.product).filter(Boolean))].length.toString() || "5+",
      label: "Industries",
      icon: "🏢"
    }
  ];

  return {
    heroTitle: specialties.length > 15 ? `${specialties.split(' ')[0]} Designer` : `${specialties} Designer`,
    heroSubtitle: `Creating impactful ${specialties.toLowerCase()} solutions that drive measurable results across ${totalProjects} projects.`,
    highlights: highlights.slice(0, 3),
    tagline: "Design that delivers impact"
  };
}
