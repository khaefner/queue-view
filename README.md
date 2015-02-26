queue-view
==========

See the state of freeswitch queues

<blockquote>
Installation
</blockquote>


###################################
Configuration
###################################

###################################
FIREWALL CONFIG
###################################

If you run a firewall on sipx (and you should!)  You'll need to open incoming connections to port 3000.

In the main folder of queue view you will find a file 00_queue_view.cf.  Copy this file to /usr/share/sipxecs/cfinputs/plugin.d.

Then run sudo /etc/sipxsupervisor restart

When you run iptables -L you shoudl see this line:
ACCEPT     tcp  --  anywhere             anywhere            tcp dpt:hbci state NEW,ESTABLISHED /* QueueView Web UI */ 

![alt tag](https://github.com/khaefner/queue-view/blob/master/queue-view.png)

 
