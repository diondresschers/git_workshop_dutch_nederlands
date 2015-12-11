====================
git add & git commit
====================

We hebben nu dus een nieuwe file aangemaakt.

.. code-block:: bash

    dion@localhost repo_een]$ ls -la
    total 8
    drwxrwxr-x. 3 dion dion   35 Mar 13 06:46 .
    drwx------. 3 dion dion   94 Mar 13 06:46 ..
    drwxrwxr-x. 8 dion dion 4096 Mar 13 06:48 .git
    -rwxrw-r--. 1 dion dion   49 Feb 23 18:29 show_dir.sh


Als we nu een 'git status' uitvoeren zien we dat de 'show_dir.sh' file wel in de Working Directory staat, maar 'untracked' is. We kunnen de file van de Working Directory naar de 'Staging Area' brengen met 'git add'.

.. code-block:: bash

    dion@localhost repo_een]$ git status
    # On branch master
    #
    # Initial commit
    #
    # Untracked files:
    #   (use "git add <file>..." to include in what will be committed)
    #
    #   show_dir.sh
    nothing added to commit but untracked files present (use "git add" to track)

Dit zullen we dan ook maar doen.

Je kan met 'git add *show_dir.sh*' alleen dit specifieke bestand naar de Staging Area brengen, met 'git add .' doe je dit voor alle bestanden in die directory.

.. code-block:: bash

    dion@localhost repo_een]$ git add
    Nothing specified, nothing added.
    Maybe you wanted to say 'git add .'?
    [dion@localhost repo_een]$ git add .

We kunnen nu zien dat een nieuwe file die je weer kan 'unstagen' met 'git rm --chached *show_dir*' 

.. code-block:: bash

    [dion@localhost repo_een]$ git status

    # On branch master
    #
    # Initial commit
    #
    # Changes to be committed:
    #   (use "git rm --cached <file>..." to unstage)
    #
    #   new file:   show_dir.sh
    #

Nu de file in de Staging Area zit, kan je hem naar de Git Repostory brengen met 'git commit'. Als je dit doet wordt meteen een vim-achtige teksteditor geopenend waar je commentaar voor de wijzigingen in kan zetten. Je sluit het commentaar af met ESC-toets, dan ':wq' (zelfde als vim).

Een andere optie is om het commentaar meteen in de commandoregel toe te voegen met:

.. code-block:: bash

    git commit -m "Nieuw bash script gemaakt."

Je ziet nu dat alles 'gecommit' is en dat er geen wijzigingen zijn in de Working Directory.

.. code-block:: bash

    dion@localhost repo_een]$ git status
    # On branch master
    nothing to commit, working directory clean

We wijzigen nog een keer met 'vim' het door ons gemaakte script zodat 'ls la', 'ls -lahi' wordt.

Met 'git status' zie je nu de volgende informatie:

.. code-block:: bash

    [dion@localhost repo_een]$ git status
    # On branch master
    # Changes not staged for commit:
    #   (use "git add <file>..." to update what will be committed)
    #   (use "git checkout -- <file>..." to discard changes in working directory)
    #
    #   modified:   show_dir.sh
    #
    no changes added to commit (use "git add" and/or "git commit -a")

Je krijgt nu de hint dat je het commando 'git commit -a' kan gebruiken. Dit is een vervanging van een  losse 'git add' en daarna 'git commit'.

.. note:: Git geeft altijd netjes uitleg wat het gedaan heeft, wat er mis gaat of wat je kan doen. Lees daarom deze feedback zorgvuldig.

Dit doen we dus maar braaf en voegen meteen met '-m' commentaar toe.

.. code-block:: bash

    [dion@localhost repo_een]$ git commit -am "Ook human-readible en inodes toegevoegd"
    [master 349bf47] Ook human-readible en inodes toegevoegd
     Committer: Dion Dresschers <dion@localhost.localdomain>
    Your name and email address were configured automatically based
    on your username and hostname. Please check that they are accurate.
    You can suppress this message by setting them explicitly:

         git config --global user.name "Your Name"
         git config --global user.email you@example.com

    After doing this, you may fix the identity used for this commit with:

         git commit --amend --reset-author

     1 file changed, 1 insertion(+), 1 deletion(-)

Je ziet boven dat er 1 file gewijzigd is. Je hebt 'ls -la' veranderd in 'ls -lahi'. Git registeert dit als eerst de oude regel weghalen (1 deletion) en vervolgens de nieuwe (gewijzigde) regel toevoegen (1 insertion). Daarnaast nog de melding dat onze naam en e-mailadres nog niet ingevuld is en netjes de uitleg hoe dit opgelost kan worden (dit gaan we later nog doen).



