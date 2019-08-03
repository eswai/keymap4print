function convertKCtoChar(kc) {
  const KCtoChar = {
    "KC_NO" : "",
    "XXXXXXX" : "",
    "KC_ROLL_OVER" : "",
    "KC_POST_FAIL" : "",
    "KC_UNDEFINED" : "",
    "KC_A" : "A",
    "KC_B" : "B",
    "KC_C" : "C",
    "KC_D" : "D",
    "KC_E" : "E",
    "KC_F" : "F",
    "KC_G" : "G",
    "KC_H" : "H",
    "KC_I" : "I",
    "KC_J" : "J",
    "KC_K" : "K",
    "KC_L" : "L",
    "KC_M" : "M",
    "KC_N" : "N",
    "KC_O" : "O",
    "KC_P" : "P",
    "KC_Q" : "Q",
    "KC_R" : "R",
    "KC_S" : "S",
    "KC_T" : "T",
    "KC_U" : "U",
    "KC_V" : "V",
    "KC_W" : "W",
    "KC_X" : "X",
    "KC_Y" : "Y",
    "KC_Z" : "Z",
    "KC_1" : "1",
    "KC_2" : "2",
    "KC_3" : "3",
    "KC_4" : "4",
    "KC_5" : "5",
    "KC_6" : "6",
    "KC_7" : "7",
    "KC_8" : "8",
    "KC_9" : "9",
    "KC_0" : "0",
    "KC_ENTER" : "Enter",
    "KC_ESCAPE" : "Esc",
    "KC_BSPACE" : "Backsp",
    "KC_TAB" : "Tab",
    "KC_SPACE" : "Space",
    "KC_MINUS" : "-",
    "KC_EQUAL" : "+",
    "KC_LBRACKET" : "[",
    "KC_RBRACKET" : "]",
    "KC_BSLASH" : "\\",
    "KC_NONUS_HASHNONUS" : "",
    "KC_SCOLON" : ";",
    "KC_QUOTE" : "'",
    "KC_GRAVE" : "`",
    "KC_COMMA" : ",",
    "KC_DOT" : ".",
    "KC_SLASH" : "/",
    "KC_CAPSLOCK" : "Caps Lock",
    "KC_F1" : "F1",
    "KC_F2" : "F2",
    "KC_F3" : "F3",
    "KC_F4" : "F4",
    "KC_F5" : "F5",
    "KC_F6" : "F6",
    "KC_F7" : "F7",
    "KC_F8" : "F8",
    "KC_F9" : "F9",
    "KC_F10" : "F10",
    "KC_F11" : "F11",
    "KC_F12" : "F12",
    "KC_PSCREEN" : "Print Screen",
    "KC_SCROLLLOCK" : "Scroll Lock",
    "KC_PAUSE" : "Pause",
    "KC_INSERT" : "Insert",
    "KC_HOME" : "Home",
    "KC_PGUP" : "PG UP",
    "KC_DELETE" : "Delete",
    "KC_END" : "End",
    "KC_PGDOWN" : "Pg Down",
    "KC_RIGHT" : "Right",
    "KC_LEFT" : "Left",
    "KC_DOWN" : "Down",
    "KC_UP" : "Up",
    "KC_NUMLOCK" : "Num Lock",
    "KC_KP_SLASH" : "/",
    "KC_KP_ASTERISK" : "*",
    "KC_KP_MINUS" : "-",
    "KC_KP_PLUS" : "+",
    "KC_KP_ENTER" : "Enter",
    "KC_KP_1" : "1",
    "KC_KP_2" : "2",
    "KC_KP_3" : "3",
    "KC_KP_4" : "4",
    "KC_KP_5" : "5",
    "KC_KP_6" : "6",
    "KC_KP_7" : "7",
    "KC_KP_8" : "8",
    "KC_KP_9" : "9",
    "KC_KP_0" : "0",
    "KC_KP_DOT" : ".",
    "KC_NONUS_BSLASH" : "\\",
    "KC_APPLICATION" : "App",
    "KC_POWER" : "Power",
    "KC_KP_EQUAL" : "=",
    "KC_F13" : "F13",
    "KC_F14" : "F14",
    "KC_F15" : "F15",
    "KC_F16" : "F16",
    "KC_F17" : "F17",
    "KC_F18" : "F18",
    "KC_F19" : "F19",
    "KC_F20" : "F20",
    "KC_F21" : "F21",
    "KC_F22" : "F22",
    "KC_F23" : "F23",
    "KC_F24" : "F24",
    "KC_EXECUTE" : "Execute",
    "KC_HELP" : "Help",
    "KC_MENU" : "Menu",
    "KC_SELECT" : "SELECT",
    "KC_STOP" : "STOP",
    "KC_AGAIN" : "AGAIN",
    "KC_UNDO" : "UNDO",
    "KC_CUT" : "CUT",
    "KC_COPY" : "COPY",
    "KC_PASTE" : "PASTE",
    "KC_FIND" : "FIND",
    "KC__MUTE" : "MUTE",
    "KC__VOLUP" : "VOL UP",
    "KC__VOLDOWN" : "VOL DOWN",
    "KC_LOCKING_CAPS" : "LOCKING_CAPS",
    "KC_LOCKING_NUM" : "LOCKING_NUM",
    "KC_LOCKING_SCROLL" : "LOCKING_SCROLL",
    "KC_KP_COMMA" : "KP_COMMA",
    "KC_KP_EQUAL_AS400" : "KP_EQUAL_AS400",
    "KC_INT1" : "INT1",
    "KC_INT2" : "INT2",
    "KC_INT3" : "INT3",
    "KC_INT4" : "INT4",
    "KC_INT5" : "INT5",
    "KC_INT6" : "INT6",
    "KC_INT7" : "INT7",
    "KC_INT8" : "INT8",
    "KC_INT9" : "INT9",
    "KC_LANG1" : "LANG1",
    "KC_LANG2" : "LANG2",
    "KC_LANG3" : "LANG3",
    "KC_LANG4" : "LANG4",
    "KC_LANG5" : "LANG5",
    "KC_LANG6" : "LANG6",
    "KC_LANG7" : "LANG7",
    "KC_LANG8" : "LANG8",
    "KC_LANG9" : "LANG9",
    "KC_ALT_ERASE" : "ALT_ERASE",
    "KC_SYSREQ" : "SYSREQ",
    "KC_CANCEL" : "CANCEL",
    "KC_CLEAR" : "CLEAR",
    "KC_PRIOR" : "PRIOR",
    "KC_RETURN" : "RETURN",
    "KC_SEPARATOR" : "SEPARATOR",
    "KC_OUT" : "OUT",
    "KC_OPER" : "OPER",
    "KC_CLEAR_AGAIN" : "CLEAR_AGAIN",
    "KC_CRSEL" : "CRSEL",
    "KC_EXSEL" : "EXSEL",

    "KC_KP_00" : "00",
    "KC_KP_000" : "000",
    "KC_THOUSANDS_SEPARATOR" : "THOUSANDS_SEPARATOR",
    "KC_DECIMAL_SEPARATOR" : "DECIMAL_SEPARATOR",
    "KC_CURRENCY_UNIT" : "CURRENCY_UNIT",
    "KC_CURRENCY_SUB_UNIT" : "CURRENCY_SUB_UNIT",
    "KC_KP_LPAREN" : "(",
    "KC_KP_RPAREN" : ")",
    "KC_KP_LCBRACKET" : "[",
    "KC_KP_RCBRACKET" : "]",
    "KC_KP_TAB" : "TAB",
    "KC_KP_BSPACE" : "BACKSPACE",
    "KC_KP_A" : "KP_A",
    "KC_KP_B" : "KP_B",
    "KC_KP_C" : "KP_C",
    "KC_KP_D" : "KP_D",
    "KC_KP_E" : "KP_E",
    "KC_KP_F" : "KP_F",
    "KC_KP_XOR" : "KP_XOR",
    "KC_KP_HAT" : "KP_HAT",
    "KC_KP_PERC" : "KP_PERC",
    "KC_KP_LT" : "KP_LT",
    "KC_KP_GT" : "KP_GT",
    "KC_KP_AND" : "KP_AND",
    "KC_KP_LAZYAND" : "KP_LAZYAND",
    "KC_KP_OR" : "KP_OR",
    "KC_KP_LAZYOR" : "KP_LAZYOR",
    "KC_KP_COLON" : "KP_COLON",
    "KC_KP_HASH" : "KP_HASH",
    "KC_KP_SPACE" : "KP_SPACE",
    "KC_KP_ATMARK" : "KP_ATMARK",
    "KC_KP_EXCLAMATION" : "KP_EXCLAMATION",
    "KC_KP_MEM_STORE" : "KP_MEM_STORE",
    "KC_KP_MEM_RECALL" : "KP_MEM_RECALL",
    "KC_KP_MEM_CLEAR" : "KP_MEM_CLEAR",
    "KC_KP_MEM_ADD" : "KP_MEM_ADD",
    "KC_KP_MEM_SUB" : "KP_MEM_SUB",
    "KC_KP_MEM_MUL" : "KP_MEM_MUL",
    "KC_KP_MEM_DIV" : "KP_MEM_DIV",
    "KC_KP_PLUS_MINUS" : "KP_PLUS_MINUS",
    "KC_KP_CLEAR" : "KP_CLEAR",
    "KC_KP_CLEAR_ENTRY" : "KP_CLEAR_ENTRY",
    "KC_KP_BINARY" : "KP_BINARY",
    "KC_KP_OCTAL" : "KP_OCTAL",
    "KC_KP_DECIMAL" : "KP_DECIMAL",
    "KC_KP_HEXADECIMAL" : "KP_HEXADECIMAL",
    "KC_LCTRL" : "CTRL",
    "KC_LSHIFT" : "SHIFT",
    "KC_LALT" : "Alt",
    "KC_LGUI" : "Gui",
    "KC_RCTRL" : "Ctrl",
    "KC_RSHIFT" : "Shift",
    "KC_RALT" : "Alt",
    "KC_RGUI" : "Gui",

    "KC_TRANSPARENT" : "",
    "_______" : "",


/* Punctuation */
    "KC_ENT" : "Enter",
    "KC_ESC" : "Esc",
    "KC_BSPC" : "Backsp",
    "KC_SPC" : "Space",
    "KC_MINS" : "-",
    "KC_EQL" : "=",
    "KC_LBRC" : "[",
    "KC_RBRC" : "]",
    "KC_BSLS" : "\\",
    "KC_NUHS" : "#",
    "KC_SCLN" : ";",
    "KC_QUOT" : "'",
    "KC_GRV" : "`",
    "KC_COMM" : ",",
    "KC_SLSH" : "/",
    "KC_NUBS" : "\\",

/* Lock Keys */
    "KC_CLCK" : "",
    "KC_CAPS" : "Caps Lock",
    "KC_SLCK" : "",
    "KC_NLCK" : "",
    "KC_LCAP" : "",
    "KC_LNUM" : "Num Lock",
    "KC_LSCR" : "",

/* Commands */
    "KC_PSCR" : "PSCREEN",
    "KC_PAUS" : "Pause",
    "KC_BRK" : "BREAK",
    "KC_INS" : "Insert",
    "KC_DEL" : "Delete",
    "KC_PGDN" : "Pg Down",
    "KC_RGHT" : "Right",
    "KC_APP" : "App",
    "KC_EXEC" : "EXCEL",
    "KC_SLCT" : "SELECT",
    "KC_AGIN" : "AGAIN",
    "KC_PSTE" : "PASTE",
    "KC_ERAS" : "ERASE",
    "KC_CLR" : "CLEAR",

/* Keypad */
    "KC_PSLS" : "/",
    "KC_PAST" : "*",
    "KC_PMNS" : "-",
    "KC_PPLS" : "+",
    "KC_PENT" : "Enter",
    "KC_P1" : "1",
    "KC_P2" : "2",
    "KC_P3" : "3",
    "KC_P4" : "4",
    "KC_P5" : "5",
    "KC_P6" : "6",
    "KC_P7" : "7",
    "KC_P8" : "8",
    "KC_P9" : "9",
    "KC_P0" : "0",
    "KC_PDOT" : ".",
    "KC_PEQL" : "=",
    "KC_PCMM" : ",",

    /* Japanese specific */
    "KC_ZKHK" : "ZKHK",
    "KC_RO" : "RO",
    "KC_KANA" : "KANA",
    "KC_JYEN" : "¥",
    "KC_HENK" : "HENK",
    "KC_MHEN" : "MHEN",

    /* Korean specific */
    "KC_HAEN" : "",
    "KC_HANJ" : "",

    /* Modifiers */
    "KC_LCTL" : "Ctrl",
    "KC_LSFT" : "Shift",
    "KC_LCMD" : "Cmd",
    "KC_LWIN" : "Win",
    "KC_RCTL" : "Ctrl",
    "KC_RSFT" : "Shift",
    "KC_ALGR" : "AltGr",
    "KC_RCMD" : "Cmd",
    "KC_RWIN" : "Win",

    /* Generic Desktop Page (0x01) */
    "KC_PWR" : "POWER",
    "KC_SLEP" : "SLEEP",
    "KC_WAKE" : "WAKE",

    /* Consumer Page (0x0C) */
    "KC_MUTE" : "MUTE",
    "KC_VOLU" : "Vol Up",
    "KC_VOLD" : "Vol Down",
    "KC_MNXT" : "",
    "KC_MPRV" : "",
    "KC_MSTP" : "",
    "KC_MPLY" : "",
    "KC_MSEL" : "",
    "KC_EJCT" : "",
    "KC_MAIL" : "",
    "KC_CALC" : "",
    "KC_MYCM" : "",
    "KC_WSCH" : "",
    "KC_WHOM" : "",
    "KC_WBAK" : "",
    "KC_WFWD" : "",
    "KC_WSTP" : "",
    "KC_WREF" : "",
    "KC_WFAV" : "",
    "KC_MFFD" : "",
    "KC_MRWD" : "",
    "KC_BRIU" : "",
    "KC_BRID" : "",

    /* System Specific */
    "KC_BRMU" : "",
    "KC_BRMD" : "",

    /* Mouse Keys */
    "KC_MS_U" : "",
    "KC_MS_D" : "",
    "KC_MS_L" : "",
    "KC_MS_R" : "",
    "KC_BTN1" : "",
    "KC_BTN2" : "",
    "KC_BTN3" : "",
    "KC_BTN4" : "",
    "KC_BTN5" : "",
    "KC_WH_U" : "",
    "KC_WH_D" : "",
    "KC_WH_L" : "",
    "KC_WH_R" : "",
    "KC_ACL0" : "",
    "KC_ACL1" : "",
    "KC_ACL2" : "",

    "KC_TILD" : "~",
    "KC_TILDE" : "~",

    "KC_EXLM" : "!",
    "KC_EXCLAIM" : "!",

    "KC_AT" : "@",

    "KC_HASH" : "#",

    "KC_DLR" : "$",
    "KC_DOLLAR" : "$",

    "KC_PERC" : "%",
    "KC_PERCENT" : "%",

    "KC_CIRC" : "^",
    "KC_CIRCUMFLEX" : "^",

    "KC_AMPR" : "&",
    "KC_AMPERSAND" : "&",

    "KC_ASTR" : "*",
    "KC_ASTERISK" : "*",

    "KC_LPRN" : "(",
    "KC_LEFT_PAREN" : "(",

    "KC_RPRN" : ")",
    "KC_RIGHT_PAREN" : ")",

    "KC_UNDS" : "_",
    "KC_UNDERSCORE" : "_",

    "KC_PLUS" : "+",

    "KC_LCBR" : "{",
    "KC_LEFT_CURLY_BRACE" : "{",

    "KC_RCBR" : "}",
    "KC_RIGHT_CURLY_BRACE" : "}",

    "KC_LABK" : "<",
    "KC_LEFT_ANGLE_BRACKET" : "<",

    "KC_RABK" : ">",
    "KC_RIGHT_ANGLE_BRACKET" : ">",

    "KC_COLN" : ":",
    "KC_COLON" : ":",

    "KC_PIPE" : "|",

    "KC_LT" : "<",

    "KC_GT" : ">",

    "KC_QUES" : "?",
    "KC_QUESTION" : "?",

    "KC_DQT" : "\"",
    "KC_DOUBLE_QUOTE" : "\"",
    "KC_DQUO" : "\"",

    "KC_DELT" : "DELETE",


    // JP

    "JP_ZHTG" : "ZHTG",
    "JP_YEN" : "¥",
    "JP_CIRC" : "^",
    "JP_AT" : "@",
    "JP_LBRC" : "[",
    "JP_COLN" : ":",
    "JP_RBRC" : "]",
    "JP_BSLS" : "\\",
    "JP_MHEN" : "MHEN",
    "JP_HENK" : "HENK",
    "JP_KANA" : "KANA",
    "JP_MKANA" : "MKANA",
    "JP_MEISU" : "EISU",
    "JP_DQT" : "\"",
    "JP_AMPR" : "&",
    "JP_QUOT" : "'",
    "JP_LPRN" : "(",
    "JP_RPRN" : ")",
    "JP_EQL" : "=",
    "JP_TILD" : "~",
    "JP_PIPE" : "|",
    "JP_GRV" : "`",
    "JP_LCBR" : "{",
    "JP_PLUS" : "+",
    "JP_ASTR" : "*",
    "JP_RCBR" : "}",
    "JP_UNDS" : "_",
    "JP_MINS" : "-",
    "JP_SCLN" : ";",
    "JP_COMM" : ",",
    "JP_DOT" : ".",
    "JP_SLSH" : "/",
    "JP_EXLM" : "!",
    "JP_HASH" : "#",
    "JP_DLR" : "$",
    "JP_PERC" : "%",
    "JP_LT" : "<",
    "JP_GT" : ">",
    "JP_QUES" : "?",

    "LOWER" : "Lower",
    "RAISE" : "Raise",
    "ADJUST" : "Adjust",
  }

  var c = kc.trim()
  if (c in KCtoChar) {
    return KCtoChar[c]
  } else {
    return c
  }
}