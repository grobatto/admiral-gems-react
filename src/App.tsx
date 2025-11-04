import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import logo from './assets/images/brand/logo-transparent.png';
import './i18n';

function App() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mwprnpjy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', company: '', country: '', product: '', quantity: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const getWhatsAppLink = () => {
    const message = encodeURIComponent(t('contact.whatsapp.message'));
    return `https://wa.me/59895052840?text=${message}`;
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.img
            src={logo}
            alt="Admiral Gems"
            className="w-32 h-32 mx-auto mb-8 drop-shadow-2xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-purple-900 font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              {t('hero.cta.catalog')}
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              {t('hero.cta.contact')}
            </motion.a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {['quality', 'direct', 'shipping'].map((badge) => (
              <div key={badge} className="text-white text-center">
                <p className="text-sm font-medium">{t(`hero.badges.${badge}`)}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              {t('products.exceptional.title')}
            </h2>
            <p className="text-xl text-gray-600">{t('products.exceptional.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { key: 'uruguayQuality', img: 'uruguay-quality.jpeg' },
              { key: 'cutBase', img: 'cut-base.jpeg' },
              { key: 'heart', img: 'heart.jpeg' },
              { key: 'premium', img: 'agate-polished-cut-base.jpeg' }
            ].map((product, index) => (
              <motion.div
                key={product.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="h-56 bg-gray-200 overflow-hidden">
                  <img
                    src={`/src/assets/images/products/${product.img}`}
                    alt={t(`products.exceptional.items.${product.key}.title`)}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23e5e7eb" width="300" height="300"/%3E%3C/svg%3E'
                    }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                    {t(`products.exceptional.items.${product.key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {t(`products.exceptional.items.${product.key}.description`)}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all text-sm"
                    onClick={() => {
                      const contactSection = document.querySelector('#contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {t('products.buttons.requestQuote')}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              {t('gallery.title')}
            </h2>
            <p className="text-xl text-gray-600">{t('gallery.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'gallery-1.jpeg',
              'gallery-2.jpeg',
              '01-mining-cantera-1.jpeg',
              '03-product-display-1.jpeg',
              'gallery-4.jpeg',
              '02-raw-en-bruto-1.jpeg'
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer bg-gray-200"
              >
                <img
                  src={`/src/assets/images/gallery/${img}`}
                  alt={`Galería ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Uruguay Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              {t('whyUruguay.title')}
            </h2>
            <p className="text-xl text-gray-600">{t('whyUruguay.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {['color', 'clarity', 'size', 'ethical'].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {t(`whyUruguay.features.${feature}.title`)}
                </h3>
                <p className="text-gray-600">{t(`whyUruguay.features.${feature}.description`)}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {['experience', 'quality', 'shipping'].map((stat) => (
              <div key={stat} className="py-6">
                <p className="text-2xl font-display font-bold text-purple-600 mb-2">
                  {t(`whyUruguay.stats.${stat}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('story.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{t('story.subtitle')}</p>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto text-lg mb-12">{t('story.content')}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {['quality', 'ethics', 'service'].map((value) => (
                <div key={value} className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <p className="text-lg">{t(`story.values.${value}`)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600">{t('contact.subtitle')}</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder={t('contact.form.placeholders.name')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none transition-colors"
              />
              <input
                type="email"
                placeholder={t('contact.form.placeholders.email')}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none transition-colors"
              />
              <input
                type="text"
                placeholder={t('contact.form.placeholders.company')}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                required
                className="px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none transition-colors"
              />
              <input
                type="text"
                placeholder={t('contact.form.placeholders.country')}
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                required
                className="px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none transition-colors"
              />
              <input
                type="text"
                placeholder={t('contact.form.placeholders.product')}
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none transition-colors"
              />
              <input
                type="number"
                placeholder={t('contact.form.placeholders.quantity')}
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none transition-colors"
              />
            </div>
            <textarea
              placeholder={t('contact.form.placeholders.message')}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none transition-colors resize-none"
            />
            <motion.button
              type="submit"
              disabled={formStatus === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all disabled:opacity-50"
            >
              {formStatus === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
            </motion.button>
            {formStatus === 'success' && (
              <p className="text-green-600 text-center font-medium">{t('contact.form.success')}</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-600 text-center font-medium">{t('contact.form.error')}</p>
            )}
          </motion.form>
        </div>
      </section>

      <Footer />

      {/* WhatsApp Float Button */}
      <motion.a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>
    </div>
  );
}

export default App;
