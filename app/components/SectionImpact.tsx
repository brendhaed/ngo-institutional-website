import { HiArrowRightCircle } from "react-icons/hi2";
import Button from "./ui/Button";
import Card from "./ui/Card";

export default function SectionImpact() {
  return (
    <section className="pt-20 lg:p-20 select-none">
      <div className="flex flex-col items-center gap-5 pb-15 px-10">
        <h1 className="text-[#4AA35E] text-2xl font-semibold">Nosso impacto</h1>
        <p className="text-black max-w-lg">
          Chaque programme que nous menons est pensé pour répondre aux besoins
          spécifiques des communautés, en mettant l'accent sur la durabilité et
          l'autonomisation.
        </p>
        <Button
          variant="transparent"
          icon={<HiArrowRightCircle className="w-6 h-6" />}
        >
          Entre em contato
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 text-center">
        <Card title="+10" description="Anos de existência" />
        <Card title="+1500" description="Pessoas beneficiárias" />
        <Card title="+50" description="Famílias beneficiárias" />
      </div>
    </section>
  );
}