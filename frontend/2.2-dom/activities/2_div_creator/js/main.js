// REMEMBER: Add a console.log at the top of this file, to ensure you are
// editing the right file and that it is "picking up on changes"
// NOTE: If it isn't "picking up changes", try "Hard Refresh" with
// Control+Shift+R (Linux) or Cmd+Shift+R (macOS)
console.log("Sup funky");

function addComment() {
  console.log("Adding a comment YO!!!.");

  // Retrieve the textarea & the text the user entered, from the DOM
  let textArea = document.querySelector("#comment-textarea");
  console.log("Text area:", textArea);
  let commentText = textArea.value;
  console.log("Getting comment text", commentText);
  textArea.value = "";

  // Create a new div for the new message we will be making
  let newCommentDiv = document.createElement("div");
  newCommentDiv.textContent = commentText;
  let newCommentColor = document.querySelector("#comment-color");
  let newBkgdColor = document.querySelector("#bkgd-color");
  console.log(newCommentColor.value);
  newCommentDiv.style.color = newCommentColor.value;
  newCommentDiv.style.backgroundColor = newBkgdColor.value;
  newCommentColor.value = "";
  newBkgdColor.value = "";
  console.log(newCommentDiv);

  // Add the newly created div to the document
  let commentSectionDiv = document.querySelector(".CommentSection");
  console.log("Comment section div:", commentSectionDiv);
  commentSectionDiv.appendChild(newCommentDiv);
}
