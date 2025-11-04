import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Admiral Gems Uruguay</h3>
            <p className="text-gray-400">{t('footer.tagline')}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t('contact.title')}</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: {t('contact.info.email')}</p>
              <p>WhatsApp: {t('contact.info.whatsapp')}</p>
              <p>Instagram: {t('contact.info.instagram')}</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                {t('footer.links.privacy')}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                {t('footer.links.terms')}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                {t('footer.links.shipping')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Admiral Gems Uruguay. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
}
