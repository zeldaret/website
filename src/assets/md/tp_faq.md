- [What programming language was Twilight Princess written in?](#what-programming-language-was-twilight-princess-written-in)
- [What compiler is used?](#what-compiler-is-used)
- [What's the goal of this project?](#whats-the-goal-of-this-project)
- [How many versions are there? Are all of them going to be decompiled?](#how-many-versions-are-there-are-all-of-them-going-to-be-decompiled)
- [Why is there no progress graph?](#why-is-there-no-progress-graph)
- [PC port?](#pc-port)
- [Can this be used for modding?](#can-this-be-used-for-modding)
- [I'd like to help. How should I get started?](#id-like-to-help.-how-should-i-get-started)
- [What do I need to know to contribute?](#what-do-i-need-to-know-to-contribute)
- [What decompiler is being used?](#what-decompiler-is-being-used)
- [How similar is TP to The Wind Waker and Skyward Sword?](#how-similar-is-tp-to-the-wind-waker-and-skyward-sword)
- [Why start work on TP before TWW?](#why-start-work-on-tp-before-tww)
- [Why start with NTSCU GameCube? What about the debug version?](#why-start-with-ntscu-gamecube-what-about-the-debug-version)

Twilight Princess Decompilation Project FAQ
===========================================

What programming language was Twilight Princess written in?
-----------------------------------------------------------

Twilight Princess was originally written in C++, which is compiled to PowerPC assembly, which is the language the GameCube and Wii uses.


What compiler is used?
----------------------

Metrowerks CodeWarrior, a standard C++ compiler for GameCube / Wii games. Version 2.7 is the version we currently use, however further testing may eventually prove a different version was originally used.


What's the goal of this project?
--------------------------------

Our long-term goal is to produce a highly documented and complete C++ codebase for every version of Twilight Princess. Our current goal is to complete decompilation for the NTSC-U GameCube version of Twilight Princess. This project will help to gain a deep understanding of the game, and open up the path to more complex modding capabilities.


How many versions are there? Are all of them going to be decompiled?
--------------------------------------------------------------------

There are 12 known versions:

- NTSC-U GameCube
- PAL GameCube
- NTSC-J GameCube
- NTSC-U Wii 1.0
- NTSC-U Wii 1.2
- PAL Wii
- NTSC-J Wii
- NTSC-K Wii
- NTSC-U Wii Demo
- PAL Wii Demo
- CHN Nvidia Shield
- CHN Nvidia Shield Debug

The goal is to eventually decompile every version, starting with NTSC-U GameCube.


Why is there no progress graph?
-------------------------------

The project currently isn't set up to display a web progress graph, however in the future it will be supported. In the meantime, there is a python script within the project that will calculate current progress.


PC port?
--------

Yes, it will be possible. However our team will not be working on it.


Can this be used for modding?
-----------------------------

Currently the codebase is not fully shiftable. This means adding / changing things will break the resulting built ROM. Our goal is introduce shiftability in the near future, however modding may still be difficult until the project is in a more complete state.


I'd like to help. How should I get started?
-------------------------------------------

Great, we're always happy to get new contributors!
Most importantly, [join the Discord](https://discord.zelda64.dev/), since this is where all the discussion takes place.
You can read the project [README](https://github.com/zeldaret/tp/blob/master/README.md) for general information on setting the project up on your system.


What do I need to know to contribute?
-------------------------------------

The most important skills are some knowledge of C++, some basic knowledge of PowerPC assembly, and general knowledge about the game. Having a ton of coding experience isn't required for this project, you will learn as you go. Feel free to ask any questions in the discord!


What decompiler is being used?
------------------------------

We primarily use [Ghidra](https://ghidra-sre.org/) with plugins to support GC / Wii games for this project. However, a custom built [ppc_to_cpp](https://github.com/matt-kempster/mips_to_c) decompiler is in the works that may also be useful.


How similar is TP to The Wind Waker and Skyward Sword?
------------------------------------------------------

Twilight Princess shares some similarities to both The Wind Waker and Skyward Sword, however each game is highly modified to fit the needs of the game. Much of the `f` library is very similar to The Wind Waker, while `JSystem` is a common library amongst many GC / Wii games. However, the majority of each game is independent from each other, with only small similarities here and there.


Why start work on TP before TWW?
--------------------------------

There were simply more people interested in starting a decompilation project for Twilight Princess than for The Wind Waker, and the knowledge gained from TP will still be useful to both The Wind Waker and Skyward Sword.


Why start with NTSCU GameCube? What about the debug version?
------------------------------------------------------------

The project leads decided to start with the most common version used in speedrunning, as many contributors are from the speedrunning community and many people have access to that version. We reference the debug rom a great amount during the decompilation process however, as it offers much more insight through debug strings and less aggressive function inlining.