import React, { useState } from "react";
import { SCHEDULE_DAYS, ScheduleSlot } from "../data/scheduleData";
import { Calendar, Clock, MapPin, Shirt, Info } from "lucide-react";

export const ScheduleReference: React.FC = () => {
  const [selectedDayKey, setSelectedDayKey] = useState<string>("senin-kamis");
  const currentSchedule = SCHEDULE_DAYS[selectedDayKey] || SCHEDULE_DAYS["senin-kamis"];

  const getCategoryStamp = (category: ScheduleSlot["category"]) => {
    switch (category) {
      case "ibadah":
        return "stamp-wajib";
      case "fisik":
        return "stamp-dibatasi";
      case "makan":
        return "stamp-wajib";
      case "apel":
        return "inline-flex items-center font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-navy-950 text-brass-400 border border-navy-800";
      case "kbm":
        return "inline-flex items-center font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-canvas-200 text-navy-950 border border-canvas-300";
      case "mandiri":
        return "stamp-dibatasi";
      default:
        return "inline-flex items-center font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-canvas-100 text-slate-700 border border-canvas-300";
    }
  };

  return (
    <section className="space-y-6">
      
      {/* Schedule Header Card */}
      <div className="command-panel-brass p-6 sm:p-8 bg-white shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-canvas-300 pb-5 mb-5">
          <div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-brass-700">
              INSTRUMEN WAKTU &amp; KEDISIPLINAN KESATRIAN • PASAL 18
            </div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
              Rencana Operasi Harian (Ren Ops Timetable)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl leading-relaxed font-sans">
              Rundown acuan pelaksanaan tugas dinas, KBM, dan kurve Serdik P3MD Batch 1 Soedirman dari bangun fajar 04.00 hingga jam padam 22.00 WIB.
            </p>
          </div>

          <div className="bg-navy-950 border border-navy-800 px-5 py-3 rounded-xs text-center shrink-0">
            <div className="font-mono text-xl sm:text-2xl font-black text-brass-400">
              04.00 - 22.00
            </div>
            <div className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-widest mt-0.5">
              SIKLUS HARIAN KESATRIAN
            </div>
          </div>
        </div>

        {/* Day Switcher Tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          {Object.entries(SCHEDULE_DAYS).map(([key, item]) => {
            const isSelected = selectedDayKey === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedDayKey(key)}
                className={`px-3.5 py-2 rounded-xs text-xs font-mono font-bold transition flex items-center space-x-2 cursor-pointer border ${
                  isSelected
                    ? "bg-navy-950 text-brass-400 border-navy-950 shadow-xs"
                    : "bg-canvas-50 text-slate-700 hover:bg-canvas-100 border-canvas-300"
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span className="uppercase">{item.dayName}</span>
              </button>
            );
          })}
        </div>

        {/* Special Day Directive Callout */}
        {currentSchedule.specialNote && (
          <div className="mt-5 p-4 rounded-xs bg-brass-50 border-l-4 border-l-brass-500 border border-brass-200 text-xs sm:text-sm text-navy-950 flex items-start space-x-3">
            <Info className="w-4 h-4 text-brass-700 shrink-0 mt-0.5" />
            <div className="leading-relaxed font-sans">
              <strong className="font-bold font-mono text-brass-800 uppercase tracking-wide mr-1.5">
                [PETUNJUK KHUSUS HARI INI]:
              </strong>
              {currentSchedule.specialNote}
            </div>
          </div>
        )}
      </div>

      {/* Timetable Ledger */}
      <div className="command-panel bg-white overflow-hidden shadow-xs">
        <div className="px-6 py-3.5 bg-canvas-100 border-b border-canvas-300 flex items-center justify-between">
          <div className="font-mono text-xs font-bold text-navy-950 uppercase tracking-wider flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-brass-500"></span>
            <span>JADWAL OPERASIONAL • {currentSchedule.dayName.toUpperCase()}</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500 font-bold uppercase">
            TOTAL: {currentSchedule.slots.length} SESI DINAS
          </span>
        </div>

        <div className="divide-y divide-canvas-200">
          {currentSchedule.slots.map((slot, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 hover:bg-canvas-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4"
            >
              <div className="flex items-start space-x-4">
                {/* Time Badge */}
                <div className="font-mono text-xs sm:text-sm font-black text-navy-950 bg-canvas-100 px-3 py-1.5 rounded-xs border border-canvas-300 shrink-0 min-w-[135px] text-center flex items-center justify-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-brass-700" />
                  <span>{slot.time}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2.5 flex-wrap">
                    <h3 className="text-sm sm:text-base font-bold text-navy-950 leading-snug">
                      {slot.activity}
                    </h3>
                    <span className={getCategoryStamp(slot.category)}>
                      {slot.category}
                    </span>
                  </div>

                  {slot.notes && (
                    <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                      "{slot.notes}"
                    </p>
                  )}
                </div>
              </div>

              {/* Location & Uniform metadata */}
              <div className="flex items-center space-x-3 text-xs font-mono text-slate-600 shrink-0 sm:self-center pl-0 sm:pl-4 border-t sm:border-t-0 border-canvas-200 pt-2 sm:pt-0">
                <div className="flex items-center space-x-1.5" title="Lokasi Kegiatan">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-medium text-slate-700">{slot.location}</span>
                </div>
                <span className="text-slate-300">|</span>
                <div className="flex items-center space-x-1.5" title="Pakaian Dinas">
                  <Shirt className="w-3.5 h-3.5 text-brass-700" />
                  <span className="font-bold text-navy-950 uppercase">{slot.uniform}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
