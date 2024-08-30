const fs = require('fs')

let bookDB = []

class bookController {
        readList(req, res) {
            let data = fs.readFileSync("./data/bookData.txt", 'utf8')
            bookDB = JSON.parse(data)
            res.status(200).json(bookDB)
        }
    
      read(req, res) {
        let data = fs.readFileSync("./data/bookData.txt", 'utf8')
        bookDB = JSON.parse(data)
        let bookId = req.params.id - 1;
if(bookId >= 0 && bookId < bookDB.length) {
            res.status(200).json(bookDB[bookId]);
        }
        else {
            res.status(404).json({"message": "Livro não encontrado."});
        }
      }
    
      create(req, res) {
        let data = fs.readFileSync("./data/bookData.txt", 'utf8')
            bookDB = JSON.parse(data)
        const newBook = req.body;

if(newBook !== "" && newBook !== null)
        {
            bookDB.push(newBook);
            let data = JSON.stringify(bookDB)
            fs.writeFileSync("./data/bookData.txt", data, (err) => {
                if (err) throw err;
            })
          res.status(201).json({"message": "Livro criado com sucesso."})
        }
        else {
            res.status(400).json({"message": "Ocorreu um erro ao criar a entrada do livro."})
        }
      }
}

module.exports = new bookController();
