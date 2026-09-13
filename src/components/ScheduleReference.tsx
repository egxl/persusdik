import React, { useState } from "react";
import { SCHEDULE_DAYS, ScheduleSlot } from "../data/scheduleData";
import { Calendar, Clock, MapPin, Shirt, Info } from "lucide-react";

export const ScheduleReference: React.FC = () => {
  const [selectedDayKey, setSelectedDayKey] = useState<string>("senin-kamis");
  const currentSchedule = SCHEDULE_DAYS[selectedDayKey] || SCHEDULE_DAYS["senin-kamis"];

  const getCategoryBadge = (category: ScheduleSlot["category"]) => {
    switch (category) {
      case "ibadah":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      case "fisik":
        return "bg-orange-100 text-orange-800 border-orange-300";
      case "makan":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "apel":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "kbm":
        return "bg-indigo-100 text-indigo-800 border-indigo-300";
      case "mandiri":
        return "bg-purple-100 text-purple-800 border-purple-300";
      default:
        return "bg-slate-100 text-slate-700 border-slate-300";
    }
  };

  return (
    <section className="space-y-6">
      
      {/* Schedule Header Card */}
      <div className="bg-white border border-parchment-300 rounded-xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-parchment-200 pb-5 mb-5">
          <div>
            <div className="font-cinzel text-xs uppercase tracking-widest text-bronze-700 font-bold">
              Pedoman Waktu & Kedisiplinan Kesatrian
            </div>
            <h2 className="font-cinzel text-2xl font-bold text-ink-900 mt-1">
              Tabel Jadwal Harian Serdik (Pasal 18)
            </h2>
            <p className="text-xs text-ink-700 font-serif italic mt-1 max-w-2xl">
              Rundown acuan pelaksanaan tugas pendidikan dan pelatihan Serdik P3MD Batch 1 Soedirman dari bangun pagi pukul 04.00 hingga istirahat malam pukul 22.00.
            </p>
          </div>

          <div className="bg-parchment-100 border border-parchment-300 px-4 py-2.5 rounded-lg text-center shrink-0">
            <div className="font-mono text-lg font-bold text-bronze-800">
              04.00 – 22.00
            </div>
            <div className="text-[10px] font-sans text-ink-700 uppercase font-semibold">
              Siklus Harian Kesatrian
            </div>
          </div>
        </div>

        {/* Day Switcher Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {Object.entries(SCHEDULE_DAYS).map(([key, item]) => {
            const isSelected = selectedDayKey === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedDayKey(key)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm transition font-sans flex items-center space-x-2 ${
                  isSelected
                    ? "bg-bronze-700 text-white font-semibold shadow-xs"
                    : "bg-parchment-100 text-ink-700 hover:bg-parchment-200 border border-parchment-300"
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.dayName}</span>
              </button>
            );
          })}
        </div>

        {/* Special Day Note */}
        {currentSchedule.specialNote && (
          <div className="mt-4 p-3.5 rounded-lg bg-bronze-600/10 border border-bronze-600/20 text-xs text-bronze-900 flex items-start space-x-2.5">
            <Info className="w-4 h-4 text-bronze-700 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Catatan Khusus Hari Ini:</strong> {currentSchedule.specialNote}
            </div>
          </div>
        )}
      </div>

      {/* Timetable List */}
      <div className="bg-white border border-parchment-300 rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-4 bg-parchment-100 border-b border-parchment-200 flex items-center justify-between">
          <div className="font-cinzel text-xs font-bold text-ink-900 uppercase tracking-wider">
            Alokasi Waktu • {currentSchedule.dayName}
          </div>
          <span className="text-[11px] font-mono text-ink-600">
            {currentSchedule.slots.length} Sesi Kegiatan
          </span>
        </div>

        <div className="divide-y divide-parchment-200">
          {currentSchedule.slots.map((slot, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 hover:bg-parchment-50 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-start space-x-3.5">
                {/* Time badge */}
                <div className="font-mono text-xs sm:text-sm font-bold text-bronze-800 bg-parchment-100 px-3 py-1.5 rounded border border-parchment-300 shrink-0 min-w-[125px] text-center flex items-center justify-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-bronze-600" />
                  <span>{slot.time}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm sm:text-base font-bold text-ink-900 leading-snug">
                      {slot.activity}
                    </h3>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded border font-sans uppercase font-semibold ${getCategoryBadge(
                        slot.category
                      )}`}
                    >
                      {slot.category}
                    </span>
                  </div>

                  {slot.notes && (
                    <p className="text-xs text-ink-700 italic font-serif">
                      "{slot.notes}"
                    </p>
                  )}
                </div>
              </div>

              {/* Location & Uniform metadata */}
              <div className="flex items-center space-x-3 text-xs text-ink-700 shrink-0 sm:self-center pl-0 sm:pl-4 border-t sm:border-t-0 border-parchment-200 pt-2 sm:pt-0">
                <div className="flex items-center space-x-1" title="Lokasi Kegiatan">
                  <MapPin className="w-3.5 h-3.5 text-bronze-700" />
                  <span>{slot.location}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1" title="Pakaian Dinas">
                  <Shirt className="w-3.5 h-3.5 text-bronze-700" />
                  <span>{slot.uniform}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
