let inputs=[[0,0],[0,1],[1,0],[1,1]];


console.log("NOT");
let pNOT=new Perceptron(1,new Step());
console.log(1+" = "+pNOT.getOutput([new Input(1,-1)]));
console.log(0+" = "+pNOT.getOutput([new Input(0,-1)]));

console.log("AND");
let pAND=new Perceptron(-1.5,new Step());
    for(let i=0;i<4;i++)
        console.log(inputs[i][0]+" AND "+inputs[i][1]+" = "+pAND.getOutput([new Input(inputs[i][0],1),new Input(inputs[i][1],1)]));

console.log("OR");
let pOR=new Perceptron(-0.5,new Step());
    for(let i=0;i<4;i++)
        console.log(inputs[i][0]+" OR "+inputs[i][1]+" = "+pOR.getOutput([new Input(inputs[i][0],1),new Input(inputs[i][1],1)]));

console.log("XOR");
let pXOR1=new Perceptron(-0.5, new Step());
let pXOR2=new Perceptron(-1.5, new InverseStep());
    for(let i=0;i<4;i++)
        console.log(inputs[i][0]+" XOR "+inputs[i][1]+" = "+
            pAND.getOutput(
                [new Input(pXOR1.getOutput([new Input(inputs[i][0],1),
                new Input(inputs[i][1],1)]),1),
                    new Input(pXOR2.getOutput([new Input(inputs[i][0],1),
                        new Input(inputs[i][1],1)]),1)
            ]));