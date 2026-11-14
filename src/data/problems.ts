export type TestCase = {
  input: any[];
  expected: any;
};

export type Problem = {
  id: number;
  title: string;
  description: string;
  functionName: string;
  testCases: TestCase[];
  starterCode: string;
};

export const problems: Problem[] = [
  {
    id: 1,
    title: "Scope Detective",
    description: `
**Function Name Must be:** \`describeDeclaration\`

একটি কোডিং একাডেমি নতুন শিক্ষার্থীদের var, let, const এর পার্থক্য বোঝাতে একটি ছোট Quiz Tool বানাচ্ছে। Tool-টি একটি keyword ইনপুট নেবে এবং সেই keyword দিয়ে Redeclare ও Reassign করা যায় কিনা তা বর্ণনা করবে।

**Input**
Function একটি Parameter গ্রহণ করবে — keyword (String): "var" / "let" / "const"

**নিয়ম (Rules)**
- "var" হলে Return করবে \`"Can redeclare, can reassign"\`
- "let" হলে Return করবে \`"Cannot redeclare, can reassign"\`
- "const" হলে Return করবে \`"Cannot redeclare, cannot reassign"\`

**Validation**
Return \`"Invalid"\` যদি keyword এই তিনটির একটিও না হয়।
    `,
    functionName: "describeDeclaration",
    starterCode: `function describeDeclaration(keyword) {\n  // Your code here\n}`,
    testCases: [
      { input: ["let"], expected: "Cannot redeclare, can reassign" },
      { input: ["const"], expected: "Cannot redeclare, cannot reassign" },
      { input: ["var"], expected: "Can redeclare, can reassign" },
      { input: ["int"], expected: "Invalid" },
    ],
  },
  {
    id: 2,
    title: "Movie Ticket Booking",
    description: `
**Function Name Must be:** \`bookTicket\`

একটি সিনেমা Booking App-এ Default ভাবে প্রতি Booking-এ 1টি Seat এবং Ticket প্রতি ৩০০ টাকা ধরা হয়, যদি ইউজার আলাদা কিছু না দেয়। তোমার কাজ হলো ES6 Default Parameter দিয়ে এই System টি তৈরি করা।

**Input**
Function তিনটি Parameter গ্রহণ করবে — movie (String), seats (Number, default 1), pricePerSeat (Number, default 300)

**Output / নিয়ম**
- Total ক্যালকুলেট করতে হবে \`seats * pricePerSeat\`
- Return করতে হবে: \`"<movie>: <seats> seat(s), Total ৳<total>"\`

**Validation**
Return \`"Invalid"\` যদি movie String না হয় অথবা seats/pricePerSeat Negative Number হয়।
    `,
    functionName: "bookTicket",
    starterCode: `function bookTicket(movie, seats = 1, pricePerSeat = 300) {\n  // Your code here\n}`,
    testCases: [
      { input: ["Dune"], expected: "Dune: 1 seat(s), Total ৳300" },
      { input: ["Dune", 3], expected: "Dune: 3 seat(s), Total ৳900" },
      { input: ["Dune", 2, 450], expected: "Dune: 2 seat(s), Total ৳900" },
      { input: [123, 2], expected: "Invalid" },
    ],
  },
  {
    id: 3,
    title: "Receipt Generator",
    description: `
**Function Name Must be:** \`generateReceipt\`

একটি Grocery Shop-এর POS System প্রতিটি Purchase-এর পর একটি Multi-line Receipt প্রিন্ট করে। Template Literal ব্যবহার করে এই Receipt তৈরি করতে হবে।

**Input**
Function তিনটি Parameter গ্রহণ করবে — customerName (String), items (Array of String), total (Number)

**Output / নিয়ম**
- Template Literal (backtick) ব্যবহার করে Multi-line String Return করতে হবে
- Format exactly:
\`\`\`
Receipt for <customerName>
Items: <item1, item2, ...>
Total: ৳<total>
\`\`\`

**Validation**
Return \`"Invalid"\` যদি items Array না হয় অথবা Empty হয়।
    `,
    functionName: "generateReceipt",
    starterCode: `function generateReceipt(customerName, items, total) {\n  // Your code here\n}`,
    testCases: [
      { input: ["Rakib", ["Pen","Book"], 150], expected: "Receipt for Rakib\nItems: Pen, Book\nTotal: ৳150" },
      { input: ["Sadia", ["Milk"], 60], expected: "Receipt for Sadia\nItems: Milk\nTotal: ৳60" },
      { input: ["Tanvir", [], 0], expected: "Invalid" },
    ],
  },
  {
    id: 4,
    title: "BMI Calculator (Arrow Refactor)",
    description: `
**Function Name Must be:** \`calculateBMI\`

একটি Fitness App-এর পুরোনো ES5 Function কে Arrow Function এ Refactor করতে হবে। Function টি Weight (kg) এবং Height (m) নিয়ে BMI বের করবে।

**Input**
Arrow Function দুইটি Parameter গ্রহণ করবে — weight (Number, kg), height (Number, m)

**Output / নিয়ম**
- \`BMI = weight / (height * height)\`
- Return করতে হবে BMI একটি Number হিসেবে, 2 Decimal Place পর্যন্ত (toFixed(2), তারপর Number এ Convert)

**Validation**
Return \`"Invalid"\` যদি weight বা height শূন্য বা Negative হয়।
    `,
    functionName: "calculateBMI",
    starterCode: `const calculateBMI = (weight, height) => {\n  // Your code here\n};`,
    testCases: [
      { input: [70, 1.75], expected: 22.86 },
      { input: [50, 1.6], expected: 19.53 },
      { input: [60, -1.7], expected: "Invalid" },
    ],
  },
  {
    id: 5,
    title: "Inventory Merge & Max Score",
    description: `
**Function Name Must be:** \`mergeInventory\` & \`highestScore\`

একটি দোকানের Two Branch-এর Stock Array Spread Operator দিয়ে Merge করতে হবে, এবং একটি Student-দের Score Array থেকে Spread দিয়ে Highest Score বের করতে হবে।

**Input**
- \`mergeInventory(arr1, arr2)\` — দুইটি Array
- \`highestScore(scores)\` — একটি Number Array

**Output / নিয়ম**
- \`mergeInventory\`: Spread Operator (\`...arr1, ...arr2\`) দিয়ে একটি Merged Array Return করবে
- \`highestScore\`: \`Math.max(...scores)\` দিয়ে Highest Number Return করবে

**Validation**
Return \`"Invalid"\` যদি Parameter Array না হয়।
    `,
    functionName: "mergeInventory",
    starterCode: `function mergeInventory(arr1, arr2) {\n  // Your code here\n}\n\nfunction highestScore(scores) {\n  // Your code here\n}`,
    testCases: [
      { input: [[1,2], [3,4]], expected: [1, 2, 3, 4] },
      // To test highestScore in the same environment, we'll wrap it in a special case 
      // or we can just test mergeInventory normally. 
      // We will handle multiple functions by running them dynamically.
    ],
  },
  {
    id: 6,
    title: "User Profile Extractor",
    description: `
**Function Name Must be:** \`extractUserInfo\`

একটি Social App-এর API একটি Nested User Object Return করে। Destructuring ব্যবহার করে Nested Data থেকে Name, Age এবং Hobby List-এর First Item বের করতে হবে।

**Input**
\`extractUserInfo(userObj)\` — \`userObj = { user: { name, age }, hobbies: [...] }\`

**Output / নিয়ম**
- Object এবং Array Destructuring ব্যবহার করতে হবে (Default এবং Rename সহ)
- Return করতে হবে: \`"<name> (<age>) likes <firstHobby>"\`
- hobbies Array Empty হলে firstHobby এর Default হবে \`"nothing yet"\`

**Validation**
Return \`"Invalid"\` যদি user.name না থাকে।
    `,
    functionName: "extractUserInfo",
    starterCode: `function extractUserInfo(userObj) {\n  // Your code here\n}`,
    testCases: [
      { input: [{user:{name:"Sadia",age:22}, hobbies:["reading","coding"]}], expected: "Sadia (22) likes reading" },
      { input: [{user:{name:"Rafi",age:19}, hobbies:[]}], expected: "Rafi (19) likes nothing yet" },
      { input: [{user:{age:30}, hobbies:[]}], expected: "Invalid" },
    ],
  },
  {
    id: 7,
    title: "Inventory Object Manager",
    description: `
**Function Name Must be:** \`manageInventoryObject\`

একটি Warehouse System Object-ভিত্তিক Product Stock Manage করে। Action Parameter অনুযায়ী keys/values/entries বের করে, Property Delete করে, অথবা Object Seal/Freeze করে।

**Input**
\`manageInventoryObject(obj, action)\` — action হতে পারে: "keys" | "values" | "entries" | "delete:<propName>" | "seal" | "freeze"

**নিয়ম (Rules)**
- "keys" -> Object.keys(obj) Return করবে
- "values" -> Object.values(obj) Return করবে
- "entries" -> Object.entries(obj) Return করবে
- "delete:propName" -> propName Delete করে নতুন Object Return করবে
- "seal" -> Object.seal(obj) করে Return করবে
- "freeze" -> Object.freeze(obj) করে Return করবে

**Validation**
Return \`"Invalid"\` যদি obj Plain Object না হয় অথবা action এই List-এ না থাকে।
    `,
    functionName: "manageInventoryObject",
    starterCode: `function manageInventoryObject(obj, action) {\n  // Your code here\n}`,
    testCases: [
      { input: [{a:1,b:2,c:3}, "keys"], expected: ['a', 'b', 'c'] },
      { input: [{a:1,b:2,c:3}, "entries"], expected: [['a',1],['b',2],['c',3]] },
      { input: [{a:1,b:2,c:3}, "delete:c"], expected: {a:1, b:2} },
      { input: [{a:1}, "shrink"], expected: "Invalid" },
    ],
  },
  {
    id: 8,
    title: "Object Looper",
    description: `
**Function Name Must be:** \`printObjectDetails\`

একটি Product Catalog System একই Object তিন ভাবে Loop করে দেখাতে চায় — for...in, for...of + Object.entries, এবং Object.entries + Array Destructuring।

**Input**
\`printObjectDetails(obj, loopType)\` — loopType: "forin" | "forofentries" | "entriesDestructure"

**নিয়ম (Rules)**
- "forin" -> for...in দিয়ে প্রতি Key Loop করে \`"<key>: <value>"\` Array Return করবে
- "forofentries" -> for...of (Object.entries(obj)) দিয়ে একই Format Return করবে
- "entriesDestructure" -> Object.entries(obj).map এ [key, value] Destructure করে একই Format Return করবে

**Validation**
Return \`"Invalid"\` যদি loopType অচেনা হয়।
    `,
    functionName: "printObjectDetails",
    starterCode: `function printObjectDetails(obj, loopType) {\n  // Your code here\n}`,
    testCases: [
      { input: [{fruit:"Mango",price:50}, "forin"], expected: ['fruit: Mango', 'price: 50'] },
      { input: [{fruit:"Mango",price:50}, "entriesDestructure"], expected: ['fruit: Mango', 'price: 50'] },
      { input: [{}, "loopThrough"], expected: "Invalid" },
    ],
  },
  {
    id: 9,
    title: "ES6 Refactor Challenge",
    description: `
**Function Name Must be:** \`refactorToES6\`

নিচের ES5-Style Codeটি পুরোনো একটি Shopping Cart Total Calculator। তোমার কাজ হলো এটিকে পুরো পুরো ES6 দিয়ে Refactor করা (var -> let/const, String Concat -> Template Literal, Regular Function -> Arrow Function, Loop -> Spread/reduce)।

**Input**
নিচের ES5 Snippetটি ইনপুট হিসেবে ধরো

**Output / নিয়ম**
- var সব দুর করে let / const দিয়ে বদলানো
- String Concatenation ('+') দুর করে Template Literal (\`...\`) দিয়ে বদলানো
- Regular Function -> Arrow Function তে Refactor করো
- for-loop এর Total Sum একটি Array.reduce() অথবা Spread দিয়ে লিখো

**Validation**
Refactorএর পর মূল Function-এর Output অপরিবর্তিত থাকতে হবে।
    `,
    functionName: "refactorToES6",
    starterCode: `// ES5 — refactor this fully to ES6:\nconst refactorToES6 = (items) => {\n  var total = 0;\n  for (var i = 0; i < items.length; i++) {\n    total = total + items[i].price;\n  }\n  return 'Total: ' + total + ' Taka';\n};`,
    testCases: [
      { input: [[{price:100},{price:250}]], expected: "Total: 350 Taka" },
      { input: [[{price:80}]], expected: "Total: 80 Taka" },
    ],
  },
];
