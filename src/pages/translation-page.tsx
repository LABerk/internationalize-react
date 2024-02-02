import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'



export const TranslationPage = () => {
  const { t, i18n } = useTranslation()
  const { state } = useLocation()
  const name = state?.name || 'Traveller'

  const translate = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  console.log(state)

  const languageOptions = [
    { value: 'en', label: t('languageLabels.english') },
    { value: 'es', label: t('languageLabels.spanish') },
    { value: 'ar', label: t('languageLabels.arabic') },
    { value: 'cy', label: t('languageLabels.welsh') },
    { value: 'de', label: t('languageLabels.german') },
    { value: 'fr', label: t('languageLabels.french') },
    { value: 'hi', label: t('languageLabels.hindi') },
    { value: 'ru', label: t('languageLabels.russian') },
    { value: 'vi', label: t('languageLabels.vietnamese') },
    { value: 'zh', label: t('languageLabels.chinese') },
  ];

  console.log(name)

  return (
    <>
      <div>
      </div>
      <h1>{t('helloWorld')}</h1>
      <p>{t('andWelcome', { name })}</p>
      <p>{t('instructionText')}</p>

      <select onChange={(e) => translate(e.target.value)}>
        {languageOptions.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </>
  )
}