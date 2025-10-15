import { useNavigate } from "react-router-dom";
import searchLogo from "../../assets/icons/search.svg";
import { useEffect, useRef, useState } from "react";

interface HeaderSearchProps {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderSearch({ setMenuOpen }: HeaderSearchProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
        if (window.innerWidth > 1536) setMenuOpen(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      {open && (
        <form
          ref={ref}
          className="bg-xwear-black box-border flex h-13 w-full translate-x-4 flex-row items-center rounded-full pr-4 pl-7 font-[RF-Dewi] outline-[1px] outline-offset-[-1px] outline-white/10 focus-within:outline-white/40"
          onSubmit={(e) => {
            e.preventDefault();
            const input = e.currentTarget.elements.namedItem(
              "search",
            ) as HTMLInputElement;
            navigate(`/search?query=${input.value}`);
          }}
        >
          <input
            name="search"
            autoComplete="off"
            autoFocus
            className="flex-1 bg-transparent text-white/40 outline-none"
            placeholder="Поиск по каталогу товаров"
          />
          <button
            type="submit"
            className="flex cursor-pointer items-center gap-2 text-white"
          >
            <img src={searchLogo} alt="Search" />
          </button>
        </form>
      )}
      {!open && (
        <button
          className="ml-auto flex-shrink-0 cursor-pointer"
          onClick={() => {
            setOpen(true);
            setMenuOpen(false);
          }}
        >
          <img src={searchLogo} alt="Search" />
        </button>
      )}
    </>
  );
}
