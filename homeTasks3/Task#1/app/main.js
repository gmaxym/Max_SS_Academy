function sumMin(arr){
 let sum = 0;

    for (let ryad = 0; ryad < arr.length; ryad++){
    let min = arr[ryad][0];
        for (let dig = 0; dig < arr[ryad].length; dig++) {
            if (min > arr[ryad][dig]) {
                min = arr[ryad][dig]
                };
            };
        sum = sum + min;
    };
return sum;
};

out.innerHTML += 'sumMin = ' + sumMin([[1,2,3],[33,22,55],[16,42,345,79,1]]) + '<br>';
out.innerHTML += 'sumMin = ' + sumMin([[11,2],[323,2,55]]) + '<br>';
out.innerHTML += 'sumMin = ' + sumMin([[13,11,2],[3,23,23,55],[23,55,3,77],[39,7,89,94]]) + '<br>';
