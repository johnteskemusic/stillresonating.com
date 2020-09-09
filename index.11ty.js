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
    h1 {
      font-style: italic;
    }
    footer {
      border-top: 1px solid;
    }
  </style>
</head>
<body>
  <header>
    <h1>still resonating</h1>
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
