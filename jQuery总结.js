nodeType=1是html element
nodeType=2是html element attribute
nodeType=3是html element text
nodeType=8是html 注释
nodeType=9是document
nodeType=11是document fragment，元素判断，就是元素的集合
//jQuery对象结构,类数组结构
{
	0:dom1,
    1:dom2,
    2:dom3,
    length:3,
    version:"1.12.2",
    // and so on 
}

/**
 * 随便给定一个对象，写出它的原型链及原型链上的所有属性
 * 先来个最简单的，{}
 * 可以得出的结论是Object.prototype没有__proto__属性
 * 默认的prototype对象，{constructor:实例的构造函数,__proto__:Object}
 * prototype中的constructor指的是实例的构造函数，不是prototype的构造函数
 * var a=Object(32);a instanceof Number;说明Object会把常量转化为对应的对象，但是b=Number(a),typeof b==number;表明其他的构造函数会把对应的对象变成常量
 * 
 */
var a={};a.name="mbj";
a:{
	name:"mbj",
	__proto__:{
		//Object
		__defineGetter__:function __defineGetter__(),
		__defineSetter__:function __defineSetter__(),
		__lookupGetter__:function __lookupGetter__(),
		__lookupSetter__:function __lookupSetter__(),
		constructor:{
			//function Object()
			arguments:null,
			assign:function assign(),
			caller:null,
			create:function create(),
			defineProperties:function defineProperties(),
			defineProperty:function defineProperty(),
			freeze:function freeze(),
			getOwnPropertyDescriptor:function getOwnPropertyDescriptor(),
			getOwnPropertyNames:function getOwnPropertynames(),
			getOwnPropertySymbols:function getOwnPropertySymbols(),
			getPropertyOf:function getPropertyOf(),
			is:function is(),
			isExtensible:function isExtensible(),
			isFrozen:function isFrozen(),
			isSealed:function isSealed(),
			keys:function keys(),
			preventExtensions:function preventExtensions(),
			prototype:Object.prototype,
			seal:function seal(),
			setPropertyOf:function setPropertyOf(),
			__proto__:function()

		},
		hasOwnProperty:function hasOwnProperty(),
		isPrototypeOf:function isPrototypeOf(),
		propertyIsEnumerable:function propertyIsEnumerable(),
		toLocaleString:function toLocaleString(),
		toString:function toString(),
		valueOf:function valueOf(),
		get__proto__:function __proto__(),
		set__proto__:function __proto__()
	}
}




Array,Pseudo Array,Function,String
传入的参数分两种，第一值类型，引用类型
typeof obj==string,boolean,number,undefined,
typeof obj==object,function
jQuery.fn.extends.makeArray=function(obj){
     var type=obj&&typeof obj;
     if(type==="function"||type==="string"){
     	return [obj];
     }
     if(type==="object"&&"length" in obj){
        return [].slice.apply(obj);
     }else{
     	return [obj];
     }
}

function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr //如果arr本身就是String对象了，那么typeof arr==="object"
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	}


	function isArrayLike( obj ) {
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}


jQuery选择器--------选择器的构成并不复杂，但是jQuery为选择器写的正则表达式感觉好复杂，其实只是看起来复杂
Id选择器：jQuery("#id");
Class选择器：jQuery(".class");
属性选择器：jQuery("[attributeName=attributeValue]");
伪类选择器：jQuery(":hover");jQuery("div:first-child");jQuery("div:nth-child(2)");jQuery("div:nth-type-of(2)");
Tag选择器：jQuery("tagName");
伪元素选择器：jQuery("::after");


//空格：\f,\r,\n,\t,\v,\x20
//属性选择器的正则表达式
//正则表达式中的括号缓存的顺序是遇见第一个左括号就标志为1，
//如var a=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;a.exec("#id");
//结果是["#id","id",undefined,undefined]
//如果var a=/^(#([\w-]+)|(\w+)|\.([\w-]+))$/;a.exec("#id");
//那么结果是["#id","#id","id",undefined,undefined];
/\[
[\x20\t\r\n\f]*
((?:\\.|[\w-]|[^\x00-\xa0])+)
(?:
  [\x20\t\r\n\f]*
  ([*^$|!~]?=)
  [\x20\t\r\n\f]*
  (?:
    '((?:\\.|[^\\'])*)'|
    "((?:\\.|[^\\"])*)"|
    ((?:\\.|[\w-]|[^\x00-\xa0])+)
  )
|)
[\x20\t\r\n\f]*\]/

