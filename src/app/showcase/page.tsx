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
                <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {caseStudy.template === 'ui' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5zM21 15a2 2 0 00-2-2h-4a2 2 0 00-2 2v2a4 4 0 004 4h2a2 2 0 002-2v-2z" />
                        )}
                        {caseStudy.template === 'ux' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        )}
                        {caseStudy.template === 'social' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14l-2-16" />
                        )}
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {caseStudy.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium capitalize">
                      {caseStudy.template}
                    </span>
                    <span className="text-sm text-gray-500">
                      by {caseStudy.designer}
                    </span>
                  </div>
                  
                  {/* Extract goal or summary from answers */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {caseStudy.answers?.goal || caseStudy.answers?.objective || "A design case study showcasing real-world problem solving and results."}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>
                      {new Date(caseStudy.updatedAt).toLocaleDateString()}
                    </span>
                    <span className="group-hover:text-blue-600 transition-colors">
                      Read more →
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
