import { Field, KPI } from "@/lib/schemas";
import React, { useState } from "react";

interface FormFieldProps {
  field: Field;
  value: any;
  onChange: (value: any) => void;
}

// Helper function to get proper field labels
function getFieldLabel(field: Field): string {
  const labelMap: Record<string, string> = {
    // Header fields
    title: "Project Title",
    goal: "One-line Goal",
    product: "Product/Brand",
    audience: "Primary Audience",
    timeframe: "Timeline",
    
    // UI fields
    issues: "Main UI/UX Issues",
    why_matters: "Business Impact",
    moves: "Key Design Changes",
    before: "Before Screenshots",
    after: "After Screenshots",
    primary_kpi: "Primary KPI",
    secondary_signal: "Secondary Signal",
    
    // UX fields
    user_problem: "User Problem",
    top_task: "Top Task Optimized",
    sources: "Research Methods",
    insights: "Key Insights",
    changes: "UX Changes Made",
    artifacts: "Design Artifacts",
    qual_outcome: "Qualitative Outcome",
    
    // Social fields
    channels: "Social Channels",
    objective: "Campaign Objective",
    pillars: "Content Pillars",
    volume: "Volume & Cadence",
    creatives: "Representative Creatives",
  };
  
  return labelMap[field.id] || field.id.charAt(0).toUpperCase() + field.id.slice(1).replace(/_/g, ' ');
}

export function FormField({ field, value, onChange }: FormFieldProps) {
  switch (field.type) {
    case 'text':
      return <TextInput field={field} value={value} onChange={onChange} />;
    case 'chips':
      return <ChipsInput field={field} value={value} onChange={onChange} />;
    case 'list':
      return <ListInput field={field} value={value} onChange={onChange} />;
    case 'assets':
      return <AssetsInput field={field} value={value} onChange={onChange} />;
    case 'kpi':
      return <KPIInput field={field} value={value} onChange={onChange} />;
    default:
      return <div className="text-red-500">Unknown field type: {field.type}</div>;
  }
}

function TextInput({ field, value, onChange }: FormFieldProps) {
  const labelText = getFieldLabel(field);
  
  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-gray-900">
        {labelText}
        {field.req && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        className="w-full border border-gray-300 rounded-lg p-4 h-28 resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white hover:border-gray-400"
        placeholder={field.placeholder}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        maxLength={field.max}
      />
      {field.max && (
        <div className="text-xs text-gray-500 text-right">
          {(value || '').length}/{field.max} characters
        </div>
      )}
    </div>
  );
}

