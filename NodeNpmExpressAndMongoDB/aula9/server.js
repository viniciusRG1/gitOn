import app from './app';

const port = 3001;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log();
  console.log(`escutando a porta ${port}`);
});
