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
 


/* .--------.
 * | CHANGE |
 * '--------'
 */

/***************************************************
 *
 *  [1] Change console.log LogMessage function! 
 */
  "   ┍━━━┑      ┍━━━┑     ┍━━━┑ "
  "   │ c │hange │ t │ill' │ ( │ "
  "   ┕━━━┙      ┕━━━┙     ┕━━━┙ "
/*
 *  [2] Change the message to "Starting Now..."
 */ 
  "   ┍━━━┑      ┍━━━┑       ┍━━━┑ "
  "   │ c │hange │ i │inside │ ” │ "
  "   ┕━━━┙      ┕━━━┙       ┕━━━┙ "
/* 
 * Note: Can be used from the start of the line
 */

console.log( "This is a log message" );



 /***************************************************
  * 
  *  [3] Change the Second message to "Starting Now..."
  */
  "   ┍━━━┑                             "
  "   │ . │ To repeate the last command "
  "   ┕━━━┙                             "

LogMessage( "Change this message too!" );



 /***************************************************
  * 
  *  [4] Change the Second message to use the variable
  */
  "   ┍━━━┑      ┍━━━┑       ┍━━━┑             "
  "   │ c │hange │ i │inside │ ) │ Parenthesis "
  "   ┕━━━┙      ┕━━━┙       ┕━━━┙             "

var msg = "This is another message";
LogMessage( "Change this message to a variable" );




/* .--------.
 * | DELETE |
 * '--------'
 */

/***************************************************
 *
 *  [1] Delete the 5 duplicates
 */
 "   ┍━━━┑       ┍━━━┑┍━━━┑             "
 "   │ 5 │ Times │ d ││ d │elete Row(s) "
 "   ┕━━━┙       ┕━━━┙┕━━━┙             "

$(document).ready( () => Init('website') );
$(document).ready( () => Init('website') ); // <-- Uneeded duplicate
$(document).ready( () => Init('website') ); // <-- Uneeded duplicate
$(document).ready( () => Init('website') ); // <-- Uneeded duplicate
$(document).ready( () => Init('website') ); // <-- Uneeded duplicate
$(document).ready( () => Init('website') ); // <-- Uneeded duplicate



/***************************************************/
 "   ┍━━━┑                             "
 "   │ $ │ Go to the end of the line   "
 "   ┕━━━┙                             "

/*  [2] Delete last comment */
 "   ┍━━━┑           ┍━━━┑       ┍━━━┑      "
 "   │ d │ Delete to │ 4 │ words │ b │ack   "
 "   ┕━━━┙           ┕━━━┙       ┕━━━┙      "
/*                 .----.
 *           ------| OR |------  
 *                 '----'        */
 "   ┍━━━┑           ┍━━━┑        ┍━━━┑┍━━━┑                             "
 "   │ d │ Delete to │ 2 │ second │ F ││ / │ Found previous Slash sign   "
 "   ┕━━━┙           ┕━━━┙        ┕━━━┙┕━━━┙                             "

$(document).ready( () => Setup('plugins') ); // Delete This Comment 


