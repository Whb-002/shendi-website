import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollAnimation';
import { NAV_ITEMS, COMPANY } from '@/utils/constants';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled } = useScrollPosition();

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-surface-dark/90 backdrop-blur-xl border-b border-primary/20 shadow-[0_1px_20px_rgba(0,212,255,0.08)]'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold gradient-text tracking-wide">
              {COMPANY.name}
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg',
                      isActive
                        ? 'text-primary'
                        : 'text-text-secondary hover:text-white'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center">
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <Phone size={16} />
              <span>{COMPANY.phone}</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-white transition-colors"
            aria-label="菜单"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-white/10 overflow-hidden"
          >
            <ul className="container mx-auto px-6 py-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block py-3 px-4 rounded-lg text-base font-medium transition-colors',
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-text-secondary hover:text-white hover:bg-white/5'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-medium"
                >
                  <Phone size={18} />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
