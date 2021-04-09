---
layout: post
title:  Conway's Game of Life
date:   2021-02-04
categories: light bites
published: true
excerpt_separator: <!--more-->
---
*A simulation of Conway's Game of Life using Python and Pygame, as a nice visualisation of cellular automata*
<!--more-->

This is a simulation of the late [John Conway’s](https://en.wikipedia.org/wiki/John_Horton_Conway) [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) that I made using Python 3 and Pygame. I’d heard of this game many times before, but I’d never gotten round to learning more about it until recently, while ~~procrastinating~~ preparing for one of the [university modules](https://www.st-andrews.ac.uk/subjects/modules/catalogue/?code=MT4512&academic_year=2020%2F1) that I’m taking this semester. 

The GitHub repo for this project can be found [here](https://github.com/spectroscopycafe/conway-game-of-life). I drew a lot of inspiration for how to start the project from Robert Heaton’s blog post, which you can find [here](https://robertheaton.com/2018/07/20/project-2-game-of-life/).

# Conway's Game of Life
Conway’s Game of Life isn’t really a “game” in the conventional sense of the word because there are no players involved, making it a [zero-player game](https://en.wikipedia.org/wiki/Zero-player_game). This might not seem very interesting on the surface, but the Game of Life has managed to grab the [same level of attention (or more)](https://www.youtube.com/watch?v=E8kUJL04ELA) as some of Conway’s other discoveries. So what makes it so intriguing?

One of the reasons for this is that the rules of Life are very simple, but somehow lead to really complex and unpredictable (not a technical term)​[^1] behaviour. There are only three simple rules of Life (see next section), but some of the [patterns](http://pentadecathlon.com/lifeNews/index.php) that people have come up with are truly remarkable.

Another reason why people find the Game of Life interesting is because it is able to [simulate any computer algorithm](https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/turing-machine/one.html), so it can simulate a *Turing Machine*. Paul Rendell has even [managed to do this](https://www.ics.uci.edu/~welling/teaching/271fall09/Turing-Machine-Life.pdf), and it blows my mind every time I see it!

# Description
The basic rules of the game are (from [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)):

> 1. Any live cell with two or three live neighbours survives.
> 2. Any dead cell with three live neighbours becomes a live cell.
> 3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

The game starts off in a *dead state* by default, where a blank grid is displayed. The option is provided to set the state to a *random state*, or a particular initial state can be set up by clicking on desired squares (i.e. *mouse editing*). To run or move to the next iteration, mouse editing must be disabled. “Runs” or automatic iterations can be paused, and after enabling mouse editing the new state can then be modified.

# The Simulation
You can try out my implementation of the Game of Life [here](https://github.com/spectroscopycafe/conway-game-of-life). Below are some snapshots of the simulation:
![Gosper's Glider Gun](/images/2021/GoL1_GliderGun.png)
Figure 1: [Gosper’s glider gun](https://en.wikipedia.org/wiki/Gun_(cellular_automaton)) that periodically shoots gliders down to the bottom right of the screen

![Random state](/images/2021/GoL2_Random.png)
Figure 2: A [(pseudo-)randomly](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) generated start state

![State after iterations](/images/2021/GoL3_Iteration.png)
Figure 3: Most cells have died after 108 iterations

# Controls
- `SPACE`: Enable/disable mouse editing
- `RIGHT_ARROW`: Next iteration of Life. *Requires disabled mouse editing.*
- `P`: Play/pause automatic iterations. *Requires disabled mouse editing.*
- `D`: Dead state, or an empty board. *Requires disabled mouse editing.*
- `R`: Random state. *Requires disabled mouse editing.*

When mouse editing is enabled, squares can be clicked on to change their state. Live cells are blue and dead cells are white. Other features like the board size, rate of iteration, colours, etc. can be changed in the “constants.py” file – see the [GitHub repo](https://github.com/spectroscopycafe/conway-game-of-life) for this.

There are many other things I haven’t mentioned, like some of the possible arrangements, how the Game of Life can simulate a Turing Machine, and so on. I think I’ll leave them for another blog post, after I’ve learned more about them!

---

[^1]: Note that this isn’t a technical definition – in principle, the entire future of Life could be predicted on the basis of a known initial state, given enough computation. What I mean by “unpredictable” is more along the lines of “doesn’t match what we intuitively expect to see”.
