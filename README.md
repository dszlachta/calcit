CalcIt
======

Write spreadsheet-like formulae that take values from DOM nodes.
It can be used as any other JavaScript library or as a web component.

Please see `examples/` for how to use CalcIt and `src/functions/` for
predefined functions that can be used in a formula.

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
the generated output. That way you can use `seq` to build a sequence of selectors.

```
seq(1, 5) // 1, 2, 3, 4, 5
seq('#id1', '#id5') // #id1, #id2, #id3, #id4, #id5'
```
