"use client";
import useSWR from "swr";
import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import { getTemplate } from "@/lib/schemas";
import { FormField } from "@/components/FormFields";
import { CaseStudyPreview } from "@/components/CaseStudyPreview";

const fetcher = (u: string) => fetch(u).then((r) => r.json());

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  return `${Math.floor(diffInSeconds / 86400)}d ago`;
}

export default function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  console.log('Case study page loaded with ID:', id);
  
  const { data, mutate } = useSWR<{ cs: any }>(`/api/case-studies/${id}`, fetcher);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [content, setContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const template = data?.cs?.template ? getTemplate(data.cs.template) : null;

  useEffect(() => {
    if (data?.cs?.content) {
      setContent(data.cs.content);
    }
    if (data?.cs?.answers) {
      setAnswers(data.cs.answers);
    }
  }, [data]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, []);

  function updateAnswer(fieldId: string, value: any) {
    setAnswers((prev) => ({ ...prev, [fieldId]: value }));
    
    // Auto-save answers after a short delay
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    
    saveTimeoutRef.current = setTimeout(() => {
      saveAnswersToDatabase({ ...answers, [fieldId]: value });
    }, 1000); // Save 1 second after user stops typing
  }
  
  const saveTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  
  async function saveAnswersToDatabase(answersToSave: Record<string, any>) {
    // Validate ID before making request
    if (!id || id === 'undefined') {
      console.error('Cannot save: Invalid case study ID:', id);
      return;
    }
    
    setIsSaving(true);
    try {
      console.log('Saving answers for case study:', id);
      const response = await fetch(`/api/case-studies/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: answersToSave })
      });
      
      if (response.ok) {
        setLastSaved(new Date());
        console.log('Answers saved successfully');
      } else {
        const errorData = await response.json();
        console.error('Failed to save answers:', response.status, errorData);
      }
    } catch (error) {
      console.error('Error saving answers:', error);
    } finally {
      setIsSaving(false);
    }
  }

  async function saveAndGenerate() {
    if (!template) return;
    
    setIsGenerating(true);
    try {
      // Clear any pending auto-save
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
      
      // Save answers first (ensure we have the latest data)
      await fetch(`/api/case-studies/${id}`, { 
        method: 'PATCH', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ answers }) 
      });

      // Generate AI content
      const res = await fetch(`/api/case-studies/${id}/ai-draft`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, template: template.id })
      });
      
      if (res.ok) {
        const result = await res.json();
        if (result.content) {
          setContent(result.content);
          await mutate(); // Refresh data to get updated content
        }
      } else {
        const errorData = await res.json();
        console.error('AI generation failed:', errorData);
        alert('Failed to generate case study. Please try again.');
      }
    } catch (error) {
      console.error('Error generating content:', error);
      alert('Error generating case study. Please check your connection and try again.');
    } finally {
      setIsGenerating(false);
    }
  }

  async function publish() {
    try {
      const response = await fetch(`/api/case-studies/${id}`, { 
        method: 'PATCH', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ status: 'published' }) 
      });
      
      if (response.ok) {
        await mutate();
        alert('Case study published successfully! 🎉');
      } else {
        alert('Failed to publish case study. Please try again.');
      }
    } catch (error) {
      console.error('Error publishing case study:', error);
      alert('Error publishing case study. Please check your connection.');
    }
  }

  if (!template) {
    return (
      <div className="p-6">
        <div className="text-center text-gray-500">
          Loading template...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/dashboard"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{data?.cs?.title || "Untitled Case Study"}</h1>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {template.name}
                  </span>
                  <span>•</span>
                  <span>{data?.cs?.status || 'draft'}</span>
                </div>
              </div>
            </div>
            
            {/* Save Status */}
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                {isSaving ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-blue-500"></div>
                    <span>Saving...</span>
                  </div>
                ) : lastSaved ? (
                  <div className="flex items-center space-x-2 text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Saved {formatTimeAgo(lastSaved)}</span>
                  </div>
                ) : null}
              </div>
              
              <div className="flex items-center space-x-3">
                <button 
                  onClick={saveAndGenerate} 
                  disabled={isGenerating}
                  className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors flex items-center space-x-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>Generate</span>
                    </>
                  )}
                </button>
                <button 
                  onClick={publish} 
                  className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 font-medium transition-colors flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <span>Publish</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Compact Progress Bar - Hidden in fullscreen */}
        {!isFullscreen && (
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {template.sections.map((section, idx) => {
                const sectionFields = section.fields;
                const completed = sectionFields.filter(field => {
                  const value = answers[field.id];
                  return field.req ? (value && (typeof value === 'string' ? value.trim() : true)) : true;
                }).length;
                const progress = (completed / sectionFields.length) * 100;
                
                // Simplified icons
                const getSectionIcon = (sectionId: string) => {
                  const iconMap: Record<string, React.ReactElement> = {
                    header: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
                    problem: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L5.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>,
                    solution: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
                    results: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  };
                  return iconMap[section.id] || <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>;
                };
                
                return (
                  <div key={section.id} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      progress === 100 
                        ? 'bg-green-100 text-green-600' 
                        : progress > 0 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-gray-100 text-gray-400'
                    }`}>
                      {getSectionIcon(section.id)}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-gray-900 truncate">
                        {section.title || section.id}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-1">
                          <div 
                            className={`h-1 rounded-full transition-all duration-500 ${
                              progress === 100 ? 'bg-green-500' : 'bg-blue-500'
                            }`}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500 font-medium">
                          {completed}/{sectionFields.length}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-sm text-gray-600 font-medium">
              {template.sections.reduce((acc, section) => {
                const completed = section.fields.filter(field => {
                  const value = answers[field.id];
                  return field.req ? (value && (typeof value === 'string' ? value.trim() : true)) : true;
                }).length;
                return acc + completed;
              }, 0)} / {template.sections.reduce((acc, section) => acc + section.fields.length, 0)} completed
            </div>
          </div>
        </div>
        )}

        <div className="grid grid-cols-12 gap-8">{isFullscreen ? null : (
          // Only show form when not in fullscreen
          <>

          {/* Main Form */}
          <main className="col-span-8 space-y-6">
            {template.sections.map((section) => (
              <div key={section.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {section.title || section.id}
                  </h2>
                  {section.description && (
                    <p className="text-sm text-gray-600 mt-1">{section.description}</p>
                  )}
                </div>
                
                <div className="p-6 space-y-6">
                  {section.fields.map((field) => (
                    <FormField
                      key={field.id}
                      field={field}
                      value={answers[field.id]}
                      onChange={(value) => updateAnswer(field.id, value)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </main>

          {/* Preview */}
          <section className="col-span-4 bg-white rounded-xl border border-gray-200 overflow-hidden sticky top-24 h-fit max-h-[calc(100vh-8rem)]">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <h2 className="font-semibold text-lg text-gray-900">Live Preview</h2>
                </div>
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="p-2 hover:bg-blue-100 rounded-lg transition-colors group"
                  title="Fullscreen preview"
                >
                  <svg className="w-5 h-5 text-blue-600 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">See your case study come to life</p>
            </div>
            <div className="overflow-y-auto max-h-[calc(100vh-12rem)]">
              <CaseStudyPreview 
                content={content} 
                answers={answers} 
                template={template?.id || 'ui'} 
              />
            </div>
          </section>
          </>
        )}
        
        {/* Fullscreen Preview */}
        {isFullscreen && (
          <div className="col-span-12">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <h2 className="font-semibold text-lg text-gray-900">Fullscreen Preview</h2>
                  </div>
                  <button
                    onClick={() => setIsFullscreen(false)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Close</span>
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-1">Full preview of your case study</p>
              </div>
              <div className="overflow-y-auto max-h-[calc(100vh-16rem)] p-8">
                <div className="max-w-4xl mx-auto">
                  <CaseStudyPreview 
                    content={content} 
                    answers={answers} 
                    template={template?.id || 'ui'} 
                  />
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


