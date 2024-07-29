import express from 'express';
// eslint-disable-next-line no-unused-vars
const router = new express.Router();

router.get('/', (req, res) => {
  res.send('oi');
});

export default router;
