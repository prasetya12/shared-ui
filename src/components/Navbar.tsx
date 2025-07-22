import React, { useState, useRef, useCallback, useEffect } from "react"
import { Button } from "./ui/button"
import Link from "./ui/link"

import { useTranslation } from "react-i18next"
import "../i18n"
import { getFullsiteUrl } from "../lib/utils"
import { API_URL_WEB, API_URL_BLOG, APP_URL } from "../contants/SiteUrl"

// Extract types to improve maintainability
type MenuItemType = {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

type MenuType = {
  title: string
  shortTitle: string
  image: string
  items: MenuItemType[]
  link?: string
}

type NavbarProps = {
  lang: string
  fullSiteUrl?: string
  fullBlogUrl?: string
}

export const NavbarPlexicus = ({
  lang: currentLang,
  fullSiteUrl = "http://localhost:8000",
  fullBlogUrl = "http://localhost:9000",
}: NavbarProps) => {
  const [lang, setLang] = useState("/")
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const { t, i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(currentLang)
    if (currentLang !== "en") {
      setLang(`/${currentLang}/`)
    } else {
      setLang("/")
    }
  }, []);

  // Add this near the other state variables at the top of the component
  const [isScrolled, setIsScrolled] = useState(false)

  // Add this useEffect hook to detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      // Change to solid background after scrolling down 50px
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Memoized menu handlers with proper timeout tracking
  const handleMenuEnter = useCallback((menu: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
      menuTimeoutRef.current = null
    }
    setActiveMenu(menu)
  }, [])

  // Track all timeouts in a ref to ensure proper cleanup
  const timeoutsRef = useRef<NodeJS.Timeout[]>([])

  const handleMenuLeave = useCallback(() => {
    const timeoutId = setTimeout(() => {
      setActiveMenu(null)
    }, 150)

    menuTimeoutRef.current = timeoutId
    timeoutsRef.current.push(timeoutId)
  }, [])

  useEffect(() => {
    return () => {
      // Clear the active menu timeout
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current)
      }

      // Clear all tracked timeouts
      timeoutsRef.current.forEach(clearTimeout)
      timeoutsRef.current = []
    }
  }, [])

  // For mobile, we'll use click instead of hover
  const handleMenuClick = useCallback(
    (menu: string) => {
      setActiveMenu(activeMenu === menu ? null : menu)
    },
    [activeMenu],
  )

  const WEB_URL = getFullsiteUrl(fullSiteUrl, API_URL_WEB)
  const BLOG_URL = getFullsiteUrl(fullBlogUrl, API_URL_BLOG)


  const menus: Record<string, MenuType> = {
    products: {
      title: t("nav.product.title") as string,
      shortTitle: t("footer.sections.products.title"),
      image: "product-diagram",
      items: [
        {
          title: t("nav.product.platform_overview"),
          description: t("nav.product.platform_overview_desc"),
          href: `${WEB_URL}${lang}products/cnapp-platform`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          ),
        },
        {
          title: t("nav.product.benefits"),
          description: t("nav.product.benefits_desc"),
          href: `${WEB_URL}${lang}products/benefits`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="m9 12 2 2 4-4" />
              <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
              <path d="M22 19H2" />
            </svg>
          ),
        },
        {
          title: t("nav.product.use_cases"),
          description: t("nav.product.use_cases_desc"),
          href: `${WEB_URL}${lang}products/use-cases`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          ),
        },
        {
          title: t("nav.product.aspm"),
          description: t("nav.product.aspm_desc"),
          href: `${WEB_URL}${lang}products/aspm`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          ),
        },
        {
          title: t("nav.product.cspm"),
          description: t("nav.product.cspm_desc"),
          href: `${WEB_URL}${lang}products/cspm`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
          ),
        },
        {
          title: t("nav.product.container_security"),
          description: t("nav.product.container_security_desc"),
          href: `${WEB_URL}${lang}products/container`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          ),
        },
        {
          title: t("nav.product.cwpp"),
          description: t("nav.product.cwpp_desc"),
          href: `${WEB_URL}${lang}products/cwpp`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <circle cx="12" cy="16" r="1" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          ),
        },
        {
          title: t("nav.product.ciem"),
          description: t("nav.product.ciem_desc"),
          href: `${WEB_URL}${lang}products/ciem`,
          icon: (

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cloud-cog-icon lucide-cloud-cog"><path d="m10.852 19.772-.383.924" /><path d="m13.148 14.228.383-.923" /><path d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" /><path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" /><path d="m14.772 15.852.923-.383" /><path d="m14.772 18.148.923.383" /><path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" /><path d="m9.228 15.852-.923-.383" /><path d="m9.228 18.148-.923.383" /></svg>
          ),
        },
      ],
    },
    solutions: {
      title: t("nav.solutions.title"),
      link: "/solutions",
      shortTitle: "Solutions",
      image: "solutions-diagram",
      items: [
        {
          title: t("nav.solutions.fintech"),
          description: t("nav.solutions.fintech_desc"),
          href: `${WEB_URL}${lang}solutions/fintech`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <line x1="2" x2="22" y1="10" y2="10"></line>
            </svg>
          ),
        },
        {
          title: t("nav.solutions.healthtech"),
          description: t("nav.solutions.healthtech_desc"),
          href: `${WEB_URL}${lang}solutions/healthtech`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          ),
        },
        {
          title: t("nav.solutions.hrtech"),
          description: t("nav.solutions.hrtech_desc"),
          href: `${WEB_URL}${lang}solutions/hrtech`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          ),
        },
        {
          title: t("nav.solutions.group_companies"),
          description: t("nav.solutions.group_companies_desc"),
          href: `${WEB_URL}${lang}solutions/group-companies`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          ),
        },
        {
          title: t("nav.solutions.agencies"),
          description: t("nav.solutions.agencies_desc"),
          href: `${WEB_URL}${lang}solutions/agencies`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          ),
        },
        {
          title: t("nav.solutions.startups"),
          description: t("nav.solutions.startups_desc"),
          href: `${WEB_URL}${lang}solutions/startups`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
          ),
        },
        {
          title: t("nav.solutions.enterprise"),
          description: t("nav.solutions.enterprise_desc"),
          href: `${WEB_URL}${lang}solutions/enterprise`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M2 20h20"></path>
              <path d="M5 20V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14"></path>
              <path d="M12 3v4"></path>
              <path d="M5 8h14"></path>
              <path d="M7 14h2"></path>
              <path d="M15 14h2"></path>
              <path d="M7 10h2"></path>
              <path d="M15 10h2"></path>
            </svg>
          ),
        },
        {
          title: t("nav.solutions.mobile_apps"),
          description: t("nav.solutions.mobile_apps_desc"),
          href: `${WEB_URL}${lang}solutions/mobile-apps`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
          ),
        },
        {
          title: t("nav.solutions.manufacturing"),
          description: t("nav.solutions.manufacturing_desc"),
          href: `${WEB_URL}${lang}solutions/manufacturing`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          ),
        },
        {
          title: t("nav.solutions.government"),
          description: t("nav.solutions.government_desc"),
          href: `${WEB_URL}${lang}solutions/government`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M2 20h20"></path>
              <path d="M12 4v6"></path>
              <path d="M4 20V10l8-6 8 6v10"></path>
              <path d="M15 12v8"></path>
              <path d="M9 12v8"></path>
            </svg>
          ),
        },
        {
          title: t("nav.solutions.retailtech"),
          description: t("nav.solutions.retailtech_desc"),
          href: `${WEB_URL}${lang}solutions/retailtech`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          ),
        },
      ],
    },
    developers: {
      title: t("nav.developers.title"),
      shortTitle: "Developers",
      image: "developers-diagram",
      items: [
        {
          title: t("nav.developers.documentation"),
          description: t("nav.developers.documentation_desc"),
          href: "https://docs.plexicus.com",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          ),
        },
        {
          title: t("nav.developers.api_references"),
          description: t("nav.developers.api_references_desc"),
          href: "https://docs.plexicus.com/api",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="m18 16 4-4-4-4" />
              <path d="m6 8-4 4 4 4" />
              <path d="m14.5 4-5 16" />
            </svg>
          ),
        },
        {
          title: t("nav.developers.github_apps"),
          description: t("nav.developers.github_apps_desc"),
          href: "https://github.com/apps/plexicus",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          ),
        },
        {
          title: t("nav.developers.plexalyzer_action"),
          description: t("nav.developers.plexalyzer_action_desc"),
          href: "https://github.com/marketplace/actions/plexicus-runner-action",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          ),
        },
      ],
    },
    resources: {
      title: t("nav.resources.title"),
      shortTitle: t("nav.resources.title"),
      image: "resources-diagram",
      items: [
        {
          title: t("nav.resources.blog"),
          description: t("nav.resources.blog_desc"),
          href: BLOG_URL,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
            </svg>
          ),
        },
        {
          title: t("nav.resources.youtube_channel"),
          description: t("nav.resources.youtube_channel_desc"),
          href: "https://youtube.com/@plexicus",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          ),
        },
        {
          title: t("nav.resources.branding_assets"),
          description: t("nav.resources.branding_assets_desc"),
          href: `${WEB_URL}${lang}branding-assets`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M12 19c.5 0 1-.1 1.4-.4.8-.4 1.4-1.1 1.6-2 .3-1.4-.5-2.8-1.9-3.2-.3-.1-.6-.1-.9-.1-.5 0-1 .1-1.4.4-.8.4-1.4 1.1-1.6 2-.3 1.4.5 2.8 1.9 3.2.3.1.6.1.9.1z" />
              <path d="m14.5 12.5 2.7-2.7c1.2-1.2 1.8-2.7 1.8-4.3 0-3.1-2.5-5.5-5.5-5.5-1.6 0-3.1.6-4.3 1.8L6.5 4.5" />
              <path d="m4.5 6.5 2.7-2.7c.3-.3.6-.4 1-.4.8 0 1.5.7 1.5 0 .4-.1.7-.4 1 0L6.5 8.5" />
              <path d="m3.5 13.5 5-5" />
              <path d="m5 19 5-5" />
              <path d="m17.5 6.5-5 5" />
              <path d="m16 17-5-5" />
            </svg>
          ),
        },
        {
          title: t("nav.resources.changelogs"),
          description: t("nav.resources.changelogs_desc"),
          href: "https://plexicus.canny.io/changelog",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          ),
        },
        {
          title: t("nav.resources.feature_requests"),
          description: t("nav.resources.feature_requests_desc"),
          href: "https://plexicus.canny.io/feature-requests",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          ),
        },
        {
          title: t("nav.resources.integrations"),
          description: t("nav.resources.integrations_desc"),
          href: `${WEB_URL}${lang}integrations`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M9 12l2 2 4-4" />
              <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" />
              <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" />
              <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" />
              <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" />
            </svg>
          ),
        },
        {
          title: t("nav.resources.comparison_overview"),
          description: t("nav.resources.comparison_overview_desc"),
          href: `${WEB_URL}${lang}comparison/overview`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          ),
        },
        {
          title: t("nav.resources.support"),
          description: t("nav.resources.support_desc"),
          href: `${WEB_URL}${lang}support`,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-primary" fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></svg>
          ),
        },
      ],
    },
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300"
      style={{
        background: isScrolled ? "#8220ff" : "transparent",
        boxShadow: isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease-in-out",
        minHeight: "64px",
      }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center gap-2">
          <Link
            href={`${WEB_URL}${lang}`}
            className="flex items-center gap-2 overflow-visible"
            aria-label="Plexicus Home"
          >
            <div className="relative w-auto h-14 flex items-center">
              <img
                src="/images/plexicus-logo-white.png"
                alt="Plexicus Logo"
                className="object-contain max-h-full max-w-none"
                style={{
                  maxWidth: isScrolled ? "180px" : "220px",
                  transition: "max-width 0.3s ease-in-out",
                }}
              />
            </div>
          </Link>
        </div>

        <nav className="hidden xl:flex md:gap-4 lg:gap-6" aria-label="Main Navigation">
          {Object.entries(menus)
            .filter(([key]) => key === "products")
            .map(([key, menu]) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => handleMenuEnter(key)}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  className="text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap"
                  aria-expanded={activeMenu === key}
                  aria-haspopup="true"
                  onClick={() => handleMenuClick(key)}
                >
                  <span className="hidden xl:inline">{menu.title}</span>
                  <span className="xl:hidden">{menu.shortTitle}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 transition-transform duration-200 ${activeMenu === key ? "transform rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
            ))}
          <Link
            href={`${WEB_URL}${lang}pricing`}
            className="text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap"
          >
            {t("nav.pricing")}
          </Link>
          {Object.entries(menus)
            .filter(([key]) => key === "solutions" || key === "developers" || key === "resources")
            .map(([key, menu]) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => handleMenuEnter(key)}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  className="text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap"
                  aria-expanded={activeMenu === key}
                  aria-haspopup="true"
                  onClick={() => handleMenuClick(key)}
                >
                  <span className="hidden xl:inline">{menu.title}</span>
                  <span className="xl:hidden">{menu.shortTitle}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 transition-transform duration-200 ${activeMenu === key ? "transform rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </div>
            ))}
          <Link
            href={`${WEB_URL}${lang}contact`}
            className="text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap"
          >
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex flex-end">
          <div className="flex items-center gap-4">
            <Link
              href={`${APP_URL}/login`}
              className="text-sm font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap"
            >
              {t("nav.login")}
            </Link>
            <Link href={`${APP_URL}/register`}>
              <Button className="bg-white text-[#8220ff] font-medium px-4 lg:px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap">
                {t("nav.get_started")}
              </Button>
            </Link>
          </div>
          <button
            className="flex xl:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>



      </div>

      {/* Mega menu */}
      {activeMenu && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-30"
            onClick={() => setActiveMenu(null)}
            aria-hidden="true"
            style={{ top: "64px" }}
          ></div>
          <div
            className="absolute left-0 right-0 top-16 z-40 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 transform"
            onMouseEnter={() => handleMenuEnter(activeMenu)}
            onMouseLeave={handleMenuLeave}
            role="menu"
            aria-labelledby={`menu-button-${activeMenu}`}
          >
            <div className="container mx-auto py-8 px-4 md:px-6 max-w-7xl">
              <div className="flex flex-col md:flex-row">
                {/* Left side - Image and Text (stacked) */}
                <div className="w-full md:w-1/3 pr-0 md:pr-8 mb-6 md:mb-0 flex flex-col">
                  {/* Diagram section */}
                  <div className="relative h-36 md:h-40 w-full rounded-lg overflow-hidden bg-white border border-gray-100 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {activeMenu === "products" && (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 400 300"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* Background */}
                            <rect width="400" height="300" fill="white" />

                            {/* Dashboard UI */}
                            <rect
                              x="40"
                              y="30"
                              width="320"
                              height="240"
                              rx="12"
                              fill="white"
                              filter="url(#shadowEffect)"
                            />

                            {/* Top bar */}
                            <rect x="40" y="30" width="320" height="40" rx="12" fill="#8220ff" fillOpacity="0.9" />
                            <circle cx="65" cy="50" r="8" fill="white" fillOpacity="0.6" />
                            <circle cx="90" cy="50" r="8" fill="white" fillOpacity="0.6" />
                            <circle cx="115" cy="50" r="8" fill="white" fillOpacity="0.6" />

                            {/* Sidebar */}
                            <rect x="40" y="70" width="80" height="200" fill="#f5f5f7" />
                            <rect x="55" y="90" width="50" height="8" rx="4" fill="#8220ff" fillOpacity="0.7" />
                            <rect x="55" y="110" width="40" height="8" rx="4" fill="#8220ff" fillOpacity="0.5" />
                            <rect x="55" y="130" width="45" height="8" rx="4" fill="#8220ff" fillOpacity="0.5" />
                            <rect x="55" y="150" width="35" height="8" rx="4" fill="#8220ff" fillOpacity="0.5" />
                            <rect x="55" y="170" width="50" height="8" rx="4" fill="#8220ff" fillOpacity="0.5" />

                            {/* Main area */}
                            <rect x="140" y="90" width="200" height="70" rx="8" fill="#8220ff" fillOpacity="0.1" />
                            <rect x="155" y="105" width="170" height="40" rx="4" fill="#8220ff" fillOpacity="0.2" />
                            <circle cx="175" cy="125" r="15" fill="#8220ff" fillOpacity="0.8" />
                            <rect x="200" y="115" width="110" height="8" rx="4" fill="white" />
                            <rect x="200" y="130" width="80" height="6" rx="3" fill="white" fillOpacity="0.7" />

                            {/* Charts and statistics */}
                            <rect x="140" y="180" width="95" height="80" rx="8" fill="#f0f0f5" />
                            <path
                              d="M150 240 L170 220 L190 230 L210 200"
                              stroke="#8220ff"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                            <circle cx="170" cy="220" r="4" fill="#8220ff" />
                            <circle cx="190" cy="230" r="4" fill="#8220ff" />
                            <circle cx="210" cy="200" r="4" fill="#8220ff" />

                            <rect x="245" y="180" width="95" height="80" rx="8" fill="#f0f0f5" />
                            <circle
                              cx="293"
                              cy="220"
                              r="30"
                              fill="transparent"
                              stroke="#8220ff"
                              strokeWidth="8"
                              strokeDasharray="120 180"
                            />
                            <circle cx="293" cy="220" r="30" fill="transparent" stroke="#e0e0e5" strokeWidth="8" />
                            <text x="283" y="225" fontFamily="Arial" fontSize="12" fill="#8220ff" fontWeight="bold">
                              75%
                            </text>

                            {/* Decorative elements */}
                            <circle cx="320" cy="50" r="12" fill="white" fillOpacity="0.2" />
                            <path d="M314 50 L320 56 L326 50" stroke="white" strokeWidth="2" strokeLinecap="round" />

                            {/* Decorative particles */}
                            <circle cx="30" cy="30" r="5" fill="#8220ff" fillOpacity="0.5" />
                            <circle cx="350" cy="280" r="7" fill="#8220ff" fillOpacity="0.3" />
                            <circle cx="370" cy="50" r="4" fill="#8220ff" fillOpacity="0.4" />
                            <circle cx="20" cy="250" r="6" fill="#8220ff" fillOpacity="0.2" />

                            {/* Connection lines */}
                            <path
                              d="M15 100 C30 120, 20 150, 35 160"
                              stroke="#8220ff"
                              strokeWidth="1.5"
                              strokeDasharray="4 4"
                            />
                            <path
                              d="M370 120 C350 140, 360 170, 380 190"
                              stroke="#8220ff"
                              strokeWidth="1.5"
                              strokeDasharray="4 4"
                            />

                            {/* Definitions */}
                            <defs>
                              <filter
                                id="shadowEffect"
                                x="0"
                                y="0"
                                width="400"
                                height="300"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="6" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0.51 0 0 0 0 0.125 0 0 0 0 1 0 0 0 0.15 0"
                                />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                              </filter>
                            </defs>
                          </svg>
                        </div>
                      )}
                      {activeMenu === "solutions" && (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 400 300"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* White background */}
                            <rect width="400" height="300" fill="white" />

                            {/* Process flow diagram - minimalist style */}

                            {/* Central circle */}
                            <circle
                              cx="200"
                              cy="150"
                              r="40"
                              fill="#8220ff"
                              fillOpacity="0.1"
                              stroke="#8220ff"
                              strokeWidth="2"
                            />

                            {/* Process nodes */}
                            <circle cx="100" cy="150" r="25" fill="white" stroke="#8220ff" strokeWidth="2" />
                            <circle cx="300" cy="150" r="25" fill="white" stroke="#8220ff" strokeWidth="2" />
                            <circle cx="200" cy="70" r="25" fill="white" stroke="#8220ff" strokeWidth="2" />
                            <circle cx="200" cy="230" r="25" fill="white" stroke="#8220ff" strokeWidth="2" />

                            {/* Connection lines */}
                            <path d="M125 150 L160 150" stroke="#8220ff" strokeWidth="2" />
                            <path d="M240 150 L275 150" stroke="#8220ff" strokeWidth="2" />
                            <path d="M200 95 L200 130" stroke="#8220ff" strokeWidth="2" />
                            <path d="M200 170 L200 205" stroke="#8220ff" strokeWidth="2" />

                            {/* Directional arrows */}
                            <polygon points="158,145 158,155 168,150" fill="#8220ff" />
                            <polygon points="242,145 242,155 232,150" fill="#8220ff" />
                            <polygon points="195,128 205,128 200,138" fill="#8220ff" />
                            <polygon points="195,172 205,172 200,162" fill="#8220ff" />

                            {/* Node inner details */}
                            <circle cx="100" cy="150" r="10" fill="#8220ff" fillOpacity="0.3" />
                            <circle cx="300" cy="150" r="10" fill="#8220ff" fillOpacity="0.3" />
                            <circle cx="200" cy="70" r="10" fill="#8220ff" fillOpacity="0.3" />
                            <circle cx="200" cy="230" r="10" fill="#8220ff" fillOpacity="0.3" />

                            {/* Central node details */}
                            <circle cx="200" cy="150" r="20" fill="#8220ff" fillOpacity="0.2" />
                            <circle cx="200" cy="150" r="10" fill="#8220ff" fillOpacity="0.4" />

                            {/* Decorative elements */}
                            <circle cx="150" cy="100" r="5" fill="#8220ff" fillOpacity="0.2" />
                            <circle cx="250" cy="100" r="5" fill="#8220ff" fillOpacity="0.2" />
                            <circle cx="150" cy="200" r="5" fill="#8220ff" fillOpacity="0.2" />
                            <circle cx="250" cy="200" r="5" fill="#8220ff" fillOpacity="0.2" />
                          </svg>
                        </div>
                      )}
                      {activeMenu === "resources" && (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 400 300"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* Background */}
                            <rect width="400" height="300" fill="white" />

                            {/* Main elements */}
                            <g filter="url(#resourcesShadow)">
                              {/* Central book */}
                              <rect x="140" y="80" width="120" height="140" rx="4" fill="url(#bookGradient)" />
                              <rect
                                x="140"
                                y="80"
                                width="120"
                                height="140"
                                rx="4"
                                stroke="#8220ff"
                                strokeWidth="2"
                                fill="none"
                              />

                              {/* Book pages */}
                              <path d="M160 100 L240 100" stroke="#8220ff" strokeWidth="1" strokeOpacity="0.3" />
                              <path d="M160 120 L240 120" stroke="#8220ff" strokeWidth="1" strokeOpacity="0.3" />
                              <path d="M160 140 L240 140" stroke="#8220ff" strokeWidth="1" strokeOpacity="0.3" />
                              <path d="M160 160 L240 160" stroke="#8220ff" strokeWidth="1" strokeOpacity="0.3" />
                              <path d="M160 180 L240 180" stroke="#8220ff" strokeWidth="1" strokeOpacity="0.3" />

                              {/* Bookmark */}
                              <path d="M230 80 L230 110 L220 100 L210 110 L210 80" fill="#8220ff" fillOpacity="0.3" />

                              {/* Floating document - Documentation */}
                              <g transform="translate(-10, -10) rotate(-5)">
                                <rect
                                  x="80"
                                  y="120"
                                  width="80"
                                  height="100"
                                  rx="4"
                                  fill="white"
                                  stroke="#8220ff"
                                  strokeWidth="1.5"
                                />
                                <path d="M90 135 L150 135" stroke="#8220ff" strokeWidth="1" strokeOpacity="0.5" />
                                <path d="M90 150 L150 150" stroke="#8220ff" strokeWidth="1" strokeOpacity="0.5" />
                                <path d="M90 165 L150 165" stroke="#8220ff" strokeWidth="1" strokeOpacity="0.5" />
                                <path d="M90 180 L120 180" stroke="#8220ff" strokeWidth="1" strokeOpacity="0.5" />
                              </g>

                              {/* Video screen - Webinars */}
                              <g transform="translate(10, -10) rotate(5)">
                                <rect
                                  x="240"
                                  y="120"
                                  width="80"
                                  height="60"
                                  rx="4"
                                  fill="#f0f0f5"
                                  stroke="#8220ff"
                                  strokeWidth="1.5"
                                />
                                <polygon points="270,140 290,150 270,160" fill="#8220ff" />
                                <rect
                                  x="245"
                                  y="125"
                                  width="70"
                                  height="50"
                                  rx="2"
                                  stroke="#8220ff"
                                  strokeWidth="1"
                                  fill="none"
                                />
                              </g>
                            </g>

                            {/* Decorative elements */}
                            <circle cx="200" cy="50" r="15" fill="#8220ff" fillOpacity="0.1" />
                            <circle cx="200" cy="50" r="10" fill="#8220ff" fillOpacity="0.2" />
                            <circle cx="200" cy="50" r="5" fill="#8220ff" fillOpacity="0.3" />

                            {/* Sparkle particles */}
                            <circle cx="150" cy="60" r="2" fill="#8220ff" fillOpacity="0.6" />
                            <circle cx="250" cy="60" r="2" fill="#8220ff" fillOpacity="0.6" />
                            <circle cx="120" cy="150" r="2" fill="#8220ff" fillOpacity="0.6" />
                            <circle cx="280" cy="150" r="2" fill="#8220ff" fillOpacity="0.6" />

                            {/* Definitions */}
                            <defs>
                              <linearGradient
                                id="bookGradient"
                                x1="140"
                                y1="80"
                                x2="260"
                                y2="220"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0%" stopColor="#f0f0f5" />
                                <stop offset="100%" stopColor="#ffffff" />
                              </linearGradient>

                              <filter id="resourcesShadow" x="-10%" y="-10%" width="120%" height="120%">
                                <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#8220ff" floodOpacity="0.2" />
                              </filter>
                            </defs>
                          </svg>
                        </div>
                      )}
                      {activeMenu === "developers" && (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 400 300"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* Background */}
                            <rect width="400" height="300" fill="white" />

                            {/* Code Editor Window */}
                            <rect x="20" y="20" width="280" height="200" rx="8" fill="#1E1E1E" />

                            {/* Editor Header */}
                            <rect x="20" y="20" width="280" height="30" rx="8" fill="#333333" />
                            <circle cx="40" cy="35" r="6" fill="#FF5F56" />
                            <circle cx="60" cy="35" r="6" fill="#FFBD2E" />
                            <circle cx="80" cy="35" r="6" fill="#27C93F" />

                            {/* Code Lines */}
                            <rect x="40" y="70" width="120" height="10" rx="2" fill="#9CDCFE" fillOpacity="0.7" />
                            <rect x="40" y="90" width="180" height="10" rx="2" fill="#CE9178" fillOpacity="0.7" />
                            <rect x="60" y="110" width="200" height="10" rx="2" fill="#6A9955" fillOpacity="0.7" />
                            <rect x="60" y="130" width="160" height="10" rx="2" fill="#569CD6" fillOpacity="0.7" />
                            <rect x="40" y="150" width="140" height="10" rx="2" fill="#DCDCAA" fillOpacity="0.7" />
                            <rect x="60" y="170" width="180" height="10" rx="2" fill="#4EC9B0" fillOpacity="0.7" />
                            <rect x="40" y="190" width="160" height="10" rx="2" fill="#C586C0" fillOpacity="0.7" />

                            {/* Line Numbers */}
                            <text x="30" y="75" fontSize="10" fill="#858585">
                              1
                            </text>
                            <text x="30" y="95" fontSize="10" fill="#858585">
                              2
                            </text>
                            <text x="30" y="115" fontSize="10" fill="#858585">
                              3
                            </text>
                            <text x="30" y="135" fontSize="10" fill="#858585">
                              4
                            </text>
                            <text x="30" y="155" fontSize="10" fill="#858585">
                              5
                            </text>
                            <text x="30" y="175" fontSize="10" fill="#858585">
                              6
                            </text>
                            <text x="30" y="195" fontSize="10" fill="#858585">
                              7
                            </text>

                            {/* Terminal Window */}
                            <rect x="80" y="130" width="310" height="130" rx="8" fill="#1E1E1E" filter="url(#shadow)" />

                            {/* Terminal Header */}
                            <rect x="80" y="130" width="310" height="25" rx="8" fill="#333333" />
                            <text x="235" y="147" fontSize="12" fill="#FFFFFF" textAnchor="middle">
                              Terminal
                            </text>

                            {/* Terminal Content */}
                            <text x="90" y="170" fontSize="9" fill="#CCCCCC" fontFamily="monospace">
                              $ git clone https://github.com/plexicus/plexicus-sdk.git
                            </text>
                            <text x="90" y="185" fontSize="9" fill="#CCCCCC" fontFamily="monospace">
                              Cloning into 'plexicus-sdk'...
                            </text>
                            <text x="90" y="200" fontSize="9" fill="#CCCCCC" fontFamily="monospace">
                              remote: Counting objects: 100% (1234/1234)
                            </text>
                            <text x="90" y="215" fontSize="9" fill="#CCCCCC" fontFamily="monospace">
                              $ cd plexicus-sdk && npm install
                            </text>
                            <text x="90" y="230" fontSize="9" fill="#CCCCCC" fontFamily="monospace">
                              added 1024 packages in 4.2s
                            </text>
                            <text x="90" y="245" fontSize="9" fill="#CCCCCC" fontFamily="monospace">
                              $ npm run dev
                            </text>

                            {/* GitHub Icon */}
                            <g transform="translate(320, 240) scale(0.8)">
                              <circle cx="0" cy="0" r="25" fill="white" />
                              <path
                                d="M0 -20c-11.046 0-20 8.954-20 20 0 8.837 5.732 16.338 13.678 18.98 1 .184 1.365-.434 1.365-.964 0-.476-.018-1.733-.027-3.4-5.564 1.21-6.736-2.68-6.736-2.68-.91-2.31-2.22-2.924-2.22-2.924-1.815-1.24.137-1.215.137-1.215 2.006.14 3.06 2.06 3.06 2.06 1.783 3.057 4.675 2.174 5.815 1.663.18-1.29.697-2.174 1.268-2.674-4.442-.505-9.112-2.22-9.112-9.87 0-2.18.78-3.964 2.06-5.36-.207-.505-.893-2.54.195-5.29 0 0 1.68-.538 5.5 2.05 1.595-.443 3.305-.665 5.005-.673 1.7.008 3.41.23 5.005.673 3.82-2.588 5.495-2.05 5.495-2.05 1.09 2.75.405 4.785.198 5.29 1.28 1.396 2.055 3.18 2.055 5.36 0 7.67-4.677 9.36-9.13 9.855.718.62 1.358 1.842 1.358 3.712 0 2.68-.024 4.84-.024 5.5 0 .535.36 1.16 1.375.964C14.275 16.33 20 8.83 20 0 20-11.046 11.046-20 0-20z"
                                fill="#1B1F23"
                                transform="translate(0, 0)"
                              />
                            </g>

                            {/* Shadow filter */}
                            <defs>
                              <filter id="shadow" x="0" y="0" width="400" height="300" filterUnits="userSpaceOnUse">
                                <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.3" />
                              </filter>
                            </defs>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text section */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-xl font-bold text-[#8220ff]">
                      {menus[activeMenu as keyof typeof menus].title}
                    </h3>
                    <p className="text-gray-700">
                      {activeMenu === "products"
                        ? t("nav.product.explore")
                        : activeMenu === "solutions"
                          ? t("nav.solutions.explore")
                          : t("nav.resources.explore")}
                    </p>
                  </div>
                </div>

                {/* Right side - Menu items */}
                <div className="w-full md:w-2/3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {menus[activeMenu as keyof typeof menus].items
                      .filter((item) => activeMenu !== "resources" || !item.title.startsWith("vs "))
                      .map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className="w-12 h-12 bg-[#8220ff]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#8220ff]/20 transition-colors">
                            {React.cloneElement(item.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { width: 16, height: 16 })}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-[#8220ff] transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile menu */}
      {menuOpen && <div className="fixed inset-0 bg-black/20 z-40 xl:hidden" onClick={() => setMenuOpen(false)}></div>}
      <div
        className={`xl:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ top: "64px", height: "calc(100vh - 64px)", overflow: "auto" }}
      >
        <div className="overflow-y-auto h-full p-4 pb-20">
          <div className="space-y-4">
            {Object.entries(menus).map(([key, menu]) => (
              <div key={key} className="space-y-2">
                <h3 className="font-semibold">{menu.title}</h3>
                <div className="grid grid-cols-1 gap-2">
                  {menu.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-md mr-2 flex items-center justify-center">
                        {React.cloneElement(item.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { width: 16, height: 16 })}
                      </div>
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link
              href={`${WEB_URL}${lang}pricing`}
              className="block py-2 text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.pricing")}
            </Link>
            <Link
              href={`${WEB_URL}${lang}contact`}
              className="block py-2 text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            <div className="pt-4 border-t border-gray-100">
              <Button className="w-full bg-gradient-primary" onClick={() => setMenuOpen(false)}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
