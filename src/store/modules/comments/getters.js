export default {
  comments(state) {
    return state.comments;
  },
  hasComments(state) {
    return state.comments && state.comments.length > 0;
  },
  getStats(state) {
    var toReturn = {
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      total: 0,
      average: 0,
    };

    toReturn.total = state.comments.length;
    toReturn.one = state.comments.filter(
      (x) => +x.commentGrade === 1
    ).length;
    toReturn.two = state.comments.filter(
      (x) => +x.commentGrade === 2
    ).length;
    toReturn.three = state.comments.filter(
      (x) => +x.commentGrade === 3
    ).length;
    toReturn.four = state.comments.filter(
      (x) => +x.commentGrade === 4
    ).length;
    toReturn.five = state.comments.filter(
      (x) => +x.commentGrade === 5
    ).length;
    toReturn.average =
      (toReturn.one +
        toReturn.two * 2 +
        toReturn.three * 3 +
        toReturn.four * 4 +
        toReturn.five * 5) /
      toReturn.total;
    return JSON.stringify(toReturn);
  },
};
