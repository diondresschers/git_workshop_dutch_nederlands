===============
Git Installatie
===============

dresh

Log eerst in op je VM:

.. code-block:: bash

    dion@dionysos:~$ ssh 127.0.0.1 -p2222
    dion@127.0.0.1's password: 
    X11 forwarding request failed on channel 0
    [dion@localhost ~]$ 

Daar kijk je of git al geinstalleerd is:

.. code-block:: bash

    [dion@localhost ~]$ git
    -bash: /usr/bin/git: No such file or directory

Dan installeer 'git' via de 'yum' installer:

.. code-block:: bash

    dion@localhost ~]$ yum install git
    Loaded plugins: fastestmirror
    You need to be root to perform this command.
    [dion@localhost ~]$ sudo yum install git
    Loaded plugins: fastestmirror
    Loading mirror speeds from cached hostfile
     * base: ftp.nluug.nl
     * extras: mirror.1000mbps.com
     * updates: mirror.1000mbps.com
    Resolving Dependencies
    --> Running transaction check
    ---> Package git.x86_64 0:1.8.3.1-4.el7 will be installed
    --> Processing Dependency: perl-Git = 1.8.3.1-4.el7 for package: git-1.8.3.1-4.el7.x86_64
    --> Processing Dependency: perl(Git) for package: git-1.8.3.1-4.el7.x86_64
    --> Running transaction check
    ---> Package perl-Git.noarch 0:1.8.3.1-4.el7 will be installed
    --> Finished Dependency Resolution

    Dependencies Resolved

    ===================================================================================================================================================================================================================
     Package                                            Arch                                             Version                                                  Repository                                      Size
    ===================================================================================================================================================================================================================
    Installing:
     git                                                x86_64                                           1.8.3.1-4.el7                                            base                                           4.3 M
    Installing for dependencies:
     perl-Git                                           noarch                                           1.8.3.1-4.el7                                            base                                            52 k

    Transaction Summary
    ===================================================================================================================================================================================================================
    Install  1 Package (+1 Dependent package)

    Total download size: 4.4 M
    Installed size: 22 M
    Is this ok [y/d/N]: y
    Downloading packages:
    (1/2): perl-Git-1.8.3.1-4.el7.noarch.rpm                                                                                                                                                    |  52 kB  00:00:00     
    (2/2): git-1.8.3.1-4.el7.x86_64.rpm                                                                                                                                                         | 4.3 MB  00:00:00     
    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Total                                                                                                                                                                              5.9 MB/s | 4.4 MB  00:00:00     
    Running transaction check
    Running transaction test
    Transaction test succeeded
    Running transaction
      Installing : git-1.8.3.1-4.el7.x86_64                                                                                                                                                                        1/2 
      Installing : perl-Git-1.8.3.1-4.el7.noarch                                                                                                                                                                   2/2 
      Verifying  : perl-Git-1.8.3.1-4.el7.noarch                                                                                                                                                                   1/2 
      Verifying  : git-1.8.3.1-4.el7.x86_64                                                                                                                                                                        2/2 

    Installed:
      git.x86_64 0:1.8.3.1-4.el7                                                                                                                                                                                       

    Dependency Installed:
      perl-Git.noarch 0:1.8.3.1-4.el7                                                                                                                                                                                  

    Complete!
    [dion@localhost ~]$ 

Dan geef je het eerste git commando. Je ziet meteen dat er hulp tegemoetkomt:

.. code-block:: bash

    dion@localhost ~]$ git
    usage: git [--version] [--help] [-c name=value]
               [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
               [-p|--paginate|--no-pager] [--no-replace-objects] [--bare]
               [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
               <command> [<args>]

    The most commonly used git commands are:
       add        Add file contents to the index
       bisect     Find by binary search the change that introduced a bug
       branch     List, create, or delete branches
       checkout   Checkout a branch or paths to the working tree
       clone      Clone a repository into a new directory
       commit     Record changes to the repository
       diff       Show changes between commits, commit and working tree, etc
       fetch      Download objects and refs from another repository
       grep       Print lines matching a pattern
       init       Create an empty Git repository or reinitialize an existing one
       log        Show commit logs
       merge      Join two or more development histories together
       mv         Move or rename a file, a directory, or a symlink
       pull       Fetch from and merge with another repository or a local branch
       push       Update remote refs along with associated objects
       rebase     Forward-port local commits to the updated upstream head
       reset      Reset current HEAD to the specified state
       rm         Remove files from the working tree and from the index
       show       Show various types of objects
       status     Show the working tree status
       tag        Create, list, delete or verify a tag object signed with GPG

    'git help -a' and 'git help -g' lists available subcommands and some
    concept guides. See 'git help <command>' or 'git help <concept>'
    to read about a specific subcommand or concept.