function ChipsInput({ field, value, onChange }: FormFieldProps) {
  const selectedChips = value || [];
  const labelText = getFieldLabel(field);
  
  const toggleChip = (option: string) => {
    if (selectedChips.includes(option)) {
      onChange(selectedChips.filter((chip: string) => chip !== option));
    } else if (!field.maxItems || selectedChips.length < field.maxItems) {
      onChange([...selectedChips, option]);
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-gray-800">
        {labelText}
        {field.req && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex flex-wrap gap-2">
        {field.options?.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => toggleChip(option)}
            className={`px-4 py-2 text-sm rounded-lg border font-medium transition-all ${
              selectedChips.includes(option)
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {field.maxItems && (
        <div className="text-xs text-gray-600">
          {selectedChips.length}/{field.maxItems} selected
        </div>
      )}
    </div>
  );
}

function ListInput({ field, value, onChange }: FormFieldProps) {
  const items = value || [''];
  const labelText = getFieldLabel(field);
  
  const updateItem = (index: number, newValue: string) => {
    const newItems = [...items];
    newItems[index] = newValue;
    onChange(newItems.filter(item => item.trim() !== ''));
  };
  
  const addItem = () => {
    if (!field.maxItems || items.length < field.maxItems) {
      onChange([...items, '']);
    }
  };
  
  const removeItem = (index: number) => {
    const newItems = items.filter((_: any, i: number) => i !== index);
    onChange(newItems.length > 0 ? newItems : ['']);
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-gray-800">
        {labelText}
        {field.req && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="space-y-2">
        {items.map((item: string, index: number) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder={`Item ${index + 1}`}
              value={item}
              onChange={(e) => updateItem(index, e.target.value)}
            />
            {items.length > 1 && (
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>
      {(!field.maxItems || items.length < field.maxItems) && (
        <button
          type="button"
          onClick={addItem}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          + Add item
        </button>
      )}
      {field.maxItems && (
        <div className="text-xs text-gray-600">
          {items.filter((item: string) => item.trim()).length}/{field.maxItems} items
        </div>
      )}
    </div>
  );
}

function AssetsInput({ field, value, onChange }: FormFieldProps) {
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const labelText = getFieldLabel(field);
  
  const files = value || [];
  
  const handleFiles = async (fileList: FileList) => {
    setUploading(true);
    const newFiles = [];
    
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      
      // For now, we'll create data URLs for preview
      // In a real app, you'd upload to a service like Cloudinary, S3, etc.
      try {
        const dataUrl = await fileToDataUrl(file);
        newFiles.push({
          id: Date.now() + i,
          name: file.name,
          size: file.size,
          type: file.type,
          url: dataUrl,
          preview: file.type.startsWith('image/') ? dataUrl : null
        });
      } catch (error) {
        console.error('Error processing file:', file.name, error);
      }
    }
    
    onChange([...files, ...newFiles]);
    setUploading(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };
  
  const removeFile = (fileId: number) => {
    onChange(files.filter((f: any) => f.id !== fileId));
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-gray-800">
        {labelText}
        {field.req && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
          dragOver 
            ? 'border-blue-400 bg-blue-50' 
            : 'border-gray-300 hover:border-blue-300 hover:bg-gray-50'
        }`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="text-gray-600">
          <div className="text-3xl mb-3">📎</div>
          <div className="font-semibold text-gray-800 mb-1">
            {uploading ? 'Processing files...' : 'Click to upload or drag & drop'}
          </div>
          <div className="text-sm">
            Accepts: {field.accept?.join(', ') || 'any files'}
          </div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={field.accept?.map(type => type === 'image' ? 'image/*' : type === 'video' ? 'video/*' : type).join(',')}
          className="hidden"
          onChange={handleFileSelect}
        />
      </div>
      
      {files.length > 0 && (
        <div className="space-y-3">
          <div className="text-sm font-semibold text-gray-800">{files.length} file(s) uploaded:</div>
          <div className="grid grid-cols-2 gap-3">
            {files.map((file: any) => (
              <div key={file.id} className="relative border border-gray-200 rounded-lg p-3 bg-white shadow-sm">
                {file.preview && (
                  <img 
                    src={file.preview} 
                    alt={file.name}
                    className="w-full h-24 object-cover rounded-md mb-2"
                  />
                )}
                <div className="text-xs text-gray-700 truncate font-medium">{file.name}</div>
                <div className="text-xs text-gray-500">{formatFileSize(file.size)}</div>
                <button
                  type="button"
                  onClick={() => removeFile(file.id)}
                  className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 transition-colors"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Helper functions
function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function KPIInput({ field, value, onChange }: FormFieldProps) {
  const kpi: KPI = value || { name: '', before: 0, after: 0, unit: '' };
  const labelText = getFieldLabel(field);
  
  const updateKPI = (updates: Partial<KPI>) => {
    onChange({ ...kpi, ...updates });
  };

  const delta = kpi.before !== 0 ? ((kpi.after - kpi.before) / kpi.before * 100) : 0;
  const deltaFormatted = delta >= 0 ? `+${Math.round(delta)}%` : `${Math.round(delta)}%`;

  return (
    <div className="space-y-4">
      <label className="text-sm font-semibold text-gray-800">
        {labelText}
        {field.req && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="KPI name (e.g., Conversion rate)"
          className="col-span-2 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          value={kpi.name}
          onChange={(e) => updateKPI({ name: e.target.value })}
        />
        <div>
          <label className="text-xs text-gray-600 mb-1 block">Before</label>
          <input
            type="number"
            placeholder="0"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={kpi.before || ''}
            onChange={(e) => updateKPI({ before: parseFloat(e.target.value) || 0 })}
          />
        </div>
        <div>
          <label className="text-xs text-gray-600 mb-1 block">After</label>
          <input
            type="number"
            placeholder="0"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={kpi.after || ''}
            onChange={(e) => updateKPI({ after: parseFloat(e.target.value) || 0 })}
          />
        </div>
        <input
          type="text"
          placeholder="Unit (%, s, etc.)"
          className="col-span-2 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          value={kpi.unit}
          onChange={(e) => updateKPI({ unit: e.target.value })}
        />
      </div>
      
      {kpi.before !== 0 && kpi.after !== 0 && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="text-sm text-blue-800">
            <strong>Preview:</strong> {kpi.before}{kpi.unit} → {kpi.after}{kpi.unit} 
            <span className={`ml-2 font-bold ${delta >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ({deltaFormatted})
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
