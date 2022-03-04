async function editFormHandler(event) {
    event.preventDefault();
    await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);