//伪类选择器
/:
((?:\\.|[\w-]|[^\x00-\xa0])+)
(?:
	\(
	  (
		(
		'((?:\\.|[^\\'])*)'|
	    "((?:\\.|[^\\"])*)"
        )|
        (
        	(?:
        		\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*
        		((?:\\.|[\w-]|[^\x00-\xa0])+)
        		(?:
        			[\x20\t\r\n\f]*
        			([*^$|!~]?=)
        			[\x20\t\r\n\f]*
        			(?:
        				'((?:\\.|[^\\'])*)'|
        		        "((?:\\.|[^\\"])*)"|
                        ((?:\\.|[\w-]|[^\x00-\xa0])+)
                    )|
                )
                [\x20\t\r\n\f]*\]
            )*
        )|.*
      )
    \)|
)/


/^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g

Sizzle( expr, document, null, [ elem ] ).length > 0;
Sizzle( selector, elem ).length > 0;
Sizzle( selector, contexts[i], results );

function Sizzle(selector,context,results,seed){
	var m,i,elem,nid,nidselect,match,groups,newSelector,
	    newContext=context&&context.ownerDocument,
	    nodeType=context?context.nodeType:9;
	    results=results||[];
	    //return early from calls with invalid selector or context
	    if(typeof selector!=="string"||!selector||
	    	nodeType!==1&&nodeType!==9&&nodeType!==11){
	    	return results;
	    }
	    //try shortcut,find operations in html documents
	    if(!seed){
	    	if((context?context.ownerDocument||context:perferredDoc)!==document){
	    		setDocument(context);
	    	}
	    	context=context||document;
	    	if(documentIsHTML){
	    		if(nodeType!==11&&(match=rquickExpr.exec(selector))){
	    			//ID selector
	    			if((m=match[1])){
                      if(nodeType===9){
                      	if((elem=context.getElementById(m))){
                      		if(elem.id===m){
                      			results.push(elem);
                      			return results;
                      		}
                      	}else{
                      		return results;
                      	}
                      }else{
                      	if(newContext&&(elem=newContext.getElementById(m))&&
                      		contains(context,elem)&&
                      		elem.id===m){
                      		results.push(elem);
                      	    return results;
                      	}
                      }
	    			}else if(match[2]){
	    				push.apply(results,context.getElementsByTagName(selector));
	    				return results;
	    			}else if((m=match[3])&&support.getElementsByClassName&&
	    				context.getElementsByClassName){
	    				push.apply(results,context.getElementsByClassName(m));
	    				return results;
	    			}
	    		}
	    		//take advantage of querySelector
	    		if(support.qsa&&
	    			!compilerCache[selector+" "]&&
	    			(!rbuggyQSA||!rbuggyQSA.test(selector))){
	    			if(nodeType!==1){
	    				newContext=context;
	    				newSelector=selector;
	    			}else if(context.nodeName.toLowerCase()!=="object"){
	    				if((nid=context.getAttribute("id"))){
	    					nid=nid.replace(rescape,"\\$&");
	    				}else{
	    					context.setAttribute("id",(nid=expando));
	    				}
	    				//prefix every selector in the list
	    				groups=tokenize(selector);
	    				i=groups.length;
	    				nidselect=ridentifier.test(nid)?"#"+nid:"[id='"+nid+"']";
	    				while(i--){
	    					groups[i]=nidselect+" "+toSelector(groups);
	    				}
	    				newSelector=groups.join(",");
	    				newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;
	    			}
	    			if(newSelector){
	    				try{
	    					push.apply(results,
	    						newContext.querySelectorAll(newSelector));
	    					return results;
	    				}catch(qsaError){
	    					//nothing
	    				}finally{
	    					if(nid===expando){
	    						context.removeAttribute("id");
	    					}
	    				}
	    			}
	    		}
	    	}
	    }

}

var cache={};
var length=[];
function createCache(key,value){
   if(length.length>MAX_HENGTH){
   	  delete cache[length.shift()];
   }
   cache[key]=value;
} 
//上面这样写非常不好，第一cache和length暴漏在外面，而且只有一块缓存区，如果我的缓存区要分类呢
//所以上面这样代码不好，也不利于维护，怎么办呢
function createCache(){
	var length=[];
	var cache={};
	return function(key,value){
        if(length.length>MAX_HENGTH){
        	delete cache[length.shift()];
        }
        cache[key]=value;
        length.push(key);
	}
}
//这样就解决了缓存分类和变量暴漏在外的问题，下面在进行优化一下
function createCache(){
	var length=[],
	cache=function(key,value){
       if(length.length>MAX_HENGTH){
       	  delete cache[length.shift()];
       }
       cache[key]=value;
       length.push(key);
	}
	return cache;
}

