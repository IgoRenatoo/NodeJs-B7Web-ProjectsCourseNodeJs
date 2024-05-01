import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', (req:Request , res:Response) =>{
  res.render('home');
});

router.get('/contato', (req:Request , res:Response) =>{
  let name: string = 'Igor';
  let x: boolean = true;
  let object  = { 
    firstName: 'Igor',
    lastName: 'Renato',
    lastDoLastName: 'Cordeiro'
  };
  
  
  res.render('contact', {
    name,object,x
  });
});

router.get('/lista', (req:Request , res:Response) =>{
  res.send('Acessou página lista!')
});

router.get('/tabela', (req:Request , res:Response) =>{
  res.send('Acessou página tabela!')
});


export default router;
