// Variabes 

  const addMemberBtn = document.getElementById('add-member-btn');
  const newMemberInput = document.getElementById('new-member');
  const membersList = document.getElementById('members-list');

  addMemberBtn.style.color = 'blue';
  membersList.style.float = "right";
  membersList.style.marginRight = "350px"

  addMemberBtn.addEventListener('click', () => {
    // Get the value of the input field
    const newMember = newMemberInput.value;

    // Create a new list item element
    const listItem = document.createElement('li');

    // Set the text content of the list item to the new member
    listItem.textContent = newMember;

    // Add the new list item to the members list
    membersList.appendChild(listItem);

    // Clear the input field
    newMemberInput.value = '';
  });

