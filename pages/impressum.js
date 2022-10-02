import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { Email } from 'react-obfuscate-email'

export default function Imprint() {
  return (
    <>
      <PageSEO
        title={`Impressum - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1>Impressum</h1>
        </div>
        <div className="container py-12">
          <div>
            <p>Benjamin Hedrich</p>
            <p>An der Wildbahn 72</p>
            <p>13503 Berlin</p>
            <br />
            <p>Kontakt:</p>
            <p>
              Email: <Email email="ixdfscawfrc@ca.pagenotfound.de" />
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
