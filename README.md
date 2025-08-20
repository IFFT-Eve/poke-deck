# Poke Deck

Poke Deck is a Next.js application that lets you explore a list of Pokémon by type and paginate to view more Pokémon. Data is fetched directly from [PokeAPI](https://pokeapi.co/).

## Features

- Filter Pokémon by type.
- Paginate the Pokémon list.
- View detailed information for each Pokémon.
- Modern UI using [Tailwind CSS](https://tailwindcss.com/).
- Uses Next.js App Router with the main page at `app/page.tsx` and global layout at `app/layout.tsx`.
- Components are organized in the `components` folder.
- Data fetching combines Client Components and Server Components.

## Installation & Usage

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Visit [http://localhost:3000](http://localhost:3000) in your browser to use the app.

## Project Structure

- `app/page.tsx`: Main page displaying the Pokémon list.
- `app/layout.tsx`: Global layout for the entire app.
- `components/`: Contains reusable components.
- Uses Next.js App Router.

## Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [PokeAPI](https://pokeapi.co/) (Pokémon data source)

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [PokeAPI Documentation](https://pokeapi.co/docs/v2)

## Contribution

For feedback or bug reports, please visit the [GitHub repository](https://github.com/vercel/next.js).

## Deployment

You can easily deploy the app on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
