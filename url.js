const url = require("url");
//work with the URL

const address = `http://https://smile.amazon.co.uk/Apple-24-inch-8%E2%80%91core-7%E2%80%91core-ports/dp/B0932W8YJZ/ref=sr_1_2_sspa?dchild=1&keywords=imac&qid=1621373053&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzMzJFSkxGSEFGVlFCJmVuY3J5cHRlZElkPUEwODgxNDE2UU80UTFFWlRMRkJSJmVuY3J5cHRlZEFkSWQ9QTA1ODYyOTVENk4zWDg0WTlFUlUmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl`;

//firstly, parse the address so you can work with it

const parsedUrl = url.parse(address, true);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.slashes);
console.log(parsedUrl.query.keywords);
