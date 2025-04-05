import { About } from "@/data/data";

const AboutSection = () => {
  return (
    <section className="flex flex-col">
      <h2 className="text-2xl font-bold">{About.hTag}</h2>
      <h3 className="text-xl text-gray-600">{About.h1Tag}</h3>
      <p className="max-w-xl mt-4">{About.pTag2}</p>
    </section>
  );
};

export default AboutSection;
