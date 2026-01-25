import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GoToTop from "../components/common/GoToTop";

interface TrackingUpdate {
  status: string;
  hubAddress: string;
  scannedAt: string;
}

const Tracking: React.FC = () => {
  const { t } = useTranslation();
  const [trackingId, setTrackingId] = useState("");
  const [showUpdates, setShowUpdates] = useState(false);
  const [updates, setUpdates] = useState<TrackingUpdate[]>([]);
  const navigate = useNavigate();

  const mockUpdates: TrackingUpdate[] = [
    {
      status: t("tracking.status.picked"),
      hubAddress: "Ahmedabad Hub",
      scannedAt: "2025-09-10 08:15 AM",
    },
    {
      status: t("tracking.status.sorting"),
      hubAddress: "Vadodara Hub",
      scannedAt: "2025-09-10 02:30 PM",
    },
    {
      status: t("tracking.status.out"),
      hubAddress: "Surat Hub",
      scannedAt: "2025-09-11 09:00 AM",
    },
  ];

  const handleTrack = () => {
    if (!trackingId.trim()) {
      alert(t("tracking.alert"));
      return;
    }
    setUpdates(mockUpdates);
    setShowUpdates(true);
  };

  return (
    <div className="flex flex-col items-center p-6 max-w-xl mx-auto">
      {/* Intro */}
      <h1 className="text-4xl font-extrabold mb-2 text-blue-700 text-center">
        {t("tracking.title")}
      </h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        {t("tracking.subtitle")}
      </p>

      {/* Tips */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded">
          💡
          <span className="text-sm text-blue-600 font-medium">
            {t("tracking.tip")}
          </span>
        </div>

        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded">
          ❓
          <span
            className="underline text-blue-500 cursor-pointer text-sm"
            onClick={() => navigate("/contact")}
          >
            {t("tracking.trouble")} {t("tracking.faq")}
          </span>
        </div>
      </div>

      {/* 🔥 Input + Button (Mobile Improved) */}
      <div className="flex flex-wrap gap-3 w-full mb-4 justify-center sm:flex-nowrap">
        <input
          type="text"
          className="w-full sm:flex-1 px-4 py-2 border rounded-md"
          placeholder={t("tracking.placeholder")}
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleTrack()}
        />

        <button
          onClick={handleTrack}
          className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition"
        >
          {t("tracking.trackBtn")}
        </button>
      </div>

      {/* Toggle */}
      {updates.length > 0 && (
        <button
          onClick={() => setShowUpdates(!showUpdates)}
          className="mb-6 text-blue-600 font-medium hover:underline"
        >
          {showUpdates ? t("tracking.hide") : t("tracking.show")}
        </button>
      )}

      {/* Updates */}
      {showUpdates && (
        <div className="w-full p-6 bg-white rounded-lg shadow-lg animate-fadeIn">
          <h2 className="text-xl font-bold mb-6">
            📦 {t("tracking.updatesTitle")}
          </h2>

          {updates.map((u, i) => (
            <div key={i} className="mb-4">
              <div className="font-semibold text-blue-700">{u.status}</div>
              <div className="text-gray-800">{u.hubAddress}</div>
              <div className="text-xs text-gray-400">{u.scannedAt}</div>
            </div>
          ))}
        </div>
      )}

      <GoToTop />
    </div>
  );
};

export default Tracking;
