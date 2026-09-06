import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { company } from "../../config/siteContent";

const socials = [
  { href: company.social.facebook, label: "Facebook", Icon: FaFacebookF },
  { href: company.social.x, label: "X", Icon: FaTwitter },
  { href: company.social.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="grain relative bg-deep pt-20 text-paper">
      <div className="shell grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">{company.name}</p>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-paper/60">
            {t("footer.overviewText")}
          </p>
        </div>

        <div>
          <h3 className="text-eyebrow font-semibold uppercase text-paper/40">
            {t("footer.contactTitle")}
          </h3>
          <ul className="mt-5 space-y-3 text-[15px] text-paper/75">
            <li>{company.address}</li>
            <li>
              <a href={company.phoneHref} className="hover:text-accent">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-accent">
                {company.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-eyebrow font-semibold uppercase text-paper/40">
            {t("footer.servicesTitle")}
          </h3>
          <ul className="mt-5 space-y-3 text-[15px] text-paper/75">
            <li>
              <Link to="/services" className="hover:text-accent">
                {t("footer.service1")}
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-accent">
                {t("footer.service2")}
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-accent">
                {t("footer.service3")}
              </Link>
            </li>
            <li>
              <Link to="/trackshipment" className="hover:text-accent">
                {t("nav.trackShipment")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 py-7 md:flex-row">
        <p className="text-sm text-paper/40">
          © {new Date().getFullYear()} {company.name}. {t("footer.rights")}
        </p>

        <div className="flex gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-paper/70 transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
