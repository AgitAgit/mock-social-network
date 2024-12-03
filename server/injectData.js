const { faker } = require("@faker-js/faker");
const User = require("./models/userModel");
const Post = require("./models/postModel");
const Comment = require("./models/commentModel");

const injectData = async () => {
  const users = await User.insertMany(
    await Promise.all(
      Array.from({ length: 10 }).map(async () => ({
        displayName: faker.person.fullName(),
        email: faker.internet.email(),
        username: faker.internet.username(),
        password: faker.internet.password(6),
        imageUrl: faker.image.avatar(),
        role: faker.helpers.arrayElement(["Member"]),
      }))
    )
  );

  const posts = await Post.insertMany(
    Array.from({ length: 20 }).map(() => ({
      title: faker.lorem.sentence(),
      postImageUrl: faker.image.url({ width: 500, height: 500 }),
      content: faker.lorem.sentences(3),
      authorId: faker.helpers.arrayElement(users)._id,
      commentIds: [],
    }))
  );

  const comments = await Comment.insertMany(
    Array.from({ length: 60 }).map(() => ({
      commentContent: faker.lorem.sentences(2),
      parentPostId: faker.helpers.arrayElement(posts)._id,
      authorId: faker.helpers.arrayElement(users)._id,
    }))
  );
  // Populate commentIds in posts
  await Promise.all(
    comments.map((comment) => {
      const randomPost = faker.helpers.arrayElement(posts); // Select a random post
      return Post.findByIdAndUpdate(
        randomPost._id,
        { $push: { commentIds: comment._id } }, // Add the comment ID to the post's commentIds
        { new: true } // Return the updated document (optional)
      );
    })
  );
};

const removeData = async () => {
  try {
    await User.deleteMany({});
    await Post.deleteMany({});
    await Comment.deleteMany({});
  } catch (error) {
    console.error("Error deleting documents:", error);
  }
};

module.exports = { injectData, removeData };
