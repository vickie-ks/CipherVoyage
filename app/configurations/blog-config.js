/*
Sample design
{
  id: '1',
  title: 'The Beauty of Ember.js',
  description: 'Discover why Ember.js is a superb framework for ambitious web applications.',
  filePath: '_about/me.md',
}*/

export let BLOG_ARTICLES = {
  title: 'My Thoughts on Security',
  description:
    'Explore essential cybersecurity concepts, tools, and expert advice.',
  transitionTo: 'blogs.blog',
  articlesList: [
    {
      id: 'Jack-of-All-Trades',
      title: 'TryHackMe Walkthrough: Jack-of-All-Trades',
      description:
        'See how to find vulnerabilities and get higher access in the TryHackMe Jack-of-All-Trades room with this simple guide.',
      filePath: '_tryhackme/Jack-of-All-Trades.md',
    },
    {
      id: 'remcos-rat',
      title: 'Remcos RAT: Exploiting the CrowdStrike Falcon Glitch',
      description:
        'Exploring how cybercriminals exploited the CrowdStrike Falcon glitch to distribute Remcos RAT and its prevention strategies.',
      filePath: '_posts/remcos-rat.md',
    },
    {
      id: 'lazy-admin',
      title: 'TryHackMe Walkthrough: LazyAdmin',
      description:
        'Learn how to exploit vulnerabilities and escalate privileges in the TryHackMe LazyAdmin room with this comprehensive walkthrough.',
      filePath: '_tryhackme/lazy-admin.md',
    },
    {
      id: 'owasp-client',
      title: 'Exploring the Jungle of Client-Side Risks: A Quick Guide',
      description:
        'Explore the top 10 client-side security risks in a fun, engaging way with the OWASP-WebScanner project.',
      filePath: '_posts/owasp-client.md',
    },
    {
      id: 'E2EE',
      title: 'Revealing E2EE: The Key to Digital Privacy',
      description:
        'Discover how End-to-End Encryption ensures your communications remain secure, private, and protected from unauthorized access.',
      filePath: '_posts/E2EE.md',
    },
    {
      id: 'cloud-sec-encryptor',
      title: 'The Hidden Risks of Cloud Storage: Is Your Data Really Safe?',
      description:
        'Discover the unseen risks of cloud storage and how to shield your data',
      filePath: '_posts/cloud_sec_encryptor.md',
    },
    {
      id: 'proxy-sec',
      title: 'Surfing Secrets: The Magical World of Proxies Unveiled!',
      description:
        'Unveil the secrets of proxies: Navigate, protect, and conquer the digital landscape with stealth and security!',
      filePath: '_posts/proxy_sec.md',
    },
    {
      id: 'vpn-proxy',
      title: 'The Great Digital Duel: VPNs vs. Proxies - Who Wins?',
      description:
        'Explore the showdown between VPNs and proxies—unlock your ideal blend of speed, privacy, and access in the digital arena!',
      filePath: '_posts/vpn_proxy.md',
    },
  ],
};

export let QUEST_ARTICLES = {
  title: 'Curious Explorations',
  description: 'Discover my musings on extraterrestrial life, and more.',
  transitionTo: 'quests.quest',
  articlesList: [
    {
      id: 'atmoic-habits',
      title: 'Small Steps to Big Changes: Discovering Atomic Habits',
      description:
        "Explore how tiny habits lead to significant life changes, based on insights from James Clear's Atomic Habits.",
      filePath: '_posts/atomic_habits.md',
    },
    {
      id: 'neuralink',
      title: 'From Fiction to Reality: The Astonishing Connection',
      description:
        'Exploring the striking parallels between "The 100" and Neuralink, and their implications for our technological future.',
      filePath: '_posts/neuralink.md',
    },
    {
      id: 'chimp-empire',
      title: 'Echoes of Our Ancestors ~ A Story of Connection',
      description:
        'Discover the Chimp Empire—a heartwarming glimpse into the lives of chimpanzees, reflecting our shared ancestry and bonds.',
      filePath: '_posts/chimp_empire.md',
    },
    {
      id: 'life-on-plant',
      title: 'The Journey of Life on Our Planet!',
      description:
        "Embark on a journey through Earth's tumultuous history, celebrating the resilience and adaptability of life amidst global challenges.",
      filePath: '_posts/life_on_plant.md',
    },
  ],
};
