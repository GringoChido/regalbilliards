'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

// Placeholder for future chat integration (Crisp, Intercom, or Chatwoot)
// Will support bilingual flows for:
// - Sales qualification (table sizing, style preference, lead capture)
// - Service scheduling (service type, table size, location, scheduling)
// Both flows should detect locale and respond accordingly

const ChatWidget = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const t = useTranslations('Common');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-16 right-0 bg-surface border border-border rounded-lg px-4 py-2 shadow-lg whitespace-nowrap"
          >
            <p className="text-sm text-text-muted">{t('chatComingSoon')}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="bg-accent hover:bg-accent-hover text-primary w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        aria-label={t('chatComingSoon')}
      >
        {showTooltip ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default ChatWidget;
