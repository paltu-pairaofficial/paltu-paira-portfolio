// import {Router} from 'express';import {createInquiry} from '../controllers/inquiry.js';const router=Router();router.post('/',createInquiry);export default router;



import {Router} from 'express';

import {createInquiry} from '../controllers/inquiry.js';

const router=Router();

router.post('/',createInquiry);

export default router;