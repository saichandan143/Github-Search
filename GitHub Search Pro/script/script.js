document
	.getElementById("githubForm")
	.addEventListener("submit", function (event) {
		event.preventDefault(); // Prevent the default form submission
		redirectToUserDetails();
	});

function redirectToUserDetails() {
	const username = document.getElementById("username").value;
	if (username.trim() !== "") {
		window.location.href = `user.html?username=${username}`;
	} else {
		alert("Please enter a valid GitHub username.");
	}
}
