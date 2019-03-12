const {evaluateBoard} = require('./../services/tictactoe');
const {drawBoard} = require('./../services/boardview');
const {createWallet} = require('./../services/bitgo-draw/createWallet');
const {getBalance} = require('./../services/bitgo-draw/getBalance');

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

    router.get('/bitgo-draw', async ctx => {
        await ctx.render('bitgo-draw');
    })

    router.get('/bitgo-draw/create/:walletlabel/:walletpass', async ctx => {
        ctx.body = await createWallet(ctx.params['walletlabel'], ctx.params['walletpass']);
    })

    router.get('/bitgo-draw/balance/:btcaddr', async ctx => {
        ctx.body = await getBalance(ctx.params['btcaddr']);
    })
    
};