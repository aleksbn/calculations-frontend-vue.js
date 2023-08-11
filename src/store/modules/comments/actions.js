export default {
  async addComment(context, data) {
    const commData = {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      commentText: data.commentText,
      commentGrade: data.commentGrade,
      timeOfCommenting: data.timeOfCommenting,
    };

    const response = await fetch(
      "https://calculation-spa-default-rtdb.europe-west1.firebasedatabase.app/comments.json",
      {
        method: "POST",
        body: JSON.stringify(commData),
      }
    );

    if (!response.ok) {
      const error = new Error(`${response.statusText}. It could be that the service is unavailable at the moment.`);
      throw error;
    }

    context.commit("addComment", commData);
  },

  async loadComments(context) {
    const response = await fetch(
      "https://calculation-spa-default-rtdb.europe-west1.firebasedatabase.app/comments.json"
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to load data!");
      throw error;
    }
    const comments = [];
    for (const key in responseData) {
      const comment = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        email: responseData[key].email,
        commentText: responseData[key].commentText,
        commentGrade: responseData[key].commentGrade,
        timeOfCommenting: responseData[key].timeOfCommenting,
      };
      comments.push(comment);
    }
    context.commit("setComments", comments);
  },
};
