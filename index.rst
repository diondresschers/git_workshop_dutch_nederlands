.. Git & GitHub Workshop documentation master file, created by
   sphinx-quickstart on Thu Feb  5 11:01:14 2015.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

.. toctree::
   :maxdepth: 2

   virtualbox_installatie 
   centos_installatie
   git_installatie
   git_init
   areas
   een_file_aanmaken
   git_add_git_commit
   git_log_git_checkout
   git_config 
   git_clone
   git_branch
   git_merge

Welkom bij de Git & GitHub Cursus!
==================================

Welkom bij de Git & GitHub cursus. Deze cursus is zo opgebouwd dat alle oefeningen uit te voeren zijn in een virtuele machine (VM). We gebruiken Centos 7 als besturingssysteem voor de VM en virtualiseren op VirtualBox. Alle gebruikte software is Open Source.

Git
===

Git is een versiebeheersysteem en is geschreven door Linus Torvalds, die ook bekend is van het Linux besturingssysteem. Linus besloot in 2015 een eigen versiebeheersysteem te schrijven nadat BitKeeper niet meer beschikbaar was voor gratis gebruik en alternatieve alternatieven niet voldeden. Nu wordt Git dan ook gebruikt door hem en andere ontwikkelaars om de Linux kernel te ontwikkelen.

Bij het ontwerpen van Git waren er een paar ontwerpeisen:

* Neem het versiebeheersysteem CVS als een voorbeeld hoe het NIET moet. Bij twijfel, kies het tegenovergestelde van hetgeen dat CVS doet.
* Zeer sterke beveiliging tegen dataverlies. Zowel per ongeluk als moedwillig.
* Houd een BitKeeper-achtige werkstroom aan.

Iedere map die beheerd wordt door Git, bevat de gehele repository. Git is niet afhangelijk van een centrale server. Git heeft ook een focus op snelheid.

.. image:: /images/cc-by-sa-orange.png

Git Cursus Nederlands van Dion Dresschers is in licentie gegeven volgens een `Creative Commons Naamsvermelding-GelijkDelen 4.0 Internationaal-licentie <http://creativecommons.org/licenses/by-sa/4.0/>`_.

.. * :ref:`genindex`
.. * :ref:`modindex`
.. * :ref:`search`
