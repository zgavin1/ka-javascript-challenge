#Khan Academy JavaScript project

##Dev Process

### Step 1
Decide upon and implement basic React/Redux framework with npm.

### Step 2
Set up basic textarea to receive code. Set up workflow to handle entry into this code.

Decided to go with Ace editor after tinkering with Codemirror, which gave me all sorts of issues, and a super handy ace editor react component library on github.

### Step 3
Decide which parser to use. Acorn is slightly faster based on tests on Esprima's site (http://esprima.org/test/compare.html). Esprima seems to have far better documentation. Seems like in this case, speed might not be a huge concern, as students are only going to be typing a few dozen lines of code. And, since I've not worked with JS parser before, documentation is valuable.

Going with esprima.

### Step 4
walk(rootnode, object with estree node names pointing to functions to be executed, other optional things). 

### Step 5 
I probably want three reducers for the three tests I want to run: blacklist, whitelist, and structure.

I could have the input dispatch to all three reducers with some general action type. then the child reducers will look at action.nodeType(?) and see if they want to change the state based on that. This would result in a lot of hitting the default case statement

Or, the main reducer could check action.nodeType, and only dispatch the specific child reducer. Although it would still need to dispatch multiple times because of the structure test, which I'm realizing is the actually technically difficult part of this. Maybe I still don't fully understand what I want for that part, so I'll just do the reducers for the blacklists and whitelists.

Since I need to pick what goes on my black/whitelist, I'll go simple for now, and say my exercise is getting students to use for loops intead of while loops. So blacklist = 'WhileStatement'. and whitelist = "ForStatement";

Notes: So I'm wondering how to handle it when a student deletes code. State updates when I find new statments, but not when they're gone? Unless they do. Because I'm walking the entire nodetree on every key up. If I don't find one on the whole tree, need to return default state. This could be made easier with knowing the location of the specific code I'm watching for.

Or at the end of the whole node looping sequence I could check if I found anything. If I didn't then send an action to set defaults.

The other thing is that I should actually traverse the parsedCode in state...

I decided to have a side effect in the walkcallback that, when walking the nodes will flip a switch, saying I found the for statement or the while statement. then when the whole walk is over, I check to see if that switch was flipped. I feel like there must be something easier, more Redux-like.


### Step 6
I need to handle structure specifications, like within the for loop the students needs to declare a variable. Initial thoughts: I can either have an entirely different portion of state relating to structure, its own reducer, etc. Or, I could have a attr on the parts of the whitelist/blacklist that reference their position. I *think* I have acces to parentnodes or level in esprima.walk.

The first option seems better. For something like a nested var declared in a for loop, I can use. esprima-walk.walkAddParent.

The logic will be, walk the javascript, come across the nested bit (var declaration), check if parent is what we expect (ForStatement), update structure state.


### Notes: 

So currently, one specific issue is that the program only updates when the user enters valid code. The 'walk' throws an error otherwise, preventing any update.

What I assumed was that x's direct parent was the for statement, but really its the BlockStatement (seems obvious now). it's really i who's direct parent is the for loop. Esprima's code tester was very handy here!


### Step 6 B

Need the same type of reverse mechanism for the structure test as was needed for the lists

Notes: if this project was going to grow, and have multiple items on the balclist, whitelist and structure list, most of my code would need to loop through these thigns stored in state.






