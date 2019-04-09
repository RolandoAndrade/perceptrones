class Perceptron
{
    constructor(number, weights, bias, activationFunction, learningRate)
    {
        this.number=number;
        this.weights=new Vector(weights);
        this.activationFunction=activationFunction;
        this.bias=bias;
        this.learningRate=learningRate;
    }

    getOutput(inputs)
    {
        let x=new Vector(inputs);
        let xW=x.dot(this.weights);
        return this.activationFunction.activate(xW+this.bias);
    }

    learn(expected,inputs)
    {
        let x=new Vector(inputs);
        let xW=x.dot(this.weights);
        let z=xW+this.bias;
        let delta=(this.activationFunction.activate(z)-expected)*(this.activationFunction.derivate(z));
        let gradient=x.sca(this.learningRate*delta);
        this.weights=this.weights.sub(gradient);
        this.bias-=delta*this.learningRate;
        return this.weights;
    }
}