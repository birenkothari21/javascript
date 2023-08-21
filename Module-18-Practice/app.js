const listElement = document.querySelector(".posts");
const postElement = document.getElementById("single-post");
const fetchBtn = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");
const form = document.querySelector("#new-post form");

function sendHttpRequest(method, url, data) {
	//  const promise = new Promise((resolve, reject) => {
	// 	const xhr = new XMLHttpRequest();
	// 	xhr.open(method, url);
	// 	xhr.responseType = "json";

	// 	xhr.onload = function () {
	// 		if (xhr.status >= 200 && xhr.status < 300) {
	// 			resolve(xhr.response);
	// 		} else {
	// 			reject("Something Went Wrong!");
	// 		}
	// 	};

	// 	xhr.send(JSON.stringify(data));
	// });

	// return promise;

	return fetch(url, {
		method: method,
		// body: JSON.stringify(data),
		body: data,
	})
		.then((response) => {
			if (response.status >= 200 && response.status < 300) {
				return response.json();
			} else {
				return response.json.then((errData) => {
					console.log(errData);
					throw new Error("Something went wrong! - Server Side");
				});
			}
		})
		.catch((err) => {
			console.log(err);
			throw new Error("Something went wrong!");
		});
}

function createPost(postTitle, postContent) {
	const userId = Math.ceil(Math.random() * 1000 + 5000);
	const post = {
		title: postTitle,
		body: postContent,
		userId: userId,
	};

	const fd = new FormData(form);
	// fd.append("title", postTitle);
	// fd.append("body", postContent);
	fd.append("userId", userId);

	// sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
	sendHttpRequest("post", "https://jsonplaceholder.typicode.com/posts", fd);
}

async function fetchPosts() {
	/* 
        let req = sendHttpRequest(
            "GET",
            "https://jsonplaceholder.typicode.com/posts"
        );

        req.then((data) => {
            const posts = data;

            for (const post of posts) {
                const postEl = document.importNode(postElement.content, true);
                postEl.querySelector("h2").textContent = post.title;
                postEl.querySelector("p").textContent = post.body;
                postEl.querySelector("li").id = post.id;

                listElement.append(postEl);
            }
        }).catch((error) => {
            console.log(error);
        });
     */

	try {
		const posts = await sendHttpRequest(
			"get",
			"https://jsonplaceholder.typicode.com/posts"
		);

		for (const post of posts) {
			const postEl = document.importNode(postElement.content, true);
			postEl.querySelector("h2").textContent = post.title;
			postEl.querySelector("p").textContent = post.body;
			postEl.querySelector("li").id = post.id;

			listElement.append(postEl);
		}
	} catch (error) {
		alert(error.message);
	}
}

fetchBtn.addEventListener("click", fetchPosts);

postList.addEventListener("click", (event) => {
	const postId = event.target.closest("li").id;
	sendHttpRequest(
		"delete",
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);
});

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const enteredTitle = document.getElementById("title").value;
	const enteredContent = document.getElementById("content").value;

	createPost(enteredTitle, enteredContent);
});
