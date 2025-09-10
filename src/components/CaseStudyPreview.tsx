import ReactMarkdown from "react-markdown";
import { KPI, computeKPIDelta } from "@/lib/schemas";

interface CaseStudyPreviewProps {
  content: string;
  answers: Record<string, any>;
  template: string;
}

export function CaseStudyPreview({ content, answers, template }: CaseStudyPreviewProps) {
  if (!content) {
    return <EmptyState answers={answers} />;
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <CaseStudyHero answers={answers} template={template} />
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown 
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-semibold text-gray-800 mt-16 mb-6 pb-3 border-b border-gray-200">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-800 leading-relaxed mb-6 text-lg">
                  {children}
                </p>
              ),
              blockquote: ({ children }) => (
                <div className="my-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-lg">
                  <div className="text-2xl font-bold text-blue-900">
                    {children}
                  </div>
                </div>
              ),
              ul: ({ children }) => (
                <ul className="space-y-3 my-6">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span className="text-gray-800 leading-relaxed">{children}</span>
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-gray-900">{children}</strong>
              ),
              code: ({ children }) => (
                <code className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm font-mono">
                  {children}
                </code>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
        
        {/* Visual Assets Gallery */}
        {answers.before || answers.after || answers.creatives ? (
          <AssetGallery answers={answers} template={template} />
        ) : null}
        
        {/* Footer CTA */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and challenging design problems.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Get in touch
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium">
                View more work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudyHero({ answers, template }: { answers: Record<string, any>; template: string }) {
  const kpi = answers.primary_kpi;
  const delta = kpi ? computeKPIDelta(kpi) : null;
  
  const templateLabels = {
    ui: "UI Design",
    ux: "UX Research & Design", 
    social: "Social Media Campaign"
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Project Type Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              {templateLabels[template as keyof typeof templateLabels] || "Case Study"}
            </div>
            
            {/* Title */}
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              {answers.title || "Untitled Project"}
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {answers.goal || "Improving user experience through thoughtful design"}
            </p>
            
            {/* Meta Info */}
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-blue-200 font-medium mb-1">Product</div>
                <div>{answers.product || "Not specified"}</div>
              </div>
              <div>
                <div className="text-blue-200 font-medium mb-1">Timeline</div>
                <div>{answers.timeframe || "Not specified"}</div>
              </div>
              <div>
                <div className="text-blue-200 font-medium mb-1">Audience</div>
                <div>{answers.audience || "Not specified"}</div>
              </div>
              <div>
                <div className="text-blue-200 font-medium mb-1">Role</div>
                <div>Lead Designer</div>
              </div>
            </div>
          </div>
          
          {/* KPI Highlight */}
          {delta && (
            <div className="lg:justify-self-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="text-blue-200 text-sm font-medium mb-2">Key Result</div>
                  <div className="text-3xl font-bold mb-2">{kpi.name}</div>
                  <div className="text-lg text-blue-100 mb-4">
                    {kpi.before}{kpi.unit} → {kpi.after}{kpi.unit}
                  </div>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${
                    delta.percentage >= 0 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}>
                    {delta.percentage >= 0 ? '↗' : '↘'} {Math.abs(Math.round(delta.percentage))}% 
                    {delta.percentage >= 0 ? 'improvement' : 'change'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AssetGallery({ answers, template }: { answers: Record<string, any>; template: string }) {
  const beforeAssets = answers.before || [];
  const afterAssets = answers.after || [];
  const creativeAssets = answers.creatives || [];
  
  const hasAssets = beforeAssets.length > 0 || afterAssets.length > 0 || creativeAssets.length > 0;
  
  if (!hasAssets) return null;

  return (
    <div className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
        {template === 'ui' ? 'Before & After' : 
         template === 'social' ? 'Creative Gallery' : 
         'Project Artifacts'}
      </h2>
      
      {/* Before/After for UI */}
      {template === 'ui' && (beforeAssets.length > 0 || afterAssets.length > 0) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {beforeAssets.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Before</h3>
              <div className="space-y-4">
                {beforeAssets.map((asset: any, idx: number) => (
                  <div key={idx} className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                    <img src={asset.preview || asset.url} alt={asset.name} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>
          )}
          {afterAssets.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">After</h3>
              <div className="space-y-4">
                {afterAssets.map((asset: any, idx: number) => (
                  <div key={idx} className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                    <img src={asset.preview || asset.url} alt={asset.name} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Creative Gallery for Social */}
      {template === 'social' && creativeAssets.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creativeAssets.map((asset: any, idx: number) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <img src={asset.preview || asset.url} alt={asset.name} className="w-full h-64 object-cover" />
              <div className="p-3 bg-gray-50">
                <div className="text-sm text-gray-600 truncate">{asset.name}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState({ answers }: { answers: Record<string, any> }) {
  return (
    <div className="text-center py-16">
      <div className="text-6xl mb-6">✨</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Ready to create your case study?
      </h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Fill out the form and click "Make my case study" to see your professional case study come to life here.
      </p>
      
      {/* Progress Indicator */}
      <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
        <div className="text-sm text-gray-600 mb-2">Progress</div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ 
              width: `${Math.min(Object.keys(answers).filter(key => 
                answers[key] && (typeof answers[key] !== 'string' || answers[key].trim())
              ).length * 10, 100)}%` 
            }}
          />
        </div>
        <div className="text-xs text-gray-500 mt-2">
          {Object.keys(answers).filter(key => 
            answers[key] && (typeof answers[key] !== 'string' || answers[key].trim())
          ).length} fields completed
        </div>
      </div>
    </div>
  );
}
