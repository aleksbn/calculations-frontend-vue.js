import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      comments: [
        {
          id: 748952,
          firstName: "Anonymous",
          lastName: "Anonymous",
          email: "anon@madeup.net",
          timeOfCommenting:
            "Tue Mar 28 2023 15:59:44 GMT+0200 (Central European Summer Time)",
          commentText:
            "This is alright, I suppose. I would add some form of login for it to be complete. Here's some following text from lipsum site to add it and increase text size: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis, mauris id laoreet porta, mauris libero posuere dui, laoreet iaculis elit libero vel dui. Pellentesque tincidunt velit eget mauris feugiat, eu sodales mi tincidunt. In efficitur auctor felis vitae pretium. Morbi quis diam congue, viverra mi et, malesuada risus. Vivamus dictum vel eros vitae elementum. Suspendisse euismod justo tortor, vitae pellentesque mauris laoreet quis. Duis erat magna, ultrices ac molestie vel, scelerisque vitae sem. Maecenas non ligula ex. Duis sit amet magna nec massa pretium viverra. Vestibulum consequat pretium ante non porta. Nulla venenatis neque a aliquet molestie. Fusce metus erat, sollicitudin eget posuere eu, condimentum vitae lectus. Integer quis ullamcorper nisi. Nullam eu congue nunc, at bibendum elit. Fusce congue tempor gravida. Praesent lorem erat, sagittis in sapien nec, pharetra sollicitudin nibh.",
          commentGrade: 4,
        },
        {
          id: 366985,
          firstName: "Aleksandar",
          lastName: "Matic",
          email: "aleksbn417@hotmail.com",
          timeOfCommenting:
            "Tue Jun 08 2021 11:27:25 GMT+0200 (Central European Summer Time)",
          commentText:
            "Looking good, and it's quite useful. I'm ok with giving my email, it's not a problem. Here's some following text from lipsum site to add it and increase text size: Donec aliquam tortor a leo mattis, sit amet sollicitudin orci tincidunt. Vivamus efficitur ligula nisl, tempus tincidunt nibh hendrerit eget. Vestibulum ullamcorper augue a elit dignissim, vitae fermentum tellus bibendum. Integer vitae urna eu est laoreet tristique. Phasellus vitae lorem sem. Cras tristique hendrerit ligula, a commodo metus placerat dictum. In semper facilisis tempor. Fusce fringilla condimentum tellus nec luctus. In efficitur ex in libero blandit, in elementum mi condimentum. Curabitur sed quam nec orci tincidunt rutrum. Sed non diam at diam tristique tempor sit amet in diam. Quisque nisl orci, tempus eget bibendum ut, mollis ut felis. Praesent feugiat id felis non condimentum.",
          commentGrade: 5,
        },
        {
          id: 751246,
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@gmail.com",
          timeOfCommenting:
            "Wen Dec 22 2021 23:07:12 GMT+0200 (Central European Winter Time)",
          commentText:
            "Didn't like it at all. I would expect more from these calculations. Here's some following text from lipsum site to add it and increase text size: Donec cursus vitae felis at tristique. Morbi eu orci elit. Mauris consectetur rutrum arcu, eu bibendum turpis aliquet placerat. Quisque varius commodo ligula et tempus. Nullam a malesuada massa, quis interdum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam nibh quam, commodo et magna a, hendrerit posuere dolor. Quisque iaculis mi ligula. Phasellus commodo fringilla arcu, sit amet convallis est imperdiet finibus. Maecenas placerat nisi in mauris pharetra ullamcorper ut ac leo. Nunc quis sapien pretium, porttitor dolor vitae, tincidunt velit. Nunc hendrerit placerat dolor at aliquet. Phasellus at bibendum dolor. In luctus maximus tellus id sollicitudin. Duis convallis tempus ex, sit amet auctor tellus consectetur sed.",
          commentGrade: 2,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
