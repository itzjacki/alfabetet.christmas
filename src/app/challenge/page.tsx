import AlphabetComponent from "@/components/AlphabetModule";

export default function Home() {
  return (
    <>
      <a className='self-start underline' href='/'>
        ⬅️ Tilbake til forsida
      </a>
      <h1 className='text-2xl font-bold'>Den ultimate utfrodringen</h1>
      <p>
        For at du skal kunne se julegaven din må du gjøre noe som vanligvis
        ville vært umulig for deg, nemlig å skrive alfabetet i rekkefølge.
        Heldigvis inkluderer gaven fra oss også hjelpemidler du kan bruke for å
        trene i forkant. Det er ikke lov til å jukse mens du skriver.
      </p>
      <p className='w-full mb-8'>
        Dersom du tar feil må du starte på nytt. Lykke til!
      </p>
      <AlphabetComponent />
    </>
  );
}
