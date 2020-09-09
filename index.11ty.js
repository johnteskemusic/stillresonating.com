module.exports = (data) =>
  `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: "Arial", sans-serif;
      margin: 0;
      padding: 1em;
    }
    h1 {
      font-style: italic;
    }
    footer {
      margin-top: 1em;
      border-top: 1px solid;
      padding-top: 1em;
    }
  </style>
</head>
<body>
  <header>
    <h1>still resonating</h1>
  </header>
  <main>
    <p>
      <em>still resonating</em> is a series of postcard works by composers ${data.composers
        .map((_) => _.name)
        .join(", ")}.
    </p>
    <p>
      Please check back to view community contributions once you've recieved the first work in the mail.
    </p>
  </main>
  <footer>
    ${data.composers
      .map((_) => `<a href ="${_.website}">${_.name}</a>`)
      .join(", ")}
  </footer>
</body>
</html>`;
