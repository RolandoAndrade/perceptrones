class Input
{
    constructor(input, weight)
    {
        this.input=input;
        this.weight=weight;
    }

    Wx()
    {
        return this.weight*this.input;
    }
}

class Perceptron
{
    constructor(bias, activationFunction)
    {
        this.activationFunction=activationFunction;
        this.bias=bias;
    }

    getOutput(inputs)
    {
        let functionWx=0;
        for(let i=0;i<inputs.length;i++)
            functionWx+=inputs[i].Wx();
        functionWx+=this.bias;
        functionWx=this.activationFunction.activate(functionWx);
        return functionWx;
    }
}