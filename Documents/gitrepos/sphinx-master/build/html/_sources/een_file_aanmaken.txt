=================
Een file aanmaken
=================

We gaan naar onze repostory:

.. code-block:: bash

    dion@localhost ~]$ cd ~/repo_een

Daarin maken met het tekstbewerkigsprogramma vi (eigenlijk vim) het bestand 'show_dir.sh' aan.

.. code-block:: bash

    [dion@localhost repo_een]$ vi show_dir.sh

In vim kan je met de 'ESC'-toets naar de verschillende modi.

Met de 'i'-toets, kan je text invoegen.

Gebruik je 'ESC' en typ je daarna :wq dan schrijf je het bestand weg (de 'w' van 'write') en sluit je vim af (de 'q' van 'quit').

Zorg dat deze tekst in het bestand staat en sluit dan af.

.. code-block:: bash

    #!/bin/bash

    echo "Dit is de directory:"

    ls -la

Je hebt nu een script gemaakt. Je kan de rechten van script zien met '-ls -l':

.. code-block:: bash

    [dion@localhost repo_een]$ ls -l show_dir.sh 
    -rw-rw-r--. 1 dion dion 49 Feb 23 18:29 show_dir.sh

Je ziet dat de eerste 'rw-' dit betekend dat de gebruiker 'dion' (dit is de eerste 'dion'), de rechten heeft van 'read', 'write' maar geen 'execute'. We gaan de rechten nu wijzigen met het commando 'chmod' ('ch'ange 'mod'ify), waarbij we de 'u' (user), de rechten geven van 'x' (execute):

.. code-block:: bash

    [dion@localhost repo_een]$ chmod u+x show_dir.sh 

We kunnen nu zien dat deze rechten gewijzigd zijn:

.. code-block:: bash

    [dion@localhost repo_een]$ ls -l show_dir.sh 

    -rwxrw-r--. 1 dion dion 49 Feb 23 18:29 show_dir.sh

We hebben nu de rechten om het bestand uit te voeren, echter moet je de directory daarbij meegeven. Hieronder is dus niet de juiste manier:

.. code-block:: bash

    [dion@localhost repo_een]$ show_dir.sh
    -bash: show_dir.sh: command not found

Dit kan wel (we geven met de punt '.' de huisige directory aan en de slash is een scheidingsteken):

.. code-block:: bash

    [dion@localhost repo_een]$ ./show_dir.sh 
    Dit is de directory:
    total 12
    drwxrwxr-x. 3 dion dion   47 Feb 23 18:29 .
    drwx------. 3 dion dion 4096 Feb 18 08:01 ..
    drwxrwxr-x. 7 dion dion 4096 Feb 23 18:26 .git
    -rwxrw-r--. 1 dion dion   49 Feb 23 18:29 show_dir.sh






