import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Goals } from './components/Goals'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Partners } from './components/Partners'
import { Sponsorship } from './components/Sponsorship'
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
          teamTitle={site.about.teamTitle}
          teamDescription={site.about.teamDescription}
          teamCoach={site.about.teamCoach}
          dreamQuote={site.about.dreamQuote}
        />
        <Achievements stats={site.stats} />
        <Goals title={site.goals.title} intro={site.goals.intro} items={site.goals.items} />
        <Partners
          title={site.partnerships.title}
          intro={site.partnerships.intro}
          bullets={site.partnerships.bullets}
          federations={site.partnerships.federations}
          sponsors={site.partnerships.sponsors}
        />
        <Gallery title={site.gallery.title} images={site.gallery.images} />
        <Sponsorship
          title={site.sponsorship.title}
          pitch={site.sponsorship.pitch}
          benefits={site.sponsorship.benefits}
        />
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
