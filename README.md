# GitUserDetails

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



Question 2 - Royal Rumble (Java preferred if you wish to move into full-stack development) or Javascript)

An ordinal number is a word representing rank or sequential order. The naming convention for royal names is to follow a given name with an ordinal number using a Roman numeral to indicate the birth order of two people of the same name.

The Roman numerals from 1 to 50 are defined as follows: The numbers 1 through 10 are written I, II, III, IV, V, VI, VII, VIII, IX, and X. The Roman numerals corresponding to the numbers 20, 30, 40, and 50 are XX, XXX, XL, and L. For any other two-digit number < 50, its Roman numeral representation is constructed by concatenating the numeral(s) for its multiples of ten with the numeral(s) for its values < 10. For example, 47 is 40 + 7 = "XL" + "VII" = "XLVII".

In this challenge, you will be given a list of royal name strings consisting of a given name followed by an ordinal number. You must sort the list first alphabetically by name, then by ordinal increasing within any given name.
For example, if you are given the royal names [George VI, William II, Elizabeth I, William I] the result of the sort is [Elizabeth I, George VI, William I, William II].


Your task:
Download the project and complete the function getSortedList in RoyalRumble.

https://drive.google.com/open?id=16Klg5pqWAPSWAgZi-QzK1RN2d8abvXwd

getSortedList takes in a list of royal name strings and must return the list of names sorted first by given name, then by ordinal.

You are to submit only the implemented RoyalRumble.java.

Constraints:
There will be between 1 and 50 names in the list.
Each name is a single string composed of firstName and ordinal, separated by a space.

ordinal is a valid Roman numeral representing a number between 1 and 50, inclusive.

The length of firstName will be between 1 and 20.
Each firstName comprises only uppercase and lowercase ascii characters [A-Za-z].

Sample Input:
Louis IX
Louis VIII
David II

Sample Output:
David II
Louis VIII
Louis IX
