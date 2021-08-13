import { Router } from 'express';

import { customerService } from './service';

const router = Router();

router.post('/', (req, res) => {
  const customer = customerService.signup({ ...req.body });
  res.status(201).json({ customer });
});

router.get('/:id', (req, res) => {
  const cusId: string = req.params['id'];
  const customer = customerService.getById(cusId);
  res.status(200).json({ customer });
});

export { router as customerRouter };
