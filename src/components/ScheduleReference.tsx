import React, { useState } from "react";
import { SCHEDULE_DAYS, ScheduleSlot } from "../data/scheduleData";
import { Calendar, Clock, MapPin, Shirt, Info } from "lucide-react";

export const ScheduleReference: React.FC = () => {
  const [selectedDayKey, setSelectedDayKey] = useState<string>("senin-kamis");
  const currentSchedule = SCHEDULE_DAYS[selectedDayKey] || SCHEDULE_DAYS["senin-kamis"];

  const getCategoryBadge = (category: ScheduleSlot["category"]) => {
    switch (category) {
      case "ibadah":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "fisik":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "makan":
        return "bg-orange-50 text-orange-800 border-orange-200";
      case "apel":
        return "bg-navy-900 text-white border-navy-950 font-bold";
      case "kbm":
        return "bg-command-50 text-command-700 border-command-200";
      case "mandiri":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <section className="space-y-6">
      
      {/* Schedule Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-5">
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-command-700">
              Pedoman Waktu & Kedisiplinan Kesatrian
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
              Tabel Jadwal Harian Serdik (Pasal 18)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-2xl leading-relaxed font-sans">
              Rundown acuan pelaksanaan tugas dinas dan KBM Serdik P3MD Batch 1 Soedirman dari bangun pagi pukul 04.00 hingga istirahat malam pukul 22.00 WIB.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 px-5 py-3 rounded-xl text-center shrink-0">
            <div className="font-mono text-xl sm:text-2xl font-extrabold text-slate-900">
              04.00 - 22.00
            </div>
            <div className="text-[11px] font-sans text-slate-500 uppercase font-bold tracking-wider mt-0.5">
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
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm transition font-sans flex items-center space-x-2 cursor-pointer border ${
                  isSelected
                    ? "bg-navy-900 text-white font-bold border-navy-950 shadow-xs"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
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
          <div className="mt-5 p-4 rounded-xl bg-command-50 border border-command-200 text-xs sm:text-sm text-command-950 flex items-start space-x-3">
            <Info className="w-4 h-4 text-command-700 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="font-bold">Catatan Khusus Hari Ini:</strong> {currentSchedule.specialNote}
            </div>
          </div>
        )}
      </div>

      {/* Timetable List */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
            Alokasi Waktu • {currentSchedule.dayName}
          </div>
          <span className="text-xs font-mono text-slate-500 font-semibold">
            {currentSchedule.slots.length} Sesi Kegiatan
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {currentSchedule.slots.map((slot, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 hover:bg-slate-50/80 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4"
            >
              <div className="flex items-start space-x-3.5">
                {/* Time badge */}
                <div className="font-mono text-xs sm:text-sm font-extrabold text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 shrink-0 min-w-[130px] text-center flex items-center justify-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-command-700" />
                  <span>{slot.time}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2.5 flex-wrap">
                    <h3 className="text-sm sm:text-base font-bold text-slate-950 leading-snug">
                      {slot.activity}
                    </h3>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-mono uppercase font-bold tracking-wide border ${getCategoryBadge(
                        slot.category
                      )}`}
                    >
                      {slot.category}
                    </span>
                  </div>

                  {slot.notes && (
                    <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                      "{slot.notes}"
                    </p>
                  )}
                </div>
              </div>

              {/* Location & Uniform metadata */}
              <div className="flex items-center space-x-3 text-xs text-slate-500 shrink-0 sm:self-center pl-0 sm:pl-4 border-t sm:border-t-0 border-slate-100 pt-2 sm:pt-0 font-medium">
                <div className="flex items-center space-x-1.5" title="Lokasi Kegiatan">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{slot.location}</span>
                </div>
                <span className="text-slate-300">•</span>
                <div className="flex items-center space-x-1.5" title="Pakaian Dinas">
                  <Shirt className="w-3.5 h-3.5 text-slate-400" />
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