getText=Sizzle.getText=function(elem){
    var nodeType=elem&&elem.nodeType,
    i=0,
    res="";
    if(nodeType!==1||nodeType!==9||nodeType!==11){
    	return "";
    }
    if(nodeType!==1){
        while((ele=elem[i++])){
        	res+=getText(ele);
        }
    }else{
    	return elem.childNodes[0].nodeValue;
    }
    return res;
} 

getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

/^:(only|first|last|nth|nth-last)-(child|of-type)
(?:\([s]*(even|odd|(([+-]|)(\d*)n|)[s]*(?:([+-]|)[s]*(\d+)|))[s]*\)|)/i

text:function(elem){
   return elem.type===text;
}



/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 * 不明白createPositionalPseudo为什么要返回这么多函数来传递参数,这样明显增加了函数的复杂性
 * 直接createPositionalPseudo(fn,argument,seed,matches);
 * jQuery这种参数分开传递的方式可以解决参数一下子获取不齐全的困扰，允许先获取第一部分参数，然后在
 * 获取到第二部分参数的时候，在第一部分返回的函数，以此类推，如果createPositionalPseudo函数时一次性
 * 传递这些参数，那么当不能一次性获取这些参数的时候，怎么办呢
 * 解决参数不能一次性全部获取的难题
 */
function createPositionalPseudo(fn,argument,seed,matches){
    argument=+argument;
    var j,
        matchIndexes=fn([],seed.length,argument),
        i=matchIndexes.length;
        while(i--){
        	if(seed[(j=matchIndexes[i])]){
        		seed[j]=!(matches[j]=seed[j]);
        	}
        }
}
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {   //到底取seed中的哪些元素放到matches集合中，取决于fn的返回数组
			var j,
				matchIndexes = fn( [], seed.length, argument ), //估计argument是用于选取哪些index
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}
var fn1=createPositionalPseudo(function(){
   return [0];
});
var fn2=fn1(argument);
var fn3=fn2(seed,matches);

