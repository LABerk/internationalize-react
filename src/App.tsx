import './App.css'
import { useTranslation } from 'react-i18next'

export const App = () => {
  const { t, i18n } = useTranslation()

  const translate = (lang: string) => {
    i18n.changeLanguage(lang)
  }

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

  const name = 'Laura'

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