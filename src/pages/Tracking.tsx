import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoToTop from "../components/common/GoToTop";
interface TrackingUpdate {
  status: string;
  hubAddress: string;
  scannedAt: string; // Date string
}

const mockUpdates: TrackingUpdate[] = [
  {
    status: "Parcel Picked Up",
    hubAddress: "Ahmedabad Hub",
    scannedAt: "2025-09-10 08:15 AM",
  },
  {
    status: "Arrived at Sorting Center",
    hubAddress: "Vadodara Hub",
    scannedAt: "2025-09-10 02:30 PM",
  },
  {
    status: "Out for Delivery",
    hubAddress: "Surat Hub",
    scannedAt: "2025-09-11 09:00 AM",
  },
];

const Tracking: React.FC = () => {
  const [trackingId, setTrackingId] = useState("");
  const [showUpdates, setShowUpdates] = useState(false);
  const [updates, setUpdates] = useState<TrackingUpdate[]>([]);
  const navigate = useNavigate();

  const handleTrack = () => {
    if (trackingId.trim() === "") return alert("Please enter a tracking ID");
    setUpdates(mockUpdates);
    setShowUpdates(true);
  };

  const toggleUpdates = () => {
    setShowUpdates(!showUpdates);
  };

  return (
    <>
      <div className="flex flex-col items-center p-6 max-w-xl mx-auto">
        {/* Intro Section */}
        <div className="w-full flex flex-col items-center mt-10">
          <img
            src="https://assets.delivery.com/track-package-illustration.svg"
            alt="Track Illustration"
            className="h-32 mb-6"
            onError={(e) => {
              // fallback if image fails to load
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <h1 className="text-4xl font-extrabold mb-2 text-blue-700">
            Track Your Package Easily
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Enter your tracking ID below for instant updates.
          </p>
          <div className="flex flex-row gap-6 mb-6">
            <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded">
              <span>💡</span>
              <span className="text-sm text-blue-600 font-medium">
                Tip: Double-check your tracking ID!
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded">
              <span>❓</span>
              <span className="text-sm text-gray-600">
                Having trouble?{" "}
                <span
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => navigate("/contact")}
                >
                  See FAQ
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Tracking input */}
        <div className="flex w-full mb-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            placeholder="Enter tracking number (e.g., SW123456789)"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleTrack();
            }}
          />
          <button
            onClick={handleTrack}
            className="px-6 py-2 bg-blue-500 text-white rounded-r-md font-semibold hover:bg-blue-600 transition"
          >
            Track Package
          </button>
        </div>

        {/* Toggle button */}
        {updates.length > 0 && (
          <button
            onClick={toggleUpdates}
            className="mb-6 text-blue-600 font-medium hover:underline"
          >
            {showUpdates ? "Hide Updates ▲" : "Show Updates ▼"}
          </button>
        )}

        {/* Collapse with timeline */}
        {showUpdates && updates.length > 0 && (
          <div className="w-full p-6 bg-white rounded-lg shadow-lg transition-all animate-fadeIn">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <span className="mr-2">📦</span>Tracking Updates
            </h2>
            <div className="relative pl-12">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 w-1 h-full bg-blue-100 rounded"></div>
              {updates.map((update, idx) => (
                <div
                  key={idx}
                  className="mb-14 last:mb-0 flex items-start relative group"
                >
                  {/* Dot/Icon */}
                  <div
                    className={`absolute left-4 top-3 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white
                    ${
                      idx === updates.length - 1
                        ? "bg-green-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {idx === updates.length - 1 ? (
                      <span>✅</span>
                    ) : (
                      <span>•</span>
                    )}
                  </div>
                  <div className="ml-12 px-6 py-3 rounded-lg bg-gray-50 shadow group-hover:bg-blue-50 transition">
                    <div className="font-semibold text-blue-700 text-lg">
                      {update.status}
                    </div>
                    <div className="text-gray-800">{update.hubAddress}</div>
                    <div className="text-xs text-gray-400">
                      {update.scannedAt}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <style>
          {`
          @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out;
          }
        `}
        </style>
        <GoToTop />
      </div>
    </>
  );
};

export default Tracking;
