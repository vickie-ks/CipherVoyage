### TryHackMe Walkthrough: Jack-of-All-Trades

<div id="copyUrl"></div>

In this walkthrough, we will explore the TryHackMe challenge called [Jack-of-All-Trades](https://tryhackme.com/r/room/jackofalltrades). First, let's start with an ***nmap*** scan to see what attack vectors we can find:

<pre class="bg-body-tertiary border p-2 shadow-sm">nmap -sV -p- -vv &lt;remote-ip&gt;</pre>

We will see that there are two ports open. Surprisingly, SSH is on port 80, and a web server is on port 22. 

You won't be able to bruteforce SSH right now, so let's check the webpage on port 22. When you try to access  `http://<remote-ip>:22` , your browser will probably show *This address is restricted*.

To bypass this in Firefox, navigate to `about:config`. Agree to the warning message, then search for `network.security.ports.banned.override`. If it’s not there, right-click, choose new => String, and create it. Set the value to 22. Now, reload the page.

You will see an introductory homepage with a monologue from Jack. Let's look at the source code of the page. There’s a comment about `/recovery.php` and an encoded message. Decode the message using:

<pre class="bg-body-tertiary border p-2 shadow-sm">echo '&lt;base64-code&gt;' | base64 -d</pre>

The decoded message mentions a man named Johny Graves and a password. Let’s search for Johny Graves online. He has a Twitter account where he mentions his favorite crypto method: ROT13, Hex, then Base32.

> First encode your message with a ROT13 cipher. Next Convert it to Hex. Finally convert the result into Base32. It's uncrackable!

Now, go to the recovery page mentioned earlier. It looks like a login screen. Check the source code of this page for another long comment. Decode it using Johny Graves' method in reverse: Base32, Hex, then ROT13. Use ***CyberChef*** for this.

> Remember that the credentials to the recovery login are hidden on the homepage! I know how forgetful you are, so here's a hint: [bit.ly/2TvYQ2S](bit.ly/2TvYQ2S)

The decoded message hints that the credentials are on the homepage. Look for something related to ***steganography***. Download the image from the homepage and extract it using:

<pre class="bg-body-tertiary border p-2 shadow-sm">steghide extract -sf stego.jpg</pre>

This may not give you the credentials, so try other images. Eventually, you will find the credentials in the header image. Use these to log into the recovery screen at:

<pre class="bg-body-tertiary border p-2 shadow-sm">http://&lt;remote-ip&gt;:22/nnxhweOV/index.php</pre>

Add `?cmd=id` to the URL to get Remote Code Execution (RCE) on the server. Use View Source mode to see the output more clearly. Now, we can check the files in that machine.

Use `?cmd=ls -al /home`, there we see the `/home` directory and find `jacks_password_list`. Then, use `?cmd=cat /home/jacks_password_list` to read the list. There it looks like a wordlist for cracking SSH.

Copy this list to your local machine and use ***Hydra*** to break Jack's SSH password:

<pre class="bg-body-tertiary border p-2 shadow-sm">hydra -l jack -P &lt;path-to-copied-passwords-list&gt; -s 80 ssh://&lt;remote-ip&gt;</pre>

After finding Jack's SSH password, log in:

<pre class="bg-body-tertiary border p-2 shadow-sm">ssh -p 80 jack@&lt;remote-ip&gt;</pre>

The user flag is a ***JPEG file***. Download it and open it:

<pre class="bg-body-tertiary border p-2 shadow-sm">
scp -P 80 jack@&lt;remote-ip&gt;:user.jpg /tmp
xdg-open /tmp/user.jpg
</pre>

Now, check if you can execute anything with sudo: `sudo -l`

If no sudo permissions, find files with the SUID bit set:

<pre class="bg-body-tertiary border p-2 shadow-sm">find / -type f -user root -perm -4000 -exec ls -ldb {} \; 2>>/dev/null</pre>

One unusual file is `/usr/bin/strings`. Use it to read the root flag:

<pre class="bg-body-tertiary border p-2 shadow-sm">/usr/bin/strings /root/root.txt</pre>

That's it! We have completed the challenge. This walkthrough should help you understand the steps to solve "Jack-of-All-Trades" on TryHackMe.

The Jack-of-All-Trades room was an nice challenge that tested my cybersecurity skills. From finding hidden messages to breaking into SSH, it covered many aspects.

If you liked this walkthrough or have any questions, feel free to contact me. Happy hacking!

For more insights and details on cybersecurity, visit [CipherVoyage](https://vickie-ks.github.io/CipherVoyage/) and stay updated with the latest in cyber defense strategies.

_Author: <a href="https://github.com/vickie-ks" target="_blank">vickie-ks</a>_