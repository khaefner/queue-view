queue-view
==========

See the state of freeswitch mod_callcenter queues.   This is a dynamic read-only interface to see the state of the queue.  It uses Node.js and the modesl to provide real-time status of mod_callcenter. 

Installation
------------

<blockquote>
<ul>
<li>Install node.js server
<p>sudo yum install nodejs npm</p>
<li>cd /usr/share
</li>
<li>git clone git://github.com/khaefner/queue-view</li>
<li>Install express
<p> npm install --save express</p>
</li>
<li>Copy queue_view to /etc/init.d</li>
</ul>
</blockquote>


Configuration
------------

<blockquote>
<p>By default the webpage listens on port 3000 so you will need to make sure that 3000 is open in the firewall (there is a config below for cfengine to open this up on SIPX)</p>
</blockquote>

Usage
-----

<blockquote>
<ul>
<li>Start the service /etc/init.d/queue-view or for debug node queue-view.js</li>
<li>Point your browser to http://your-server:3000</li>
</blockquote>

FIREWALL CONFIG
------------

If you run a firewall on sipx (and you should!)  You'll need to open incoming connections to port 3000.

In the main folder of queue view you will find a file 00_queue_view.cf.  Copy this file to /usr/share/sipxecs/cfinputs/plugin.d.

Then run sudo /etc/sipxsupervisor restart

When you run iptables -L you shoudl see this line:
ACCEPT     tcp  --  anywhere             anywhere            tcp dpt:hbci state NEW,ESTABLISHED /* QueueView Web UI */ 

![alt tag](https://github.com/khaefner/queue-view/blob/master/queue-view.png)
![alt tag](https://github.com/khaefner/queue-view/blob/master/queue-view.gif)

 