/*------------------------2016-11-22-----------------------------------------*/
/**
 * 下面是对jQuery的tokenize，即词法分析器的测试,单单测试一个函数关联的代码就300行
 * 这样可以说是不容易测试的
 * assignment：自己写一个能够识别jQuery关键词的词法分析器
 * jQuery这个词法分析器可以从一组字符串中识别出TAG，CLASS，CHILD，ATTR，PSEUDO
 */
	var booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",   //匹配空格,正则表达式\s===\f\n\r\v\t

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",   //匹配任何字符串，这个用于css选择器字符串

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors  属性选择器
	// [attr=text]
	// capture 1 identifier，也就是attr部分
	// capture 2 ([*^$|!~]?=)
	// capture 3 text部分的第一种情况，'((?:\\\\.|[^\\\\'])*)'
	// capture 4 text部分的第二种情况，\"((?:\\\\.|[^\\\\\"])*)\"
	// capture 5 text部分的第三种情况，identifier
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",
    //pseudos,过滤选择器
    //:has(.red),:has('.red')
    //capture 1 identifier,也就是has部分
    //capture 2 包含3,6的括号
    //capture 3 包含引号的字符串部分，引号+字符串，3这个括号包含4,5
    //capture 4 单引号中的字符串部分，这次不包含单引号
    //capture 5 双引号中的字符串部分，这次不包含双引号
    //capture 6 不包含引号的字符串，包含其他匹配字符串的正则表达式和atttribbutes,3和6是平级括号，3是有引号的字符串，6是没有引号的字符串
    //capture 7,8,9,10,11是attributes中的capture
	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
    //rtrim =/^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g
	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),     //ID:/^#((?:\\.|[\w-]|[^\x00-\xa0])+)/
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),//CLASS:/^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/
		"TAG": new RegExp( "^(" + identifier + "|[*])" ), //TAG:/^((?:\\.|[\w-]|[^\x00-\xa0])|[*])/
		"ATTR": new RegExp( "^" + attributes ), //这个正则表达式分四个部分，第一是空格，第二是特殊的字符~!*^$[],第三就是对字符串的匹配，第四就是标签选择器的通配符*
		"PSEUDO": new RegExp( "^" + pseudos ),
		//:nth-child(5),
		//capture 1,(only|first|last|nth|nth-last)
		//capture 2,(child|of-type)
		//capture 3,包含4,7,8，也就是括号里面的东西
		//capture 4,(([+-]|)(\\d*)n|)，包含数字和符号，包含5,6
		//capture 5,([+-]|)，数字的符号
		//capture 6,(\\d*),数字
		//capture 7,([+-]|)
		//capture 8,(\\d+)
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ), //匹配有8,获取匹配有8
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	//   /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > 50 ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);  //返回value
	}
	return cache;
}
var Expr = {
    //预先处理经过正则表达式exec的结果集合，matches,把有用的match元素值放置在前面并返回
	preFilter: {   
		// [attr=text]
	    // capture 1 identifier，也就是attr部分
	    // capture 2 ([*^$|!~]?=)
	    // capture 3 text部分的第一种情况，'((?:\\\\.|[^\\\\'])*)'
	    // capture 4 text部分的第二种情况，\"((?:\\\\.|[^\\\\\"])*)\"
	    // capture 5 text部分的第三种情况，identifier  
	    // 传入的参数match=matchExpr["ARRT"].exec(a selector)
	    // 比如传入match["[name$=mbj]","name","$",undefined]  
		"ATTR": function( match ) { 
			//attribute部分
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			// 把匹配到的text值赋值给match[3]，
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";   //在tokenize函数中用于识别~符号
			}
            //返回match[0]=匹配的这个字符串,[1]=匹配的attribute部分,
            //[2]=匹配的~^$,[3]=匹配到的text部分,
            //如[name~=mbj],match[1]="name",match[2]="~=",match[3]="mbj"
			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
		//:nth-child(5),
		//capture 1,(only|first|last|nth|nth-last)
		//capture 2,(child|of-type)
		//capture 3,包含4,7,8，也就是括号里面的东西
		//capture 4,(([+-]|)(\\d*)n|)，包含数字和符号，包含5,6
		//capture 5,([+-]|)，数字的符号
		//capture 6,(\\d*),数字
		//capture 7,([+-]|)
		//capture 8,(\\d+)
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					throw new Error("error");  //选择器出错
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
                //match[4]=2,然后match[5]=1则表示是odd，match[5]=0，表示是even
			// other types prohibit arguments
			} else if ( match[3] ) {
				throw new Error("error");
			}
          //:nth-child(5),match=matchExpr["CHILD"].exec(":nth-child");
          //match[0]=":nth-child(5)",match[1]="nth",match[2]="child",match[3]=5,match[4]="",
          //match[5]=undefined,match[6]=undefined,match[7]="",match[8]=5;
          //经过preFilter的CHILD处理后变成
          //
			return match;
		},
    //pseudos,过滤选择器
    //:has(.red),:has('.red')
    //capture 1 identifier,也就是has部分
    //capture 2 包含3,6的括号
    //capture 3 包含引号的字符串部分，引号+字符串，3这个括号包含4,5
    //capture 4 单引号中的字符串部分，这次不包含单引号
    //capture 5 双引号中的字符串部分，这次不包含双引号
    //capture 6 不包含引号的字符串，包含其他匹配字符串的正则表达式和atttribbutes,3和6是平级括号，3是有引号的字符串，6是没有引号的字符串
    //capture 7,8,9,10,11是attributes中的capture
		"PSEUDO": function( match ) {
			//selector=":has(div.blue[type=text])",match=matchExpr["PSEUDO"].exec(selector);
			//match[0]=":has(div.blue[type=text])",match[1]="has",match[2]="div.blue[type=text]",
			//match[3]="",match[4]=undefined,match[5]=undefined,match[6]="div.blue[type=text]",
			//match[7]="type",match[8]="=",match[9]=undefined,match[10]=undefined,match[11]=text,
			//经过PSEUDO的处理后，只剩下match[0]=":has(div.blue[type=text])",
			//match[1]="has",match[2]="div.blue[type=text]",
			var excess,
				unquoted = !match[6] && match[2];  
                //有match[6]就用match[6]，没有就用match[2],应该是match[6]||match[2]
                //这里为什么要这样写呢，如果match[6]存在的话，unquoted=false了
			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;   //排除CHILD类别的PSEUDO，CHILD类别的PSEUDO有专门的函数处理
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {  //如果匹配了match[3]
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			// 从未被引用的参数里面剔除多余的字符，
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				// unquoted不是由tag，class，attr，child，pseudo组成的部分就是excess
				// excess=match[6]="div.blue[type=text]"
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis，推进到下一个括号
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
                //上面这句话不明白，为什么excess要这样计算
				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess ); 
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	}
}
var Sizzle={},
tokenCache = createCache(),
tokenize = Sizzle.tokenize = function( selector, parseOnly ) {  //顾名思义是词法分析器
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {   //如果在tokenCache中有缓存selector对应的value的话
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;   //preFilters指向Expr.preFilter对象

	while ( soFar ) {

		// Comma and first run,rcomma:/^\s*,\s*/
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators,rcombinators:/^\s*([<+~]|\s)\s*/
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();  //获得匹配的字符串
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters,type可以取TAG，CLASS，ATTR，CHILD，PSEUDO
		for ( type in {"TAG":true,"CLASS":true,"ATTR":true,"CHILD":true,"PSEUDO":true} ) {
			//如果soFar中含有type类型的选择器，如果type是attr，child，pseudo
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,  //匹配的选择器字符串
					type: type,      //选择器的类型
					matches: match   //有效的选择器片段
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	// 如果parseOnly为true的话，返回无效字符串的长度
	// 否则，如果还存在无效字符串的话，抛出异常，否则返回数组
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error(selector) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};
Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
}
/*------------------------2016-11-22-----------------------------------------*/

/*------------------------2016-11-23-----------------------------------------*/

/*------------------------2016-11-23-----------------------------------------*/

jQuery.fn.extend({
	find:function(selector){
       var self=this;
       if(typeof selector !=="string"){
       	  //说明不是选择器。可能直接是DOM元素,也可能是jQuery对象
       	  return jQuery.grep(jQuery(selector),function(elem,i){
                var j=self.length;
                while(j--){
                	return jQuery.contains(self[j],elem);
                }

       	  },false);
       }
	}
});

jQuery(document).ready(function(){
    //DOM元素加载完成
});
jQuery("selector");
 jQuery("normal selector");
 jQuery("normal selector",attr object);
 jQuery("normal selector",dom context);
 jQuery("normal selector",jQuery context);
 jQuery("html fragment")
jQuery(Single DOM);
jQuery(function(){});
jQuery(DOM Array);
jQuery();//返回一个空的jQuery对象

/**
 * [winnow description]
 * @param  {[type]} elements  [需要验证的集合元素]
 * @param  {[type]} qualifier [验证器]
 * @param  {[type]} not       [返回符合验证器的元素还是返回不符合验证器的元素，true，返回不符合验证器的元素，false返回符合验证器的元素]
 * @return {[type]}           [description]
 */
function winnow(elements,qualifier,not){
     if(typeof qualifier==="function"){  //验证器是函数
     	return jQuery.grep(elements,function(elem,i){
         return !!qualifier.call(elem,elem)!==not;
       });
     }
     if(qualifier.nodeType){   //验证器是单个DOM元素
     	return jQuery.grep(elements,function(elem,i){
              return (elem===qualifier)!==not;
     	});
     }
     if(typeof qualifier==="string"){
     	qualifier=jQuery.filter(elements,qualifier);
     }
     return jQuery.grep(elements,function(elem,i){
          return (jQuery.inArray(elem,qualifier)>-1)!==not;
     });
}

jQuery.fn.extend({
	has:function(target){
           //判断this下面有没有target，有则返回this中符合的元素
           var i=0,
               targets=jQuery(target,this),
               len=targets.length;
           return this.filter(function(elem){
              for(;i<len;i++){
              	return jQuery.contains(this,targets[i]);
              }
           });
	},
	filter:function(selector){
       return this.pushStack(winnow(this,selector,false));
	},
	find:function(selector){
		//好好想想会传入什么参数，也就是selector的种类
		//可能selector是函数，这样的话就是找符合selector的
       jQuery(selector,this);  //
	}
});

/*
var a=document.getElementById("fakebox");
      a.parentNode,a的父节点，可能是文本节点，注释节点
      a.parentElement指的是a元素的父元素，是DOM节点
      a.previousSibling，指的是a的前面一个兄弟节点，可能是文本节点，注释节点等
      a.previousElementSibling，指的是a的前面一个兄弟节点，是DOM元素
      a.nextSibling指的是a的下一个兄弟节点，不过可能是文本节点，不一定是DOM节点
      a.nextElementSibling指的是下一个兄弟DOM节点
      a.children,指a的DOM孩子节点
      a.childNodes，指a下面的所有节点，包括文本节点，注释节点等
dom.ownerDocument指向当前文档的document，如果dom是document的话，就为null
document.documentElement===document.getElementsByTagName("html")[0];为true
dom.getElementsByClassName,dom.getElementsByTagName,dom.querySelector,dom.querySelectorAll
document.getElementById(只能是document)
*/

jQuery.fn.extent({
	parent:function(){
       return jQuery.map(this,function(elem,i,arg){
          var parent=elem.parentNode;
          return parent&&parent!==9?parent:null;
       });
	},
	parents:function(until,selector){
       jQuery.map(this,function(elem,i,arg){
          return dir(elem,"parentNode",arg);
       },until)
	}
});


//promise得实现

function getAjaxData(){
	var deferred=jQuery.Deferred();
	$.ajax({
		method:"POST",
		url:"/data",
		success:function(data,resText,jqXHR){
            if(data){
                deferred.resolve(data);
            }
		},
		fail:function(resText,status,jqXHR){
            deferred.reject(status);
		}
	});
	return deferred.promise;
}

var promise=getAjaxData();  //这里是取promise对象
//这里的代码不会马上得到执行，如果ajax 10s后成功返回结果，那么10s后执行第一个函数
//这里的原理在于：
//promise.then只是给promise三个状态列表添加回调函数而已，真正触发列表中这些回调函数执行的是
//promise.resolve("data")函数，promise.reject("reson")函数，promise.progress("percent");这些函数
//给list中的函数传递参数，然后遍历并执行list中的函数
promise.then(function(){    //只是添加promise的resolve状态的回调函数
	//成功返回
},function(){               //只是添加promise的reject状态的回调函数
	//失败返回
},function(){               //只是添加promise的progress状态的回调函数
	//返回进度
});

//下面是采用事件驱动型的异步编程，函数的执行不依赖与顺序，而取决于事件是否发生
a.on("data",function(){  //添加回调函数的代码
	console.log("我是data得处理函数");
}); 
a.trigger("data");  //这里是触发data,那么这里要输出"我是data得处理函数" 

function A(){
  this.list={};
}
A.prototype={
	on:function(name,handler){
         if(this.list[name]){
         	this.list[name].push(handler);
         }else{
         	this.list[name]=[];
         	thhis.list[name].push(handler);
         }
	},
	trigger:function(name){
         var handlers=this.list[name],
         len,i;
         if(handler){
            len=handler.length;
            for(i=0;i<len;i++){
            	handler[i](Array.prototype.slice.apply(arguments,1));
            }
         }
	}
}

//下面是实现promise模式的源码
/*------------------------------是deferred的数据结构以及操作这些数据结构的变量和函数----------------*/
var rnotwhite=(/\S+/g);
function createOptions(options){
    var object={};
    jQuery.each(options.match(rnotwhite)||[],function(_,flag){
          object[flag]=true;
    });
    return object;
}
jQuery.Callbacks=function(options){
     options=typeof options==="string"?
         createOptions(options):
         jQuery.extend({},options);
         var firing,memory,fired,locked,list=[],queue=[],firingIndex=-1,
             fire=function(){
             	locked=options.once;
             	fired=firing=true;
             	for(;queue.length;firingIndex=-1){
             		memory=queue.shift();              //memory[1]是resolve,reject,progress的arguments
             		while(++firingIndex<list.length){  //memory[0]暂时知道是deferred或者promise对象
             			if(list[firingIndex].apply(memory[0],memory[1])===false&&
             				options.stopOnFalse){ //如果list中的函数有返回值是false，并且有stopOnFalse，就不执行接下来的函数
                              firingIndex=list.length;
                              memory=false;  
             			}
             		}
             	}
             	if(!options.memory){
             	    memory=false;  //判断memory能不能用多次，如果有options.memory=true,说明memory可以用多次
             	}
             	firing=false;
             	if(locked){
             		if(memory){
             			list=[];
             		}else{
             			list="";
             		}
             	}
             },
             self={
             	add:function(){
             		if(list){
             			if(memory&&!firing){
             				firingIndex=list.length-1;
             				queue.push(memory);
             			}
             			(function add(args){
             				jQuery.each(args,function(_,arg){
                                if(jQuery.isFunction(arg)){
                                	if(!options.unique||!self.has(arg)){
                                		list.push(arg);
                                	}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){
                                		add(arg);
                                	}
                                }
             				});
             			})(arguments);
             			if(memory&&!firing){
             				fire(); //如果memory中有参数，并且刚刚又添加了新的回调函数，则马上执行这些回调函数，这些回调函数的中的this是memory[0],参数是menory[1]
             			}
             		}
             		return this;
             	},
             	remove:function(){
             		jQuery.each(arguments,function(_,arg){
                          var index;
                          while((index=jQuery.inArray(arg,list,index))>-1){
                          	list.splice(index,1);
                          	if(index<=firingIndex){
                          		firingIndex--;  //因为list少了元素
                          	}
                          }
             		});
             		return this;
             	},
             	has:function(fn){
                    return fn?
                           jQuery.inArray(fn,list)>-1:
                           list.length>0;
             	},
             	empty:function(){
             		if(list){
             			list=[];
             		}
             		return this;
             	},
                disable:function(){
                	locked=queue=[];
                	list=memory="";
                	return this;
                },
                disabled:function(){
                	return !list;
                },
                lock:function(){
                	locked=true;
                	if(!memory){
                		self.disable();
                	}
                	return this;
                },
                locked:function(){
                	return !!locked;
                },
                fireWith:function(context,args){
                    if(!locked){
                    	args=args||[];
                    	args=[context,args.slice?args.slice():args];
                    	queue.push(args);
                    	if(!firing){
                    		fire();  //可以fire的时候是在add和fireWith的时候
                    		//当用self.add(fn)添加一个函数的时候，如果有memory的话，会立即执行
                    	}
                    }
                },
                fire:function(){
                	self.fireWith(this,arguments);
                	return this;
                },
                fired:function(){
                	return !!fired;
                }
             };
             return self;
};
/*------------------------------是deferred的数据结构以及操作这些数据结构的变量和函数----------------*/

/*------------------------------deferred的具体实现------------------------------------------------*/
jQuery.extend({
	Deferred:function(func){
       var tuples=[
          ["resolve","done",jQuery.Callbacks("once memory"),"resolved"],
          ["resolve","fail",jQuery.Callbacks("once memory","rejected")],
          ["notify","progress",jQuery.Callbacks("memory")]
       ],
       state="pending",
       promise={
       	  state:function(){
       	  	return state;
       	  },
       	  always:function(){
       	  	deferred.done(arguments).fail(arguments);
       	  	return this;
       	  },
       	  then:function(){
       	  	var fns=arguments;
       	  	return jQuery.Deferred(function(newDefer){
                   jQuery.each(tuples,function(i,tuple){
                      var fn=jQuery.isFunction(fns[i])&&fns[i];
                      deferred[tuple[1]](function(){
                      	var returned=fn&&fn.apply(this,arguments);
                      	if(returned&&jQuery.isFunction(returned.promise)){
                      		returned.promise()
                      		     .progress(newDefer.notify)
                      		     .done(newDefer.resolve)
                      		     .fail(newDefer.reject);
                      	}else{
                      		newDefer[tuple[0]+"With"](
                      			this===promise?newDefer.promise():this,
                      			fn?[returned]:arguments
                      			);
                      	}
                      });
                   });
                   fns=null;
       	  	}).promise();
       	  },
       	  promise:function(obj){
              return obj!=null?jQuery(obj,promise):promise;
       	  }
       },
       deferred={};
       promise.pipe=promise.then;
       jQuery.each(tuples,function(i,tuple){
       	var list=tuple[2],
       	    stateString=tuple[3];
       	    promise[tuple[1]]=list.add;
       	    if(stateString){
       	    	list.add(function(){
       	    		state=stateString;
       	    	},tuples[i^1][2].disable,tuples[2][2].lock);
       	    }
       	    deferred[tuple[0]]=function(){
       	    	deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);
       	    	return this;
       	    };
       	    deferred[tuple[0]+"With"]=list.fireWith;
       });
       promise.promise(deferred);
       if(func){
       	  func.call(deferred,deferred);
       }
       return deferred;
	},
	when:function(subordinate){
        var i=0,
            resolveValues=slice.call(arguments),
            length=resolveValues.length,
            remaining=length!==1||
                (subordinate&&jQuery.isFunction(subordinate.promise))?length:0,
            deferred=remaining===1?subordinate:jQuery.Deferred(),
            updateFunc=function(i,contexts,values){
                return function(value){
                	contexts[i]=this;
                	values[i]=arguments.length>1?slice.call(arguments):value;
                	if(values===progressValues){
                		deferred.notifyWith(contexts,values);
                	}else if(!(--remaining)){
                		deferred.resolveWith(contexts,values);
                	}
                };
            },
            progressValues,progressContexts,resolveContexts;
            if(length>1){
            	progressValues=new Array(length);
            	progressContexts=new Array(length);
            	resolveContexts=new Array(length);
            	for(;i<length;i++){
            		if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){
            			resolveValues[i].promise()
            			.progress(updateFunc(i,progressContexts,progressValues))
            			.done(updateFunc(i,resolveContexts,resolveValues))
            			.fail(deferred.reject);
            		}else{
            			--remaining;
            		}
            	}
            }
            if(!remaining){
            	deferred.resolveWith(resolveContexts,resolveValues);
            }
            return deferred.promise();
	}
});

