"use client";

import Link from "next/link";
import { useTranslation } from "@/lib/language-context";
import { FOOTER_ROUTES, ROUTES } from "@/lib/routes";

export function Footer() {
  const t = useTranslation();
  return (
    <>
      <a className="call-button" href="tel:+244936499706">
        {t.callPill} +244 936 499 706
      </a>
      <footer className="site-footer">
        <div>
          <div className="footer-columns">
            <div>
              <p className="footer-brand" translate="no">
                Idealisa
              </p>
              <p>{t.footer.tagline}</p>
            </div>
            {Object.entries(t.footer.columns).map(([key, column]) => (
              <div key={key}>
                <h3>{column.header}</h3>
                <ul>
                  {column.links.map((label, i) => (
                    <li key={label}>
                      <Link
                        href={
                          ROUTES[
                            FOOTER_ROUTES[key as keyof typeof FOOTER_ROUTES][i]
                          ]
                        }
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <p>© 2026 IdealIsa. {t.footer.copyrightSuffix}</p>
            <address>
              Maculusso, Rua Lourenço Mendes da Conceição, Luanda, Angola
              <br />
              <a href="tel:+244936499706">+244 936 499 706</a> / +244 976 055
              956 / +244 937 445 450
              <br />
              <a href="mailto:geral@idealisa.ao">geral@idealisa.ao</a>
            </address>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/company/139724042/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/IdealIsamkt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/idealisa.ao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
