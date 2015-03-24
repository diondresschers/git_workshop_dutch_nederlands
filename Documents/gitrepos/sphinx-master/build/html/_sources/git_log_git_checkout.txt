======================
git log & git checkout
======================

We gaan nu het versiebeheer van git uitproberen, door wijzigingen terug te draaien.

Met 'git log' kan je de geschiedenis van de 'commits' bekijken. Je ziet hieronder onze twee 'commits' met de commentaren en een commit identificatie nummer.

.. code-block:: bash

    [dion@localhost repo_een]$ git log
    commit 349bf475ecce786e90e6432bc1fd32c142d8ca37
    Author: Dion Dresschers <dion@localhost.localdomain>
    Date:   Fri Mar 13 08:46:07 2015 -0400

        Ook human-readible en inodes toegevoegd

    commit e0d1981c46c1e25eb99379f1387e12f3dab0fffa
    Author: Dion Dresschers <dion@localhost.localdomain>
    Date:   Fri Mar 13 06:47:55 2015 -0400

        Nieuw bash script gemaakt

We gaan een 'checkout' draaien zodat in de working directory de wijzigen die we in het script hebben gedaan worden terug gedraaid. Dit kan met 'git checkout' en daarna het identificatienummer (minimaal de eerste 4 cijfers, mits dit het nummer uniek maakt.

.. code-block:: bash

    dion@localhost repo_een]$ git checkout e0d1
    Note: checking out 'e0d1'.

    You are in 'detached HEAD' state. You can look around, make experimental
    changes and commit them, and you can discard any commits you make in this
    state without impacting any branches by performing another checkout.

    If you want to create a new branch to retain commits you create, you may
    do so (now or later) by using -b with the checkout command again. Example:

      git checkout -b new_branch_name

      HEAD is now at e0d1981... Nieuw bash script gemaakt


.. code-block:: bash

We kunnen met 'cat' de inhoud van de file zien en we zien dat onze oude staat van de file bewaard is gebleven.

      [dion@localhost repo_een]$ cat show_dir.sh 

      #!/bin/bash

      echo "Dit is de directory:"

      ls -la

Als we meteen een 'git add' doen zie je dat er niks gewijzigd is:

.. code-block:: bash

    dion@localhost repo_een]$ git commit -am "Na de terugdraai"
    # HEAD detached at e0d1981
    nothing to commit, working directory clean

De veranderingen die we naderhand hebben gemaakt zijn we ook niet kwijt al lijkt het er in eerste instantie wel op via 'git log':

.. code-block:: bash

    dion@localhost repo_een]$ git log
    commit e0d1981c46c1e25eb99379f1387e12f3dab0fffa
    Author: Dion Dresschers <dion@localhost.localdomain>
    Date:   Fri Mar 13 06:47:55 2015 -0400

Over branching gaan we het later hebben, maar met 'git log --all' zie je alle commits, dus ook onze uitbreiding van het script zijn we niet kwijt.

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








