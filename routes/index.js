import express from 'express';
import { paginaInicio, 
        paginaNosotros, 
        paginasViajes, 
        paginaTestimoniales, 
        paginaDetalleViaje 
    } from '../controllers/paginasControllers.js';

import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

//req - lo que enviamos a express y  res - lo que obtenemos de respuesta de express
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginasViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

export default router;