import { Header } from "@/components/shared/Header";
import ImageBlock from "@/components/ui/ImageBlock";

export default function About(): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <Header current="ABOUT" />

      <main className="flex-grow w-3/4 mt-26">
        <ImageBlock alt="about" src="/about.jpg" />

        <p className="text-2xl text-center mb-2">
          We are a barbershop quartet based in Christchurch, New Zealand,
          dedicated to bringing joy through music.
        </p>

        <p className="font-light mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          aspernatur aliquam eius quod unde, nemo qui, autem, nulla asperiores
          consectetur esse architecto? Perspiciatis commodi, ullam rem iusto
          voluptatum modi hic? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et quae amet eaque, neque at dolor. Vero commodi
          officiis temporibus quo ut labore atque alias ab. Ad voluptas ipsam
          minima incidunt? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ipsa pariatur repudiandae similique laudantium ipsam architecto
          mollitia libero eveniet sint beatae, ducimus quasi accusantium rem
          repellendus ratione obcaecati, sequi dolor voluptatem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ipsa pariatur repudiandae
          similique laudantium ipsam architecto mollitia libero eveniet sint
          beatae, ducimus quasi accusantium rem repellendus ratione obcaecati,
          sequi dolor voluptatem.
        </p>
      </main>
    </div>
  );
}
