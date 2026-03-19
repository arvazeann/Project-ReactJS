import arvaImage from "../assets/Arva.jpeg";

export type MemberProfile = {
  slug: string;
  nama: string;
  nim: string;
  kelas: string;
  jurusan: string;
  domisili: string;
  tagline: string;
  about: string;
  image: string;
};

export const members: MemberProfile[] = [
  {
    slug: "rafif-arvazean",
    nama: "Rafif Arvazean",
    nim: "253140700111018",
    kelas: "T2D",
    jurusan: "Teknologi Informasi",
    domisili: "Kebumen",
    tagline:
      "Rasa ingin tahu dalam spektrum tak terbatas.",
    about:
      "Saya adalah mahasiswa yang memiliki ketertarikan kuat pada bidang matematis sebagai fondasi berpikir logis dan analitis. Minat saya berkembang ke dunia cybersecurity, khususnya dalam memahami bagaimana sistem dapat diamankan maupun diuji kerentanannya secara terstruktur. Selain itu, saya juga mendalami data science untuk mengolah dan mengekstrak insight dari data secara efisien. Ketertarikan saya terhadap bahasa mesin dan backend mendorong saya memahami cara kerja sistem dari level rendah hingga implementasi aplikasi. Saya berorientasi pada pengembangan skill praktis sekaligus pemahaman konsep mendalam, dengan tujuan menjadi profesional yang mampu membangun dan mengamankan sistem secara optimal.",
    image: arvaImage,
  },
];

export const memberMap = Object.fromEntries(
  members.map((member) => [member.slug, member]),
) as Record<string, MemberProfile>;
