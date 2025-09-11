"use client";
import useSWR from "swr";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { templates } from "@/lib/schemas";
const fetcher = (u: string) => fetch(u).then((r) => r.json());

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { data, mutate } = useSWR<{ items: any[] }>("/api/case-studies", (url) => 
    fetch(url, { 
      credentials: 'include' // Ensure cookies are sent
    }).then((r) => r.json())
  );
  const [showTemplateModal, setShowTemplateModal] = useState(false);

  useEffect(() => {
    if (status === "loading") return; // Still loading
    if (!session) {
      router.push("/auth/signin");
      return;
    }
  }, [session, status, router]);

  async function createWithTemplate(templateId: string) {
    try {
      const template = templates.find(t => t.id === templateId);
      const res = await fetch("/api/case-studies", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        credentials: 'include', // Ensure cookies are sent
        body: JSON.stringify({ 
          title: `New ${template?.name || 'Case Study'}`, 
          template: templateId
        }) 
      });
      if (!res.ok) {
        const errorText = await res.text();
        console.error("Failed to create case study:", res.status, errorText);
        alert("Failed to create case study. Check console for details.");
        return;
      }
      const j = await res.json();
      if (!j.id) {
        console.error("No ID returned from case study creation:", j);
        alert("No case study ID returned.");
        return;
      }
      await mutate();
      setShowTemplateModal(false);
      location.href = `/case-study/${j.id}`;
    } catch (error) {
      console.error("Error creating case study:", error);
      alert("Error creating case study. Check console for details.");
    }
  }

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Case Studies</h1>
              <p className="mt-2 text-gray-600">Create and manage your design case studies</p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Portfolio Link - show if user has published case studies */}
              {data?.items?.some((it: any) => it.status === 'published') && (
                <Link
                  href="/showcase?designer=anon"
                  target="_blank"
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 font-medium transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <span>View Portfolio</span>
                </Link>
              )}
              
              <button 
                onClick={() => setShowTemplateModal(true)} 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors flex items-center space-x-2"
              >
                <span>+</span>
                <span>New Case Study</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {data?.items?.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No case studies yet</h3>
            <p className="text-gray-600 mb-6">Get started by creating your first case study</p>
            <button 
              onClick={() => setShowTemplateModal(true)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
            >
              Create Case Study
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data?.items?.map((it) => (
              <div key={it.id} className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">{it.title}</h3>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium capitalize">
                          {it.template}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          it.status === 'published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {it.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-4">
                    Updated {new Date(it.updatedAt).toLocaleDateString()}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link 
                      href={`/case-study/${it.id}`}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Edit
                    </Link>
                    {it.status === 'published' && (
                      <Link 
                        href={`/showcase/${it.id}`}
                        target="_blank"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Template Selection Modal */}
      {showTemplateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Choose Your Template</h2>
                  <p className="text-gray-600 mt-2">Select a template that best fits your case study type</p>
                </div>
                <button 
                  onClick={() => setShowTemplateModal(false)} 
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid gap-6 md:grid-cols-3">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => createWithTemplate(template.id)}
                    className="group text-left p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {template.id === 'ui' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5zM21 15a2 2 0 00-2-2h-4a2 2 0 00-2 2v2a4 4 0 004 4h2a2 2 0 002-2v-2z" />
                          )}
                          {template.id === 'ux' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          )}
                          {template.id === 'social' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14l-2-16" />
                          )}
                        </svg>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {template.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {template.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {template.sections.reduce((acc, section) => acc + section.fields.length, 0)} questions
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


