import AlphabetComponent from "@/components/AlphabetModule";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <a className='self-start underline' href='/'>
        ⬅️ Tilbake til forsida
      </a>
      <p>
        Vi har bestilt et neonskilt til deg som du kan ha i bakgrunnen av
        streamen din! Det håndlages, og endte opp med å ta litt lengre tid enn
        vi håpte på, men det er på vei allerede, og vi tipper at du får det før
        nyttår. Senest ganske tidlig på nyåret
      </p>
      <p>
        Vi har sammen valgt ut en font og farge vi tror kommer til å se bra ut,
        skiltet kommer til å være ca 55 cm x 10 cm. Her er bildet vi fikk som
        viser hvordan produsenten ser for seg at det blir.
      </p>
      <em>
        Ignorer at &quot;Ʌ&quot;-en er litt rar, det kommer bare av at
        programmet de brukte ikke hadde den bokstaven i fonten vi valgte. Det
        bør ikke være noe problem når det håndlages uansett.
      </em>
      <Image src='neon.png' alt='Neonskilt' />
    </>
  );
}
