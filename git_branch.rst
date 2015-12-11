===========================
git branch (& git checkout) 
===========================

Je kan in een een repository een nieuwe 'branch' (vertakking) aanmaken.

`Cambridge Dictionary: branch <http://dictionary.cambridge.org/dictionary/british/branch>`_

Er is altijd een 'branch' aanwezig en deze heet 'master'. We gaan kijken met 'git status' wat het huidige verhaal is.

.. code-block:: bash

    [dion@localhost repo_een]$ git status
    # HEAD detached from 349bf47

HEAD betekend de huidige branch. Echter als je 'HEAD detached' ziet staan betekend dat deze wijst naar een andere revisie van de huidige branch.

Dit komt omdat we met een eerdere 'git checkout' in onze historie terug zijn gegaan (een andere revisie hebben gekozen).
 
.. code-block:: bash

    [dion@localhost repo_een]$ cat show_dir.sh 
    #!/bin/bash

    echo "Dit is de directory:"

    ls -la


.. code-block:: bash

    [dion@localhost repo_een]$ git log
    commit e0d1981c46c1e25eb99379f1387e12f3dab0fffa
    Author: Dion Dresschers <dion@localhost.localdomain>
    Date:   Fri Mar 13 06:47:55 2015 -0400

        Nieuw bash script gemaakt

We kunnen ook het 'git checkout master' naar de meest recente versie van de standaard branch gaan (en deze heet 'master').

.. code-block:: bash

    [dion@localhost repo_een]$ git checkout master

    Previous HEAD position was e0d1981... Nieuw bash script gemaakt
    Switched to branch 'master'

    [dion@localhost repo_een]$ git log
    commit 349bf475ecce786e90e6432bc1fd32c142d8ca37
    Author: Dion Dresschers <dion@localhost.localdomain>
    Date:   Fri Mar 13 08:46:07 2015 -0400

        Ook human-readible en inodes toegevoegd

    commit e0d1981c46c1e25eb99379f1387e12f3dab0fffa
    Author: Dion Dresschers <dion@localhost.localdomain>
    Date:   Fri Mar 13 06:47:55 2015 -0400

        Nieuw bash script gemaakt
    [dion@localhost repo_een]$ cat show_dir.sh 
    #!/bin/bash

    echo "Dit is de directory:"

    ls -lahi

Als we nu nog een keer een 'git status' doorvoeren, zien we netjes in welke branch we zitten (in 'master'). De melding van 'HEAD detached' zien we ook niet meer, (omdat we in de meest recente revisie zitten).

.. code-block:: bash

    [dion@localhost repo_een]$ git status
    # On branch master
    nothing to commit, working directory clean

In plaats van te gaan spelen met de revisies, maken we een nieuwe branch aan met 'git branch':

.. code-block:: bash

    [dion@localhost repo_een]$ git branch vraag_zip

Je ziet dat we niet automatisch naar de nieuw aangemaakte branch gaan:

.. code-block:: bash
    [dion@localhost repo_een]$ git status
    # On branch master
    nothing to commit, working directory clean

'git checkout *vraag_zip*' betekent: Verlaat de huidige branch en ga naar branch 'vraag_zip'.

.. code-block:: bash

    [dion@localhost repo_een]$ git checkout vraag_zip
    Switched to branch 'vraag_zip'
    [dion@localhost repo_een]$ git status
    # On branch vraag_zip
    nothing to commit, working directory clean

We gaan nu het bash script aanpassen, maar omdat we dit doen in de branch 'vraag_zip', blijft de branch 'master' onaangetast.

Voeg in het script onderdaad de volgende code toe:

.. code-block:: bash

    while true; do
      read -p "Deze folder gzippen? [j/n]" jn
        case $jn in
          [j]* ) tar -cvzf dir_archief . ; exit;;
          [n]* ) exit ;;
          * ) echo "Graag 'j' of 'n' gebruiken...";;
        esac
    done

Als het aanpassen in 'vi' niet gelukt is can je ook onderstaande code plakken in de repository:

.. code-block:: bash

    cat > show_dir.sh << EOM 
    #!/bin/bash

    echo "Dit is de directory:"

    ls -lahi

    while true; do
      read -p "Deze folder gzippen? [j/n]" jn
      case $jn in
      [j]* ) tar -cvzf dir_archief . ; exit;;
      [n]* ) exit ;;
      * ) echo "Graag 'j' of 'n' gebruiken...";;
      esac
    done
    EOM


Met 'git status' zien we dat de file 'show_dir.sh' is aangepast:

.. code-block:: bash

    [dion@localhost repo_een]$ git status

    # On branch vraag_zip
    # Changes not staged for commit:
    #   (use "git add <file>..." to update what will be committed)
    #   (use "git checkout -- <file>..." to discard changes in working directory)
    #
    #	modified:   show_dir.sh
    #
    no changes added to commit (use "git add" and/or "git commit -a")

We gaan nu met 'git add' en 'git commit' de wijzingen doorvoeren naar de Staging Area en de Git Repository.

.. code-block:: bash

    [dion@localhost repo_een]$ git add .
    [dion@localhost repo_een]$ git commit -m "Script uitgebreid met gzip mogelijkheid"
    [vraag_zip 489f96a] Script uitgebreid met gzip mogelijkheid
     1 file changed, 9 insertions(+)

We zien in dat we netjes in de 'branch' 'vraag_zip' zitten, en dat de wijzingen opgenomen zijn in de 'git log'. Echter geldt dit alleen voor de 'branch' 'vraag_zip':
     
.. code-block:: bash
    [dion@localhost repo_een]$ git status
    # On branch vraag_zip
    nothing to commit, working directory clean

    [dion@localhost repo_een]$ git log
    commit 489f96af3fdc9ee6fa8fe42509238b3487106fe7
    Author: Dion H.J. Dresschers <d.h.j.dresschers@hva.nl>
    Date:   Mon Mar 16 09:50:33 2015 -0400

        Script uitgebreid met gzip mogelijkheid

    commit 349bf475ecce786e90e6432bc1fd32c142d8ca37
    Author: Dion Dresschers <dion@localhost.localdomain>
    Date:   Fri Mar 13 08:46:07 2015 -0400

        Ook human-readible en inodes toegevoegd

    commit e0d1981c46c1e25eb99379f1387e12f3dab0fffa
    Author: Dion Dresschers <dion@localhost.localdomain>
    Date:   Fri Mar 13 06:47:55 2015 -0400

        Nieuw bash script gemaakt

Met 'git branch' kan je ook zien welke branches er zijn en in welke nu geselecteerd is (zie de asterisk '*').

.. code-block:: bash

        dion@localhost repo_een]$ git branch
          master
        * vraag_zip
