module.exports = (data) =>
  `<!DOCTYPE html>
<html>
<head>
  <style>
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
    more to come soon
  </main>
  <footer>
    ${data.composers
      .map((_) => `<a href ="${_.website}">${_.name}</a>`)
      .join(", ")}
  </footer>
</body>
</html>`;
