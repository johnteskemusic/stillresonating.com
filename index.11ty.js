const and = (length) => (str, i) => (i === length - 1 ? `and ${str}` : str);

const withSerialComma = (list) => list.map(and(list.length)).join(", ");

module.exports = (data) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    h2, p, li {
      margin: 1rem 0;
    }
    h2 {
      font-size: 1.166em;
    }
    ul {
      list-style: none;
    }
    body {
      font-family: "Arial", sans-serif;
      padding: 1.5rem;
    }
    header {
      text-align: center;
    }
    img {
      max-width: 100%;
      max-height: calc(100vh - 3rem);
    }
    main {
      margin: 0 auto;
      max-width: 45rem;
    }
  </style>
  <title>still resonating | participatory postcard works</title>
</head>
<body>
  <header>
    <img src="https://img.srsly.online/stillresonating-web.jpg" title="still resonating" alt="still resonating" />
  </header>
  <main>
    <p>
      <em>still resonating</em> is a series of postcard works by composers ${withSerialComma(
      data.composers.map((c) => `<a href ="${c.website}">${c.name}</a>`)
      )}.
    </p>
    <p>
      Please check back to view community contributions once you've recieved the first work in the mail.
    </p>
    <section>
    <h2>supplemental sounds</h2>
      <p>
        Here are some recordings you can add as a background when participating in the works:
      </p>
      <ul>
        <li>
          <a href="https://snd.srsly.online/still-resonating/neils-fridge.mp3">Neil's refrigerator</a> (mp3, 17M)
        </li>
        <li>
          <a href="https://snd.srsly.online/still-resonating/johns-fridge.mp3">John's refrigerator</a> (mp3, 19M)
        </li>
      </ul>
    </section>
  </main>
</body>
</html>`;
