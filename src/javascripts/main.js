//TODO - Your ES6 JavaScript code (if any) goes here



function getMax(x,y,z){
    if (x >=y && x>=z){
        return x;
    }
    else if (y>=x && y>=z){
        return y;
    }
    else{
        return z;
    }
}    

function getMin(x,y,z){
    if (x <=y && x<=z){
        return x;
    }
    else if (y<=x && y<=z){
        return y;
    }
    else{
        return z;
    }
}    

function getMean(x,y,z){
    return (x+y+z)/3;
}

function compare(word1,word2)
{
    if(word1 == word2){
        return 0;
    }
    else if (word1 > word2){
        return 1;
    }
    else{
        return -1;
    }
}

function getCharPerLine(str,indent)
{
    let woobidigoshish = "";
        for(let i = 0;i<str.length;i++)
        {
            
            if(str[i] != " ")
            {
                if(indent)
            {
                for(let j = 0; j<=i;j++)
                {
                    woobidigoshish += " ";
                }
            }
                woobidigoshish += str[i] + '\n';
            }
        }
    return woobidigoshish;
}

function arrow(size)
{
    let woobidigoshish="";
    for(let i = 1; i<= size; i++)
    {
        for(let j=1;j<=i;j++)
        {
            woobidigoshish+="*";
        }
        woobidigoshish += "\n";
    }
    for(let h=size-1; h>0 ;h--)
        {
            for(let k = 1; k<=h; k++)
            {
                woobidigoshish+="*";
            }
            woobidigoshish += '\n';
        }
    return woobidigoshish;
}