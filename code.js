function fab(val){
    if(val <=1){
        return val;
    }
    else{
        return val *fab(val-1);
    }
}


console.log(fab(8));