import { SelectLanguage } from './ui/select-language';
import Link from './ui/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import { getFullsiteUrl } from '../lib/utils';
import { API_URL_WEB, API_URL_BLOG } from '../contants/SiteUrl';

interface FooterProps {
  lang: string,
  fullSiteUrl?: string,
  fullBlogUrl?: string
}


export function FooterPlexicus({ lang: currentLang, fullSiteUrl = 'http://localhost:8000', fullBlogUrl = 'http://localhost:9000' }: FooterProps) {
  const [lang, setLang] = useState("/");
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(currentLang);
    if (currentLang !== 'en') {
      setLang(`/${currentLang}/`)
    } else {
      setLang("/")
    }
  }, []);
  const WEB_URL = getFullsiteUrl(fullSiteUrl, API_URL_WEB)
  const BLOG_URL = getFullsiteUrl(fullBlogUrl, API_URL_BLOG)

  const socialItems = [
    {
      alt: t('footer.social_media.twitter'),
      link: "https://x.com/plexicus_ai/",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582l-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582l5.39-6.16ZM16.5 19L6 5h1.5L18 19z"/></g></svg>
    },
    {
      alt: t('footer.social_media.linkedin'),
      link: "https://www.linkedin.com/company/plexicus/",
      icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
          clipRule="evenodd"
        />
      </svg>
    },
    {
      alt: t('footer.social_media.github'),
      link: "https://github.com/apps/plexicus",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><path fill="currentColor" d="M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2c-1.4-3.5-3.5-4.5-3.5-4.5c-2.8-2 .1-2 .1-2c3.1.1 4.8 3.2 4.8 3.2c2.7 4.8 7.3 3.4 9 2.5c.3-2 1.1-3.4 2-4.2c-6.8-.7-14.1-3.4-14.1-15.2c0-3.4 1.3-6.1 3.2-8.2c-.3-.7-1.4-3.9.3-8.2c0 0 2.7-.8 8.6 3.2c2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2c1.7 4.2.7 7.5.3 8.2c2 2.1 3.2 4.9 3.2 8.2c0 11.8-7.3 14.5-14.1 15.2c1.1 1 2.1 3 2.1 5.8c0 4.2-.1 7.5-.1 8.5c0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8"/></svg>
    },
    {
      alt: t('footer.social_media.instagram'),
      link: "https://www.instagram.com/plexicus_ai/",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><path fill="currentColor" d="M62.9 19.2c-.1-3.2-.7-5.5-1.4-7.6S59.7 7.8 58 6.1s-3.4-2.7-5.4-3.5s-4.2-1.3-7.6-1.4C41.5 1 40.5 1 32 1s-9.4 0-12.8.1s-5.5.7-7.6 1.4s-3.8 1.9-5.5 3.6s-2.8 3.4-3.5 5.5c-.8 2-1.3 4.2-1.4 7.6S1 23.5 1 32s0 9.4.1 12.8s.7 5.5 1.4 7.6s1.8 3.8 3.5 5.5s3.5 2.8 5.5 3.5s4.2 1.3 7.6 1.4c3.4.2 4.3.2 12.8.2s9.4 0 12.8-.1s5.5-.7 7.6-1.4s3.8-1.8 5.5-3.5s2.8-3.5 3.5-5.5s1.3-4.2 1.4-7.6c.1-3.2.1-4.2.1-12.7s.2-9.6.1-13m-5.6 25.3c-.1 3-.7 4.6-1.1 5.8c-.6 1.4-1.3 2.5-2.4 3.5c-1.1 1.1-2.1 1.7-3.5 2.4c-1.1.4-2.7 1-5.8 1.1H32.1c-8.2 0-9.3 0-12.5-.1c-3-.1-4.6-.7-5.8-1.1c-1.4-.6-2.5-1.3-3.5-2.4c-1.1-1.1-1.7-2.1-2.4-3.5c-.4-1.1-1-2.7-1.1-5.8V32c0-8.3 0-9.3.1-12.5c.1-3 .7-4.6 1.1-5.8c.6-1.4 1.3-2.5 2.3-3.5c1.1-1.1 2.1-1.7 3.5-2.3c1.1-.4 2.7-1 5.8-1.1c3.2-.1 4.2-.1 12.5-.1s9.3 0 12.5.1c3 .1 4.6.7 5.8 1.1c1.4.6 2.5 1.3 3.5 2.3c1.1 1.1 1.7 2.1 2.4 3.5c.4 1.1 1 2.7 1.1 5.8c.1 3.2.1 4.2.1 12.5s-.1 9.3-.2 12.5"/><path fill="currentColor" d="M32 16.1c-8.9 0-15.9 7.2-15.9 15.9c0 8.9 7.2 15.9 15.9 15.9s16-7 16-15.9s-7.1-15.9-16-15.9m0 26.3c-5.8 0-10.4-4.7-10.4-10.4S26.3 21.6 32 21.6c5.8 0 10.4 4.6 10.4 10.4S37.8 42.4 32 42.4"/><circle cx="48.7" cy="15.4" r="3.7" fill="currentColor"/></svg>
    }
  ];
  const footerItems = [
    {
      title: t('footer.sections.products.title'),
      items: [
        {
          link: `${WEB_URL}${lang}products/cnapp-platform`,
          text: t('footer.sections.products.links.platform_overview')
        },
        {
          link: `${WEB_URL}${lang}products/benefits`,
          text: t('footer.sections.products.links.benefits')
        },
        {
          link: `${WEB_URL}${lang}products/use-cases`,
          text: t('footer.sections.products.links.use_cases')
        },
        {
          link: `${WEB_URL}${lang}products/aspm`,
          text: t('footer.sections.products.links.aspm')
        },
        {
          link: `${WEB_URL}${lang}products/cspm`,
          text: t('footer.sections.products.links.cspm')
        },
        {
          link: `${WEB_URL}${lang}products/container`,
          text: t('footer.sections.products.links.container_security')
        },
        {
          link: `${WEB_URL}${lang}products/cwpp`,
          text: t('footer.sections.products.links.cwpp')
        },
        {
          link: `${WEB_URL}${lang}/products/ciem`,
          text: t('footer.sections.products.links.ciem')
        }
      ]
    },
    {
      title: t('footer.sections.resources.title'),
      items: [
        {
          link: `${BLOG_URL}`,
          text: t('footer.sections.resources.links.blog')
        },
        {
          link: 'https://docs.plexicus.com/',
          text: t('footer.sections.resources.links.documentation')
        },
        {
          text: t("nav.resources.changelogs"),
          link: "https://plexicus.canny.io/changelog",
        },
        {
          text: t("nav.resources.youtube_channel"),
          link: "https://youtube.com/@plexicus",
        },
        {
          text: t("nav.resources.feature_requests"),
          link: "https://plexicus.canny.io/feature-requests",
        }
      ]
    },
    {
      title: t('footer.sections.company.title'),
      items: [
        {
          link: `${WEB_URL}${lang}contact`,
          text: t('footer.sections.company.links.contact')
        },
        {
          link: `${WEB_URL}${lang}privacy`,
          text: t('footer.sections.company.links.privacy_policy')
        },
        {
          link: `${WEB_URL}${lang}pricing`,
          text: t('footer.sections.products.links.pricing')
        },
        {
          link: `${WEB_URL}${lang}support`,
          text: t("nav.resources.support")
        }
      ]
    }
  ]
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 pt-12 pb-6">
        <div id="footer-grid" className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href={`${WEB_URL}${lang}`} className="flex items-center gap-2 mb-4">
              <img src="/images/plexicus-logo-color.png" alt="Plexicus S.L." className="h-10 w-auto" />
            </Link>
            <p className="text-gray-600 mb-4 max-w-sm">{t('footer.tagline')}</p>
            <div id="social_links" className="flex justify-start items-center gap-4">
              {socialItems.map(({ link, icon, alt }) => (
                <Link target='_blank' href={link} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{alt}</span>
                  {icon}
                </Link>
              ))}
            </div>
            <div className='mt-6'>
              <SelectLanguage />
            </div>
          </div>

          {footerItems.map(({ title, items }) => (
            <div>
              <h3 className="text-sm font-semibold text-purple-700 tracking-wider uppercase mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map(({ link, text }) => (
                  <li>
                    <Link href={link} className="text-gray-600 hover:text-purple-700">
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-500 text-sm">
              &copy; 2025 PLEXICUS, S.L
              <Link href={`${WEB_URL}${lang}privacy`} className="underline hover:text-gray-700 ml-4">
                {t('footer.policies.privacy_policy')}
              </Link>{' '}
              ·{' '}
              <Link href={`${WEB_URL}${lang}management`} className="underline hover:text-gray-700">
                {t('footer.policies.management_policy')}
              </Link>{' '}
              ·{' '}
              <Link href={`${WEB_URL}${lang}legal`} className="underline hover:text-gray-700">
                {t('footer.policies.legal_notice')}
              </Link>
            </p>
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t('footer.readiness')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
