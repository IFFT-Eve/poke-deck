"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  next: string | null;
  previous: string | null;
}

export default function FooterButton({ next, previous }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onClick = (next = true) => {
    const params = new URLSearchParams(searchParams.toString());
    const currentPage = params.get("page");
    if (next) {
      params.set("page", !currentPage ? "2" : `${parseInt(currentPage) + 1}`);
    } else {
      params.set("page", `${parseInt(currentPage ?? "0") - 1}`);
    }
    router.push(`${pathname}?${params}`);
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      {previous && (
        <button
          onClick={() => onClick(false)}
          className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Previous
        </button>
      )}
      {next && (
        <button
          onClick={() => onClick()}
          className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Next
        </button>
      )}
    </div>
  );
}
