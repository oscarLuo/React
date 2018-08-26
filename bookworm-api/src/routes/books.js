import express from 'express';
import authenticate from '../middleware/authenticate';
import Book from '../models/Books';
import parseErrors from '../utils/parseErrors';
const router = express.Router();

router.use(authenticate);

router.get('/', (req, res) => {
    Book.find({userId : req.currentUser._id})
        .then(books =>{
            res.json({
                books 
            })
        })
})

router.post('/', (req, res) => {
    Book.create({ 
        ...req.body.book,
        userId: req.currentUser._id
    }).then(book => {
        res.json({
            book
        })
    }).catch(err =>{
      res.status(400).json({ errors: parseErrors(err.errors) })
    });
});

router.get('/search', (req, res) =>{
    res.json({
        books: [
            {
                goodreadsId: 1,
                title: '1984',
                authors: 'Orwell',
                covers: [
                    'https://images.pexels.com/photos/33283/stack-of-books-vintage-books-book-books.jpg?cs=srgb&dl=antique-black-and-white-books-33283.jpg&fm=jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534912955851&di=9db81afa2127d1aace9d333c7012a0e7&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F11%2F46%2F93%2F89v58PICFPi.jpg'
                ],
                pages: 198
            },
            {
                goodreadsId: 2,
                title: 'Three men in a Boat',
                author: 'Oscar Luo',
                covers: [
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534912955848&di=08524d26c1b5bdf5ba13d9d6ae4298d8&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F11%2F50%2F36%2F84q58PIC2e3.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534912955848&di=42b4e109ea4635f5b40a4057dd6fa352&imgtype=0&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140924%2F0021033829700674_b.jpg'
                ],
                pages: 256
            }
        ]
    })
})

export default router;