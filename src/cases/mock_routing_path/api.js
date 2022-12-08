const callFakeApi = (response) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(response), 1500);
  });
};

export const getPostById = (postId) => {
  return callFakeApi({
    id: postId,
    title: `Post title ${postId}`,
    content: `Content for post ${postId}`,
  });
};

export const getUserById = (userId) => {
  return callFakeApi({
    id: userId,
    name: `Mike-${userId}`,
    address: `Washington DC, Main st. 11-${userId}`,
  });
};
