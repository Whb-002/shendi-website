import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY, QUICK_LINKS, SERVICE_LINKS } from '@/utils/constants';

export default function Footer() {
  return (
    <footer className="bg-surface-dark">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block mb-5">
              <span className="font-display text-xl font-bold gradient-text tracking-wide">
                {COMPANY.name}
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              {COMPANY.description}
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-5 text-sm tracking-wider uppercase">
              快速链接
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-5 text-sm tracking-wider uppercase">
              服务项目
            </h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-text-secondary hover:text-primary transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-5 text-sm tracking-wider uppercase">
              联系方式
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-text-secondary text-sm">{COMPANY.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  <Phone size={16} className="text-primary shrink-0" />
                  <span>{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  <Mail size={16} className="text-primary shrink-0" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-text-secondary text-sm">{COMPANY.workHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-text-muted text-sm text-center">
            &copy; {COMPANY.year} {COMPANY.fullName} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