var deferred=jQuery.Deferred();
deferred.then(f1,f2,f3);
deferred.resolve()||deferred.reject()||deferred.notify();

var d=jQuery.Deferred();
$.when(d).then(f1,f2,f3);
var d1=jQuery.Deferred(),d2=jQuery.Deferred();
$.when(d1,d2).then(f1,f2,f3);  //这里的f1,f2,f3回调函数是加到when函数返回的deferred对象的list上的
//下面是见证奇迹的时刻，触发d1，和d2会使得执行then后面的回调函数，并且参数由f1，f2提供
//这是因为在when函数中，我们在d2的list中添加的回调函数触发了when返回的deferred对象，
d1.resolve("sb");
d2.resolve(1,2,3,4);
f1=function(v1,v2){
    console.log(v1);  //"sb"
    console.log(v2);  //[1,2,3,4]
}
/*------------------------------deferred的具体实现------------------------------------------------*/




/*------------------------------queue和dequeue的用法，以及解决回调地狱的方式------------------------*/

$.ajax({               //下一个ajax在上一个ajax返回成功才能执行，这个造成了回调地狱
	method:"POST",
	url:"/ajax",
	success:function(){
		$.ajax({
			success:function(){
				$.ajax({
					success:function(){

					}
				});
			}
		});
	}
});

