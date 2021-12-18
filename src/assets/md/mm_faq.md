-   [What language was this game written
    in?](#what-language-was-this-game-written-in)
-   [What is this project's goal?](#what-is-this-projects-goal)
-   [Which versions will be
    decompiled?](#which-versions-will-be-decompiled)
-   [Does decomp run on console?](#does-decomp-run-on-console)
-   [PC port?](#pc-port)
-   [Can decomp be used to make
    mods?](#can-decomp-be-used-to-make-mods)
-   [Who can contribute? What do I need to
    know?](#who-can-contribute-what-do-i-need-to-know)
    -   [Is any use being made of leaked
        materials?](#is-any-use-being-made-of-leaked-materials)
-   [How do I set up the decompilation on my
    computer?](#how-do-i-set-up-the-decompilation-on-my-computer)
-   [Why does the progress graph move so
    inconsistently?](#why-does-the-progress-graph-move-so-inconsistently)
-   [When will the project be finished? What would \"Finished\"
    mean?](#when-will-the-project-be-finished-what-would-finished-mean)
-   [What decompiler is being used?](#what-decompiler-is-being-used)
-   [Is Majora\'s Mask more optimized than Super Mario
    64?](#is-majoras-mask-more-optimized-than-super-mario-64)
-   [How can I help?](#how-can-i-help)
-   [Where can I get more
    information?](#where-can-i-get-more-information)
    -   [I would like to write an article or make a video about this
        project. Who should I contact for further
        information?](#i-would-like-to-write-an-article-or-make-a-video-about-this-project.-who-should-i-contact-for-further-information)
-   [How similar is Majora\'s Mask to Ocarina of Time? Can code be
    copypasted between the
    two?](#how-similar-is-majoras-mask-to-ocarina-of-time-can-code-be-copypasted-between-the-two)
-   [Why is Majora\'s Mask so far behind Ocarina of
    Time?](#why-is-majoras-mask-so-far-behind-ocarina-of-time)
-   [Are Ocarina of Time and Majora\'s Mask using the same
    decompilation
    method?](#are-ocarina-of-time-and-majoras-mask-using-the-same-decompilation-method)
-   [Why is Majora\'s Mask harder to match than Ocarina of
    Time?](#why-is-majoras-mask-harder-to-match-than-ocarina-of-time)
-   [Why is there no assembly code in the Majora\'s Mask repo? What
    is transient
    ASM?](#why-is-there-no-assembly-code-in-the-majoras-mask-repo-what-is-transient-asm)

ZeldaRET Decompilation FAQ
=========================

What is Decompilation? What is matching decompilation?
------------------------------------------------------

Decompilation is a type of reverse engineering: analysing the compiled
binary data that is on the cartridge to produce human-readable code that
has the same result. *Matching* decompilation is more specific: instead
of merely functionally equivalent code, it aims to produce code that
compiles to *exactly* the same data as the original.

What language was this game written in?
---------------------------------------

[The programming language
C](https://en.wikipedia.org/wiki/C_(programming_language)), which is
compiled to [MIPS assembly
language](https://en.wikipedia.org/wiki/MIPS_architecture), which
transliterates precisely into the raw bytes of machine code/data that
are on the cartridge.

What is this project's goal?
----------------------------

We aim to produce a complete documented codebase, written in C as far as
possible, for every retail version of The Legend of Zelda Majora\'s
Mask. This may be used for knowledge of the game (how its systems work,
for glitches, for speedruns, etc.), or for changing parts of the game to
make it act differently or do different things (that is, modding). This
code compiles to be byte-for-byte identical to the original ROM, but our
code almost certainly looks very different from the original, since it
is based only on analysing the compiled code.

Which versions will be decompiled?
----------------------------------

It is intended to eventually support every one of the 10 retail versions
we have available: N64/GC, NTSC/PAL, etc.

Does decomp run on console?
---------------------------

The romfile that one of our decompilation projects compiles is identical
to the original ROM (that\'s what *matching* means). Therefore it runs
wherever that romfile will.

PC port?
--------

The goal of this project is **NOT** to make any kind of port, such as to
PC. Someone else might take our work and make a port (although they
would be foolish to do so before the codebase is improved) but
**ZeldaRET will not be involved in any porting**. A port will not happen
tomorrow anyway: decomp would only be the first step.

Please do not ask about it in Discord, ZeldaRET is not involved and will
not be involved in any such venture.

Can decomp be used to make mods?
--------------------------------

It is possible to use it in its current state (indeed, a number of mods
have already used it), but not recommended unless you are *very*
familiar with the codebase. It will be much better in future, it is a
high priority to improve the codebase's suitability for modding.

Who can contribute? What do I need to know?
-------------------------------------------

Anyone with a decent knowledge of how the games work can contribute
usefully in some way or other if they learn the basics of C.

-   To work with the decompiled code in a nontrivial way you need to
    know C (you can learn enough C to read the code in a week, so it\'s
    not a major time investment).
-   Code decompilation itself requires a good knowledge of C,
    particularly structs and pointers, but C has a sufficiently small
    vocabulary and grammar that these can be acquired quickly. MIPS
    assembly knowledge is not actually necessary to start learning to
    decompile: you can pick it up relatively quickly. (MIPS is a
    relatively easy assembly language to understand: it is often used in
    first courses in computer science.)
-   To work with asset files, you need to be able to use the repository
    and build the ROM, and know some xml and C, but we now have plenty
    of useful tools (especially
    [Z64Utils](https://github.com/Random06457/Z64Utils)) that make
    understanding how asset files are structured relatively simple.
-   Documentation requires good knowledge of C, but much moreso than the
    other areas an understanding of how the game works.
-   To contribute to the repository and organise your work with proper
    version control, you need to know the basics of git, and how to use
    it with GitHub.

There is one exception:

### Is any use being made of leaked materials?

No. *No one is allowed to contribute to the project who has accessed
material relating to relevant source code or documentation leaks.* For
specifics, see [the Discord server](http://discord.zelda64.dev/).

How do I set up the decompilation on my computer?
-------------------------------------------------

See the instructions in the
\[README.md\]https://github.com/zeldaret/mm/\#readme)

Why does the progress graph move so inconsistently?
---------------------------------------------------

Firstly, on any project like this, the beginning is slow as the methods
and techniques are created and understanding of anything requires a lot
of analysis of all factors involved. The middle period is fastest, as
techniques are refined, more people join, and they can learn more
quickly from established understanding. In the final stages of
decompilation, a lot of the files left will take a long time because
they are hard to decompile.

Secondly, the graph does not take into account

-   Code decompiled on people\'s GitHub forks that is currently being
    documented or cleaned up.
-   Code in PRs that is under review.
-   Asset analysis, symbol replacement, and other documentation.
-   Any other version support work done so far.

All of these represent significant decompilation progress that is not
accounted for by the graph. Spikes in progress tend to represent code
that has been completed, but required months to document properly.

Lastly, people are doing this in their spare time, so when they don\'t
have spare time, they aren\'t able to contribute.

When will the project be finished? What would \"Finished\" mean?
----------------------------------------------------------------

This is being done by people in their spare time, so we do not have a
specific deadline in mind. As far as what counts as \"done\", we will
consider the project complete when we have a completely documented
codebase that covers all 9 retail versions of the game.

What decompiler is being used?
------------------------------

We mostly use a custom-built decompiler called
[mips\_to\_c](https://github.com/matt-kempster/mips_to_c). Occasionally
some people have found Ghidra helpful, but for matching decompilation of
MIPS, custom tools for the job have proven much more capable.

Is Majora\'s Mask more optimized than Super Mario 64?
-----------------------------------------------------

Yes, the retail ROM that we are using has the standard `-O2`
optimization flags for most files (some of the low-level Nintendo 64
system files are compiled with other flags) (it also uses the debugging
`-g3` flag, for some reason). This means that the entire game has been
approximately as difficult to decompile as the last part of Super Mario
64 that was completed, namely the audio, although we have benefited
greatly from the prior experience of Super Mario 64 decomp, as well as
our custom decompiler `mips_to_c`.

How can I help?
---------------

-   Ocarina of Time has no more code decompilation work to do, at least
    on the first version.
-   Most code still needs a lot of documentation.
-   Object decompilation is analysis and identification of the content
    of the asset files used in code (textures, 3D models, animations,
    collision data, etc.). There is plenty of this still to do.
-   If you want to do code decompilation now, Majora\'s Mask is similar
    to Ocarina of Time, but a bit more difficult. It has plenty of
    simple actor files available that are suitable for beginners.
-   If you would like to help but not in a code-related way, we are very
    happy to talk to anyone who would like to publish articles or videos
    about the project.

Where can I get more information?
---------------------------------

For more information on any of the topics in the scope of this project
that have been discussed here, please join [the
Discord](http://discord.zelda64.dev/). We aim to be helpful and friendly
to newcomers, provided they have read the basics in this FAQ.

### I would like to write an article or make a video about this project. Who should I contact for further information?

Please reach out to one of the project leads via Discord. They will be
happy to either answer your questions themselves, or direct you to
someone who is more knowledgeable in the relevant areas.

How similar is Majora\'s Mask to Ocarina of Time? Can code be copypasted between the two?
-----------------------------------------------------------------------------------------

Some things are very similar: both use the same coding styles, share
some code, some of the asset files are identical (only about 10% of the
files are the exactly the same, though). However, other parts are very
different, an obvious example being Link\'s multiple forms, but there
are less obvious differences as well, such as use of animated textures
containing framedata instead of animating textures directly with code,
much more prevelent use of load-on-demand, and more that we will
discover in due course. So far there have also been a surprisingly large
number of changes from Ocarina of Time files that you would expect to
just transfer (Keese in MM are quite different from their Ocarina of
Time versions, for example, and a lot of graphics functions are a bit
different).

Why is Majora\'s Mask so far behind Ocarina of Time?
----------------------------------------------------

It was decided by the Majora\'s Mask project leads to concentrate on
Ocarina of Time first, with the expectation that a lot of Ocarina of
Time code could be used to help, directly or indirectly, with Majora\'s
Mask decompilation, and this has proven to be the case so far! But
recently, knowledge from Majora\'s Mask has also been helping with
matching stubborn functions in Ocarina of Time.

Are Ocarina of Time and Majora\'s Mask using the same decompilation method?
---------------------------------------------------------------------------

Broadly yes: both games are sufficiently similar that the same method
can be used for compiling the files. However, Ocarina of Time keeps the
remaining undecompiled assembly code in the main repository, while
Majora\'s Mask uses transient assembly, which makes the extraction and
disassembly process more complicated.

Why is Majora\'s Mask harder to match than Ocarina of Time?
-----------------------------------------------------------

Majora\'s Mask is working on a retail version. Retail versions of both
games are compiled with `-O2 -g3`. `-g3` is a debugging flag that
includes far more debugging information than just `-O2`, but also
changes how the compiled code looks. `-g3` is also more sensitive to the
scope in which variables are declared, so it is harder to produce
matching code; Ocarina of Time debug is more flexible here. However,
retail versions of Ocarina of Time are also compiled with `-O2 -g3`, so
it too will have this problem when that project moves to supporting
retail versions.

Why is there no assembly code in the Majora\'s Mask repo? What is transient ASM?
--------------------------------------------------------------------------------

It is the view of the Majora\'s Mask project leads that transient asm is
safer than storing the disassembly in the repo. They feel that the C
code is more transformative than a straight disassembly.

This does require a more sophisticated way of dealing with the code
(find/replace for renaming things must be replaced by a script and
dictionary, data must be handled with more care, etc.), but it also
produces a much cleaner codebase while the project is still in progress.

Most of decompilation work itself is not really any different from the
Ocarina of Time process: it just requires a few extra steps.
