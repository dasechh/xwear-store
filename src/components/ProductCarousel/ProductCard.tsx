import { useState } from "react";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [liked, setLiked] = useState(() => {
    const likedItems = JSON.parse(localStorage.getItem("likedItems") || "[]");
    return likedItems.includes(product.id);
  });

  function toggleLike() {
    const likedItems = JSON.parse(localStorage.getItem("likedItems") || "[]");
    let newLikedItems;

    if (liked) {
      setLiked(false);
      newLikedItems = likedItems.filter((id: number) => id !== product.id);
    } else {
      setLiked(true);
      newLikedItems = [...likedItems, product.id];
    }
    localStorage.setItem("likedItems", JSON.stringify(newLikedItems));
  }

  return (
    <div className="relative m-0 flex h-[369px] w-[318px] flex-col truncate p-0 max-md:h-[224px] max-md:w-[160px]">
      <button
        onClick={toggleLike}
        className="absolute top-[33px] right-[25px] max-md:top-[15px] max-md:right-[15px]"
      >
        <svg
          className="block max-md:hidden"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill={liked ? "black" : "none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3065 15.7245L4.43484 18.7998L5.55646 12.2861L0.799805 7.6736L7.36399 6.72588L10.2998 0.799805L13.2356 6.72588L19.7998 7.6736L15.0431 12.2861L16.1648 18.7998L10.3065 15.7245Z"
            stroke="#121214"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          className="hidden max-md:block"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.30506 12.5824L3.66957 15.0103L4.55506 9.86797L0.799805 6.22649L5.98206 5.47829L8.2998 0.799805L10.6176 5.47829L15.7998 6.22649L12.0445 9.86797L12.93 15.0103L8.30506 12.5824Z"
            stroke="#121214"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <img src={product.image} className="h-[318px] w-[318px] object-cover" />
      <h3>{product.title}</h3>
      <span className="font-[RF-Dewi] text-[0.875rem] leading-4 max-md:text-xs">
        от{" "}
      </span>
      <span className="font-[RF-Dewi] text-[1.0625rem] leading-4 max-md:text-[0.9375rem]">
        {product.price} $
      </span>
    </div>
  );
}
