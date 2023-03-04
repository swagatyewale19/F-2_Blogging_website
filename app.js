const blogForm = document.getElementById('blog-form');
const blogTitleInput = document.getElementById('blog-title');
const blogDescriptionInput = document.getElementById('blog-description');
const blogPostsContainer = document.getElementById('blog-posts');
const modal = document.getElementById('modal');
const createBlogBtn = document.getElementById('create-blog-btn');
const closeBtn = document.getElementsByClassName('close')[0];

let blogPosts = [];

// Get blog posts from local storage
if (localStorage.getItem('blogPosts')) {
  blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
  displayBlogPosts();
}

// Display blog posts on page
function displayBlogPosts() {
  blogPostsContainer.innerHTML = '';
  blogPosts.forEach((post, index) => {
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');
    blogPost.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.description}</p>
      <button class="edit-btn" data-index="${index}">Edit</button>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    blogPostsContainer.appendChild(blogPost);
  });
}

// Save blog post to local storage
function saveBlogPost(title, description) {
  const post = {
    title,
    description
  };
  blogPosts.push(post);
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}

function saveBlogPost(title, description) {
  const post = {
    title,
    description,
    timestamp: new Date().toISOString()
  };
  blogPosts.push(post);
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}
const publishButton = document.getElementById('publish-button');



// Update blog post in local storage
function updateBlogPost(index, title, description) {
  blogPosts[index].title = title;
  blogPosts[index].description = description;
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}

// Delete blog post from local storage
function deleteBlogPost(index) {
  blogPosts.splice(index, 1);
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}

// Handle form submit
blogForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = blogTitleInput.value;
  const description = blogDescriptionInput.value;
  if (title && description) {
    const editIndex = blogForm.dataset.index;
    if (editIndex) {
      updateBlogPost(editIndex, title, description);
      blogForm.removeAttribute('data-index');
    } else {
      saveBlogPost(title, description);
    }
    blogTitleInput.value = '';
    blogDescriptionInput.value = '';
    modal.style.display = 'none';
    displayBlogPosts();
  }
});

// Handle edit button click
blogPostsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-btn')) {
    const index = e.target.dataset.index;
    blogTitleInput.value = blogPosts[index].title;
    blogDescriptionInput.value = blogPosts[index].description;
    blogForm.setAttribute('data-index', index);
    modal.style.display = 'block';
  }
});

// Handle delete button click
blogPostsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const index = e.target.dataset.index;
    deleteBlogPost(index);
    displayBlogPosts();
  }
});

// Show modal on button click
createBlogBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Hide modal on close button click
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Hide modal on outside click
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Handle form submit
blogForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = blogTitleInput.value;
  const description = blogDescriptionInput.value;
  if (title && description) {
    const editIndex = blogForm.dataset.index;
    if (editIndex) {
      updateBlogPost(editIndex, title, description);
      blogForm.removeAttribute('data-index');
    } else {
      saveBlogPost(title, description);
    }
    blogTitleInput.value = '';
    blogDescriptionInput.value = '';
    modal.style.display = 'none';
    displayBlogPosts();
  }
});

// Handle edit button click
blogPostsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-btn')) {
    const index = e.target.dataset.index;
    blogTitleInput.value = blogPosts[index].title;
    blogDescriptionInput.value = blogPosts[index].description;
    blogForm.setAttribute('data-index', index);
    modal.style.display = 'block';
  }
});

// Handle delete button click
blogPostsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const index = e.target.dataset.index;
    deleteBlogPost(index);
    displayBlogPosts();
  }
});

// Show modal on button click
createBlogBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Hide modal on close button click
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Hide modal on outside click
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

