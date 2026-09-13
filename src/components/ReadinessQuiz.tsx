import React, { useState } from "react";
import { QUIZ_QUESTIONS } from "../data/quizScenarios";
import { Award, RotateCcw, BookOpen } from "lucide-react";

export const ReadinessQuiz: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSelect = (questionId: number, letter: string) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: letter,
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  const score = Object.entries(selectedAnswers).reduce((acc, [qId, letter]) => {
    const q = QUIZ_QUESTIONS.find((item) => item.id === Number(qId));
    const isCorrect = q?.options.find((opt) => opt.letter === letter)?.isCorrect;
    return isCorrect ? acc + 1 : acc;
  }, 0);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <section className="space-y-6">
      <div className="bg-white border border-parchment-300 rounded-xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-parchment-200 pb-5 mb-5">
          <div>
            <div className="font-cinzel text-xs uppercase tracking-widest text-bronze-700 font-bold">
              Evaluasi Mandiri Serdik (Self-Check)
            </div>
            <h2 className="font-cinzel text-2xl font-bold text-ink-900 mt-1">
              Uji Kesiapan Aturan Kesatrian
            </h2>
            <p className="text-xs text-ink-700 font-serif italic mt-1 max-w-2xl">
              10 soal skenario nyata sehari-hari untuk menguji pemahaman Anda terhadap Peraturan Khusus Peserta Didik P3MD sebelum apel inspeksi dan jam komandan.
            </p>
          </div>

          <div className="bg-parchment-100 border border-parchment-300 px-4 py-2.5 rounded-lg text-center shrink-0">
            <div className="font-cinzel text-xl font-bold text-bronze-800">
              10 Soal
            </div>
            <div className="text-[10px] font-sans text-ink-700 uppercase font-semibold">
              Kasus Lapangan
            </div>
          </div>
        </div>

        {isSubmitted && (
          <div className="p-5 rounded-xl bg-parchment-50 border border-bronze-500/40 text-center space-y-2 mb-6">
            <Award className="w-8 h-8 text-bronze-700 mx-auto" />
            <h3 className="font-cinzel text-xl font-bold text-ink-900">
              Hasil Evaluasi: {score} / {totalQuestions} ({percentage}%)
            </h3>
            <p className="text-xs text-ink-800 font-sans max-w-md mx-auto leading-relaxed">
              {percentage >= 80
                ? "Luar Biasa! Anda memiliki pemahaman regulasi yang sangat matang dan siap mematuhi tata kehidupan kesatrian Soedirman."
                : "Perlu Pendalaman: Teliti kembali penjelasan pada pasal-pasal yang masih keliru agar terhindar dari pelanggaran disiplin."}
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="inline-flex items-center space-x-1.5 px-4 py-1.5 bg-bronze-700 hover:bg-bronze-800 text-white rounded-lg text-xs font-semibold transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi Kuis</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {QUIZ_QUESTIONS.map((q, idx) => {
          const userChoice = selectedAnswers[q.id];

          return (
            <div
              key={q.id}
              className="bg-white border border-parchment-300 rounded-xl p-6 sm:p-7 shadow-xs space-y-4"
            >
              <div className="flex items-center justify-between border-b border-parchment-200 pb-2.5">
                <span className="font-cinzel text-xs font-bold text-bronze-700 uppercase">
                  Skenario Kasus #{idx + 1}
                </span>
                <span className="text-[10px] font-mono text-ink-600">
                  Ref: {q.pasalRef}
                </span>
              </div>

              <div className="space-y-2">
                <div className="p-3.5 rounded-lg bg-parchment-50 border border-parchment-200 text-xs sm:text-sm text-ink-800 font-serif italic leading-relaxed">
                  "{q.scenario}"
                </div>
                <h3 className="text-sm sm:text-base font-bold text-ink-900 font-sans">
                  {q.question}
                </h3>
              </div>

              <div className="space-y-2">
                {q.options.map((opt) => {
                  const isThisSelected = userChoice === opt.letter;
                  let optionClass = "bg-white border-parchment-300 text-ink-800 hover:bg-parchment-50";

                  if (isSubmitted) {
                    if (opt.isCorrect) {
                      optionClass = "bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold";
                    } else if (isThisSelected && !opt.isCorrect) {
                      optionClass = "bg-rose-50 border-rose-400 text-rose-950";
                    }
                  } else if (isThisSelected) {
                    optionClass = "bg-bronze-600/10 border-bronze-700 text-bronze-900 font-semibold";
                  }

                  return (
                    <button
                      key={opt.letter}
                      onClick={() => handleSelect(q.id, opt.letter)}
                      disabled={isSubmitted}
                      className={`w-full p-3.5 rounded-lg border text-left text-xs sm:text-sm transition flex items-start space-x-3 ${optionClass}`}
                    >
                      <span className="font-cinzel font-bold text-xs shrink-0 w-6 h-6 rounded border border-parchment-400 bg-white flex items-center justify-center text-ink-900">
                        {opt.letter}
                      </span>
                      <span className="leading-snug flex-1">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {isSubmitted && (
                <div className="p-4 rounded-lg bg-parchment-100 border border-parchment-300 text-xs text-ink-800 space-y-1">
                  <div className="flex items-center space-x-1.5 font-bold text-bronze-800 font-cinzel">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Ulasan Pasal Resmi ({q.pasalRef}):</span>
                  </div>
                  <p className="leading-relaxed font-sans">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!isSubmitted && (
        <div className="bg-white border border-parchment-300 rounded-xl p-6 text-center space-y-3 shadow-sm">
          <p className="text-xs text-ink-700 font-sans">
            Sudah menjawab {Object.keys(selectedAnswers).length} dari {totalQuestions} soal.
          </p>
          <button
            onClick={() => setIsSubmitted(true)}
            disabled={Object.keys(selectedAnswers).length === 0}
            className="px-6 py-2.5 bg-bronze-700 hover:bg-bronze-800 disabled:opacity-50 text-white font-cinzel text-xs font-bold rounded-lg transition shadow-sm"
          >
            Kirim Jawaban & Periksa Hasil
          </button>
        </div>
      )}
    </section>
  );
};
