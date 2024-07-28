"use client";

import { url } from "inspector";
import Image from "next/image";
import { useState } from "react";

/* const images = [
  {
    id: 1,
    src: "/hero-1.png",
  },
  {
    id: 2,
    src: "/hero-2.png",
  },
  {
    id: 3,
    src: "/hero-3.png",
  },
  {
    id: 4,
    src: "/hero-4.png",
  },
]; */

const ProductImages = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item:any, i:number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
