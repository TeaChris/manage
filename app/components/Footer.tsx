import { companyLinks, supportLinks, resources, contact } from '@/data'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="w-full h-[27rem] bg-blue-100">
      <div className="container mx-auto flex flex-col gap-9">
        <div className="flex items-start justify-between pt-28 px-16">
          <div className="flex flex-col items-start gap-6">
            <h4 className="font-bold text-2xl capitalize">company</h4>
            <ul className="flex flex-col items-start gap-4">
              {companyLinks.map((company) => {
                const { id, title, url } = company
                return (
                  <li key={id}>
                    <Link
                      href={url}
                      className="text-blue-700 capitalize font-normal"
                    >
                      {title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* support */}
          <div className="flex flex-col items-start gap-6">
            <h4 className="font-bold text-2xl capitalize">support</h4>
            <ul className="flex flex-col items-start gap-4">
              {supportLinks.map((support) => {
                const { id, title, url } = support
                return (
                  <li key={id}>
                    <Link
                      href={url}
                      className="text-blue-700 capitalize font-normal"
                    >
                      {title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* resources */}
          <div className="flex flex-col items-start gap-6">
            <h4 className="font-bold text-2xl capitalize">resources</h4>
            <ul className="flex flex-col items-start gap-4">
              {resources.map((resource) => {
                const { id, title, url } = resource
                return (
                  <li key={id}>
                    <Link
                      href={url}
                      className="text-blue-700 capitalize font-normal"
                    >
                      {title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* resources */}
          <div className="flex flex-col items-start gap-6">
            <h4 className="font-bold text-2xl capitalize">contact</h4>
            <ul className="flex flex-col items-start gap-4">
              {contact.map((contact) => {
                const { id, title, url } = contact
                return (
                  <li key={id}>
                    <Link href={url} className="text-blue-700 font-normal">
                      {title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="w-full flex items-center justify-between pb-4">
          <p className="capitalize">{`${currentYear} all right reserved`}</p>
          <div className="flex items-center gap-4">
            <p className="capitalize">privacy policy</p>
            <p className="capitalize">terms of use</p>
            <p className="capitalize">cookie policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
