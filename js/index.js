function show(inputs,p)
{
    for(let i =0;i<inputs.length;i++)
        console.log(inputs[i],p.getOutput(inputs[i]));

}

function execute()
{
    let inputs = [[0,0],[0,1],[1,0],[1,1]];
    let outputs = [0,0,0,1];

    let p=new Perceptron(1,[0.247,-0.54],0.35,new Sigmoid(),0.1);

    console.log("Antes de aprender:");
    show(inputs,p);

    for(let x=0;x<5000;x++)
        for(let i=0;i<inputs.length;i++)
        {
            p.learn(outputs[i],inputs[i]);
        }

    console.log("Después de aprender:");
    show(inputs,p);
}


execute();