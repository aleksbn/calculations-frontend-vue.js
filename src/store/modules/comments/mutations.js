export default {
  addComment(state, payload) {
    state.comments.push(payload);
  },
  setComments(state, payload) {
    state.comments = payload;
  },
};
