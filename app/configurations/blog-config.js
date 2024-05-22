/*
Sample design
{
  id: '1',
  title: 'The Beauty of Ember.js',
  description: 'Discover why Ember.js is a superb framework for ambitious web applications.',
  date: new Date('2024-01-01'),
  imageUrl: 'images/about.png',
}*/

export let BLOG_ARTICLES = [
  {
    id: '2',
    title: 'Surfing Secrets: The Magical World of Proxies Unveiled!',
    description: `<p>Ever felt like a digital ninja, stealthily bypassing barriers on the vast internet landscape? That’s the thrilling power of proxy technologies—a wizard’s toolkit in our hyper-connected world.</p>
    <p>Proxies are not just for sneaking into geo-blocked treasure troves or streaming from distant lands, they are the unsung heroes of the digital age, offering both cloak and dagger in the realms of privacy and security.<p>
    <p>Let's lift the veil on these mystical tools. There are several key players in the proxy league. The nimble <i>SOCKS proxies</i> excel in handling diverse types of traffic, not just web pages, making them perfect for those needing versatility in their digital escapades. Then there are the <i>HTTP proxies</i>, specialists in web traffic, helping users efficiently manage data and streamline their online interactions.</p>
    <p>We can’t forget the <i>HTTPS proxies</i> which add an extra layer of encryption, guarding your secrets against prying eyes. Meanwhile, <i>Anonymous proxies</i> are the incognito mode of the proxy world, wiping your digital footprints clean off the map. Lastly, the <i>Transparent proxies</i>—though less secretive, they optimize internet usage and speed, playing a crucial role in network management.</p>
    <p>But today's proxies aren’t just about accessing the restricted or hiding in the shadows; they’re evolving. Imagine proxies as your personal bodyguards, or even better, shape-shifters, adapting in real-time to protect you from digital threats. They’re the silent sentinels in the war against cyber-attacks, the watchful guardians of network traffic.</p>
    <p>In the grand tapestry of the internet, proxies are both shield and sword, blending old roles with new innovations to ensure that every digital explorer can navigate safely and freely. So, as the digital winds shift, remember: <b>Only those who master the shadows can truly harness the light.</b> Embrace the power of proxies, and chart a fearless course through the cyber seas!<p>`,
    date: new Date('May 21 2024'),
    imageUrl: 'images/blogs/proxy-sec.png',
  },
  {
    id: '1',
    title: 'The Great Digital Duel: VPNs vs. Proxies - Who Wins?',
    description: `<p>Hey there, fellow internet wanderers! Let’s dive into the fascinating world of network security—specifically, the ever-persistent showdown between VPNs and proxies.</p>
    <p>So, <b>why is everyone talking about VPNs?</b> Well, imagine you're out there in the vast online universe looking for some exclusive content that’s not available in your region. Here’s where a VPN steps in like a superhero, creating a secure, encrypted tunnel for all your internet traffic, not just your browser stuff. This means everything from your e-mail app to your midnight cat video binges is covered. But here’s the kicker—while a VPN shields your entire device, it can be a bit of a resource hog, slowing things down and munching more battery than you’d like.</p>
    <p>Enter the humble proxy. Think of it as that lightweight friend who easily slips through the crowd at concerts. Proxies are great when you just want to anonymously browse or bypass some pesky regional blocks on websites. However, they’re like that one friend who's always ready for a party but never brings snacks—proxy services might not encrypt your data, which is like sending your secret love letters without an envelope!</p>
    <p>Now, I get why the non-techie folks might lean towards proxies. They're straightforward, often free, and get the job done when all you want is to check out a blocked website or two. But—and it’s a big but—if you're looking to keep everything on your device under wraps from prying eyes, a VPN is your go-to. Yes, it might take up more resources, but for full-package security, it’s worth it.</p>
    <p>Choosing between a VPN and a proxy really boils down to your needs. Are you just looking to bypass a few annoying content restrictions? Or are you aiming for full-on, Fort-Knox-level protection for all your online activities? Your choice will likely depend on how much you value privacy over convenience.</p>
    <p>Remember, whether you pick a VPN or a proxy, you’re stepping up your internet game either way. Just make sure to choose wisely based on what’s right for your digital lifestyle. Stay safe out there, and happy surfing!</p>`,
    date: new Date('May 16 2024'),
    imageUrl: 'images/blogs/vpn-proxy.png',
  },
];

