
import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroeProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Heroe(props: HeroeProps) {
  return (
    <div className="relative h-screen">

      <Image
        src={props.imgData}
        alt={props.imgAlt}
        fill
        style={{objectFit:'cover'}}
      />
       <div className="absolute inset-0 bg-gradient-to-r from-slate-900"/>
      <div />

      <div className="relative flex justify-center items-center pt-48">
        <h1 className="text-white text-6xl font-bold">
          {props.title}
        </h1>
      </div>

    </div>
  );
}
