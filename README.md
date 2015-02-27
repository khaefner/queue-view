queue-view
==========

See the state of freeswitch mod_callcenter queues.   This is a Read-Only interface to see the state of the queue.  It uses Node.js and the modesl 

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
</ul>
</blockquote>



Configuration
------------

<blockquote>

</blockquote>

###################################
FIREWALL CONFIG
###################################

If you run a firewall on sipx (and you should!)  You'll need to open incoming connections to port 3000.

In the main folder of queue view you will find a file 00_queue_view.cf.  Copy this file to /usr/share/sipxecs/cfinputs/plugin.d.

Then run sudo /etc/sipxsupervisor restart

When you run iptables -L you shoudl see this line:
ACCEPT     tcp  --  anywhere             anywhere            tcp dpt:hbci state NEW,ESTABLISHED /* QueueView Web UI */ 

![alt tag](https://github.com/khaefner/queue-view/blob/master/queue-view.png)

 
