class Layer
{
    constructor()
    {
        this.perceptrons = [];
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

    getOutput()
    {
        let inputs=this.inputLayer.getOutput(this.inputLayer);
        for(let i=0;i<this.hiddenLayers.length;i++)
        {

        }
    }
}