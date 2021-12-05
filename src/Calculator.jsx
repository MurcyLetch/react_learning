function add(a,b){
    let sum=a+b;
    return sum;
}

function sub(a,b){
    let diff=a-b;
    return diff;
}

function mul(a,b){
    let res=a*b;
    return res;
}

function div(a,b){
    let ans=a/b;
    ans=ans.toFixed(2);
    return ans;
}
export default add;
export {sub,mul,div};