var func=[                //用queue和 dequeue方式来解决回调地狱
    function(){
    	$.ajax({
    		success:function(){
    			$(document).dequeue("mbj");
    		}
    	});
    },
    function(){
    	$.ajax({
    		success:function(){
    			$(document).dequeue("mbj");
    		}
    	});
    }
];  //函数数组加入到document元素名称为mbj的队列,dequeue会重这个函数队列中取出一个函数,并执行
$(document).queue("mbj",func);  //用queue和 dequeue方式来解决回调地狱
$(document).dequeue("mbj");     //执行document元素名叫mbj队列的第一个函数
$(document).queue("mbj",function(){  //也可以随时把函数加入队列
	console.log("ajax over!");
});

function a(){                        //用deferred和promise方式来解决回调地狱
	var deferred=jQuery.Deferred();
$.ajax({
	success:function(){
		deferred.resolve();
	}
});
return deferred.promise();
};
var promise=a();
promise.then(function(){
    a();  //（1）
},function(){

},function(){

}).then(function(promise){
    //这个回调函数会等着上面(1)处的函数成功返回后才执行
});
/*------------------------------queue和dequeue的用法，以及解决回调地狱的方式---------------*/

/*---------------------------------如何遍历一个元素的所有子元素----------------------------*/
function visit(targetDom){
	if(targetDom){
var elems=targetDom.childNodes,i=0;
for(;i<elems.length;i++){
	visit(elems[i]);
}
}
}
nextSibling
for(elem=targetDom;(elem=elem.nextSibling)!=null;){  //单纯的for循环还是搞定不了遍历所有的子元素
	visit(elem);
}
for(elems=targetDom.childNodes;(elem=elems[i])!=null;i++)

