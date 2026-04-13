import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Partners } from './components/Partners'
import { site } from './content/site'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header brandName={site.brand.name} nav={site.nav} />
      <main id="main">
        <Hero
          fullName={site.athlete.fullName}
          tagline={site.athlete.tagline}
          belt={site.athlete.belt}
          club={site.athlete.club}
          heroImage={site.athlete.heroImage}
          heroImageAlt={site.athlete.heroImageAlt}
          social={site.contact.social}
          heroCta={site.heroCta}
        />
        <About
          title={site.about.title}
          lead={site.about.lead}
          paragraphs={site.about.paragraphs}
          values={site.about.values}
        />
        <Achievements stats={site.stats} />
        <Partners
          title={site.partnerships.title}
          intro={site.partnerships.intro}
          bullets={site.partnerships.bullets}
          federations={site.partnerships.federations}
          sponsors={site.partnerships.sponsors}
        />
        <Gallery title={site.gallery.title} images={site.gallery.images} />
        <Contact
          title={site.contact.title}
          lead={site.contact.lead}
          email={site.contact.email}
          phone={site.contact.phone}
          ctaPrimary={site.contact.ctaPrimary}
          social={site.contact.social}
        />
      </main>
      <Footer rights={site.footer.rights} note={site.footer.note} />
    </>
  )
}

export default App
