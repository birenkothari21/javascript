const btn = document.getElementById("btn");
const div = document.querySelector("div");
const sec = document.querySelector("section");
const sub = document.getElementById("sub");
const list = document.querySelector("ul");
/* 
    // event delegation pattern

    const ul = document.querySelectorAll("li");

    list.addEventListener("click", (event) => {
        console.log(event);
        event.target.closest("li").classList.toggle("bg");
    });
 */

// ul.forEach((li) => {
// 	li.addEventListener("click", (event) => {
// 		event.target.style.backgroundColor = "red";
// 	});
// });

/* 
    // preventDefault()...

    sub.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Testing preventDefault() method and isplaying alert...");
        console.log("Testing preventDefault() method and isplaying alert...");
    });
 */
/* 
    // propagation...

    btn.addEventListener("click", (event) => {
        console.log("BUTTON CLICKED ! ...");
    });

    div.addEventListener("click", (event) => {
        event.stopPropagation();
        console.log("DIV CLICKED ! ...");
    });

    sec.addEventListener("click", (event) => {
        console.log("SECTION CLICKED ! ...");
    });
 */
/* 
    //  bubbling and capturing

    btn.addEventListener("click", (event) => {
        // event.stopImmediatePropagation();
        console.log("BUTTON CLICKED ! ...");
    });

    btn.addEventListener("click", () => {
        console.log("BUTTON CLICKED 2! ...");
    });

    div.addEventListener("click", () => {
        console.log("DIV CLICKED ! ...");
    });

    sec.addEventListener(
        "click",
        () => {
            console.log("SECTION CLICKED ! ...");
        },
        true
    );
 */
/* 
    // add and remove eventlistener...

    function showAlert() {
        alert("Button Clicked...");
    }

    btn.addEventListener("click", showAlert);

    setTimeout(() => {
        btn.removeEventListener("click", showAlert);
    }, 3000);
 */
