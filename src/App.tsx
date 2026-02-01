import { useEffect } from 'react'
import './App.css'
import authorPortrait from './assets/IMAGE 2026-02-01 12:51:57.jpg'

const guideFor = [
  'nu ai experiență în SMM',
  'vrei să-ți promovezi afacerea online',
  'vrei reel-uri simple, dar frumoase',
  'nu ai timp să înveți editare complicată',
]

const steps = [
  {
    title: 'Ce este CapCut (pe scurt)',
    body: [
      'CapCut este o aplicație GRATUITĂ cu care poți edita video direct de pe telefon.',
      'Nu ai nevoie de laptop, nu ai nevoie de experiență, nu ai nevoie de cursuri.',
      'Doar telefon + aplicația CapCut.',
    ],
  },
  {
    title: 'Primul pas – creezi un reel',
    body: [
      'Deschizi aplicația CapCut',
      'Apeși New project',
      'Alegi un video din telefon',
      'Apare automat pe ecran → gata, deja ai un proiect',
      'Important: video-ul trebuie să fie vertical',
    ],
  },
  {
    title: 'Setarea corectă (foarte simplu)',
    body: [
      'Sus sau jos vei vedea Format / Ratio. Alege 9:16',
      'Acesta este formatul pentru Instagram Reels (nu pătrat, nu orizontal).',
    ],
  },
  {
    title: 'Cum tai părțile inutile (cel mai important)',
    body: [
      'Apasă pe video și trage de capete',
      'Șterge pauzele, începuturile fără acțiune și momentele în care nu faci nimic',
      'Reel bun = începe DIRECT cu mișcare',
    ],
  },
  {
    title: 'Cum adaugi text (fără să fie complicat)',
    body: [
      'Apasă Text → Add text',
      'Scrie un mesaj simplu: „Știai asta?”, „Greșeala pe care o fac mulți”, „Uite cum poți…”',
      'Font simplu: Montserrat sau Poppins',
      'Textul ajută oamenii să înțeleagă mai repede video-ul',
    ],
  },
  {
    title: 'Un mic truc ca video-ul să arate mai bine',
    body: [
      'Apasă pe video → Adjust',
      'Luminozitate: puțin mai sus',
      'Claritate: puțin',
      'Mic + simplu = mai profesionist',
    ],
  },
  {
    title: 'Muzica (opțional)',
    body: [
      'Apasă Audio și alege o melodie simplă',
      'Volumul muzicii: mai mic decât vocea',
      'Dacă vorbești în video, muzica doar în fundal',
    ],
  },
  {
    title: 'Cum salvezi corect',
    body: [
      'Apasă Export',
      'Calitate: 1080p',
      'Save to phone',
      'Apoi urci direct pe Instagram — nu trimite video-ul pe WhatsApp înainte',
    ],
  },
  {
    title: 'Ce să NU faci (foarte important)',
    body: [
      'Nu pune prea mult text',
      'Nu folosi multe fonturi',
      'Nu adăuga efecte exagerate',
      'Nu începe reel-ul prea lent',
      'Oamenii decid în primele 2 secunde dacă rămân',
    ],
  },
]

const closingNotes = [
  'Nu ai nevoie de editări complicate',
  'Nu ai nevoie să fii „expert în SMM”',
  'Ai nevoie de claritate, simplitate și consecvență',
  'Un reel simplu, făcut corect, aduce mai mulți clienți decât unul „super editat”.',
]

function App() {
  useEffect(() => {
    const stepElements = Array.from(document.querySelectorAll<HTMLElement>('.step'))

    if (stepElements.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.25 }
    )

    stepElements.forEach((step) => observer.observe(step))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page">
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />
      <header className="topbar">
        <span className="brand">Valeria SMM</span>
        <span className="pill">GHID SIMPLU CAPCUT</span>
      </header>

      <main className="hero">
        <section className="hero-copy">
          <p className="eyebrow">Cum să faci reel-uri ușor, chiar dacă NU te pricepi la social media</p>
          <h1>
            🎥 Ghid Simplu CapCut
            <span>Reel-uri curate, rapide și profesioniste direct de pe telefon.</span>
          </h1>
          <p className="lead">
            Acest ghid este creat pentru antreprenori ocupați care vor rezultate clare, fără editare complicată.
          </p>
          <div className="highlight">
            <h2>💡 Acest ghid este pentru tine dacă:</h2>
            <ul>
              {guideFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <aside className="hero-card">
          <img src={authorPortrait} alt="Portret Valeria" />
          <div>
            <p className="author-name">Valeria SMM</p>
            <p className="author-role">Creator ghid • Strateg Social Media</p>
          </div>
          <div className="author-note">
            <p>
              „Simplu și clar” este regula mea. Un reel bine structurat începe cu mișcare și se termină cu
              acțiune.
            </p>
          </div>
        </aside>

        <section className="steps">
          {steps.map((step, index) => (
            <article className="step" key={step.title}>
              <div className="step-number">{index + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <ul>
                  {step.body.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="closing">
          <h2>💬 Mesaj de la mine, Valeria</h2>
          <ul>
            {closingNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
