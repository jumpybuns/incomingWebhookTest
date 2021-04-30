import request from 'superagent';

export async function createPost(newPost) {
  try {
    await request
      .post(
        `https://hooks.slack.com/services/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`
      )
      .send(newPost);
    return;
  } catch (err) {
    throw err;
  }
}
