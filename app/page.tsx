"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  Disc3,
  Mic2,
  Sliders,
  Music2,
  ArrowRight,
  ExternalLink,
  Instagram,
  CheckCircle2,
} from "lucide-react";

export default function LoyalBoysPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTrack, setActiveTrack] = useState("SONSUZ — Cesur & Bemz");
  const [demoUrl, setDemoUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoUrl) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setDemoUrl("");
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">
      {/* Arka Plan Dinamik Işık Hüzmesi */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-white/[0.07] to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-500/[0.03] blur-[160px] rounded-full" />
      </div>

      {/* Üst Menü / Navigasyon */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-white/90">
            Loyal Boys Production
          </span>
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase text-[#86868B]">
            <a href="#kadro" className="hover:text-white transition-colors">Kadro</a>
            <a href="#katalog" className="hover:text-white transition-colors">Katalog</a>
            <a href="#hizmetler" className="hover:text-white transition-colors">Stüdyo</a>
            <a href="#demo" className="hover:text-white transition-colors">Demo Gönder</a>
          </nav>
          <a
            href="#hizmetler"
            className="text-xs uppercase tracking-wider px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition shadow-sm"
          >
            Randevu Al
          </a>
        </div>
      </header>

      {/* Hero Bölümü */}
      <section className="relative z-10 pt-48 pb-32 px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-[#86868B] mb-6 font-mono">
            Bağımsız Plak Şirketi & Müzik Stüdyosu
          </span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-[-0.04em] leading-[0.95] mb-6 bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
            Loyal Boys Production
          </h1>
          <p className="text-lg md:text-xl text-[#86868B] font-normal tracking-wide max-w-xl mx-auto mb-10">
            Yeni nesil ses mimarisi. Saf dinamizm, kentsel kimlik ve tavizsiz prodüksiyon kalitesi.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-2xl border border-white/20 text-sm font-medium tracking-wide transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.06)]"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
              {isPlaying ? "Parçayı Durdur" : "Son Çıkanı Dinle"}
            </button>
            <a
              href="#hizmetler"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent hover:bg-white/[0.04] border border-white/10 text-sm font-medium text-[#86868B] hover:text-white transition"
            >
              Hizmetleri İncele
            </a>
          </div>
        </motion.div>
      </section>

      {/* Kadro / Sanatçılar (Roster) */}
      <section id="kadro" className="relative z-10 py-28 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#86868B] font-mono">Ekip</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">Karakter & Kadro</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sanatçı Kartı: CESUR */}
            <div className="group relative rounded-3xl p-8 bg-[#080808]/80 backdrop-blur-2xl border border-white/[0.08] hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-14">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#86868B]">Kurucu & Prodüktör</span>
                  <h3 className="text-3xl font-bold tracking-tight text-white mt-1">CESUR</h3>
                </div>
                <div className="flex gap-2">
                  <a href="#" aria-label="Instagram Profili" className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/10 text-white/80 hover:text-white transition">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="Dijital Platformlar" className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/10 text-white/80 hover:text-white transition">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-[#86868B] leading-relaxed max-w-md">
                Trap, drill ve modern kentsel hip-hop sound&apos;unu dinamik bas mimarisi ve yüksek frekans dengesiyle harmanlayan kayıt sanatçısı ve prodüktör.
              </p>
            </div>

            {/* Sanatçı Kartı: BEMZ */}
            <div className="group relative rounded-3xl p-8 bg-[#080808]/80 backdrop-blur-2xl border border-white/[0.08] hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-14">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#86868B]">Sanatçı</span>
                  <h3 className="text-3xl font-bold tracking-tight text-white mt-1">BEMZ</h3>
                </div>
                <div className="flex gap-2">
                  <a href="#" aria-label="Instagram Profili" className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/10 text-white/80 hover:text-white transition">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" aria-label="Dijital Platformlar" className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/10 text-white/80 hover:text-white transition">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-[#86868B] leading-relaxed max-w-md">
                Lirik derinlik, vurucu vokal geçişleri ve Loyal Boys projelerindeki ortak çıkışlarıyla kadronun kimliğini belirleyen ses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Katalog / Son Çıkanlar */}
      <section id="katalog" className="relative z-10 py-28 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#86868B] font-mono">Diskografi</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">Son Çıkan Parçalar</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "SONSUZ", artist: "Cesur & Bemz", year: "2026", bpm: "140 BPM" },
              { title: "Daha Daha Neler", artist: "Cesur", year: "2026", bpm: "134 BPM" },
              { title: "Kapıları", artist: "Loyal Boys Production", year: "2026", bpm: "142 BPM" },
            ].map((track, i) => (
              <div
                key={i}
                className="group p-5 rounded-2xl bg-[#080808]/70 border border-white/[0.08] hover:border-white/20 transition-all hover:scale-[1.02]"
              >
                <div className="aspect-square w-full rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800 flex items-center justify-center mb-4 relative overflow-hidden">
                  <Disc3 className="w-12 h-12 text-zinc-700 group-hover:rotate-45 transition-transform duration-700" />
                  <button
                    onClick={() => {
                      setActiveTrack(`${track.title} — ${track.artist}`);
                      setIsPlaying(true);
                    }}
                    className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 shadow-xl"
                  >
                    <Play className="w-4 h-4 fill-black" />
                  </button>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-white tracking-tight">{track.title}</h4>
                    <p className="text-xs text-[#86868B] mt-0.5">{track.artist}</p>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/[0.05] text-[#86868B]">
                    {track.bpm}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stüdyo & Mühendislik Hizmetleri */}
      <section id="hizmetler" className="relative z-10 py-28 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#86868B] font-mono">Stüdyo İmkanları</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2">Mühendislik & Prodüksiyon</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Hizmet 1 */}
            <div className="p-8 rounded-3xl bg-[#080808]/70 border border-white/[0.08] flex flex-col justify-between hover:border-white/20 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center mb-6">
                  <Mic2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3">Vokal & Kayıt Zinciri</h3>
                <p className="text-xs text-[#86868B] leading-relaxed mb-6">
                  Akustik kontrollü izole kayıt ortamı, referans mikrofon sinyal yolu ve profesyonel vokal kurgusu.
                </p>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-center gap-2">• İzole profesyonel kayıt seansları</li>
                  <li className="flex items-center gap-2">• Üst segment analog preamp zinciri</li>
                  <li className="flex items-center gap-2">• Vokal koçluğu ve ham kayıt kurgusu</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-3 rounded-full bg-white/[0.06] hover:bg-white text-xs font-semibold text-white hover:text-black transition">
                Randevu Al
              </button>
            </div>

            {/* Hizmet 2 */}
            <div className="p-8 rounded-3xl bg-[#080808]/70 border border-white/[0.08] flex flex-col justify-between hover:border-white/20 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center mb-6">
                  <Sliders className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3">Mix & Mastering</h3>
                <p className="text-xs text-[#86868B] leading-relaxed mb-6">
                  Tüm dijital platformlarla tam uyumlu frekans dengesi, geniş stereo sahne ve endüstri standardı dinamik aralık.
                </p>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-center gap-2">• Vokal miksi ve frekans temizliği</li>
                  <li className="flex items-center gap-2">• Sub ve kick ayrıştırma dengesi</li>
                  <li className="flex items-center gap-2">• 24-bit kayıpsız master teslimi</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-3 rounded-full bg-white/[0.06] hover:bg-white text-xs font-semibold text-white hover:text-black transition">
                Fiyat & Detaylar
              </button>
            </div>

            {/* Hizmet 3 */}
            <div className="p-8 rounded-3xl bg-[#080808]/70 border border-white/[0.08] flex flex-col justify-between hover:border-white/20 transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center mb-6">
                  <Music2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3">Özel Beat Prodüksiyonu</h3>
                <p className="text-xs text-[#86868B] leading-relaxed mb-6">
                  Sanatçının tavrına ve vokal yapısına özel sıfırdan kompozisyon, melodi ve ritim tasarımı.
                </p>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-center gap-2">• Trap, drill ve kentsel altyapı kurgusu</li>
                  <li className="flex items-center gap-2">• Özel kullanım ve lisanslama hakları</li>
                  <li className="flex items-center gap-2">• Ayrıştırılmış kanal (Stem) teslimi</li>
                </ul>
              </div>
              <button className="mt-8 w-full py-3 rounded-full bg-white/[0.06] hover:bg-white text-xs font-semibold text-white hover:text-black transition">
                Prodüksiyon Başlat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Gönderimi (A&R) */}
      <section id="demo" className="relative z-10 py-28 px-6 border-t border-white/[0.06] mb-20">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#86868B] font-mono">A&R / Demo Havuzu</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 mb-4">Sesini Duyur.</h2>
          <p className="text-xs md:text-sm text-[#86868B] mb-8">
            SoundCloud, Google Drive veya Dropbox linkini bırak. Ekibimiz haftalık değerlendirmede uygun projelerle doğrudan iletişime geçer.
          </p>

          <form onSubmit={handleDemoSubmit} className="relative flex items-center">
            <input
              type="url"
              required
              placeholder="https://soundcloud.com/... veya Drive bağlantısı"
              value={demoUrl}
              onChange={(e) => setDemoUrl(e.target.value)}
              className="w-full h-14 pl-6 pr-36 rounded-full bg-white/[0.04] border border-white/[0.1] focus:border-white/30 focus:outline-none text-sm text-white placeholder:text-[#86868B] transition"
            />
            <button
              type="submit"
              className="absolute right-2 h-10 px-5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 hover:bg-white/90 transition"
            >
              Gönder <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {submitted && (
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> Bağlantın başarıyla A&R değerlendirme listesine eklendi.
            </div>
          )}
        </div>
      </section>

      {/* Alt Sabit Apple Tarzı Müzik Çalar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl">
        <div className="px-5 py-3 rounded-full bg-black/60 backdrop-blur-2xl border border-white/[0.12] flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/[0.08] flex items-center justify-center">
              <Disc3 className={`w-5 h-5 text-white ${isPlaying ? "animate-spin" : ""}`} />
            </div>
            <div>
              <p className="text-xs font-semibold text-white tracking-tight">{activeTrack}</p>
              <p className="text-[10px] text-[#86868B]">Loyal Boys Production</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition shadow-sm"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 fill-black" /> : <Play className="w-3.5 h-3.5 fill-black" />}
            </button>
            <Volume2 className="w-4 h-4 text-[#86868B] hidden sm:block" />
          </div>
        </div>
      </div>
    </div>
  );
}
