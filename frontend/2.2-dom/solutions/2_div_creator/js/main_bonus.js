
// Solution 2: The typo was "addComent" instead of "addComment"
function addComment() {
  console.log('Adding a comment.')

  // Retrieve the textarea & the text the user entered, from the DOM
  let textArea = document.querySelector('#comment-textarea');
  console.log('Text area:', textArea);
  let commentText = textArea.value;
  console.log('Getting comment text', commentText);

  // Adding in <p> tags to replace all of the "\n" new-lines
  commentText = '<p>' + commentText.replace('\n', '</p><p>') + '</p>';

  // Create a new div for the new message we will be making
  let newCommentDiv = document.createElement('div');

  // Much trickier to get the value of a select -- you have to use
  // :checked pseudo-selector to fetch the right one
  let selectedColorOption = document.querySelector('#color-select :checked');
  console.log('Color:', selectedColorOption);
  let colorText = selectedColorOption.value;
  console.log('Getting comment text', colorText);
  newCommentDiv.style.color = colorText;

  let selectedBackgroundOption = document.querySelector('#background-color-select :checked');
  console.log('Color:', selectedBackgroundOption);
  let backgroundColor = selectedBackgroundOption.value;
  console.log('Getting comment text', backgroundColor);
  newCommentDiv.style.backgroundColor = backgroundColor;

  newCommentDiv.innerHTML = commentText;
  console.log(newCommentDiv);

  let commentSectionDiv = document.querySelector('.CommentSection');
  console.log('Comment section div:', commentSectionDiv);
  commentSectionDiv.append(newCommentDiv);

  // Solution #5
  textArea.value = '';
}
