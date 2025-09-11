"use client";
import useSWR from "swr";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function ShowcaseContent() {
  const searchParams = useSearchParams();
  const designerParam = searchParams.get('designer');
  
  const { data, error, isLoading } = useSWR<{ caseStudies: any[] }>("/api/public/case-studies", fetcher);
  const { data: marketingData } = useSWR(
    designerParam ? `/api/public/marketing/${designerParam}` : null,
    fetcher
  );
  
  const [filter, setFilter] = useState<string>("all");
  const [selectedDesigner, setSelectedDesigner] = useState<string | null>(designerParam);

  const caseStudies = data?.caseStudies || [];
  
  // Filter by designer and template type
  let filteredCaseStudies = selectedDesigner 
    ? caseStudies.filter(cs => cs.designer === selectedDesigner)
    : caseStudies;
    
  filteredCaseStudies = filter === "all" 
    ? filteredCaseStudies 
    : filteredCaseStudies.filter(cs => cs.template === filter);

  // Get marketing content
  const marketing = marketingData?.marketingContent;
  const isPersonalized = !!selectedDesigner && !!marketing;

  const templateOptions = [
    { id: "all", name: "All Case Studies", icon: "📚" },
    { id: "ui", name: "UI Design", icon: "🎨" },
    { id: "ux", name: "UX Research", icon: "🔍" },
    { id: "social", name: "Social Media", icon: "📱" }
  ];

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Case Studies</h1>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            {isPersonalized ? (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {marketing.heroTitle}
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                  {marketing.heroSubtitle}
                </p>
                <div className="flex items-center justify-center space-x-8 text-blue-200">
                  {marketing.highlights.map((highlight: any, index: number) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold flex items-center justify-center space-x-1">
                        <span>{highlight.icon}</span>
                        <span>{highlight.metric}</span>
                      </div>
                      <div className="text-sm">{highlight.label}</div>
                    </div>
                  ))}
                </div>
                {selectedDesigner && (
                  <div className="mt-8">
                    <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-blue-100">
                      <span>✨</span>
                      <span className="font-medium">{marketing.tagline}</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Design Case Studies
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  Explore real-world design projects, insights, and results from talented designers
                </p>
                <div className="flex items-center justify-center space-x-8 text-blue-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{caseStudies.length}</div>
                    <div className="text-sm">Case Studies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">
                      {new Set(caseStudies.map(cs => cs.designer)).size}
                    </div>
                    <div className="text-sm">Designers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">
                      {new Set(caseStudies.map(cs => cs.template)).size}
                    </div>
                    <div className="text-sm">Categories</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {/* Designer Filter */}
              <div className="flex items-center space-x-2">
                <select
                  value={selectedDesigner || ""}
                  onChange={(e) => {
                    const designer = e.target.value || null;
                    setSelectedDesigner(designer);
                    if (designer) {
                      window.history.pushState({}, '', `/showcase?designer=${designer}`);
                    } else {
                      window.history.pushState({}, '', '/showcase');
                    }
                  }}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Designers</option>
                  {[...new Set(caseStudies.map(cs => cs.designer))].map(designer => (
                    <option key={designer} value={designer}>{designer}</option>
                  ))}
                </select>
              </div>

              {/* Template Filter */}
              {templateOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setFilter(option.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === option.id
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span>{option.icon}</span>
                  <span>{option.name}</span>
                  {option.id !== "all" && (
                    <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {filteredCaseStudies.filter(cs => option.id === "all" || cs.template === option.id).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
            
            <Link 
              href="/dashboard"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Create Your Own
            </Link>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {isLoading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
                  <div className="flex space-x-2">
                    <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                    <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredCaseStudies.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {filter === "all" ? "No case studies yet" : `No ${templateOptions.find(t => t.id === filter)?.name} case studies`}
            </h3>
            <p className="text-gray-600 mb-6">
              {filter === "all" 
                ? "Be the first to publish a case study!" 
                : "Try a different category or be the first to publish in this one."}
            </p>
            <Link 
              href="/dashboard"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
            >
              Create First Case Study
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCaseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.id}
                href={`/showcase/${caseStudy.id}`}
                className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200 overflow-hidden"
              >
                {/* Preview Image/Content */}
                <div className={`h-48 p-6 flex items-center justify-center relative overflow-hidden ${
                  caseStudy.template === 'ui' 
                    ? 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50' 
                    : caseStudy.template === 'ux'
                    ? 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'
                    : 'bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50'
                }`}>
                  <div className="text-center relative z-10">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg ${
                      caseStudy.template === 'ui'
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
                        : caseStudy.template === 'ux'
                        ? 'bg-gradient-to-br from-emerald-500 to-teal-600'
                        : 'bg-gradient-to-br from-pink-500 to-rose-600'
                    }`}>
                      {caseStudy.template === 'ui' && (
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                        </svg>
                      )}
                      {caseStudy.template === 'ux' && (
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {caseStudy.template === 'social' && (
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14l-2-16m-5-3v4m0 0l-2-2m2 2l2-2" />
                        </svg>
                      )}
                    </div>
                    
                    {/* KPI Preview */}
                    {caseStudy.answers?.primary_kpi && (
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 mb-2">
                        <div className="text-xs text-gray-600 font-medium">{caseStudy.answers.primary_kpi.name}</div>
                        <div className="text-lg font-bold text-gray-900">
                          {caseStudy.answers.primary_kpi.before}{caseStudy.answers.primary_kpi.unit} → {caseStudy.answers.primary_kpi.after}{caseStudy.answers.primary_kpi.unit}
                        </div>
                        <div className={`text-sm font-semibold ${
                          ((caseStudy.answers.primary_kpi.after - caseStudy.answers.primary_kpi.before) / caseStudy.answers.primary_kpi.before * 100) > 0 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`}>
                          {Math.round((caseStudy.answers.primary_kpi.after - caseStudy.answers.primary_kpi.before) / caseStudy.answers.primary_kpi.before * 100) > 0 ? '+' : ''}
                          {Math.round((caseStudy.answers.primary_kpi.after - caseStudy.answers.primary_kpi.before) / caseStudy.answers.primary_kpi.before * 100)}%
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full rounded-full ${
                      caseStudy.template === 'ui'
                        ? 'bg-blue-300'
                        : caseStudy.template === 'ux'
                        ? 'bg-emerald-300'
                        : 'bg-pink-300'
                    }`}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                      {caseStudy.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      caseStudy.template === 'ui'
                        ? 'bg-blue-100 text-blue-700'
                        : caseStudy.template === 'ux'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-pink-100 text-pink-700'
                    }`}>
                      {caseStudy.template.toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Extract meaningful problem/goal */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>
                    {caseStudy.answers?.user_problem || 
                     caseStudy.answers?.goal || 
                     caseStudy.answers?.objective || 
                     caseStudy.answers?.why_matters ||
                     "Professional case study showcasing design process and measurable impact."}
                  </p>
                  
                  {/* Timeframe and Impact */}
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center space-x-4">
                      {caseStudy.answers?.timeframe && (
                        <span className="text-gray-500">
                          📅 {caseStudy.answers.timeframe}
                        </span>
                      )}
                      <span className="text-gray-500">
                        by {caseStudy.designer}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {new Date(caseStudy.updatedAt).toLocaleDateString()}
                    </span>
                    <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                      Read full study →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Share Your Work?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join other designers in showcasing your case studies. Create professional portfolios with AI assistance.
          </p>
          <Link 
            href="/dashboard"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors text-lg"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ShowcasePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading showcase...</p>
      </div>
    </div>}>
      <ShowcaseContent />
    </Suspense>
  );
}
