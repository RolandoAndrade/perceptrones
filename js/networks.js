class Layer
{
    constructor(perceptrons)
    {
        this.perceptrons = perceptrons||[];
    }

    add(perceptron)
    {
        this.perceptrons.push(perceptron);
    }

    getOutput(inputs)
    {
        let out=[];
        for(let i=0;i<this.perceptrons.length;i++)
        {
            out.push(new Input(this.perceptrons[i].getOutput(inputs),1));
        }
        return out;
    }
}

class Network
{
    constructor(inputLayer,outputLayer)
    {
        this.inputLayer = inputLayer;
        this.outputLayer = outputLayer;
        this.hiddenLayers = [];
    }

    add(layer)
    {
        this.hiddenLayers.add(layer);
    }

    getOutput(inputs)
    {
        inputs=this.inputLayer.getOutput(inputs);
        for(let i=0;i<this.hiddenLayers.length;i++)
        {
            inputs=this.hiddenLayers[i].getOutput(inputs);
        }
        return this.outputLayer.getOutput(inputs)[0].input;
    }
}