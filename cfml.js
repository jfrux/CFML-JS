var cf = { 
	/* abs(x) */
    abs: function (x) {
        return Math.abs(x);
    },
	
    /* rtrim(string) */
    rtrim: function (myString) {
        var i = myString.length;
        do {
            i--;
        }
        while (myString.charCodeAt(i) == 32 || myString.charCodeAt(i) == 'NaN');
        return myString.substr(0, i + 1);
    },
	
    /* ltrim(string) */
    ltrim: function (myString) {
       var i = 0;
        do {
            i++;
        }
        while (i < myString.length && (myString.charCodeAt(i) == 32 || myString.charCodeAt(i) == 'NaN'));
        return myString.substr(i, myString.length);
    },
	
    /* trim(string) */
    trim: function (myString) {
        return cf.rtrim(cf.ltrim(myString));
    },

    /* ucase(string) */
    ucase: function (mystring) {
        return mystring.toUpperCase();
    },

    /* lcase(string) */
    lcase: function (mystring) {
        return mystring.toLowerCase();
    },

    /* acos(x) */
    acos: function (x) {
        return Math.acos(x);
    },

    /* arrayappend(array,value) */
    arrayappend: function (array, value) {
        eval(array)[eval(array).length] = value;
    },

    /* arrayavg(array) */
    arrayavg: function (array) {
        var x = 0;
		var v = 0;
		var i = 0;
		
        for (i = 0; i < eval(array).length; i++) {
            x += eval(array)[i];
        }
        v = x / eval(array).length;
        return v;
    },

    /* arrayclear(array) */
    arrayclear: function (array) {
        eval(array).length = 0;
        
		return true;
    },

    /* arraydeleteat(array,position) */
    arraydeleteat: function (array, position) {
        eval(array).splice(position - 1, 1);
        
		return true;
    },

    /* arrayinsertat(array,position,value) */
    //
    arrayinsertat: function (array, position, value) {
        eval(array).splice(position - 1, 0, value);
        
		return true;
    },

    /* arrayisempty(array) */
    arrayisempty: function (array) {
        if (eval(array).length == 0) {
            return true;
        } else {
            return false;
        }
    },

    /* arraylen(array) */
    arraylen: function (array) {
        return eval(array).length;
    },

    /* arraymax(array) */
    arraymax: function (array) {
        var x = eval(array)[0];
       var i = 0;
	   
	    for (i = 0; i < eval(array).length; i++) {
            x = Math.max(x, eval(array)[i]);
        }
		
        return x;
    },

    /* arraymin(array) */
    arraymin: function (array) {
       var x = eval(array)[0];
       var i = 0;
	    for (i = 0; i < eval(array).length; i++) {
            x = Math.min(x, eval(array)[i]);
        }
		
        return x;
    },

    /* arrayprepend(array,value) */
    arrayprepend: function (array, value) {
       var add = eval(array).splice(0, 0, value);
       return true;
    },

    /* arrayresize(array,value) */
    arrayresize: function (array, value) {
        eval(array).length = value;
        return true;
    },

    /* arrayset(array,start_pos,end_pos,value)  */
    arrayset: function (array, start_pos, end_pos, value) {
        var i = 0;
		for (i = start_pos - 1; i < end_pos; i++) {
	        eval(array)[i] = value;
		}
		
        return true;
    },

    /* arraysum(array) */
    arraysum: function (array, start_pos, end_pos, value) {
        var x = 0;
		var i = 0;
		
        for (i = 0; i < eval(array).length; i++) {
            x += eval(array)[i];
        }
		
        return x;
    },

    /* arrayswap(array, position1, position2) */
    arrayswap: function (array, position1, position2) {
		var x = array[position1 - 1];
		var y = array[position2 - 1];
		array[position2 - 1] = x;
		array[position1 - 1] = y;
		
        return true;
    },

    /* arraytolist(array, delimiter) */
    arraytolist: function (array, delimiter) {
		var delim = delimiter;
		var x = 0;
        if (!delimiter) {
            delim = ',';
        }
        x = eval(array).join(delim);
        return x;
    },

    /* arraysort(array,  sort_type, sort_order) */
    arraysort: function (array, sort_type, sort_order) {
        if (!sort_type) {
            var sort_type = 'text';
        }
        if (!sort_type) {
            var sort_type = 'asc';
        }

    },

    /* asc(mystring) */
    asc: function (mystring) {
        return mystring.charCodeAt(0);
    },

    /* asin(x) */
    asin: function (x) {
        return Math.asin(x);
    },

    /* atan(x) */
    atan: function (x) {
        return Math.atan(x);
    },

    /* bitand(number1, number2) */
    bitand: function (number1, number2) {
        x = number1 & number2
        return x;
    },

    /* bitnot(number) */
    bitnot: function (number) {
        x = ~number
        return x;
    },

    /* bitor(number1, number2) */
    bitor: function (number1, number2) {
        x = number1 | number2
        return x;
    },

    /* bitshln(number,count) */
    bitshln: function (number, count) {
        x = number << count
        return x;
    },

    /* bitshrn(number,count)*/
    bitshrn: function (number, count) {
        x = number >> count
        return x;
    },

    /* bitxor(number1, number2) */
    bitxor: function (number1, number2) {
        x = number1 ^ number2
        return x;
    },

    /* ceiling(x) */
    ceiling: function (x) {
        return Math.ceil(x);
    },

    /* chr(number) */
    chr: function (number) {
        return String.fromCharCode(number);
    }

    /* cjustify(string, length) */
    cjustify: function (mystring, number) {
        NoOfCharsToAdd = Math.floor((number - mystring.length) / 2)
        for (i = 0; i < NoOfCharsToAdd; i++) {
            mystring = ' ' + mystring + ' '
        }
        if (mystring.length < number) {
            mystring += ' '
        }
        return mystring
    }

    /*compare(string1, string2) */
    compare: function (string1, string2) {
        if (string1 == string2) {
            x = 0
        } else {

            for (i = 0; i < Math.max(string1.length, string2.length); i++) {
                if (string1.charCodeAt(i) != string2.charCodeAt(i)) {
                    if (string1.charCodeAt(i) < string2.charCodeAt(i)) {
                        x = -1;
                    }
                    if (string1.charCodeAt(i) > string2.charCodeAt(i)) {
                        x = 1;
                    }
                    break;
                }
            }

        }

        return x;
    }

    /* comparenocase(string1, string2) */
    comparenocase: function (string1, string2) {
        string1 = string1.toUpperCase();
        string2 = string2.toUpperCase();
        if (string1 == string2) {
            x = 0
        } else {

            for (i = 0; i < Math.max(string1.length, string2.length); i++) {
                if (string1.charCodeAt(i) != string2.charCodeAt(i)) {
                    if (string1.charCodeAt(i) < string2.charCodeAt(i)) {
                        x = -1;
                    }
                    if (string1.charCodeAt(i) > string2.charCodeAt(i)) {
                        x = 1;
                    }
                    break;
                }
            }

        }

        return x;
    }

    /* createdate(year, month, day) */
    createdate: function (myyear, mymonth, myday) {
        mydate = new Date(myyear, mymonth, myday)
        return mydate;
    }

    /* createdatetime(year, month, day,hour,minute,second) */
    createdatetime: function (myyear, mymonth, myday, myhour, myminute, mysecond) {
        mydate = new Date(myyear, mymonth, myday, myhour, myminute, mysecond)
        return mydate;
    }

    /* cos(x) */
    cos: function (x) {
        return Math.cos(x);
    },

    /* day(datestring) */
    day: function (datestring) {
        return datestring.getDate();
    },

    /* dayofweek(datestring) */
    dayofweek: function (datestring) {
        return datestring.getDay() + 1;
    },

    /* dayofweekasstring(datestring) */
    dayofweekasstring: function (datestring) {
        x = datestring.getDay() + 1
        if (x == 1) {
            _string = 'Sunday'
        }
        if (x == 2) {
            _string = 'Monday'
        }
        if (x == 3) {
            _string = 'Tuesday'
        }
        if (x == 4) {
            _string = 'Wednesday'
        }
        if (x == 5) {
            _string = 'Thursday'
        }
        if (x == 6) {
            _string = 'Friday'
        }
        if (x == 7) {
            _string = 'Saturday'
        }
        return _string

    },

    /* daysinmonth(datestring) */
    daysinmonth: function (datestring) {
        x = datestring.getMonth() + 1
        if (x == 1 || x == 3 || x == 5 || x == 7 || x == 8 || x == 10 || x == 12) {
            return 31
        };
        if (x == 2) {
            return 28
        };
        if (x == 4 || x == 6 || x == 9 || x == 11) {
            return 30
        };
    },

    /* isleapyear(year) */
    isleapyear: function (year) {
        return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? true : false)
    },

    /* dollarformat(number) */
    dollarformat: function (number) {
        if (number < 0) {
            number = '($' + number + ')'
        } else {
            number = '$' + number
        }
        return number;
    },

    /* decrementvalue(number) */
    decrementvalue: function (number) {
        return number - 1;
    },

    /* encrypt(mystring, key) */
    encrypt: function (mystring, key) {
        Ref = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz._~"
        key = parseInt(key)
        var Temp = ""
        for (Count = 0; Count < mystring.length; Count++) {
            var TempChar = mystring.substring(Count, Count + 1)
            var Conv = Ref.indexOf(TempChar)
            var Cipher = Conv ^ key
            Cipher = Ref.substring(Cipher, Cipher + 1)
            Temp += Cipher
        }
        return (Temp)
    }

    /* evaluate(stringexpression) */
    evaluate: function (stringexpression) {
        return eval(stringexpression);
    }

    /* find(substring, string , start ) */
    find: function (mysubstring, mystring, mystart) {
        if (!mystart) {
            var mystart = 0;
        } else {
            mystart = mystart - 1;
        }
        return mystring.indexOf(mysubstring, mystart) + 1;
    }

    /* findnocase(substring, string , start ) */
    findnocase: function (mysubstring, mystring, mystart) {
        if (!mystart) {
            var mystart = 0;
        } else {
            mystart = mystart - 1;
        }
        mystring = mystring.toUpperCase()
        mysubstring = mysubstring.toUpperCase()
        return mystring.indexOf(mysubstring, mystart) + 1;
    }

    /* fix(number) */
    fix: function (number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    },

    /* hour(datestring) */
    hour: function (datestring) {
        return datestring.getHours();
    },

    /* iif(condition, string_expression1, string_expression2) */
    iif: function (condition, string_expression1, string_expression2) {
        return (eval(condition) ? string_expression1 : string_expression2)
    },

    /* incrementvalue(number) */
    incrementvalue: function (number) {
        return number + 1;
    },

    /* inputbasen(number,radix) */
    inputbasen: function (number, radix) {
        return parseInt(number, radix);
    },

    /* insert(substring,  string, position) */

    insert: function (mysubstring, mystring, position) {
        return mystring.substring(0, position) + mysubstring + mystring.substring(position, mystring.length);
    },

    /* exp(x) */
    exp: function (x) {
        return Math.exp(x);
    },

    /* left(string,count) */
    left: function (mystring, count) {
        return mystring.substring(mystring.length - count, mystring.length);
    },

    /* len(string) */
    len: function (mystring) {
        return mystring.length;
    },

    /* listappend(list,value,delimiters) */
    listappend: function (list, value, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        _TempListFirstSplitArray = list.split(delimiters)
        added = _TempListFirstSplitArray.splice(_TempListFirstSplitArray.length, 0, value)
        _TempStringToReturn = _TempListFirstSplitArray.join(delimiters)
        return _TempStringToReturn
    }

    /* listchangedelims(list,new_delimiters,delimiters) */
    listchangedelims: function (list, new_delimiters, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        _TempListSplitArray = list.split(delimiters)
        _TempStringToReturn = _TempListSplitArray.join(new_delimiters)
        return _TempStringToReturn
    }

    /* listcontains(list, substring , delimiters) */
    listcontains: function (list, mysubstring, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        x = 0
        _TempListSplitArray = list.split(delimiters)
        for (i = 0; i < _TempListSplitArray.length; i++) {
            if (_TempListSplitArray[i].indexOf(mysubstring) != -1) {
                x = i + 1
            }
        }

        return x;
    }

    /* listcontainsnocase(list, substring , delimiters) */
    listcontainsnocase: function (list, mysubstring, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        x = 0
        list = list.toUpperCase();
        mysubstring = mysubstring.toUpperCase();
        _TempListSplitArray = list.split(delimiters)
        for (i = 0; i < _TempListSplitArray.length; i++) {
            if (_TempListSplitArray[i].indexOf(mysubstring) != -1) {
                x = i + 1
            }
        }

        return x;
    },

    /* listdeleteat(list,position,delimiters) */
    listdeleteat: function (list, position, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        _TempListFirstSplitArray = list.split(delimiters)
        removed = _TempListFirstSplitArray.splice(position - 1, 1)
        _TempStringToReturn = _TempListFirstSplitArray.join(delimiters)
        return _TempStringToReturn

    },

    /* listfind(list,value,delimiters) */
    listfind: function (list, value, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        _TempListSplitArray = list.split(delimiters)
        FoundIdx = 0;
        for (i = 0; i < _TempListSplitArray.length; i++) {
            if (_TempListSplitArray[i] == value) {
                FoundIdx = i + 1;
                break
            }
        }
        return FoundIdx
    },

    /* listfindnocase(list,value,delimiters) */
    listfind: function (list, value, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        list = list.toUpperCase();
        value = value.toUpperCase();
        _TempListSplitArray = list.split(delimiters)
        FoundIdx = 0;
        for (i = 0; i < _TempListSplitArray.length; i++) {
            if (_TempListSplitArray[i] == value) {
                FoundIdx = i + 1;
                break
            }
        }
        return FoundIdx
    },

    /* listfirst(list,delimiters) */
    listfirst: function (list, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        _TempListFirstSplitArray = list.split(delimiters)
        return _TempListFirstSplitArray[0]
    },

    /* listgetat(list,position,delimiters) */
    listgetat: function (list, position, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        _TempListFirstSplitArray = list.split(delimiters)
        return _TempListFirstSplitArray[position - 1]
    },

    /* listinsertat(list,position,value,delimiters) */
    listinsertat: function (list, position, value, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        _TempListFirstSplitArray = list.split(delimiters)
        added = _TempListFirstSplitArray.splice(position - 1, 0, value)
        _TempStringToReturn = _TempListFirstSplitArray.join(delimiters)
        return _TempStringToReturn

    },

    /* listlast(list,delimiters) */
    listlast: function (list, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        _TempListFirstSplitArray = list.split(delimiters)
        return _TempListFirstSplitArray[_TempListFirstSplitArray.length - 1]
    },

    /* listlen(list,delimiters) */
    listlen: function (list, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        _TempListFirstSplitArray = list.split(delimiters)
        return _TempListFirstSplitArray.length
    },

    /* listprepend(list,value,delimiters) */
    listprepend: function (list, value, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        _TempListFirstSplitArray = list.split(delimiters)
        added = _TempListFirstSplitArray.splice(0, 0, value)
        _TempStringToReturn = _TempListFirstSplitArray.join(delimiters)
        return _TempStringToReturn
    },

    /* listqualify(list,qualifier,delimiters,elements) */
    listqualify: function (list, qualifier, delimiters, elements) {
        if (!delimiters) {
            var delimiters = ','
        }
        if (!elements) {
            var elements = 'ALL'
        }
        _TempListSplitArray = list.split(delimiters)
        for (i = 0; i < _TempListSplitArray.length; i++) {
            if (elements == 'CHAR') {
                //STILL WORK LEFT HERE !!!
                //STILL WORK LEFT HERE !!!
                //STILL WORK LEFT HERE !!!
                //STILL WORK LEFT HERE !!!
                //STILL WORK LEFT HERE !!!
                //STILL WORK LEFT HERE !!!
                //STILL WORK LEFT HERE !!!
                //STILL WORK LEFT HERE !!!
                //STILL WORK LEFT HERE !!!
                //STILL WORK LEFT HERE !!!
                //STILL WORK LEFT HERE !!!
                //STILL WORK LEFT HERE !!!
                //STILL WORK LEFT HERE !!!
                //STILL WORK LEFT HERE !!!
            } else {
                _TempListSplitArray[i] = qualifier + _TempListSplitArray[i] + qualifier
            }

        }
        _TempStringToReturn = _TempListSplitArray.join(delimiters)
        return _TempStringToReturn
    },

    /* listsetat(list,position,value,delimiters) */
    listsetat: function (list, position, value, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        _TempListFirstSplitArray = list.split(delimiters)
        _TempListFirstSplitArray[position - 1] = value
        _TempStringToReturn = _TempListFirstSplitArray.join(delimiters)
        return _TempStringToReturn

    },

    /* listtoarray(list,delimiters) */
    listtoarray: function (list, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        _TempListSplitArray = list.split(delimiters)
        return _TempListSplitArray

    },

    /* listvaluecount(list,value,delimiters) */
    listvaluecount: function (list, value, delimiters) {
        if (!delimiters) {
            var delimiters = ','
        }
        _TempListSplitArray = list.split(delimiters)
        FoundIdx = 0;
        for (i = 0; i < _TempListSplitArray.length; i++) {
            if (_TempListSplitArray[i] == value) {
                FoundIdx++;
            }
        }
        return FoundIdx
    },

    /* ljustify(string,length) */
    ljustify: function (mystring, number) {
        NoOfCharsToAdd = number - mystring.length
        for (i = 0; i < NoOfCharsToAdd; i++) {
            mystring = ' ' + mystring
        }
        return mystring
    },

    /* log(number) */
    log: function (number) {
        return Math.log(number);
    },

    /* max(x,y) */
    max: function (x, y) {
        return Math.max(x, y);
    },

    /* Mid(string,start, count) */
    mid: function (myString, start, count) {
        return myString.substr(start - 1, count)
    },

    /* min(x,y) */
    min: function (x, y) {
        return Math.min(x, y);
    },

    /* minute(datestring) */
    minute: function (datestring) {
        return datestring.getMinutes();
    },

    /* month(datestring) */
    month: function (datestring) {
        return datestring.getMonth();
    },

    /* now() */
    function now() {
        _NewDate = new Date();
        return _NewDate
    },

    /* pi() */
    function pi() {
        return Math.PI;
    },

    /* rand() */

    function rand() {
        return Math.random();
    },

    /* repeatstring(string,count) */
    repeatstring: function (string, count) {
        var _NewString = '';
        for (i = 0; i < count; i++) {
            _NewString += string
        }
        return _NewString
    },

    /* removechars(string,start,count) */
    removechars: function (mystring, start, count) {
        new_string = mystring.slice(0, start - 1)
        new_string2 = mystring.slice(start + count - 1)
        return new_string + new_string2
    },

    /* replace(string,substring1,substring2,scope) */
    replace: function (string, substring1, substring2, scope) {
        if (!scope) {
            scope = '1'
        }
        if (scope != 'ALL') {
            scope = '1'
        }
        re = '/' + substring1
        if (scope == '1') {
            re += '/'
        } else {
            re += '/g'
        }
        new_string = string.replace(eval(re), substring2)
        return new_string
    },

    /* replacelist(string,list1,list2) */
    replacelist: function (mystring, list1, list2) {
        delimiters = ','
        _TempList1SplitArray = list1.split(delimiters)
        _TempList2SplitArray = list2.split(delimiters)
        for (i = 0; i < _TempList1SplitArray.length; i++) {
            stringtoreplace = '/' + _TempList1SplitArray[i] + '/g'
            mystring = mystring.replace(eval(stringtoreplace), _TempList2SplitArray[i])
        }
        return mystring
    },

    /* replacenocase(string,substring1,substring2,scope) */
    replacenocase: function (string, substring1, substring2, scope) {
        if (!scope) {
            scope = '1'
        }
        if (scope != 'ALL') {
            scope = '1'
        }
        re = '/' + substring1
        if (scope == '1') {
            re += '/i'
        } else {
            re += '/gi'
        }
        new_string = string.replace(eval(re), substring2)
        return new_string
    },

    /* rereplace(string,reg_expression,substring2,scope) */
    rereplace: function (mystring, reg_expression, substring2, scope) {
        if (!scope) {
            scope = 'ONE'
        }
        if (scope != 'ALL') {
            scope = 'ONE'
        } else {
            reg_expression = reg_expression + '/g'
        }
        new_string = mystring.replace(reg_expression, substring2)
        return new_string;

    },

    /* rereplacenocase(string,reg_expression,substring2,scope) */
    rereplacenocase: function (mystring, reg_expression, substring2, scope) {
        if (!scope) {
            scope = 'ONE'
        }
        if (scope != 'ALL') {
            reg_expression = '/' + reg_expression + '/i'
        } else {
            reg_expression = '/' + reg_expression + '/gi'
        }
        new_string = mystring.replace(eval(reg_expression), substring2)
        return new_string;
    },

    /* reverse(string) */
    reverse: function (mystring) {
        var _TempNewString = ''
        for (i = 0; i < mystring.length; i++) {
            _TempNewString = mystring.charAt(i) + _TempNewString
        }
        return _TempNewString
    },

    /* right(string,count) */
    right: function (string, count) {
        return string.substr(0, count);
    },

    /* rjustify(string,length) */
    rjustify: function (mystring, number) {
        NoOfCharsToAdd = number - mystring.length
        for (i = 0; i < NoOfCharsToAdd; i++) {
            mystring = mystring + ' '
        }
        return mystring
    },

    /* round(number) */
    round: function (number) {
        return Math.round(number);
    },

    /* second(datestring) */
    second: function (datestring) {
        return datestring.getSeconds();
    },

    /* sin(x) */
    sin: function (x) {
        return Math.sin(x);
    },

    /* sgn(x) */
    sgn: function (x) {
        if (x == 0) {
            return 0
        }
        if (x > 0) {
            return 1
        }
        if (x < 0) {
            return -1
        }
    },

    /* sqr(x) */
    sqr: function (x) {
        return Math.sqrt(x);
    },

    /* tan(x) */
    tan: function (x) {
        return Math.tan(x);
    },

    /* val(string) */
    val: function (myString) {
        newstring = ""
        for (i = 0; i < myString.length; i++) {
            if (myString.charAt(i) == '1' || myString.charAt(i) == '2' || myString.charAt(i) == '3' || myString.charAt(i) == '4' || myString.charAt(i) == '5' || myString.charAt(i) == '6' || myString.charAt(i) == '7' || myString.charAt(i) == '8' || myString.charAt(i) == '9' || myString.charAt(i) == '0' || myString.charAt(i) == '.' || myString.charAt(i) == '+' || myString.charAt(i) == '-') {
                newstring += myString.charAt(i)
            } else {
                break;
            }
        }
        return newstring;
    },

    /* urlencodedformat(string) */
    urlencodedformat: function (myString) {
        return escape(myString);
    },

    /* year(date) */
    year: function (mydate) {
        _newDate = new Date(mydate)
        return _newDate.getYear();
    },

    /* yesnoformat(value) */
    yesnoformat: function (value) {
        if (value == 0) {
            return 'NO'
        } else {
            return 'YES'
        }
    }
}