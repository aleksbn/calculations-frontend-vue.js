export default {
  addComment(context, data) {
    const commData = {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      commentText: data.commentText,
      commentGrade: data.commentGrade,
      timeOfCommenting: data.timeOfCommenting,
    };

    context.commit('addComment', commData);
  },
};
