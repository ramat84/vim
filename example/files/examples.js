/*
 * A taste of vim POWER!
 *
 * .----------------------------------------.
 * | IMPORTANT: If you done something wrong:|
 * '----------------------------------------'
 *      ┍━━━━━┑
 *      │ ESC │ - Back to normal mode
 *      ┕━━━━━┙
 *      ┍━━━┑
 *      │ u │   - UNDO
 *      ┕━━━┙
 *      ┍━━━━━━┑┍━━━┑
 *      │ CTRL ││ r │ to REDO
 *      ┕━━━━━━┙┕━━━┙
 */


/* .--------.
 * | CHANGE |
 * '--------'
 */

 /***************************************************
  *
  *  [1] Change console.log LogMessage function! 
  *       ┍━━━┑      ┍━━━┑     ┍━━━┑
  *  USE: │ c │hange │ t │ill' │ ( │
  *       ┕━━━┙      ┕━━━┙     ┕━━━┙
  *
  *  [2] Change the message to "Starting Now..."
  *       ┍━━━┑      ┍━━━┑       ┍━━━┑
  *  USE: │ c │hange │ i │inside │ " │
  *       ┕━━━┙      ┕━━━┙       ┕━━━┙
  *  Note: Can be used from the start of the line
  *
  */

console.log( "This is a log message" );



 /***************************************************
  * 
  *  [3] Change the Second message to "Starting Now..."
  *       ┍━━━┑
  *  USE: │ . │ To repeate the last command
  *       ┕━━━┙
  */

LogMessage( "Change this message too!" );



 /***************************************************
  * 
  *  [4] Change the Second message to use the variable
  *       ┍━━━┑      ┍━━━┑       ┍━━━┑
  *  USE: │ c │hange │ i │inside │ ) │ Parenthesis
  *       ┕━━━┙      ┕━━━┙       ┕━━━┙
  */

var msg = "This is another message";
LogMessage( "Change this message to a variable" );




/* .--------.
 * | DELETE |
 * '--------'
 */

 /***************************************************
  *
  *  [1] Delete the 5 duplicates
  *       ┍━━━┑       ┍━━━┑┍━━━┑
  *  USE: │ 5 │ Times │ d ││ d │elete Row(s)
  *       ┕━━━┙       ┕━━━┙┕━━━┙
  */ 


$(document).ready( () => Init('website') );
$(document).ready( () => Init('website') ); // <-- Uneeded duplicate
$(document).ready( () => Init('website') ); // <-- Uneeded duplicate
$(document).ready( () => Init('website') ); // <-- Uneeded duplicate
$(document).ready( () => Init('website') ); // <-- Uneeded duplicate
$(document).ready( () => Init('website') ); // <-- Uneeded duplicate

 /***************************************************
  *
  *  [2] Delete last comment  
  *       ┍━━━┑    ┍━━━┑        ┍━━━┑       ┍━━━┑
  *  USE: │ $ │End │ d │ Delete │ 4 │ words │ b │ack
  *       ┕━━━┙    ┕━━━┙        ┕━━━┙       ┕━━━┙
  */ 

$(document).ready( () => Setup('plugins') );  
