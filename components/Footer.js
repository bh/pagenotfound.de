import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="2x" />
          <SocialIcon kind="github" href={siteMetadata.github} size="2x" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="2x" />
          <SocialIcon kind="xing" href={siteMetadata.twitter} size="2x" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/impressum">Impressum</Link>
          <div>{` • `}</div>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  )
}
