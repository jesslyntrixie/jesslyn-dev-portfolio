// app/components/AboutBento.jsx
import Image from 'next/image';
import { profile, workExperience, achievements } from '@/data/content';


// Komponen kecil untuk setiap kotak bento agar tidak berulang
const BentoBox = ({ className, children }) => {
  return <div className={`bg-gray-50 p-6 rounded-2xl ${className}`}>{children}</div>;
};

export default function AboutBento() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Tentang Saya</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Kotak About Me (Besar) */}
        <BentoBox className="md:col-span-2 flex items-center gap-6">
          <Image src={profile.photo} width={120} height={120} alt="Foto Profil Jesslyn" className="rounded-full" />
          <div>
            <h3 className="text-xl font-bold mb-2">Perkenalan</h3>
            <p className="text-gray-600">
             {profile.bio}
            </p>
          </div>
        </BentoBox>

        {/* Kotak Achievements */}
        <BentoBox className="md:row-span-2">
          <h3 className="text-xl font-bold mb-4">Honors & Awards</h3>
          <ul className="space-y-4">
            {achievements.map((item, index) => (
              <li key={index}>
                <span className="mr-2">{item.icon}</span>
                <span className="font-semibold">{item.title}</span>, {item.year}
              </li>
            ))}
          </ul>
        </BentoBox>

        {/* Kotak Work Experience */}
        <BentoBox className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4">Professional Experience</h3>
          {workExperience.map((exp, index) => (
            <div key={index} className="mb-2">
              <p className="font-bold">{exp.role}</p>
              <p className="text-sm text-gray-500">{exp.institution}</p>
            </div>
          ))}
        </BentoBox>
        
        {/* Kotak Kecil: Education & Languages */}
        <BentoBox>
          <h3 className="font-bold">Education</h3>
          [cite_start]<p>BINUS University, GPA 3.99/4.00 [cite: 550]</p>
        </BentoBox>
        <BentoBox>
          <h3 className="font-bold">Languages</h3>
          [cite_start]<p>Indonesian, English, Mandarin [cite: 560]</p>
        </BentoBox>

         {/* Nanti di sini bisa kamu taruh tech stack yg bergerak atau galeri 'in action' */}

      </div>
    </section>
  );
}