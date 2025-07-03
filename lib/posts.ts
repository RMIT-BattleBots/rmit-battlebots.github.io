const allPosts = [
  { id: '1', slug: 'one', title: 'Hello World', content: 'this has some text' },
  { id: '2', slug: 'two', title: 'Second Post', content: 'and so does this!' },
  { id: '3', slug: 'three', title: 'Hi there', content: 'no text here though...' }
];

// Get all posts
export async function getPosts() {
  return allPosts;
}

// Get a single post by slug
export async function getPost(slug: string) {
  return allPosts.find((post) => post.slug === slug);
}
