import { useState } from "react";
import arrow from "../../assets/icons/arrows/arrow-black.svg";

type ResultMessage = { text: string; type: "error" | "success" | null };

export default function FooterNewsletter() {
  const [message, setMessage] = useState<ResultMessage>({
    text: "",
    type: null,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (
      form.elements.namedItem("email-newsletter") as HTMLInputElement
    ).value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage({ text: "Введите корректный email", type: "error" });
      return;
    }

    try {
      const res = await new Promise<{ ok: boolean }>((resolve) =>
        setTimeout(() => resolve({ ok: true }), 1000),
      );

      if (!res.ok) throw new Error("Ошибка подписки");

      setMessage({
        text: "Вы успешно подписались на рассылку",
        type: "success",
      });
      form.reset();
    } catch (error) {
      setMessage({
        text: `Не удалось подписаться: ${error}`,
        type: "error",
      });
    }

    setMessage({ text: "Вы успешно подписались на рассылку", type: "success" });
    form.reset();
  }

  return (
    <div className="flex max-2xl:w-full max-2xl:flex-col max-md:w-min max-md:text-center 2xl:w-min 2xl:flex-col">
      <div className="flex w-full max-2xl:mt-5 max-2xl:items-end max-2xl:justify-between max-md:mt-0 max-md:flex-col max-md:items-center 2xl:flex-col 2xl:gap-[9px]">
        <div className="text-3.75 flex flex-col leading-[1.75rem] text-white 2xl:gap-[9px]">
          <span className="font-[RF-Dewi-Expanded] font-[800] uppercase max-md:text-[0.8125rem]">
            подписка на новости
          </span>
          <span className="font-[RF-Dewi] max-md:text-[0.875rem]">
            Будьте в курсе скидок и новостей
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="text-3.25 flex w-full flex-col justify-between font-[RF-Dewi] leading-[1.75rem] max-2xl:w-min max-md:pt-[9px]"
        >
          <div className="flex w-min flex-col max-2xl:justify-between 2xl:w-full">
            <div className="relative flex flex-row border-b border-white/40 py-[7px] max-2xl:w-[320px]">
              <input
                type="text"
                name="email-newsletter"
                id="email-newsletter"
                inputMode="email"
                autoComplete="email"
                placeholder="Ваш email"
                className="placeholder-xwear-light-grey flex-1 bg-transparent text-[0.8125rem] text-white outline-none"
              />
              <button
                type="submit"
                className="flex h-[29px] w-[29px] cursor-pointer items-center justify-center rounded-full bg-white"
              >
                <img src={arrow} alt="Подтвердить" />
              </button>
              {message.type && (
                <span
                  className={`${message.type === "success" ? "text-green-400" : "text-red-500"} absolute -bottom-4 text-xs`}
                >
                  {message.text}
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
      <p className="text-xwear-light-grey mt-[15px] font-[RF-Dewi] text-xs leading-[1.125rem] text-balance">
        Подписываясь на рассылку вы соглашаетесь с обработкой персональных
        данных
      </p>
    </div>
  );
}
