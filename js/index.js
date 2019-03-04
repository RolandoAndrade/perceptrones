let pNOT=new Perceptron(1,new Step());
console.log(pNOT.getOutput([new Input(1,-1)]));

let pAND=new Perceptron(-1.5,new Step());
console.log(pAND.getOutput([new Input(1,1),new Input(1,1)]));

let pOR=new Perceptron(-0.5,new Step());
console.log(pOR.getOutput([new Input(0,1),new Input(0,1)]));
