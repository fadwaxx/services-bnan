import { Search, X } from "lucide-react";

interface ServiceSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ServiceSearch({ value, onChange }: ServiceSearchProps) {
  return (
    <div className="relative w-full sm:max-w-md">
      <Search
        size={19}
        className="absolute top-1/2 -translate-y-1/2 right-4 text-ink-light pointer-events-none"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="ابحث عن خدمة، مثل: جدارات، إقامة، سيرة ذاتية..."
        className="w-full bg-white border border-cream-300 rounded-xl py-3 pr-12 pl-10 text-sm text-ink placeholder:text-ink-light/70 focus:border-navy-300 transition-colors"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          aria-label="مسح البحث"
          className="absolute top-1/2 -translate-y-1/2 left-3 text-ink-light hover:text-navy transition-colors"
        >
          <X size={17} />
        </button>
      )}
    </div>
  );
}
