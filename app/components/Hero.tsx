export default function Hero() {
  return (
    <section className="bg-[url('/img/hero-banner.jpg')] bg-cover bg-center h-screen">
    {/* <div className="absolute inset-0 bg-blue-950/50"></div> */}
      <div className="p-20 flex flex-col gap-10">
        <h1 className="font-bold uppercase text-5xl">Transformamos alimentos em vida</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsam
        debitis eligendi odit, sequi voluptate eaque recusandae possimus.
        Inventore perferendis minima mollitia, eaque nemo molestias? Odit
        dolores similique adipisci nobis?
      </p>
      </div>
      <div className="flex flex-row gap-10">
        <button className="bg-emerald-500">Nossas causas</button>
        <button className="bg-emerald-500">Entre em contato</button>
      </div>
    </section>
  );
}
