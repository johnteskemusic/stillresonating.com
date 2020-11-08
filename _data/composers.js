const data = [
  {
    name: "John Teske",
    website: "https://johnteskemusic.com",
  },
  {
    name: "Neil Welch",
    website: "https://www.neilwelch.com/",
  },
  {
    name: "Nat Evans",
    website: "https://natevansmusic.com/",
  },
];

const and = (length) => (str, i) => (i === length - 1 ? `and ${str}` : str);

const withSerialComma = (list) => list.map(and(list.length)).join(", ");

// output markdown
const websiteList = withSerialComma(
  data.map(({ name, website }) => `[${name}](${website})`)
);

module.exports = {
  websiteList,
};
