/*
 * A taste of vim POWER!
 *
 * .----------------------------------------.
 * | IMPORTANT: If you done something wrong:|
 * '----------------------------------------'
 */
 "      ┍━━━┑ ┍━━━┑         "
 "      │ { │/│ } │         " // Jump between paragraphs
 "      ┕━━━┙ ┕━━━┙         "
 "      ┍━━━┑ ┍━━━━━┑       "
 "      │ i │/│ ESC │       " // Insert / Normal mode
 "      ┕━━━┙ ┕━━━━━┙       "
 "      ┍━━━┑ ┍━━━━━━┑┍━━━┑ "
 "      │ u │/│ CTRL ││ r │ " // Undo / Redo
 "      ┕━━━┙ ┕━━━━━━┙┕━━━┙ "

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                            Macros
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 *  [1] Oops, we have double a=, and wrong number values
 */
/* IMPORTANT: Run on the first line */

 "   ┍━━━┑┍━━━┑              "
 "   │ q ││ q │ Record Macro "
 "   ┕━━━┙┕━━━┙              "
 "   ┍━━━┑ ┍━━━┑               ┍━━━┑ ┍━━━┑            "
 "   │ 🠗 │ │ ^ │ Start of line │ y │ │ w │ Yank word  "
 "   ┕━━━┙ ┕━━━┙               ┕━━━┙ ┕━━━┙            "
 "   ┍━━━┑ ┍━━━┑                     ┍━━━┑ ┍━━━┑┍━━━┑              "
 "   │ 🠕 │ │ P │ paste before cursor │ ➞ │ │ d ││ w │ Delete word  "
 "   ┕━━━┙ ┕━━━┙                     ┕━━━┙ ┕━━━┙┕━━━┙              "
 "   ┍━━━┑ ┍━━━┑                "
 "   │ 🠗 │ │ q │ Stop recording "
 "   ┕━━━┙ ┕━━━┙                "

 "   ┍━━━┑┍━━━┑                    |    |   ┍━━━┑                              "
 "   │ @ ││ @ │ Repeat recording   | OR |   │ . │ With macro repeater plugin   "
 "   ┕━━━┙┕━━━┙                    |    |   ┕━━━┙                              "
 

a = 1;
a = 2;
b = 3;
c = 4;
d = 5;
e = 6;
f = 7;
g = 8;
h = 9;
i = 10;
j = 11;
k = 12;
l = 13;
m = 14;
n = 15;
o = 16;
