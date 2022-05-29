import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXing, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Icons taken from: https://simpleicons.org/

const icons = {
  github: faGithub,
  linkedin: faLinkedin,
  xing: faXing,
  mail: faEnvelope,
}

const SocialIcon = ({ kind, href, size = '2x' }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <FontAwesomeIcon
        icon={icons[kind]}
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 `}
        size={size}
      />
    </a>
  )
}

export default SocialIcon
