"use client";
import useSWR from "swr";
import Link from "next/link";
import { use } from "react";
import { CaseStudyPreview } from "@/components/CaseStudyPreview";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function PublicCaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data, error, isLoading } = useSWR<{ caseStudy: any }>(`/api/public/case-studies/${id}`, fetcher);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (error || !data?.caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Case Study Not Found</h1>
          <p className="text-gray-600 mb-6">This case study might not be published or doesn't exist.</p>
          <Link 
            href="/showcase"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
          >
            Browse All Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const caseStudy = data.caseStudy;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/showcase"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{caseStudy.title}</h1>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium capitalize">
                    {caseStudy.template}
                  </span>
                  <span>•</span>
                  <span>by {caseStudy.designer}</span>
                  <span>•</span>
                  <span>{new Date(caseStudy.updatedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: caseStudy.title,
                      text: `Check out this ${caseStudy.template} case study by ${caseStudy.designer}`,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 font-medium transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                <span>Share</span>
              </button>
              
              <Link 
                href="/dashboard"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Create Your Own</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="p-8">
            <CaseStudyPreview 
              content={caseStudy.content} 
              answers={caseStudy.answers} 
              template={caseStudy.template} 
            />
          </div>
        </div>

        {/* Designer Attribution & CTA */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center border border-blue-200">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Loved this case study?
            </h3>
            <p className="text-gray-600 mb-6">
              This case study was created by <strong>{caseStudy.designer}</strong> using CaseStudy.AI. 
              Create your own professional case studies with AI assistance.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Link 
                href="/showcase"
                className="px-6 py-3 border border-blue-300 text-blue-700 rounded-lg hover:border-blue-400 hover:bg-blue-50 font-medium transition-colors"
              >
                Browse More
              </Link>
              <Link 
                href="/dashboard"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
              >
                Create Your Own
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