/*---------------------------------如何遍历一个元素的所有子元素----------------------------*/


//获取context下，标签为tag的元素
function getAll(context,tag){
     tag=tag||"*";
     var elems,elem,i=0,
         found=context&&context.getElementsByTagName?context.getElementsByTagName(tag):
               context.querySelectorAll?context.querySelectorAll(tag):undefined;
     if(!found){
     	//说明上面两个查找tag的函数不可用
     	for(found=[],elems=context.childNodes;(elem=elems[i])!=null;i++){
             if(jQuery.nodeName(elem,tag)){
                  found.push(elem);
             }
             getAll(elem,tag);
     	}
     }
}


  function buildFragment(htmlstr){
     var safe=document.createDocumentFragment(),
         div=document.createElement("div"),
         children;
         div.innerHTML=htmlstr;
         children=div.children;
         for(var i=0;i<children.length;i++){
            safe.appendChild(children[i]);
         }
         return safe;
  }

// var str="--"
// dom的深度遍历
function traverseNode(dom,str){
    if(dom){
      console.log(str+dom.nodeName.toLowerCase());
      var children=dom.children;
      for(var i=0;i<children.length;i++){
          traverseNode(children[i],"--"+str);
      }
    }
}

//dom栈的深度遍历
function traverseNode(dom){
    var stack=[],temp,children,i;
    dom.extra="--";
    stack.push(dom);
    while(stack.length){
    	temp=stack.pop();
    	console.log(temp.extra+temp.nodeName.toLowerCase());
    	children=temp.children;
    	i=children.length;
    	while(i--){
    		stack.push(children[i]);    //将最后一个孩子节点入栈
    		children[i].extra=temp.extra+"--";
    	}
    }
}

//dom队列的广度优先遍历
function traverseNode(dom){
    var queue=[],temp,i,children;
    queue.push(dom);
    dom.extra="--";
    while(queue.length){
       temp=queue.shift();
       console.log(temp.extra+temp.nodeName.toLowerCase());
       children=temp.children;
       for(i=0;i<children.length;i++){
       	queue.push(children[i]);
       	children[i].extra=temp.extra+"--";
       }
    }
}