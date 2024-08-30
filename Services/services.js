class services {
    autenticate(req, res) {
        const validUser = {"nome": "user", "senha": "senha"};

        const user = req.body;

        if(user.nome === validUser.nome && user.senha === validUser.senha){
             res.status(200).json({"message": "Login realizado com sucesso."})
        }
        else {
             res.status(400).json({"message": "Credenciais inválidas."})
        }
    }
    
    buy(req, res) {
        const carteira = req.body.carteira
        const preco = req.body.preco
    
        let result = carteira - preco
        if(result >= 0) {
             res.status(200).json({"message": `Compra realizada com sucesso. Saldo da sua carteira ${result}.`})
        }
        else {
             res.status(400).json({"message": "Saldo insuficiente."});
        }
      }
    }
    
    module.exports = new services();