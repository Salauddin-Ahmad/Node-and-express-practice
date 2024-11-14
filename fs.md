    Node.js এর fs মডিউলটি ফাইল সিস্টেমের সাথে কাজ করার জন্য অনেক কার্যকরী টুল সরবরাহ করে, যা ডেভেলপারদের ফাইল তৈরি, পড়া, লেখা, মুছে ফেলা এবং মেটাডাটা পরিদর্শনের সুবিধা দেয়। এই মডিউলটি অ্যাসিঙ্ক্রোনাস এবং সিঙ্ক্রোনাস পদ্ধতিতে কাজ করতে পারে, তাই আপনার কাজের ধরনের উপর ভিত্তি করে আপনি কোন পদ্ধতি ব্যবহার করবেন তা নির্ধারণ করতে পারেন।

## fs মডিউল ব্যবহার শুরু করা

প্রথমে, fs মডিউলটি কোডে ইনক্লুড করতে হবে:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codeconst fs = require('fs');  `

### ১. ফাইল পড়া (Reading Files)

#### অ্যাসিঙ্ক্রোনাস ফাইল পড়া (Asynchronous)

অ্যাসিঙ্ক্রোনাস পদ্ধতি ব্যবহারে কলব্যাক ফাংশন লাগে যা ফাইল পড়া শেষ হওয়ার পরে চালানো হয়। এর সুবিধা হলো এটি মূল থ্রেডকে ব্লক করে না।

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codefs.readFile('path/to/file.txt', 'utf8', (err, data) => {    if (err) throw err;    console.log(data);  });  `

#### সিঙ্ক্রোনাস ফাইল পড়া (Synchronous)

এই পদ্ধতি readFileSync ফাংশন ব্যবহার করে। এটি সম্পূর্ণ ফাইলটি পড়া শেষ না হওয়া পর্যন্ত কোডের পরবর্তী লাইনগুলো এক্সিকিউট করবে না।

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codeconst data = fs.readFileSync('path/to/file.txt', 'utf8');  console.log(data);  `

### ২. ফাইল লেখা (Writing Files)

#### অ্যাসিঙ্ক্রোনাস ফাইল লেখা (Asynchronous)

অ্যাসিঙ্ক্রোনাস ফাইল লেখায়, writeFile ব্যবহার করে নতুন কনটেন্ট যুক্ত করা হয় বা ফাইলটি তৈরি করা হয় যদি তা আগে থেকে না থাকে।

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codefs.writeFile('path/to/file.txt', 'Hello, world!', (err) => {    if (err) throw err;    console.log('File has been saved!');  });  `

#### সিঙ্ক্রোনাস ফাইল লেখা (Synchronous)

writeFileSync ব্যবহার করে সিঙ্ক্রোনাস লেখায়, ফাইল লেখা শেষ না হওয়া পর্যন্ত থ্রেড ব্লক থাকবে।

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codefs.writeFileSync('path/to/file.txt', 'Hello, world!');  console.log('File has been saved!');  `

### ৩. ফাইল মুছে ফেলা (Deleting Files)

#### অ্যাসিঙ্ক্রোনাস ফাইল মুছে ফেলা (Asynchronous)

ফাইল মুছে ফেলার জন্য unlink ব্যবহার করা হয়। এটি কলব্যাকের মাধ্যমে কাজ শেষের নোটিফিকেশন দেয়।

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codefs.unlink('path/to/file.txt', (err) => {    if (err) throw err;    console.log('File has been deleted!');  });  `

#### সিঙ্ক্রোনাস ফাইল মুছে ফেলা (Synchronous)

unlinkSync ফাংশন ফাইল মুছে ফেলে এবং ব্লকিং মোডে কাজ করে।

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codefs.unlinkSync('path/to/file.txt');  console.log('File has been deleted!');  `

### ৪. ফাইলের মেটাডাটা পড়া (Reading File Metadata)

fs.stat এবং fs.statSync পদ্ধতিগুলো ফাইলের মেটাডাটা নিয়ে আসে, যেমন আকার, তৈরি বা সম্পাদনা তারিখ, প্রভৃতি।

#### অ্যাসিঙ্ক্রোনাস মেটাডাটা পড়া

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codefs.stat('path/to/file.txt', (err, stats) => {    if (err) throw err;    console.log(stats);  });  `

#### সিঙ্ক্রোনাস মেটাডাটা পড়া

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codeconst stats = fs.statSync('path/to/file.txt');  console.log(stats);  `

### ৫. ডিরেক্টরি তৈরি করা (Creating Directories)

mkdir এবং mkdirSync ডিরেক্টরি তৈরি করতে ব্যবহৃত হয়।

#### অ্যাসিঙ্ক্রোনাস ডিরেক্টরি তৈরি

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codefs.mkdir('path/to/directory', { recursive: true }, (err) => {    if (err) throw err;    console.log('Directory created!');  });  `

#### সিঙ্ক্রোনাস ডিরেক্টরি তৈরি

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codefs.mkdirSync('path/to/directory', { recursive: true });  console.log('Directory created!');  `

### ৬. ফাইল অ্যাপেন্ড করা (Appending to Files)

ফাইলের শেষ অংশে নতুন কনটেন্ট যুক্ত করতে fs.appendFile এবং fs.appendFileSync ব্যবহার করা হয়।

#### অ্যাসিঙ্ক্রোনাস অ্যাপেন্ড

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codefs.appendFile('path/to/file.txt', '\nNew content appended!', (err) => {    if (err) throw err;    console.log('Content appended!');  });  `

#### সিঙ্ক্রোনাস অ্যাপেন্ড

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codefs.appendFileSync('path/to/file.txt', '\nNew content appended!');  console.log('Content appended!');  `

### ৭. ফাইল পুনঃনামকরণ করা (Renaming Files)

rename এবং renameSync ফাইল পুনঃনামকরণের জন্য ব্যবহৃত হয়।

#### অ্যাসিঙ্ক্রোনাস পুনঃনামকরণ

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codefs.rename('path/to/oldname.txt', 'path/to/newname.txt', (err) => {    if (err) throw err;    console.log('File renamed!');  });  `

#### সিঙ্ক্রোনাস পুনঃনামকরণ

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codefs.renameSync('path/to/oldname.txt', 'path/to/newname.txt');  console.log('File renamed!');  `

### ৮. ডিরেক্টরি পড়া (Reading Directories)

ডিরেক্টরির সমস্ত ফাইল এবং ফোল্ডারের তালিকা পেতে fs.readdir এবং fs.readdirSync ব্যবহৃত হয়।

#### অ্যাসিঙ্ক্রোনাস ডিরেক্টরি পড়া

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codefs.readdir('path/to/directory', (err, files) => {    if (err) throw err;    console.log(files);  });  `

#### সিঙ্ক্রোনাস ডিরেক্টরি পড়া

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`  javascriptCopy codeconst files = fs.readdirSync('path/to/directory');  console.log(files);  `

## উপসংহার

Node.js এর fs মডিউল ফাইল সিস্টেমের সাথে ইন্টারঅ্যাক্ট করার একটি শক্তিশালী এবং বহুমুখী টুল। এতে অ্যাসিঙ্ক্রোনাস এবং সিঙ্ক্রোনাস দুই ধরনের পদ্ধতি রয়েছে যা ব্যবহারকারীদের সহজেই ফাইল সিস্টেমের কাজ সম্পন্ন করতে সাহায্য করে।

4o
