// const getItem = (key) => {
// 	let res = localStorage.getItem(key);
// 	console.log("key", JSON.parse(res));
// 	return JSON.parse(res);
// };
// const setItem = (key, value) => {
// 	localStorage.setItem(key, JSON.stringify(value));
// };

const initial = () => {
	const main = document.getElementById("main-content");
	chrome.storage.local.get(["key"]).then((result) => {
		let storedLink = result.key || [];

		chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
			let flag = false;
			let route = tabs[0].url;
			let tempRoute = route.split("/");

			for (let i = 0; i < storedLink?.length; i++) {
				const div = document.createElement("div");
				div.classList.add("btn-group");
				div.classList.add("btn-group-" + i);
				if (storedLink[i].includes("://" + tempRoute[2])) {
					flag = true;
				}

				const button = document.createElement("button");
				const link = document.createElement("a");
				link.innerText = storedLink[i];
				link.href = storedLink[i];
				link.target = "_blank";
				button.innerText = "Remove";

				button.addEventListener(
					"click",
					(function (index) {
						return function () {
							handleClick(index);
						};
					})(i)
				);
				const pearListItem = document.createElement("li");
				pearListItem.textContent = "Pear";
				div.append(link, button);

				main.appendChild(div);
			}

			if (!flag) {
				storedLink.push(route);
			}
			chrome.storage.local.set({ key: storedLink }).then(() => {
				console.log("Value is set");
			});
		});
	});
};
const handleClick = (indx) => {
	chrome.storage.local.get(["key"]).then((result) => {
		let storedLink = [...result.key] || [];
		let temp = [];
		for (let i = 0; i < storedLink?.length; i++) {
			if (i !== indx) temp.push(storedLink[i]);
		}

		chrome.storage.local.set({ key: temp }).then(() => {
			const btn = document.querySelector(".btn-group-" + indx);
			btn.classList.add("d-none");
		});
	});
};

window.addEventListener("load", () => {
	initial();
});
