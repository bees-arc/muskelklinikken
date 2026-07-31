import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: '"Denne sertifiseringen anbefales på det sterkeste! Det dekker områder jeg føler du ikke lærer mye om i studiene. Målet mitt da jeg valgte sertifiseringen var å lære så mye som mulig og føle meg mer forberedt på arbeidslivet, noe som det absolutt gjorde! Finn-Tore er en fantastisk person som brenner for yrket sitt og har enorme kommunikasjonsevner, noe som gjenspeiles og er veldig inspirerende."',
    name: 'Anna',
    role: 'Tidligere Deltaker',
    avatar: '/images/testimonial_avatar.webp',
  },
  {
    quote: '"Veldig fornøyd med minor i regi av Norsk Idretts og Helseinstitutt. Vi hadde et variert studieprogram med fokus på praktiske øvelser som gjorde deltakerne bedre rustet for året som turnusfysioterapeut. Finn-Tore er ekstremt dyktig og hadde også ansatt andre eksperter som holdt gode interne kurs. Vil definitivt anbefale denne sertifiseringen til andre deltakere."',
    name: 'Trond',
    role: 'Turnusfysioterapeut',
    avatar: '/images/testimonial_avatar.webp',
  },
  {
    quote: '"Minoren i sertifisert idretts- og rehabiliteringsspesialist ledet av Finn-Tore Camacho Bjørnsand var veldig lærerikt. Kurset var givende og motiverende faglig, samtidig som det var sosialt og hyggelig. Finn-Tore er en engasjert og inspirerende underviser. Han er faglig dyktig, men fokuserer også mye på den enkeltes mål og spørsmål. Jeg satte virkelig pris på dette."',
    name: 'Selma',
    role: 'Tidligere Deltaker',
    avatar: '/images/testimonial_avatar.webp',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <ScrollReveal className="section-intro">
          <span className="overline">Erfaringer</span>
          <h2 className="section-heading">Hva våre pasienter sier</h2>
        </ScrollReveal>

        <div className="masonry-grid">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={i} delay={(i % 3) * 80}>
              <article className="tcard">
                <p className="tcard-quote">{t.quote}</p>
                <div className="tcard-author">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    width={42}
                    height={42}
                    className="tcard-avatar"
                  />
                  <div>
                    <strong className="tcard-name">{t.name}</strong>
                    <span className="tcard-role">{t.role}</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="tcard-cta">
          <a
            href="https://psno-patient-platform-fe.svc.pasientsky.no/embedded/planner/booking?serviceProviderId=fb9771b2-5459-11e9-89e4-96d3108deae4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-pill btn-black btn-lg"
          >
            Bestill din time i dag
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
