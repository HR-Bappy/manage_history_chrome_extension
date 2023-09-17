// const getItem = (key) => {
// 	let res = localStorage.getItem(key);
// 	return JSON.parse(res);
// };

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log('object',request);
//   if (request.localstorage == "urls") {
//     sendResponse({
//       urls: 'chrome.storage.local.get(["key"])',
//     });
//   } 
//   else sendResponse({});
// });
console.log('background.js is running');


// chrome.tabs.sendMessage('',msg)