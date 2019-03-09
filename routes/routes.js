const {evaluateBoard} = require('./../services/tictactoe');
const {drawBoard} = require('./../services/boardview');

module.exports = ({ router }) => {

    //Routing
    router.get('/', async ctx => {
        await ctx.render('index');
    })

    router.get('/tictactoe', async ctx => {
        await ctx.render('tictactoe');
    })

    router.get('/tictactoe/boardview/:board', async ctx => {
        ctx.body = drawBoard(ctx.params["board"]);
    })

    router.get('/tictactoe/:board', (ctx, next) => {
        ctx.body = {
            boardString: ctx.params["board"],
            evaluation: evaluateBoard(ctx.params["board"])
          };
    })
    
};