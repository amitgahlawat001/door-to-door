import React, { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import Button from "../components/ui/Button";
import { company } from "../config/siteContent";

const subjectKeys = [
  "contactPage.form.subjects.general",
  "contactPage.form.subjects.quote",
  "contactPage.form.subjects.partnerships",
  "contactPage.form.subjects.support",
];

const field =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-brand";
const labelCls = "mb-2 block text-sm font-medium text-ink";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const set = (key: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  // TODO(owner): POST `values` to the real inbox/CRM endpoint. The form is
  // client-only today, exactly as it was before the redesign.
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-soft py-24 md:py-32">
      <div className="shell grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="rounded-3xl bg-white p-8 shadow-[0_24px_60px_-40px_rgba(11,27,43,0.4)] md:p-10">
          <h2 className="font-display text-3xl font-semibold text-ink">
            {t("contactPage.form.title")}
          </h2>

          {submitted ? (
            <div
              role="status"
              className="mt-8 rounded-2xl bg-brand/10 p-8 text-center"
            >
              <p className="font-display text-xl font-semibold text-ink">
                {t("contactPage.form.success")}
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelCls}>
                    {t("contactPage.form.firstName")}
                  </label>
                  <input
                    id="firstName"
                    required
                    className={field}
                    value={values.firstName}
                    onChange={set("firstName")}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelCls}>
                    {t("contactPage.form.lastName")}
                  </label>
                  <input
                    id="lastName"
                    required
                    className={field}
                    value={values.lastName}
                    onChange={set("lastName")}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelCls}>
                    {t("contactPage.form.email")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className={field}
                    value={values.email}
                    onChange={set("email")}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>
                    {t("contactPage.form.phone")}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={field}
                    value={values.phone}
                    onChange={set("phone")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelCls}>
                  {t("contactPage.form.subject")}
                </label>
                <select
                  id="subject"
                  required
                  className={field}
                  value={values.subject}
                  onChange={set("subject")}
                >
                  <option value="">{t("contactPage.form.selectSubject")}</option>
                  {subjectKeys.map((key) => (
                    <option key={key} value={t(key)}>
                      {t(key)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelCls}>
                  {t("contactPage.form.message")}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className={field}
                  placeholder={t("contactPage.form.placeholder")}
                  value={values.message}
                  onChange={set("message")}
                />
              </div>

              <Button type="submit" className="w-full">
                {t("contactPage.form.submit")}
              </Button>
            </form>
          )}
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink">
              {t("contactPage.info.title")}
            </h3>
            <ul className="mt-7 space-y-6">
              <li className="flex gap-4">
                <FiPhone className="mt-1 shrink-0 text-xl text-brand" />
                <div>
                  <p className="font-medium text-ink">
                    <a href={company.phoneHref}>{company.phone}</a>
                  </p>
                  <p className="text-[15px] text-muted">
                    {t("contactPage.info.phoneDetails")}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <FiMail className="mt-1 shrink-0 text-xl text-brand" />
                <div>
                  <p className="font-medium text-ink">
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </p>
                  <p className="text-[15px] text-muted">
                    {t("contactPage.info.emailDetails")}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <FiMapPin className="mt-1 shrink-0 text-xl text-brand" />
                <div>
                  <p className="font-medium text-ink">
                    {t("contactPage.info.headquarters")}
                  </p>
                  <p className="text-[15px] text-muted">{company.address}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-7">
            <h3 className="font-display text-lg font-semibold text-ink">
              {t("quote.title")}
            </h3>
            <ul className="mt-5 space-y-3">
              {["i1", "i2", "i3", "i4"].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-muted"
                >
                  <svg
                    viewBox="0 0 20 20"
                    className="mt-[3px] h-4 w-4 shrink-0 text-brand"
                    aria-hidden="true"
                  >
                    <path
                      d="m4 10.5 4 4 8-9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {t(`quote.${item}`)}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-7">
            <h3 className="text-eyebrow font-semibold uppercase text-muted">
              {t("contactPage.info.hoursTitle")}
            </h3>
            <dl className="mt-5 space-y-3 text-[15px]">
              {[
                ["contactPage.info.weekdays", "8:00 AM – 8:00 PM"],
                ["contactPage.info.saturday", "9:00 AM – 5:00 PM"],
                ["contactPage.info.sunday", "9:00 AM – 5:00 PM"],
              ].map(([key, hours]) => (
                <div key={key} className="flex justify-between">
                  <dt className="text-muted">{t(key)}</dt>
                  <dd className="font-medium text-ink">{hours}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {t("contactPage.info.urgent")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
