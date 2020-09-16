const and = (length) => (str, i) => (i === length - 1 ? `and ${str}` : str);

const withSerialComma = (list) => list.map(and(list.length)).join(", ");

module.exports = (data) =>
  `<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    h1, p {
      margin: 1rem 0;
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
    main, footer {
      margin: 0 auto;
      max-width: 45rem;
    }
    footer {
      border-top: 1px solid;
    }
  </style>
</head>
<body>
  <header>
    <img src="http://img.srsly.online/stillresonating-web.jpg" title="still resonating" alt="still resonating" />
  </header>
  <main>
    <p>
      <em>still resonating</em> is a series of postcard works by composers ${withSerialComma(
        data.composers.map((c) => c.name)
      )}.
    </p>
    <p>
      Please check back to view community contributions once you've recieved the first work in the mail.
    </p>
  </main>
  <footer>
    <p>
    ${withSerialComma(
      data.composers.map((c) => `<a href ="${c.website}">${c.name}</a>`)
    )}
    </p>
  </footer>
</body>
</html>`;
