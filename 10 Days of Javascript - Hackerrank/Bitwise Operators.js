
function getMaxLessThanK(n,k) {
    var arr = [];
    for(let i=1; i<=n; i++){
        for(let j=i+1; j<=n;j++){
            let z = i&j;
            if (z<k){
                arr.push(z);
            }
        }
    }
    var largest= 0;

    for (let i=0; i<arr.length;i++){
        if (arr[i]>largest) {
            largest=arr[i];
        }
    }
    return largest;
}