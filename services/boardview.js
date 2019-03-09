const {evaluateBoard} = require('./tictactoe');

const window   = require('svgdom')
const SVG      = require('svg.js')(window)
const document = window.document

const canvas = SVG(document.documentElement)

function drawBoard(boardState) {
    if (evaluateBoard(boardState) == "Evaluation.InvalidInput") {
        //return blank box

        canvas.rect(300,300,300,300).fill('black').move(0,0);
        return canvas.node.outerHTML;
    } else {

        //draw 3x3 grid

        canvas.rect(300,300,300,300).fill("gray").move(0,0);
        var line = canvas.line(100, 0, 100, 300).stroke({ width: 3, color: 'black'});
        var line2 = canvas.line(200, 0, 200, 300).stroke({ width: 3, color: 'black'});
        var line3 = canvas.line(0, 50, 300, 50).stroke({ width: 3, color: 'black'});
        var line4 = canvas.line(0, 100, 300, 100).stroke({ width: 3, color: 'black'});
    }

    //positions in grid
    var xPositions = [-10, 100, 200, -10,100, 200,-10, 100,200];
    var yPositions =  [-50, -50,-50, 0,0, 0,50, 50,50];

    for (i = 0; i < boardState.length; i++) {
        switch(boardState.charAt(i)) {
            case "x":
                //letter x svg
                var letterX = canvas.group().symbol();
                var line1 = canvas.symbol().line(20, 50, 70, 100).stroke({ width: 3, color: 'black'});
                var line2 = canvas.symbol().line(20, 100, 70, 50).stroke({ width: 3, color: 'black'});
                letterX.add(line1);
                letterX.add(line2);
                canvas.use(letterX).move(xPositions[i], yPositions[i]);
                continue;
            case "o":
                //letter o svg
                var letterO = canvas.symbol().circle(35);
                canvas.use(letterO).move(xPositions[i] + 35, yPositions[i] + 60);
                continue;
            case "X":
                //letter x svg
                var letterX = canvas.group().symbol();
                var line1 = canvas.symbol().line(20, 50, 70, 100).stroke({ width: 3, color: 'black'});
                var line2 = canvas.symbol().line(20, 100, 70, 50).stroke({ width: 3, color: 'black'});
                letterX.add(line1);
                letterX.add(line2);
                canvas.use(letterX).move(xPositions[i], yPositions[i]);
                continue;
            case "O":
                //letter o svg
                var letterO = canvas.symbol().circle(35);
                canvas.use(letterO).move(xPositions[i] + 35, yPositions[i] + 60);    
        }
    }

    //return DOM element
    return canvas.node.outerHTML;
}

module.exports = {drawBoard};