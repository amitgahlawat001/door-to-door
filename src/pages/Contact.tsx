import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import GoToTop from "../components/common/GoToTop";
import { useTranslation } from "react-i18next";

const subjectKeys = [
  "contactPage.form.subjects.general",
  "contactPage.form.subjects.quote",
  "contactPage.form.subjects.partnerships",
  "contactPage.form.subjects.support",
];

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

  return (
    <>
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-4xl md:mx-auto mx-5">
          <h1 className="text-center text-3xl font-bold mb-1">
            {t("contactPage.title")}
          </h1>
          <p className="text-center text-gray-500 mb-8">
            {t("contactPage.subtitle")}
          </p>
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            {/* Left Column: Form */}
            <div className="flex-1 bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">
                {t("contactPage.form.title")}
              </h2>
              {!submitted ? (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm mb-1">
                        {t("contactPage.form.firstName")}
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        value={values.firstName}
                        onChange={(e) =>
                          setValues((v) => ({
                            ...v,
                            firstName: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm mb-1">
                        {t("contactPage.form.lastName")}
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        value={values.lastName}
                        onChange={(e) =>
                          setValues((v) => ({ ...v, lastName: e.target.value }))
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">
                      {t("contactPage.form.email")}
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full border rounded px-3 py-2"
                      value={values.email}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, email: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">
                      {t("contactPage.form.phone")}
                    </label>
                    <input
                      type="tel"
                      className="w-full border rounded px-3 py-2"
                      value={values.phone}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, phone: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">
                      {t("contactPage.form.subject")}
                    </label>
                    <select
                      required
                      className="w-full border rounded px-3 py-2"
                      value={values.subject}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, subject: e.target.value }))
                      }
                    >
                      <option value="">
                        {t("contactPage.form.selectSubject")}
                      </option>
                      {subjectKeys.map((key) => (
                        <option key={key} value={t(key)}>
                          {t(key)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">
                      {t("contactPage.form.message")}
                    </label>
                    <textarea
                      required
                      className="w-full border rounded px-3 py-2"
                      rows={4}
                      placeholder={t("contactPage.form.placeholder")}
                      value={values.message}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, message: e.target.value }))
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold rounded px-4 py-2 w-full hover:bg-blue-700"
                  >
                    {t("contactPage.form.submit")}
                  </button>
                </form>
              ) : (
                <div className="bg-green-100 p-4 rounded text-green-700 text-center font-bold">
                  {t("contactPage.form.success")}
                </div>
              )}
            </div>

            {/* Right Column: Contact & Hours Info */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
                <h3 className="text-lg font-semibold mb-4">
                  {t("contactPage.info.title")}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FiPhone className="text-blue-600 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-gray-900 font-medium">
                        {t("contactPage.info.phone")}
                      </div>
                      <div className="text-gray-600 text-sm">
                        1-800-SWIFT-99 <br />
                        {t("contactPage.info.phoneDetails")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiMail className="text-blue-600 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-gray-900 font-medium">
                        {t("contactPage.info.email")}
                      </div>
                      <div className="text-gray-600 text-sm">
                        support@swiftcourier.com <br />
                        {t("contactPage.info.emailDetails")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiMapPin className="text-blue-600 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-gray-900 font-medium">
                        {t("contactPage.info.headquarters")}
                      </div>
                      <div className="text-gray-600 text-sm">
                        123 Swift Avenue
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">
                  {t("contactPage.info.hoursTitle")}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{t("contactPage.info.weekdays")}</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("contactPage.info.saturday")}</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t("contactPage.info.sunday")}</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 bg-gray-50 p-3 rounded text-xs text-gray-600 border">
                  {t("contactPage.info.urgent")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <GoToTop />
      </section>
    </>
  );
};

export default Contact;
