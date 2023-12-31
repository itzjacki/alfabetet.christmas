export default function Home() {
  return (
    <>
      <h1 className='text-2xl font-bold'>God jul, William! 🎄</h1>
      <p>
        Julegaven din er dessverre litt sen, så vi må gi deg en midlertidig gave
        mens du venter. Dersom du klarer å løse den ganske vanskelige gåten på
        denne sida så er premien din at du får se hva vi har ordnet til deg i
        julegave!
      </p>
      <a
        href='/challenge'
        className='bg-[#bc4749] text-white py-2 px-4 rounded'
      >
        Ta meg til utfordringen
      </a>
    </>
  );
}
