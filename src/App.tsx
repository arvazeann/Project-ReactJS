import { Link, Navigate, Route, Routes } from "react-router-dom";
import { members } from "./data/members";
import Anggota from "./pages/Anggota";

const buttonClass =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-orange-700 px-6 text-sm font-semibold text-orange-50 shadow-[0_16px_30px_rgba(181,91,24,0.25)] transition hover:-translate-y-0.5";

const panelClass =
  "rounded-[28px] border border-slate-500/15 bg-white/80 shadow-[0_16px_40px_rgba(47,69,89,0.08)] backdrop-blur-sm";

function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(244,180,118,0.35),transparent_28%),linear-gradient(180deg,#f6efe6_0%,#f4f7fb_48%,#eef3f8_100%)] px-4 py-5 text-slate-800 sm:px-6 sm:py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <section
          className={`relative overflow-hidden rounded-[32px] border border-slate-500/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(246,231,214,0.85))] px-6 py-8 shadow-[0_24px_70px_rgba(56,73,92,0.12)] sm:px-10 sm:py-12 lg:px-12 ${panelClass}`}
        >
          <div className="absolute -bottom-16 -right-10 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(213,138,54,0.28),rgba(213,138,54,0))]" />

          <p className="relative mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
            Tentang Tim Project
          </p>
          <h1 className="relative max-w-4xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
            Profil Tim Project
          </h1>
          <p className="relative mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Halaman ini dibuat untuk memperkenalkan anggota tim secara singkat
            sebelum masuk ke profil lengkap masing-masing.
          </p>

          <div className="relative mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className={buttonClass} href="#team-members">
              Lihat Anggota
            </a>
          </div>

          <div className="relative mt-8 grid gap-4 md:grid-cols-3">
            <div className={`${panelClass} rounded-3xl px-6 py-5`}>
              <strong className="block text-3xl font-bold text-slate-950">
                3
              </strong>
              <span className="text-sm text-slate-500">Anggota aktif</span>
            </div>
            <div className={`${panelClass} rounded-3xl px-6 py-5`}>
              <strong className="block text-3xl font-bold text-slate-950">
                Tailwind + ReactJS
              </strong>
              <span className="text-sm text-slate-500">
                Desain modern dan responsif
              </span>
            </div>
          </div>
        </section>

        <section className="pt-1" id="team-members">
          <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
                Anggota Tim
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
                Pilih anggota untuk melihat halaman profilnya
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {members.map((member, index) => (
              <article
                className={`${panelClass} rounded-[28px] px-7 py-7 transition hover:-translate-y-1`}
                key={member.slug}
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-amber-100 font-extrabold text-amber-700">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-semibold text-slate-950">
                  {member.nama}
                </h3>
                <p className="mt-2 font-semibold text-amber-700">
                  {member.nim}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {member.kelas} · {member.jurusan}
                </p>
                <Link
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-slate-900/10 bg-slate-50 px-6 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5"
                  to={`/anggota/${member.slug}`}
                >
                  Lihat Halaman
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/anggota/:name" element={<Anggota />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
