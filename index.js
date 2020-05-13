const puppeteer = require('puppeteer-core');

(async () => {
  const answers = {
    'def solution(x):  """  A string is valid if all characters of the string appear the same number of times.   It is also valid if removing just 1 character at 1 index in the string,   the remaining string will have characters which occur the same number of times.   Given a string x, determine if it is valid  Example: aabbcc => True  Example: aabbbcc => True  Example: aabbbccc => False  Example: aabbbbcc => False  """  return x': [
      'from collections import Counter',
      'def solution(x):',
        'c=lambda l:len(set(Counter(l).values()))==1',
        'return c(x) or any(c(x[:i]+x[i+1:]) for i in range(len(x))',
    ],
    'def solution(x):  """  x is a binary tree with each dict node having 3 properties:   numerical \'value\', and optional \'left\'/\'right\' nodes  Example of tree  x = { value: 1,          right: {             value:2,              right: {value:3},              left: {value:4}         },         left: {              value:5,              right: {value:6}          }   }  return the sum of all values on x   (for the example result should be 21)  """  return x': [
      'def solution(x):',
        's=x["value"]',
        'if "left" in x:',
          's+=solution(x["left"])',
          '',
        'if "right" in x:',
          's+=solution(x["right"])',
          '',
        'return s'
    ],
    "def solution(field):  '''   Field is a non-empty MxN map represented by an array of strings.   Empty cells are paths, *s are walls. You can move up/down/left/right, within the MxN bounds   Return whether there is a way from A to B     ['  *B',    '  * ',    'A * '] => False     [' B',    'A*'] => True     ['A   ',    '** *',    '    ',    ' ** ',    ' B* '] => True  '''  return True": [
      'def solution(f):',
        'o,p=set(),set()',
        'for y,r in enumerate(f):',
          'for x,c in enumerate(r):',
            'if c=="*":',
              'p.add((y,x))',
              '',
            'if c=="A":',
              'a=(y,x)',
              'o.add((y,x))',
              '',
            'if c=="B":',
              'b=(y,x)',
              '',
            '',
          '',
        'while o:',
          'if b in o:',
            'return True',
            '',
          'p.update(o)',
          'o = {_ for c in o for _ in ((c[0]-1,c[1]),(c[0]+1,c[1]),(c[0],c[1]-1),(c[0],c[1]+1)) if _ not in p and not (_[0]<0 or _[0]==len(f) or _[1]<0 or _[1]==len(f[0]))}',
          '',
        'return False'
    ],
    'def solution(x):  """  x is a string  return true if every char in the string is an english vowel  """  return x': [
      'import re',
      'def solution(x):',
        'return len(re.sub("[aeiou]","",x.lower()))==0'
    ],
    'def solution(x):  """  x is an list of integers  Return the first index Y on the array where the sum of the numbers before Y   is the same as the sum of the numbers after Y.  If no index match that, return -1  Note: the sum before index 0 and after the last index is 0  Example: [1,2,3,4,3,2,1] => 3  Example: [20,10,-80,10,10,15,35] => 0  """  return x': [
      'def solution(x):',
        'l,r=0,sum(x)',
        'for i,n in enumerate(x):',
          'r-=n',
          'if l==r:',
            'return i',
            '',
          'l+=n',
          '',
        'return -1'
    ],
    'def solution(x):  """  x is a list of strings  return the longest string in x  """  return x': [
      'def solution(x):',
        'm=""',
        'for w in x:',
          'm=w if len(w)>len(m) else m',
          '',
        'return m'
    ],
    'def solution(x):  """  x is a non-empty string with only braces, brackets and curly braces ()[]{}  Return True if the order of braces is valid and False if not  Example:  "(){}[]" => True  Example:  "([{}])" => True     Example:  "[(])" => False  """  return x': [
      'def solution(x):',
        's,m=[],{"}":"{","]":"[",")":"("}',
        'for i,c in enumerate(x):',
          'if c in m:',
            'if len(s)==0 or m[c]!=s[-1]:',
              'return False',
              '',
            's.pop()',
            '',
          'else:',
            's.append(c)',
            '',
          '',
        'return len(s)==0'
    ],
    'def solution(x):  """  x is string with words and each word contains one digit  Return the string ordered by the digit on each word  Numbers go from 1 to 9 (no 0)  Example: orderWords("is2 Thi1s T4est 3a") = "Thi1s is2 3a T4est"  """  return x': [
      'import re',
      'def solution(x):',
        'return " ".join(p[1] for p in sorted((re.sub("\\D","",w),w) for w in x.split()))'
    ],
    'def solution(x):  """  Returns the multiplicative persistence of x,   which is the number of times you must multiply   the digits in x until you reach a single digit.  Example: multiplicative_persistence(999) === 4   Because 9*9*9 = 729, 7*2*9 = 126,    1*2*6 = 12,   and finally 1*2 = 2 - we did it 4 times  """  return x': [
      'from functools import reduce',
      'def solution(x,n=0):',
        'return n if x<10 else solution(reduce(lambda a,b:a*int(b),str(x),1),n+1)'
    ],
    "def solution(x, y):  '''  - x is a 6-digit number representing 6 sides of a cube:     left, right, top, bottom, front, back.     Digit 1 means the side is transparent.     Digit 2 means the side is filled.   - y is the index of the side you're looking through the cube from   Return True if you can see through the cube.  '''  return True": [
      'def solution(x,y):',
        'x,p=str(x),y//2*2',
        'return x[p]==x[p+1]=="1"'
    ],
    'def solution(x):  """  x is a number  Return x as a roman numeral string  """  return x': [
      'def solution(x):',
        'm,x=x//1000,x%1000',
        'c,x=x-x%100,x%100',
        'd,u=x-x%10,x%10',
        'return "M"*m+["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"][c//100]+["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"][d//10]+["","I","II","III","IV","V","VI","VII","VIII","IX"][u]'
    ],
    'def solution(x):  """  x is a string (representing a file name)  return the file extension (everything after the last dot)  """  return x': [
      'def solution(x):',
        'return x.split(".")[-1]'
    ],
    'def solution(x):  """  x is a string that contains a number in the range (-99.9, 99.9)  return x as a number  """  return x': [
      'import re',
      'def solution(x):',
        'x=re.sub("[a-z]","",x,0,re.I)',
        'f=float(x)',
        'try:',
          'i=int(x)',
          'return i if i==f else f',
          '',
        'except:',
          'return f'
    ],
    'def solution(x):  """  x is a string that contains a number  return x as a number  """  return x': [
      'import re',
      'def solution(x):',
        'x=re.sub("[a-z]","",x,0,re.I)',
        'f=float(x)',
        'try:',
          'i=int(x)',
          'return i if i==f else f',
          '',
        'except:',
          'return f'
    ],
    'def solution(a, b):  """  Given two integers a and b, which can be positive or negative,   find the sum of all the numbers in between; including them too and return it.   If the two numbers are equal return a or b.  Example: sum_between_numbers(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2  Note: a and b are not ordered!  """  return a': [
      'def solution(a,b):',
      'return sum(range(min(a,b),max(a,b)+1)) if a!=b else a'
    ],
    'def solution(x):  """  Return the list with all the zeros at the end and   preserving the order of other elements  Example: [1,0,1,2,0,1,3,"a"] => [1,1,2,1,3,"a",0,0]  """  return x': [
      'def solution(x):',
        'l=[e for e in x if e!=0]',
        'return l+[0]*(len(x)-len(l))'
    ],
    'def solution(x):  """  x is a string. Cut x in half and move the second half to the beginning  \'1234\' will become \'3412\', \'12345\' will become \'34512\'  """  return x': [
      'def solution(x):',
        'c=len(x)//2',
        'return x[c:]+x[:c]'
    ],
    'def solution(x):  """  x is a list of dicts  Return a list of the unique ids inside x,   sorted ascending  for example, [{ id:5, otherProperty:2}, { id:2, otherProperty:2},   { id:5, otherProperty:6} ] would return [2,5]  """  return x': [
      'def solution(x):',
        'return list(sorted({d["id"] for d in x}))'
    ],
    'def solution(x):  """  x is a list of integers. Return elements on the list,   where the value is equal to their index doubled.  [3, 2, 4, 6, 7] returns [2, 4, 6] (having the indices 1, 2, 3)  """  return x': [
      'def solution(x):',
        'return [n for i,n in enumerate(x) if n==i*2]'
    ],
    'def solution(x):  """  x is a list  return x without its last 5 elements  """  return x': [
      'def solution(x):',
        'return x[:-5]'
    ],
    'def solution(x):  """  Returns the sum of all the multiples of 3 or 5 below   (including) the number passed in.  Example: for x=10 we have 3,5,6,9 and 10, so the sum is 33  Note: If the number is a multiple of both 3 and 5, only count it once.  """  return x': [
      'def solution(x):',
        'return sum(n for n in range(x+1) if n%3==0 or n%5==0)'
    ],
    'def solution(x):  \'\'\'  Compress the string replacing *only* repeating letters by the letter and the number of repetitions     AAAABBFAAGHHH => A4B2FA2GH3     AAABBCDA => A3B2CDA  \'\'\'  return x': [
      'def solution(x):',
        'r,n=[],0',
        'for c in x:',
          'if not r:',
            'r.append(c)',
            'n=1',
            '',
          'elif c==r[-1]:',
            'n+=1',
            '',
          'else:',
            'r.append(str(n))',
            'r.append(c)',
            'n=1',
            '',
          '',
        'r.append(str(n))',
        'return "".join(filter(lambda c:c!="1",r)) if x else x'
    ],
    'def solution(x):  \'\'\'   Order numbers that are at even indices in the x list.   INPUT: [10, 8, 1, 9, 5]   OUTPUT: [1, 8, 5, 9, 10]  \'\'\'  return x': [
      'def solution(x):',
        'x[::2]=sorted(x[::2])',
        'return x'
    ],
    'def solution(x,n):  \'\'\'  Replace every tab on the string x by n spaces  \'\'\'  return x': [
      'def solution(x,n):',
        'return x.replace("\\t"," "*n)'
    ],
    'def solution(x):  """  x is a string using kebab-case or snake_case  Return the same string using camelCase  Note: if the first letter is uppercase it should remain like that  Example: some-random-name => someRandomName  Example: Some_random_name => SomeRandomName  """  return x': [
      'def solution(x):',
        'p=x.replace("-"," ").replace("_"," ").split()',
        'return p[0]+"".join(s.capitalize() for s in p[1:]) if p else x'
    ],
    'def solution(a, b):  """  Difference function, which subtracts one list   from another and returns the result.  It should remove all values from list a,   which are present in list b.  """  return a': [
      'def solution(a,b):',
        'return [x for x in a if x not in b]'
    ],
    'def solution(x):  \'\'\'   x is an array of numbers, return the sum of the positive elements    [2, -3, 4] => 2 + 4 => 6  \'\'\'  return x': [
      'def solution(x):',
        'return sum(n for n in x if n>0)'
    ],
    'def solution(x, y):  """  Merge the x/y dicts.  If there is the same property on both, use the value from y  """  return x': [
      'def solution(x,y):',
        'x.update(y)',
        'return x'
    ],
    'def solution(x):  \'\'\'   x is a string. Make each first letter of each space-separated word uppercase.   Example: "this is a string" -> "This Is A String"  \'\'\'  return x': [
      'def solution(x):',
        'return " ".join(w.capitalize() for w in x.split(" "))'
    ],
    'def solution(x):  """  x is a string   Remove (at most one) trailing comma at the end   of the string if after it there is nothing or spaces only  """  return x': [
      'def solution(x):',
        'return x.rstrip()[:-1] if x.rstrip().endswith(",") else x',
    ],
    'def solution(x):  """  x is a list of integers  return true if all integers are even and false if not  """  return x': [
      'def solution(x):',
        'return all(n%2==0 for n in x)'
    ],
    'def solution(x):  """  x is a list  return whether x has any element that is not a number (could be in string form, e.g. "67")  """  return x': [
      'def solution(x):',
        'return not all(isinstance(n,int) or (isinstance(n,str) and n.isdigit()) for n in x)'
    ],
    'def solution(x):  """  x is number (int or float)  return x as a string  """  return x': [
      'def solution(x):',
        'return str(x)'
    ],
    'def solution(x):  """  x is a list  return x without its first five elements  """  return x': [
      'def solution(x):',
        'return x[5:]'
    ]
  };

  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_EXEC,
    userDataDir: 'datadir',
    headless: false,
    defaultViewport: null
  });
  const page = await browser.newPage();
  page.setDefaultTimeout(0);

  await page.waitForSelector('button.btn-success');
  await page.click('button.btn-success');
  await page.waitForSelector('.code-editor-container');

  let question, answer;
  while (true) {
    while (true) {
      question = await page.evaluate("document.querySelector('.code-editor-container .ace_content') && document.querySelector('.code-editor-container .ace_content').textContent");
      if (question)
        break;
    }

    answer = answers[question];
    if (answer) {
      await page.focus('.code-editor-container .ace_content');

      await page.keyboard.down('Meta');
      await page.keyboard.press('A');
      await page.keyboard.up('Meta');

      for (let i=0; i < answer.length; i++) {
        const sentence = answer[i];
        if (sentence) {
          await page.keyboard.type(sentence);
          if (i < answer.length-1)
            await page.keyboard.press('Enter');
        } else {
          await page.keyboard.press('Backspace');
        }
      }
    } else {
      console.log(question);
    }
    //await page.click('.btn-success');
    await page.keyboard.down('Meta');
    await page.keyboard.press('Enter');
    await page.keyboard.up('Meta');

    await page.waitForFunction("document.querySelector('.task-buttons span') && document.querySelector('.task-buttons span').textContent == ' All tests passed!'");

    //await page.click('.btn-success');
    await page.keyboard.down('Meta');
    await page.keyboard.press('Enter');
    await page.keyboard.up('Meta');
  }
})();
