import { useI18n } from '@/i18n/I18nProvider';

const copy = {
  en: {
    experience: 'Experience', beyond: 'Beyond code', stack: 'Tech stack',
    available: 'Open to interesting opportunities',
    hero: 'I turn ideas into intelligent digital products.',
    supporting: 'Building software, engineering experiences and exploring the future of artificial intelligence.',
    work: 'Explore my work', connect: 'Let’s connect', story: 'More than a developer. A builder.',
    selected: 'Selected work', allProjects: 'Inside the engineering lab', viewAll: 'View all projects',
    philosophy: 'Engineering is more than writing code.',
    future: 'The future is something we build.', contact: 'Have an idea worth building?',
    contactText: 'I’m always interested in meaningful projects, ambitious ideas and opportunities to collaborate with people building the future.',
    copy: 'Copy email', copied: 'Email copied', failed: 'Select the email below to copy it.',
    details: 'Project details', live: 'Visit project', close: 'Close project details',
    credentials: 'Always a student.', credentialsSub: 'Credentials & continuous learning',
    journey: 'The journey so far', people: 'A person, not just a stack.',
    purpose: 'Built with purpose.',
  },
  fr: {
    experience: 'Expérience', beyond: 'Au-delà du code', stack: 'Technologies',
    available: 'Ouvert aux nouvelles opportunités', hero: 'Je transforme les idées en produits numériques intelligents.',
    supporting: 'Créer des logiciels, concevoir des expériences et explorer le futur de l’intelligence artificielle.',
    work: 'Explorer mes projets', connect: 'Échangeons', story: 'Plus qu’un développeur. Un bâtisseur.',
    selected: 'Projets choisis', allProjects: 'Dans le laboratoire', viewAll: 'Tous les projets',
    philosophy: 'L’ingénierie, c’est plus que du code.', future: 'Le futur est ce que nous construisons.',
    contact: 'Une idée qui mérite de voir le jour ?', contactText: 'Les projets utiles, les idées ambitieuses et les collaborations avec ceux qui construisent le futur m’intéressent toujours.',
    copy: 'Copier l’email', copied: 'Email copié', failed: 'Sélectionnez l’email ci-dessous pour le copier.',
    details: 'Détails du projet', live: 'Voir le projet', close: 'Fermer les détails du projet',
    credentials: 'Toujours étudiant.', credentialsSub: 'Certifications & apprentissage continu',
    journey: 'Mon parcours', people: 'Une personne, pas seulement des technologies.', purpose: 'Créer avec un but.',
  },
  tr: {
    experience: 'Deneyim', beyond: 'Kodun ötesi', stack: 'Teknolojiler',
    available: 'Yeni fırsatlara açığım', hero: 'Fikirleri akıllı dijital ürünlere dönüştürüyorum.',
    supporting: 'Yazılım geliştiriyor, deneyimler tasarlıyor ve yapay zekânın geleceğini keşfediyorum.',
    work: 'Projelerimi keşfet', connect: 'İletişime geçelim', story: 'Bir geliştiriciden fazlası. Bir üretici.',
    selected: 'Seçilmiş çalışmalar', allProjects: 'Mühendislik laboratuvarında', viewAll: 'Tüm projeler',
    philosophy: 'Mühendislik kod yazmaktan fazlasıdır.', future: 'Gelecek, inşa ettiğimiz bir şeydir.',
    contact: 'Hayata geçirilmeye değer bir fikrin var mı?', contactText: 'Anlamlı projeler, iddialı fikirler ve geleceği inşa eden insanlarla iş birliği fırsatlarıyla her zaman ilgileniyorum.',
    copy: 'E-postayı kopyala', copied: 'E-posta kopyalandı', failed: 'Kopyalamak için aşağıdaki e-postayı seçin.',
    details: 'Proje detayları', live: 'Projeyi ziyaret et', close: 'Proje detaylarını kapat',
    credentials: 'Her zaman bir öğrenci.', credentialsSub: 'Sertifikalar & sürekli öğrenme',
    journey: 'Şimdiye kadarki yolculuk', people: 'Teknolojilerin ötesinde bir insan.', purpose: 'Bir amaç için üretmek.',
  },
} as const;

export function useCopy() {
  const { lang } = useI18n();
  return copy[lang];
}