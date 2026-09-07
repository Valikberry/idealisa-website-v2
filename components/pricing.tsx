"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useTranslation } from "@/lib/language-context";

export function Pricing() {
  const [planType, setPlanType] = useState<"basic" | "custom">("basic");
  const { pricing: t } = useTranslation();
  return (
    <section id="pricing" className="pricing-section">
      <div className="section-container">
        <div className="section-heading">
          <h2>{t.heading}</h2>
          <p>{t.subheading}</p>
        </div>
        <div className="pricing-toggle">
          {(["basic", "custom"] as const).map((type) => (
            <button
              type="button"
              key={type}
              aria-pressed={planType === type}
              onClick={() => setPlanType(type)}
            >
              {type === "basic" ? t.toggleBasic : t.toggleCustom}
            </button>
          ))}
        </div>
        <div
          className={`pricing-grid ${planType === "custom" ? "custom-plan" : ""}`}
        >
          {(planType === "basic" ? Object.values(t.plans) : [t.custom]).map(
            (plan, index) => (
              <article key={plan.name} className="pricing-card">
                {planType === "basic" && index === 1 && (
                  <span className="popular-label">{t.mostPopular}</span>
                )}
                <h3>{plan.name}</h3>
                <p>{plan.focus}</p>
                {planType === "custom" && <p>{t.custom.description}</p>}
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  className="green-button"
                  href="https://wa.me/244936499706"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {planType === "basic" ? t.cta : t.custom.cta}
                </a>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
