<template>
  <section>
    <base-card>
      <h1 style="text-align: center">Welcome!</h1>
    </base-card>
    <base-card>
      <h2>What does this app do?</h2>
      <p>
        So, how does this small app work? Quite easily, actually. The idea is to
        demonstrate usage of as much Vue functionalities as possible. So, let me
        explain a thing or two about it.
      </p>
      <p>
        First of all, this app is built to be able to calculate your loan.
        Simple, right? You would actually be surprised how many people actually
        don't know the terms like <b>annual interest rate</b>,
        <b>montly installments</b> or <b>base amount</b>. So, let me explain how
        does this work. When you get to the bank and ask a certain amount of
        money to be loaned to you, they tell you "Hey, we'll give you that
        amount, and we're giving you this annual interest rate." That interest
        rate might be like 5%. You think "well, that's awesome, 5% is not much."
        The thing you don't know is it's the <b>annual</b> interest rate. It
        doesn't mean you return them 5% of the base amount every year. It means
        the base amount is actually multiplied by an extra 5% every year.
      </p>
      <p>
        Let's say you want 20.000$ and you want to return it in five years. You
        think you'll repay them an extra 25%, or 25.000$ (5% times 5 years =
        25%), but you'll actually repay them 27.63%, or 25.525,63$. Yeah, I
        know, it doesn't look like a lot, but let's say you want to repay them
        in 10 years. The figures should be <b>50% - 30.000$</b>, but instead,
        the figures are <b>62.89% - 32.578$</b>, and it gets bigger the longer
        the repay time is. So, this simple app is about this: to help you
        calculate your loan and don't get ripped off.
      </p>
    </base-card>
    <base-card>
      <h2>How do you use it?</h2>
      <p>
        First of all, you don't have to create an account. It's not necessary.
        You can view all of those calculations other people made so far. Just
        click on the link <b>Calculations</b> in the header, on the upper right
        part of the page.
      </p>
      <p>
        Once you click on the <b>Calculations</b> link, you'll be able to see
        all of the other calculations people made so far. You can also filter
        out by three different criterias by selecting one or more of them with
        select boxes displayed just above the first calculation. If you want to
        add your own calculation, just press the
        <b>Add your own calculation!</b> button, or press the
        <b>Calculate loan!</b> link in the upper left corner of your screen.
        Once the page opens, you need to input the base amount, annual interest
        rate and years for payment. Once you press the <b>Submit</b> button, a
        new dialog will appear asking of you to either
        <b>enter your personal data (don't worry, you can put in fake data, it
          doesn't matter)</b>, or press the <b>send anonymously</b> button and use some default
        data. If you opt out to leave the page, the calculation you made will be
        lost.
      </p>
      <p>
        The other cool feature is the <b>comment section</b>. Just press the
        <b>Comments</b> link in the upper right corner of your screen. Once
        you're there, you can <b>filter comments</b> by the grade that was
        given, you can
        <b>add your own comment, both anonymously or with data</b>, or you can
        view the details by pressing the <b>View details</b> button. Once you
        press the button, you can see the full comment text, and the time user
        did it.
      </p>
    </base-card>
    <base-card>
      <h2>What if you register?</h2>
      <p>
        If you register (the <b>login/signup</b> link in the upper right
        corner), you get to see the <b>Stats</b> page (again, the link will be
        displayed in the upper right corner of the screen, once you log in) with
        some interesting data about both the comments and the calculations. You
        can switch the <b>sign up</b> and <b>login</b> mode by pressing the
        <b>Login instead</b> or <b>Signup instead</b> button.
      </p>
      <p>
        The <b>calculation statistic</b> is pretty simple and it consists of
        some basic calculaions counting in all the calculations. The
        <b>comment statistic</b> is a little bit different. You get to see the
        pie chart displaying the number of comments grouped in one to five
        stars, based on the grade a certain user gave it.
      </p>
    </base-card>
    <base-card>
      <h2>How did I do it?</h2>
      <p>
        The entire project was built in <b>Vue.js</b> framework, backed by
        <b>Firebase</b> database, <b>vuex</b> for data and
        <b>Vue google charts</b> for making that pie chart I mentioned a couple
        of lines above.
      </p>
      <p>
        If you're interested in the entire code, this is the
        <b><a href="https://github.com/aleksbn/Calculation-SPA" target="_blank">github project link</a></b>
        so you can see it yourself. If you want to contant me, use my
        <b><a href="https://www.linkedin.com/in/aleksandar-matic-8a7b21120/" target="_blank">Linkedin profile link</a></b>
        for that. You can also check my <b><a href="https://aleksandar-matic.web.app/" target="_blank">portfolio
            site</a></b> as well and see my other projetcs. If you notice anything that's off in this app,
        <b><a href="mailto:aleksandar.matic986@gmail.com">mail me</a></b> to
        correct it. Cheers!
      </p>
    </base-card>
  </section>
</template>

<style scoped>
p {
  text-align: justify;
}

a {
  text-decoration: none;
}
</style>
