import Button from "./ui/Button";

export default function SectionRealization() {
  return (
    <section className="p-10 md:p-20">
      <div className="flex flex-col gap:10">
        <h1 className="text-gradient-primary text-2xl md:2xl font-semibold">Realizações</h1>
        <p className="text-black max-w-md">
          Chaque programme que nous menons est pensé pour répondre aux besoins
          spécifiques des communautés, en mettant l'accent sur la durabilité et
          l'autonomisation.
        </p>
        <Button variant="solid">Saber mais</Button>
      </div>
    </section>
  );
} 