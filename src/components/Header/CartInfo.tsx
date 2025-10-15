import { useAppSelector } from "../../app/store";

export default function CartInfo() {
  const totalPrice = useAppSelector((s) => s.cart.total);
  const totalQuantity = useAppSelector((s) => s.cart.totalQuantity);

  return (
    <>
      <span className="text-xwear-light-grey flex-row flex-nowrap self-center text-sm leading-2.5">
        {totalPrice} ₽
      </span>
      {totalQuantity > 0 && (
        <span className="bg-xwear-blue flex h-4.5 w-4.5 items-center justify-center rounded-full text-xs leading-[53px] text-white">
          {totalQuantity}
        </span>
      )}
    </>
  );
}
