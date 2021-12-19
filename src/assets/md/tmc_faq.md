-   [What programming language is The Minish Cap
    in?](#what-programming-language-is-the-minish-cap-in)
-   [What compiler does it use?](#what-compiler-does-it-use)
-   [Do you have a decompiler like mips2c? How hard is it to
    match?](#do-you-have-a-decompiler-like-mips2c-how-hard-is-it-to-match)
-   [What's the goal of this
    project?](#whats-the-goal-of-this-project)
-   [How many versions are there? Are all of them going to be
    decompiled?](#how-many-versions-are-there-are-all-of-them-going-to-be-decompiled)
-   [You only track progress for one version. How different are the
    versions, and how different is the progress on
    them?](#you-only-track-progress-for-one-version.-how-different-are-the-versions-and-how-different-is-the-progress-on-them)
-   [How large is the game's code in total? How large is the
    rom?](#how-large-is-the-games-code-in-total-how-large-is-the-rom)
-   [PC port?](#pc-port)
-   [Can this be used for modding?](#can-this-be-used-for-modding)
-   [Have you found out anything
    interesting?](#have-you-found-out-anything-interesting)
-   [Is what you find out here useful for any other
    games?](#is-what-you-find-out-here-useful-for-any-other-games)
-   [How do I get the third Oracle's
    house?](#how-do-i-get-the-third-oracles-house)
-   [I'd like to help. How should I get
    started?](#id-like-to-help.-how-should-i-get-started)
-   [What do I need to know to
    contribute?](#what-do-i-need-to-know-to-contribute)
-   [I'd like to write/blog/make a video about this project. Where
    can I get more
    information?](#id-like-to-writeblogmake-a-video-about-this-project.-where-can-i-get-more-information)

The Minish Cap Decompilation Project FAQ
========================================

What programming language is The Minish Cap in?
-----------------------------------------------

It was originally written in C, which is compiled to ARMv4T, which is
the language the Gameboy Advance uses.

What compiler does it use?
--------------------------

agbcc, a standard C compiler for GameBoy Advance games (also used by
Pokemon, for example)

Do you have a decompiler like mips2c? How hard is it to match?
--------------------------------------------------------------

No specialist decompiler for ARM exists, so people read the assembly
themselves or use Ghidra or the HexRays decompiler for a first
approximation. There are also specialist data/hex analysis tools made
for the project: [ask in Discord for
details](https://discord.zelda64.dev/)

What's the goal of this project?
--------------------------------

To decompile every version of the game, to learn about its inner
workings for curiosity, and also for applications in speedrunning.

How many versions are there? Are all of them going to be decompiled?
--------------------------------------------------------------------

There are 5 versions:

-   US retail
-   EU retail
-   JP retail
-   US demo
-   JP demo

All will eventually be decompiled, and they are being worked on
concurrently (see next question for why this is efficient).

You only track progress for one version. How different are the versions, and how different is the progress on them?
-------------------------------------------------------------------------------------------------------------------

Currently it seems that the versions are sufficiently similar that
there's not a lot of point tracking the differences: as of writing the
difference between US and DEMO JP is only 0.017%!

How large is the game's code in total? How large is the rom?
------------------------------------------------------------

The code that can be decompiled to C is about 640 kB. The whole ROM is
16 MB.

PC port?
--------

Yes, it will be possible, just like the Pokemon Emerald one. But we will
not be making it.

Can this be used for modding?
-----------------------------

In theory, yes: several mods have already been made using parts of decomp.
The rom is already shiftable, but not everything is decompiled yet and the
repository is subject to major changes as more is worked on, so we do not
recommend it unless you really know what you are doing.

Have you found out anything interesting?
----------------------------------------

Yes!

-   Unlike a lot of 2D games, some parts of TMC use 3D hit boxes
-   The engine has many similarities to Four Swords'
-   There's some left over development information like unused strings
    corresponding to game flags, and some graphics config files.
-   internally, the developers used the flags `DRUG_1`, `DRUG_2`,
    `DRUG_3`, `DRUG_ALL` to store the state of growing pico blooms found
    in Minish Village, used for producing picolyte. Additionally, the
    flag TAIMA\_SAIBAI\_1ST ("cannabis farmer") is used to determine
    whether or not the player has talked to the pico bloom minish for
    the first time. Interpret this how you like!

Is what you find out here useful for any other games?
-----------------------------------------------------

TMC will aid with the decompilation of Four Swords. It is currently
unknown whether other games share portions of code with it.

How do I get the third Oracle's house?
--------------------------------------

Sadly you can't, and from the code, it looks like it never intended to
be possible: the function which determines which of the Oracles appear
in the Inn is specifically written for two being accommodated, and the
overcomplicated way that they check the conditions suggests that there
was never a case for a third option (or hopefully they would have done
it a different way if there had been).

I'd like to help. How should I get started?
-------------------------------------------

Great, we're always happy to get new contributors! Most importantly,
[join the Discord](https://discord.zelda64.dev/), since this is where
all the discussion takes place. Start by reading the project
[README.md](https://github.com/zeldaret/tmc/blob/master/README.md) for
general information, follow the instructions in
[INSTALL.md](https://github.com/zeldaret/tmc/blob/master/INSTALL.md) to
get set up, and then read the
[CONTRIBUTING.md](https://github.com/zeldaret/tmc/blob/master/CONTRIBUTING.md)
for how to work on your first file.

What do I need to know to contribute?
-------------------------------------

The three most important things are knowledge of C, knowledge of ARM
assembly, and general knowledge about how the game works. Ask in the
Discord for how to acquire the first two: most people have learnt at
least the assembly part while working on this project, if not both. You
can do the third yourself by playing it again and paying attention!

I'd like to write/blog/make a video about this project. Where can I get more information?
-----------------------------------------------------------------------------------------

Please reach out to the project lead on Discord, who will be happy to
answer any questions.
