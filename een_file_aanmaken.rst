=================
Een file aanmaken
=================

We gaan naar onze repository:

.. code-block:: bash

    dion@localhost ~]$ cd ~/repo_een

Daarin maken met het tekstbewerkigsprogramma vi (eigenlijk vim) het bestand 'show_dir.sh'.

.. code-block:: bash

    [dion@localhost repo_een]$ vi show_dir.sh

In vim kan je met de 'ESC'-toets naar de verschillende modi.

Nadat je 'ESC' hebt ingedrukt, kan je met de 'i'-toets text invoegen.

Gebruik je 'ESC' en typ je daarna ':wq' dan schrijf je het bestand weg (de 'w' van 'Write') en sluit je vim af (de 'q' van 'Quit').

Zorg dat deze tekst in het bestand staat en sluit dan af.

.. code-block:: bash

    #!/bin/bash

    echo "Dit is de directory:"

    ls -la

Je hebt nu een script gemaakt. Je kan de rechten van script zien met 'ls -l':

.. code-block:: bash

    [dion@localhost repo_een]$ ls -l show_dir.sh 
    -rw-rw-r--. 1 dion dion 49 Feb 23 18:29 show_dir.sh

Je ziet '-rw-rw-r--' staan. De eerste 'rw-' betekent dat de gebruiker 'dion' (dit is de eerste 'dion'), de rechten heeft van 'Read', 'Write' maar geen 'eXecute'. We gaan de rechten nu wijzigen met het commando 'chmod' (van CHange MODify), waarbij we de 'u' (User), de rechten geven van 'x' (eXecute):

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

We kunnen wel de huidige dirctory aangeven met een punt '.' en een schuine streep '/'.

.. code-block:: bash

    [dion@localhost repo_een]$ ./show_dir.sh 
    Dit is de directory:
    total 12
    drwxrwxr-x. 3 dion dion   47 Feb 23 18:29 .
    drwx------. 3 dion dion 4096 Feb 18 08:01 ..
    drwxrwxr-x. 7 dion dion 4096 Feb 23 18:26 .git
    -rwxrw-r--. 1 dion dion   49 Feb 23 18:29 show_dir.sh






