module.exports = (data) =>
  `<!DOCTYPE html>
<html>
<head>
  <style>
  </style>
</head>
<body>
  <header>
  <h1>still resonating</h1>
  </header>
  <main>
  </main>
  <footer>
    ${data.composers.map((_) => _.name).join(", ")}
  </footer>
</body>
</html>`;
