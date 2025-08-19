import PokemonGrid from "@/components/pokemon-grid";

interface Props {
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function Home(props: Props) {
  const { page, type } = await props.searchParams;
  return (
    <>
      {/* Title */}
      <h1 className="mb-6 text-xl font-semibold">Welcome to Pokemon world</h1>
      {/* Poke deck */}
      <PokemonGrid page={page ? parseInt(page) : 1} type={type} />
    </>
  );
}
