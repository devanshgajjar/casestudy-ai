export const sampleCaseStudies = [
  {
    id: "sample-ui-redesign",
    title: "E-commerce Mobile App Redesign",
    template: "ui-ux",
    status: "published",
    content: `# E-commerce Mobile App Redesign

## TL;DR
- **UI/UX** case study showcasing mobile app redesign for better user experience
- Primary metric: **Conversion Rate**: 2.3% → 4.1% (**+78%**)
- Timeframe: 3 months

## Problem
Users were abandoning their shopping carts at an alarming rate of 68%. The checkout process was confusing, product discovery was poor, and the overall user experience felt outdated and clunky.

## Solution
1. **Simplified Checkout Flow** - Reduced from 5 steps to 3 steps
2. **Enhanced Product Discovery** - Added smart filters and visual search
3. **Modern UI Design** - Clean, minimalist interface with better visual hierarchy
4. **Improved Navigation** - Intuitive bottom tab navigation
5. **One-Click Purchase** - Streamlined buying process for returning customers

## Results
> **Conversion Rate**: 2.3% → 4.1% (**+78%**)

- Cart abandonment reduced from 68% to 45%
- User session duration increased by 40%
- Customer satisfaction score improved from 3.2 to 4.6/5
- Monthly revenue increased by $2.1M

## Key Takeaways
- User-centered design dramatically improves conversion rates
- Simplifying complex processes leads to better outcomes
- A/B testing validated every design decision
- Mobile-first approach is crucial for e-commerce success`,
    answers: JSON.stringify({
      primary_kpi: {
        name: "Conversion Rate",
        before: 2.3,
        after: 4.1,
        unit: "%"
      },
      user_problem: "Users were abandoning their shopping carts at an alarming rate of 68%. The checkout process was confusing, product discovery was poor, and the overall user experience felt outdated and clunky.",
      moves: [
        "Simplified Checkout Flow - Reduced from 5 steps to 3 steps",
        "Enhanced Product Discovery - Added smart filters and visual search",
        "Modern UI Design - Clean, minimalist interface with better visual hierarchy",
        "Improved Navigation - Intuitive bottom tab navigation",
        "One-Click Purchase - Streamlined buying process for returning customers"
      ],
      secondary_signal: "Cart abandonment reduced from 68% to 45%, User session duration increased by 40%, Customer satisfaction score improved from 3.2 to 4.6/5",
      timeframe: "3 months"
    }),
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "sample-user-1"
  },
  {
    id: "sample-saas-growth",
    title: "SaaS Dashboard Optimization",
    template: "ui-ux", 
    status: "published",
    content: `# SaaS Dashboard Optimization

## TL;DR
- **Product** case study showcasing dashboard redesign for better user retention
- Primary metric: **User Retention (30-day)**: 45% → 72% (**+60%**)
- Timeframe: 4 months

## Problem
New users were struggling to understand the value of our SaaS product. The dashboard was overwhelming with too much information, leading to high churn rates and low feature adoption.

## Solution
1. **Progressive Disclosure** - Showed features gradually based on user progress
2. **Onboarding Flow** - Step-by-step guided tour for new users
3. **Personalized Dashboard** - Customized views based on user role and goals
4. **Quick Wins** - Highlighted easy-to-achieve milestones
5. **Data Visualization** - Clearer charts and actionable insights

## Results
> **User Retention (30-day)**: 45% → 72% (**+60%**)

- Feature adoption increased by 85%
- Time-to-value reduced from 14 days to 3 days
- Support tickets decreased by 40%
- Customer LTV increased by $1,200 per user

## Key Takeaways
- Progressive disclosure prevents user overwhelm
- Onboarding is critical for SaaS success
- Personalization significantly improves engagement
- Quick wins build user confidence and momentum`,
    answers: JSON.stringify({
      primary_kpi: {
        name: "User Retention (30-day)",
        before: 45,
        after: 72,
        unit: "%"
      },
      user_problem: "New users were struggling to understand the value of our SaaS product. The dashboard was overwhelming with too much information, leading to high churn rates and low feature adoption.",
      moves: [
        "Progressive Disclosure - Showed features gradually based on user progress",
        "Onboarding Flow - Step-by-step guided tour for new users", 
        "Personalized Dashboard - Customized views based on user role and goals",
        "Quick Wins - Highlighted easy-to-achieve milestones",
        "Data Visualization - Clearer charts and actionable insights"
      ],
      secondary_signal: "Feature adoption increased by 85%, Time-to-value reduced from 14 days to 3 days, Support tickets decreased by 40%",
      timeframe: "4 months"
    }),
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "sample-user-2"
  },
  {
    id: "sample-social-growth",
    title: "Social Media Engagement Campaign", 
    template: "social",
    status: "published",
    content: `# Social Media Engagement Campaign

## TL;DR
- **Social Media** case study showcasing content strategy for brand awareness
- Primary metric: **Engagement Rate**: 1.8% → 6.2% (**+244%**)
- Timeframe: 6 months

## Problem
Our social media presence was stagnant with low engagement rates. Content felt disconnected from our audience, and we weren't seeing meaningful growth in brand awareness or lead generation.

## Solution
1. **Audience Research** - Deep dive into target demographic preferences
2. **Content Pillars** - Established 4 core content themes
3. **Visual Consistency** - Cohesive brand aesthetic across platforms
4. **Community Building** - Active engagement and user-generated content
5. **Data-Driven Posting** - Optimized timing and frequency based on analytics

## Results
> **Engagement Rate**: 1.8% → 6.2% (**+244%**)

- Follower growth increased by 180%
- Brand mention volume up 300%
- Website traffic from social increased by 150%
- Generated 1,200+ qualified leads

## Key Takeaways
- Authentic content resonates more than promotional posts
- Community building creates lasting brand loyalty
- Consistent visual branding improves recognition
- Data-driven decisions outperform intuition-based strategies`,
    answers: JSON.stringify({
      primary_kpi: {
        name: "Engagement Rate",
        before: 1.8,
        after: 6.2,
        unit: "%"
      },
      user_problem: "Our social media presence was stagnant with low engagement rates. Content felt disconnected from our audience, and we weren't seeing meaningful growth in brand awareness or lead generation.",
      moves: [
        "Audience Research - Deep dive into target demographic preferences",
        "Content Pillars - Established 4 core content themes",
        "Visual Consistency - Cohesive brand aesthetic across platforms", 
        "Community Building - Active engagement and user-generated content",
        "Data-Driven Posting - Optimized timing and frequency based on analytics"
      ],
      secondary_signal: "Follower growth increased by 180%, Brand mention volume up 300%, Website traffic from social increased by 150%",
      timeframe: "6 months"
    }),
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: "sample-user-3"
  }
];

export const sampleUsers = [
  {
    id: "sample-user-1",
    email: "sarah@designer.com",
    name: "Sarah Chen",
    passwordHash: "$2b$12$sample.hash.1"
  },
  {
    id: "sample-user-2", 
    email: "alex@product.com",
    name: "Alex Rodriguez",
    passwordHash: "$2b$12$sample.hash.2"
  },
  {
    id: "sample-user-3",
    email: "jordan@marketing.com", 
    name: "Jordan Kim",
    passwordHash: "$2b$12$sample.hash.3"
  }
];