export let QUEST_ARTICLES = [
  {
    id: '2',
    title: 'Echoes of Our Ancestors ~ A Story of Connection',
    description: `<p>Deep in Africa's lush jungles, there's a place called the "<b>Chimp Empire</b>," where the lives of chimpanzees are as rich and joyful as any story you've heard. This magical world, shown in the Netflix documentary, lets us peek into the lives of these amazing animals, our closest cousins in the wild.</p>
    <p>Imagine a place where young chimps play freely, chasing each other under the shade of giant trees. Their laughter fills the air and warms the heart. Nearby, adult chimps sit together, grooming each other with gentle hands, showing love and care in every touch. These simple moments create strong bonds among them, much like the families we know.</p>
    <p>Watching them more closely, we see how smart they are. Chimps make and use tools with ease. They can pick up a stick, clean it, and use it to get tasty bugs from inside a tree. They also use stones to break open nuts. This cleverness shows us how much we have in common with them.</p>
    <p>As we learn about their lives, we see that chimps are a lot like us. They have <i>feelings</i>, they make <i>friends</i>, and they <i>look out for each other</i>. This connection goes back a long way, to the very early days of humans.</p>
    <p>This story of the chimps is not just interesting—it also touches our hearts. It teaches us to care more about these wonderful animals and the forests they call home. By looking after them, we keep a part of our world safe and full of wonder.</p>
    <p>Let's keep the story of the <b>Chimp Empire</b> alive. It teaches us about our past and shows us how caring for others, no matter how different, makes us all better.</p>
    <p><b><i>In every chimp's smile and every playful chase, we find a piece of our shared story. Let's cherish and protect their world as they teach us about our own.</i></b></p>`,
    date: new Date('May 22 2024'),
    imageUrl: 'images/blogs/chimp-empire.png',
  },
  {
    id: '1',
    title: 'The Journey of Life on Our Planet!',
    description: `<p>Our blue planet has has endured remarkable challenges over its vast history. It has weathered five major extinction events, each transforming life in profound ways, shaping the biodiversity we see today.</p>
    <p>From the massive volcanic eruptions that reshaped climates and landscapes to the ice ages that tested every species’ endurance, life on Earth has shown incredible resilience. The Pleistocene ice age, for example, saw mammals adapt to harsh, frigid conditions, thriving where less adaptable creatures faltered.</p>
    <p>Then there were the impact events, like asteroids striking the Earth, drastically altering the environment. These weren’t just moments of destruction but were also catalysts for evolution, opening ecological niches that allowed new forms of life to flourish. While the fall of the dinosaurs is well-known, other species also took this as an opportunity to rise, illustrating nature’s enduring drive to persevere and evolve.</p>
    <p>Today, as we face the impacts of climate change, this history of resilience serves as both a warning and an inspiration. We don’t possess the raw physical strength of many past inhabitants of our planet, but we have something perhaps even more powerful: knowledge and a global sense of community.</p>
    <p>As the survivors of our planet, we draw strength from Earth’s past. The same adaptability and resilience that saw life through ice ages and volcanic winters will be crucial as we navigate the challenges of the present and future.</p>
    <p>Let’s channel our collective efforts and knowledge to ensure that life not only endures but thrives. Facing the challenges ahead with unity and innovation, we continue the legacy of resilience that defines our planet. This is our time to act, inspired by the resilience of life itself. As the old proverb goes, <b>Just when the caterpillar thought the world was over, it became a butterfly.</b></p>`,
    date: new Date('May 17 2024'),
    imageUrl: 'images/blogs/life-on-plant.png',
  },
];
