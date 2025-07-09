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

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href={`${WEB_URL}${lang}`} className="flex items-center gap-2 mb-4">
              <img src="/images/plexicus-logo-color.png" alt="Plexicus ASPM" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-600 mb-4 max-w-sm">{t('footer.tagline')}</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{t('footer.social_media.twitter')}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{t('footer.social_media.linkedin')}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="https://github.com/apps/plexicus" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{t('footer.social_media.github')}</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className='mt-6'>
              <SelectLanguage />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">{t('footer.sections.products.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`${WEB_URL}${lang}aspm-overview`} className="text-gray-600 hover:text-gray-900">
                  {t('footer.sections.products.links.aspm_overview')}
                </Link>
              </li>
              <li>
                <Link href={`${WEB_URL}${lang}benefits`} className="text-gray-600 hover:text-gray-900">
                  {t('footer.sections.products.links.benefits')}
                </Link>
              </li>
              <li>
                <Link href={`${WEB_URL}${lang}use-cases`} className="text-gray-600 hover:text-gray-900">
                  {t('footer.sections.products.links.use_cases')}
                </Link>
              </li>
              <li>
                <Link href={`${WEB_URL}${lang}pricing`} className="text-gray-600 hover:text-gray-900">
                  {t('footer.sections.products.links.pricing')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">{t('footer.sections.resources.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`${BLOG_URL}`} className="text-gray-600 hover:text-gray-900">
                  {t('footer.sections.resources.links.blog')}
                </Link>
              </li>
              <li>
                <Link href='https://docs.plexicus.com/' className="text-gray-600 hover:text-gray-900">
                  {t('footer.sections.resources.links.documentation')}
                </Link>
              </li>
              <li>
                <Link href={`${WEB_URL}${lang}case-studies`} className="text-gray-600 hover:text-gray-900">
                  {t('footer.sections.resources.links.case_studies')}
                </Link>
              </li>
              <li>
                <Link href={`${WEB_URL}${lang}security-resources`} className="text-gray-600 hover:text-gray-900">
                  {t('footer.sections.resources.links.security_resources')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">{t('footer.sections.company.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`${WEB_URL}${lang}about`} className="text-gray-600 hover:text-gray-900">
                  {t('footer.sections.company.links.about_us')}
                </Link>
              </li>
              <li>
                <Link href={`${WEB_URL}${lang}contact`} className="text-gray-600 hover:text-gray-900">
                  {t('footer.sections.company.links.contact')}
                </Link>
              </li>
              <li>
                <Link href={`${WEB_URL}${lang}careers`} className="text-gray-600 hover:text-gray-900">
                  {t('footer.sections.company.links.careers')}
                </Link>
              </li>
              <li>
                <Link href={`${WEB_URL}${lang}privacy`} className="text-gray-600 hover:text-gray-900">
                  {t('footer.sections.company.links.privacy_policy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-500 text-sm">
              &copy; 2025 PLEXICUS, LLC.{' '}
              <Link href={`${WEB_URL}${lang}privacy`} className="underline hover:text-gray-700">
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
