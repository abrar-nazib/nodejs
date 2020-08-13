/*
!installing some package with npm
$npm i -g <package name>@<version-number>
?        i = install
?       -g= global

!installing package.json file in a node file
$npm init
?       keeps the metadata about the project
$npm init --yes
?       creates the package.json file with all default values

!important note about require
require('filename'); -> 
?   1. checks core modules with filename
?   2. checks in node_modules folder

!autometically installing the dependencies looking up package.json
$ npm i

!some notes about git
$git init
?   initiates a git repo inside the directory the command was executed
$git status
?   shows the status of the git repo
$git add <filename>
?   adds file to be committed(queues for committing line doesn't commit)

*/
