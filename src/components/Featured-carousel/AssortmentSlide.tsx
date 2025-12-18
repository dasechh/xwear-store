import GoButton from "../Buttons/GoButton";

export default function Slide() {
  return (
    <div className="rounded-[7px]flex h-full w-full flex-col bg-[url('/backgrounds/assortment.jpg')] bg-cover bg-center max-md:pt-10.75 max-md:pr-6.75 max-md:pb-3.75 max-md:pl-4.25 md:mb-8 md:px-17.5 md:pt-15 md:pb-8 2xl:px-22.5 2xl:pt-24.5 2xl:pb-11.25">
      <div className="flex w-min flex-col max-md:gap-[13px] md:gap-4.75">
        <h1>Широкий ассортимент одежды</h1>
        <p className="text-xwear-black max-2xl:size-1.0625 size-4.75 h-fit w-full font-[RF-Dewi] leading-8 max-2xl:leading-6.75 max-md:h-14.25 max-md:text-xs max-md:leading-4.75 2xl:text-[1.1875rem]">
          Одежда от известных брендов у&nbsp;нас в каталоге. Только качественные
          вещи
        </p>
        <GoButton text="Перейти в каталог" link="/catalog" />
      </div>

      <div className="mt-auto flex h-[67px] w-min flex-row gap-3.75 max-2xl:h-[54px] max-2xl:gap-2.5">
        <button className="carousel-previous flex aspect-[1/1] h-full cursor-pointer items-center justify-center rounded-full bg-white hover:bg-[#F0F2F6]">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.292893 7.70711C-0.0976314 7.31658 -0.0976314 6.68342 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976317 7.31658 -0.0976318 7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L2.41421 7L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711Z"
              fill="#121214"
            />
          </svg>
        </button>

        <button className="carousel-next flex aspect-[1/1] h-full cursor-pointer items-center justify-center rounded-full bg-white hover:bg-[#F0F2F6]">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.70711 7.70711C8.09763 7.31658 8.09763 6.68342 7.70711 6.29289L1.70711 0.292893C1.31658 -0.0976317 0.683418 -0.0976318 0.292894 0.292893C-0.0976309 0.683417 -0.0976309 1.31658 0.292894 1.70711L5.58579 7L0.292893 12.2929C-0.0976314 12.6834 -0.0976314 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7.70711 7.70711Z"
              fill="#121214"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
