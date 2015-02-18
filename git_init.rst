===============
Starten met Git
===============

We gaan eerst naar onze home directory (~) en maken daar een lege directory.

.. code-block:: bash
    [dion@localhost ~]$ cd ~
    [dion@localhost ~]$ mkdir repo_een
    [dion@localhost ~]$ cd repo_een

Het is uiteraard een lege directory, dus er zitten geen bestanden in.

.. code-block:: bash
    [dion@localhost repo_een]$ ls -la
    total 4
    drwxrwxr-x. 2 dion dion    6 Feb 18 08:01 .
    drwx------. 3 dion dion 4096 Feb 18 08:01 ..

Vervolgens gaan we kijken wat de status van git is met ``git status``

.. code-block:: bash
    [dion@localhost repo_een]$ git status
    fatal: Not a git repository (or any parent up to mount point /home)
    Stopping at filesystem boundary (GIT_DISCOVERY_ACROSS_FILESYSTEM not set).

We krijgen de melding dat de directory helemaal geen git repository is.

We kunnen een git repository initialiseren met ``git init``.

.. code-block:: bash
    [dion@localhost repo_een]$ git init
    Initialized empty Git repository in /home/dion/repo_een/.git/

Als we nu naar de status kijken zien we dat het nu wel een repository is (op de 'branch' die standaard 'master' heet). Er is alleen nog niks wat 'commit' kan worden.

.. code-block:: bash
    [dion@localhost repo_een]$ git status
    # On branch master
    #
    # Initial commit
    #
    nothing to commit (create/copy files and use "git add" to track)

Kijken we in de directory dan zien we nu de verborgen directory '.git' staan die net aangemaakt is.

.. code-block:: bash
    [dion@localhost repo_een]$ ls -la

    total 8
    drwxrwxr-x. 3 dion dion   25 Feb 18 08:01 .
    drwx------. 3 dion dion 4096 Feb 18 08:01 ..
    drwxrwxr-x. 7 dion dion 4096 Feb 18 08:01 .git

Hierin staan weer een aantal git bestanden. We willen de filestructuur duidelijk maken met 'tree' maar deze is standaard niet geinstalleerd, dus installeren we hem met 'yum install tree'.

.. code-block::
    [dion@localhost repo_een]$ tree .git
    -bash: tree: command not found
    [dion@localhost repo_een]$ sudo yum install tree
    [sudo] password for dion: 
    Loaded plugins: fastestmirror
    base                                                                             | 3.6 kB  00:00:00     
    extras                                                                           | 3.4 kB  00:00:00     
    updates                                                                          | 3.4 kB  00:00:00     
    Loading mirror speeds from cached hostfile
     * base: mirror.nl.webzilla.com
     * extras: ftp.nluug.nl
     * updates: mirror.nl.webzilla.com
    Resolving Dependencies
    --> Running transaction check
    ---> Package tree.x86_64 0:1.6.0-10.el7 will be installed
    --> Finished Dependency Resolution

    Dependencies Resolved

    ========================================================================================================
     Package              Arch                   Version                         Repository            Size
    ========================================================================================================
    Installing:
     tree                 x86_64                 1.6.0-10.el7                    base                  46 k

    Transaction Summary
    ========================================================================================================
    Install  1 Package

    Total download size: 46 k
    Installed size: 87 k
    Is this ok [y/d/N]: y
    Downloading packages:
    tree-1.6.0-10.el7.x86_64.rpm                                                     |  46 kB  00:00:00     
    Running transaction check
    Running transaction test
    Transaction test succeeded
    Running transaction
      Installing : tree-1.6.0-10.el7.x86_64                                                             1/1 
      Verifying  : tree-1.6.0-10.el7.x86_64                                                             1/1 

    Installed:
      tree.x86_64 0:1.6.0-10.el7                                                                            

    Complete!

Nu zien we netjes de opbouw van de '.git' directory:

.. code-block:: bash
    [dion@localhost repo_een]$ tree .git
    .git
    |-- branches
    |-- config
    |-- description
    |-- HEAD
    |-- hooks
    |   |-- applypatch-msg.sample
    |   |-- commit-msg.sample
    |   |-- post-update.sample
    |   |-- pre-applypatch.sample
    |   |-- pre-commit.sample
    |   |-- prepare-commit-msg.sample
    |   |-- pre-push.sample
    |   |-- pre-rebase.sample
    |   `-- update.sample
    |-- info
    |   `-- exclude
    |-- objects
    |   |-- info
    |   `-- pack
    `-- refs
        |-- heads
        `-- tags

    9 directories, 13 files
    [dion@localhost repo_een]$ 


