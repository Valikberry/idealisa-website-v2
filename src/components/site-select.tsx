"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SiteSelectOption = { value: string; label: string };

type SiteSelectProps = {
  value?: string;
  onValueChange?: (value: string) => void;
  options: readonly (string | SiteSelectOption)[];
  placeholder?: string;
  name?: string;
  required?: boolean;
};

/**
 * The site's one styled dropdown — built on shadcn/ui's Select (Radix), so
 * the options panel is a real styled popover that opens below the trigger
 * (rounded corners, padding, hover highlight, checkmark on the selected
 * item) instead of the native OS list. The trigger is restyled to match the
 * site's other form fields: square corners, #cfc6ba border, white
 * background, accent-colored chevron.
 *
 * This is the reusable pattern for every dropdown on the site — used by the
 * Portfólio gate form today; reach for this again (not a native <select>)
 * for the Contacto page's service picker and any future one.
 */
export function SiteSelect({
  value,
  onValueChange,
  options,
  placeholder,
  name,
  required,
}: SiteSelectProps) {
  const normalized = options.map((option) =>
    typeof option === "string" ? { value: option, label: option } : option
  );

  return (
    <Select value={value} onValueChange={onValueChange} name={name} required={required}>
      <SelectTrigger
        className="!h-auto w-full justify-between gap-2 rounded-none border-[#cfc6ba] bg-white px-4 py-3 text-sm text-[#0a0a0a] shadow-none data-[placeholder]:text-[#0a0a0a] hover:border-[#8a5a1f] focus-visible:border-[#2E7D32] focus-visible:ring-[#2E7D32]/20 [&_svg]:text-[#8a5a1f]"
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="min-w-[var(--radix-select-trigger-width)] rounded-md border-[#cfc6ba] bg-white text-[#0a0a0a] shadow-md">
        {normalized.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="rounded-sm text-sm focus:bg-[#faf7f2] focus:text-[#0a0a0a]"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
