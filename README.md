CalcIt
======

CalcIt adds some spreadsheet-like powers to static websites.
It can be used as a JavaScript library or as a WebComponent.

Using it you can write a "formulae" composed from `functions` and use
DOM nodes as an input and selectors to create a range of values.

Please see `examples/` and `src/functions/`.

Getting node values
-------------------

There is a special function, `selectorsToValues` to fetch value of node(s).
It can be used with `seq` sequence:

```
selectorsToValues(...seq('#id1', '#id2'))
```

Sequences
---------

A `seq` can be used to generate a sequence of numbers in ascending, as well as
descending order. If numbers are prefixed, the prefix will be present also in
the generated output.

```
seq(1, 5) // 1, 2, 3, 4, 5
seq('#id1', '#id5') // #id1, #id2, #id3, #id4, #id5'
```
