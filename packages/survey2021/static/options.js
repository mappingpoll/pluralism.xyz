const OPTIONS = {
  lastQ: 29
};

OPTIONS.default = {
  backLabel: "<< Back",
  forwardLabel: "Next >>",
  ticks: 3,
  control: true,
  reset: true,
  showValue: null
};

OPTIONS.index = {
  forward: "/2",
  reset: false
};

OPTIONS.textPage = {
  reset: false,
  control: false
};

OPTIONS.p2 = { reset: false };

OPTIONS.p4 = { ...OPTIONS.textPage };

OPTIONS.p5 = {
  colors: ["#fff", "#f6fdff", "#f3f8fe", "#f5f5fe", "#faf8fd"],
  showValue: JSON.stringify([0, 100]),
};

OPTIONS.p6 = {};
OPTIONS.p7 = {};
OPTIONS.p6.colors = OPTIONS.p7.colors = ["#f9f9f9", "#f6fdff", "#f3f8fe", "#f5f5fe", "#faf8fd"];

OPTIONS.p7.ticks = 5;

OPTIONS.p8 = OPTIONS.p9 = OPTIONS.p10 = {
  colors: ["#f5effe", "#f8ebfd", "#fdeefa", "#faf2f5", "#f5f5f5"]
};

OPTIONS.p11 = OPTIONS.p12 = OPTIONS.p13 = {
  colors: ["#ffeaf6", "#ffe5eb", "#ffede8", "#faf6ee", "#faf6ee"]
};

OPTIONS.p14 = OPTIONS.p15 = OPTIONS.p16 = {
  colors: ["#ffeae6", "#fff1e1", "#fffee4", "#eef8e1", "#f1f1f1"]
};

OPTIONS.p17 = OPTIONS.p18 = OPTIONS.p19 = {
  colors: ["#fae4bb", "#e6fad7", "#b5f4fd", "#e7e9ff", "#fccfcf"]
};

OPTIONS.p20 = OPTIONS.p21 = OPTIONS.p22 = {
  colors: ["#fff6a1", "#c4ecd8", "#c3c2ff", "#e9c9db", "#fcdcb8"]
};

OPTIONS.p23 = OPTIONS.p24 = OPTIONS.p25 = OPTIONS.p26 = {
  colors: ["#c3ffb4", "#93d2ed", "#93d2ed", "#fa8767", "#ffcf4e"]
};

OPTIONS.p27 = OPTIONS.p28 = OPTIONS.p29 = {
  colors: ["#71b7ff", "#83d06b", "#f9c99f", "#f76b6b", "#ccb4ff"]
};

OPTIONS.comment = OPTIONS.submit = {
  reset: false,
  colors: ["#c8c0d8", "#ffcdba"]
};

export default OPTIONS;
