"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function PokemonTypeCard({ name }: PokemonURLType) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const currentType = params.get("type");

  const onClick = () => {
    if (!currentType) {
      params.set("type", name);
    } else {
      params.delete("type");
    }
    router.push(`${pathname}?${params}`);
  };

  return (
    <button
      onClick={onClick}
      className={`rounded border border-gray-300 ${currentType === name ? 'bg-blue-500 text-white': 'bg-white'} px-3 py-1 text-sm capitalize shadow-sm`}
    >
      {name}
    </button>
  );
}
