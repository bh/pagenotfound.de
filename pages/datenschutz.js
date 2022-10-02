import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function PrivacyPolicy() {
  return (
    <>
      <PageSEO
        title={`Datenschutzerklärung - ${siteMetadata.author}`}
        description={siteMetadata.description}
        index={false}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1>Datenschutzerklärung</h1>
        </div>
        <div className="container py-12">
          <div>
            Es findet weder Tracking statt noch werden externe Ressourcen eingebunden (Webfonts oder
            Javascripte von CDNs etc.) die Tracking ermöglichen würden. Es werden keine Cookies
            verwendet und keine IPs in irgendwelchen Logfiles gespeichert. Somit werden keine
            personenbezogen Daten erhoben. Der Server ist in Deutschland gehostet.
          </div>
        </div>
      </div>
    </>
  )
}
