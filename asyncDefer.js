/*
These are used to define the orders of parsing the html and fetch the scripts and execute them.

NOTATIONS
----------   HTML Parsing
..........   Script fetched
$$$$$$$$$$   Script executed


************* With normal scripts **************
<script src="" ></script>

HTML Parsing     --------              -------
Script                   ........$$$$$$


************* With async scripts **************
<script async src="" ></script>

HTML Parsing     ------------      -------
Script                 ......$$$$$$


************* With defer scripts **************
<script defer src="" ></script>

HTML Parsing     -------------------
Script               ......         $$$$$$


********* When to use what **********
Async can't promise the execution order of the script.
So if scripts are dependent on each other than use defer
else,if we are using any third party script which is totally independent than we can use async.
*/