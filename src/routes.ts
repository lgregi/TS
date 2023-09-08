import { Router } from "express";
import * as firebase from 'firebase';

export const router = Router();

router.get('/', (req, res) => {
    // res.send('API do Greg está funcionando')
    let database: any;
    firebase
        .database()
        .ref(`Feedbacks`)
        .orderByKey()
        .once('value')
        .then((data: any) => {
            database = data.val();
            res.send({ 'comments': database });
        });
});


router.post('/update', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    //remover aspas
    let feedback = req.body.feedback;
    let email = req.body.email;
    console.log('just one test');
    //usei apenas para testes
    let json = {
        'Feedback_do_ADM': 'Se você chegou até aqui, as rotas de GET e POST estão funcionando corretamente, porque no momento em que a rota "update" foi acessada, este JSON foi salvo com sucesso'
    };

    // Mandar para o Firebase sempre um JSON
    const REF = firebase.database().ref(`Feedbacks/${btoa(email)}`);

    REF.set({ 'feedback': feedback, 'email': email })
        .then(() => {
            let ID = REF.key;
            const UPDATE = firebase.database().ref(`Feedbacks/${btoa(email)}`).update({ 'ID': ID })
                .then(() => {
                    console.log('Updated');
                })
                .catch(err => { console.log(err); });
        })
        .catch((err: any) => {
            console.log(err);
        });
});
