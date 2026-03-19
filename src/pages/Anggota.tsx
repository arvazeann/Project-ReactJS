import { Link, useParams } from "react-router-dom";
import { memberMap } from "../data/members";

const buttonClass =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-orange-700 px-6 text-sm font-semibold text-orange-50 shadow-[0_16px_30px_rgba(181,91,24,0.25)] transition hover:-translate-y-0.5";

const detailCardClass =
  "rounded-3xl border border-slate-300/60 bg-white/75 px-5 py-4 shadow-sm backdrop-blur-sm";

function Anggota() {
  const { name = "rafif-arvazean" } = useParams();
  const member = memberMap[name] ?? "";

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(244,180,118,0.35),transparent_28%),linear-gradient(180deg,#f6efe6_0%,#f4f7fb_48%,#eef3f8_100%)] px-4 py-5 text-slate-800 sm:px-6 sm:py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <section className="relative overflow-hidden rounded-[32px] border border-slate-500/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(246,231,214,0.85))] px-6 py-8 shadow-[0_24px_70px_rgba(56,73,92,0.12)] sm:px-10 sm:py-12 lg:px-12">
          <div className="absolute -bottom-16 -right-10 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(213,138,54,0.28),rgba(213,138,54,0))]" />

          <div className="relative grid gap-8 lg:grid-cols-[320px_1fr] lg:items-center">
            <div className="mx-auto w-full max-w-xs">
              <div className="overflow-hidden rounded-[30px] border border-white/70 bg-white/80 p-3 shadow-[0_20px_40px_rgba(15,23,42,0.12)] backdrop-blur-sm">
                <img
                  alt={`Foto profil ${member.nama}`}
                  className="h-[360px] w-full rounded-[24px] object-cover"
                  src={member.image}
                />
              </div>
            </div>

            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
                Halaman Profil Anggota
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-7xl">
                {member.nama}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {member.tagline}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className={detailCardClass}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
                    Kelas
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    {member.kelas}
                  </p>
                </div>
                <div className={detailCardClass}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
                    Prodi
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    {member.jurusan}
                  </p>
                </div>
                <div className={detailCardClass}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
                    Domisili
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    {member.domisili}
                  </p>
                </div>
                <div className={detailCardClass}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
                    NIM
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">
                    {member.nim}
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link className={buttonClass} to="/">
                  Kembali ke Home
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-slate-500/15 bg-white/80 px-6 py-7 shadow-[0_16px_40px_rgba(47,69,89,0.08)] backdrop-blur-sm sm:px-8 sm:py-8">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-amber-700">
            Tentang Diri
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
            Deskripsi pribadi anggota
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            {member.about}
          </p>
        </section>
      </div>
    </main>
  );
}

export default Anggota;
