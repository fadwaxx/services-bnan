import { categoryOptions, type ServiceCategory } from "../data/services";

interface CategoryFilterProps {
  active: "all" | ServiceCategory;
  onChange: (value: "all" | ServiceCategory) => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {categoryOptions.map((option) => {
        const isActive = active === option.id;
        return (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors border ${
              isActive
                ? "bg-navy text-white border-navy"
                : "bg-white text-ink-light border-cream-300 hover:border-navy-200 hover:text-navy"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
