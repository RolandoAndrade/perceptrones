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