==========
git config
==========

Tot nu hebben we git voornamelijk voor onze eigen machine gebruikt. Op het moment dat je met meerdere personen in dezelfde repository gaat werken, of als je reposiries op internet gaat zetten is het beter om netjes een identiteit te zetten. Dit doe je met 'git commit'.

.. code-block:: bash

     dion@localhost repo_een]$ git log --all
     commit 349bf475ecce786e90e6432bc1fd32c142d8ca37
     Author: Dion Dresschers <dion@localhost.localdomain>
     Date:   Fri Mar 13 08:46:07 2015 -0400

         Ook human-readible en inodes toegevoegd

     commit e0d1981c46c1e25eb99379f1387e12f3dab0fffa
     Author: Dion Dresschers <dion@localhost.localdomain>
     Date:   Fri Mar 13 06:47:55 2015 -0400

         Nieuw bash script gemaakt

We zien dat nu de config gezet is op basis van je username in CentOS.
We gaan dit nu aanpassen met 'git config', voor de 'user.name' en 'user.email':

.. code-block:: bash

     dion@localhost repo_een]$ git config --global user.name "Dion H.J. Dresschers"
     [dion@localhost repo_een]$ git config --global user.email "d.h.j.dresschers@hva.nl"

We kunnen nu als bonus een 'commit' doen om de gebruikersnaam te zetten (dit commando wordt altijd genoemd na een 'commit' als je gebruikersnaam nog niet gezet is).

.. code-block:: bash

    [dion@localhost repo_een]$ git commit --amend --reset-author

`Cambridge Dictionary: amend <http://dictionary.cambridge.org/dictionary/british/amend>`_

Je ziet nu dat de gebruiker aangepast is.

.. code-block:: bash

    dion@localhost repo_een]$ git log --all
    commit 7bd88917abcb42626f541d3d7e884a19f1069a3c
    Author: Dion H.J. Dresschers <d.h.j.dresschers@hva.nl>
    Date:   Fri Mar 13 10:45:04 2015 -0400

        Gebruikersnaam gewijzigd

    commit 349bf475ecce786e90e6432bc1fd32c142d8ca37
    Author: Dion Dresschers <dion@localhost.localdomain>
    Date:   Fri Mar 13 08:46:07 2015 -0400

        Ook human-readible en inodes toegevoegd

    commit e0d1981c46c1e25eb99379f1387e12f3dab0fffa
    Author: Dion Dresschers <dion@localhost.localdomain>
    Date:   Fri Mar 13 06:47:55 2015 -0400

        Nieuw bash script gemaakt

De configuratie instellingen kunnen op verschillende files gezet zijn. Hieronder zie je die files geordend per prioriteit (waar '1' de voorkeur heeft boven '2').

#. Repository Settings
    '*repository*/.git/config'
#. User Settings
    '~/.gitconfig'
#. Global Settings
    '/etc/gitconfig'

Gaan we nu kijken in onze eigen setting zien we voor de Repostory Settings, dit is dus de file in de repostory zelf en hebben hebben dus de hoogste prio:

.. code-block:: bash

    dion@localhost ~]$ cat ~/repo_een/.git/config
    [core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
    [user]
        name = Dion H.J. Dresschers
        email = d.h.j.dresschers@hva.nl

Hierboven zien we dat het commando 'git config' deze file heeft aangepast.

Voor de user settings (dit is dus de setting in de user home directory).

.. code-block:: bash

    [dion@localhost ~]$ cat ~/.gitconfig 
        [user]
        name = Dion H.J. Dresschers
        email = d.h.j.dresschers@hva.nl

Voor de Global Settings zien we dat deze file standaard niet is aangemaakt en dat ons 'git config' commando weinig uitgericht heeft.

.. code-block:: bash

    [dion@localhost ~]$ cat /etc/gitconfig
        cat: /etc/gitconfig: No such file or directory





