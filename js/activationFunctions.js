class ActivationFunction
{
    activate(x)
    {
        return x;
    }
}

class Step extends ActivationFunction
{
    activate(x)
    {
        return x>0?1:0;
    }
}

class InverseStep extends ActivationFunction
{
    activate(x)
    {
        return x<0?1:0;
    }
}

class Sigmoid extends ActivationFunction
{
    activate(x)
    {
        return 1/(1+Math.exp(-x));
    }

    derivate(x)
    {
        return this.activate(x)*(1-this.activate(x));
    }
}
