======================
VirtualBox Installatie
======================

Wil je deze cursus stap voor stap kunnen volgen, dan kan je gebruik maken van hetzelfde besturingssysteem dat wij gebruiken, namelijk CentOS 7 (deze is compatibel met Red Hat Enterprise Linux 7).

Heb je geen CentOS 7, maar wel een computer met:

* Windows 
* Linux 
* MacOS  

dan kan je CentOS 7 draaien als virtuele machine in VirtualBox [#0]_

`VirtualBox <http://virtualbox.org>`_ is een virtualisatieprogramma zoals VMware Player.

.. image:: /images/virtualbox.png

CentOS is een gebouwd van dezelfde code waarvan Red Hat Enterprise Linux gemaakt is. We beginnen met CentOS 7 Core [#1]_ , wat een vrij kale versie zonder Graphical User Interface (GUI) is. Download zelf de CentOS 7 versie van http://www.centos.org .


.. note:: Hier vind je de `handleiding <https://www.virtualbox.org/manual/UserManual.html>`_ van VirtualBox.

Je klikt als eerste op 'New' om een nieuwe VM te starten.

.. note:: We gaan altijd uitsluitend af op Engelstalige software.

Daarna typ je ``CentOS 7`` bij 'Name'. Je ziet dat Red Hat automatisch geselecteerd wordt als besturingssysteem. Dit is een prima keuze.

.. image:: /images/virtualbox_new.png

Klik dan op 'Next'.

Je kan nu het geheugen selecteren voor de VM. 512MB is prima en kan altijd achteraf nog makkelijk gewijzigd worden. Klik dus op 'Next'.

Een VM heeft ook een harde schijf (wat eigenlijk een losse file is van de VM).

De keuze 'Create a virtual hard drive now' is goed, druk dus op 'Create'.

Je krijgt daarna de keuze wat voor type virtuele harde schijf je wilt maken. Dit maakt het verplaatsen van een VM van het ene virtualisatieprogramma (dus VirtualBox) naar het andere (bv. Microsoft Hyper-V) makkelijker. Je kan als je geen andere voorkeur hebt, dit gewoon laten staan op 'VDI', dus klik op 'Next'.

.. image:: /images/virtualbox_create_vhd.png

De volgende vraag gaat over of de grootte van virtuele harde schijf bestand net zo groot moet zijn als de gekozen grootte van harde schijf. Standaard wordt niet-beschreven ruimte in de VM niet meegenomen in de grootte van het harde schijf bestand. Dit is een goede keuze, dus klik op 'Next' 

Hier kan je de grootte van de virtuele harde schijf kiezen. Als je de selectie van de vorige instelling op 'Dynamically allocted' hebt laten staan, dan kan je de grootte flink groot maken (achteraf wijzigen is wat lastiger). Schuif de knop helemaal naar rechts voor de grootst mogelijke keuze.

Klik nu op 'Create' om de VM klaar te maken (deze heeft echter nog geen besturingssysteem).

Selecteer de nieuw gemaakte VM (deze heeft dus de naam 'CentOS 7').

.. image:: /images/virtualbox_empty.png

Je zet de VM aan door op 'Start' te klikken.
Je kunt meteen een opstartdisk CD of ISO-file selecteren (waarvan je het besturingssysteem installeert). Klik hiervoor op het icoontje rechts van de huidige selectie. Navigeer naar de ISO file-die je van http://centos.org gedownload hebt en druk op 'Open'. Druk nu 'Start' om de VM te starten.

.. image:: /images/virtualbox_select_startup_disk.png

Nu wordt de ISO gestart en kan je de keuze maken om CentOS 7 te installeren door simpel de 'Enter'-toets in te drukken.

.. image:: /images/centos_iso.png
Je komt nu in het graphische installatiescherm. Het besturingssysteem zelf zal standaard geen GUI bevatten.

Selecteer als taal 'Engels (United States)' en klik 'Continue'.

Klik nu op 'INSTALLATION DESTINATION' en vervolgens twee keer de virtuele harde schijf disk die je eerder hebt aangemaakt, zodat je daar een vinkje ziet. Klik dan op 'Done' linksboven.

.. image:: /images/centos_installation.png

Nu kan je 'Begin Installation' drukken om de installatie te beginnen.

Je moet nu een wachtwoord maken voor het 'root' account. Het 'root' account heeft alle rechten op een systeem.

Klik op 'ROOT PASSWOORD' en voer vervolgens een wachtwoord in (plus het wachtwoord om typo's te voorkomen). Mocht het geen sterk wachtwoord zijn dan moet je twee keer op 'done' drukken om verder te gaan. 

Je kan optioneel een tweede account aanmaken door op 'USER CREATION' te kiezen.

.. image:: /images/centos_user_creation.png

Selecteer 'Make this user administrator', zodat je ook met dit account 'root' rechten kan verkrijgen.
Vervolgens weer 'Done' klikken.

Klik 'Finish configuration' om het installeren af te ronden. 

Als laatste klik je 'Reboot' om te herstarten.

Nadat de machine herstart is kan je inloggen met het 'root' account of met je eigen gemaakte account.

Wil je van je VM terug naar de huidige machine, dan kan je de rechter CTRL-toets indrukken (dit is standaard ingesteld als de zgn. Host-key). Je beweegt dan met de muis weer naar je huidige systeem terug.

.. image:: /images/centos_login.png

.. rubric:: Footnotes 

.. [#0] Virtualbox kan gedownload worden van `<http://virtualbox.org>`_
.. [#1] CentOS 7 Core kan je onder andere hier `downloaden <http://mirror.yourwebhoster.eu/centos/7.0.1406/isos/x86_64/CentOS-7.0-1406-x86_64-DVD.iso>`_



