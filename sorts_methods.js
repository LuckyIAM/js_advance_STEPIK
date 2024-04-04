function bubbleSort(arr){
    let len = arr.length;
    let swapped = true
    while(swapped){
        swapped = false
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                console.log(arr[i], arr[i + 1]);
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
                console.log(arr);
            }
            
        }    
    }
        return arr;
    }

// let arr = [3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3];
// let sortedArr = bubbleSort(arr);

// console.log(sortedArr);


function cocktailSort(arr){
    let begin = 0
    let end = arr.length - 1
    let isSorted = true

    while(isSorted){
        isSorted = false
        for(let i = begin; i < end; i++){
            if(arr[i] > arr[i + 1]){
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                isSorted = true
            }
        }
        end--
        for(let i = end - 1; i >= begin;  i--){
            if(arr[i] > arr[i + 1]){
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                isSorted = true
            }
        }
        begin++
    }

    return arr
}

// let arr = [3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3];
// let sortedArr = cocktailSort(arr);

// console.log(sortedArr);


function selectionSort(arr){
    let len = arr.length
    for(let i = 0; i < len - 1; i++){
        let minIndex = i
        for(let j = i + 1; j < len; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

// let arr = [3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3];
// let sortedArr = selectionSort(arr);

// console.log(sortedArr);


function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > current){
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = current
    }
    return arr
}

// let arr = [3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3];
// let sortedArr = insertionSort(arr);

// console.log(sortedArr);


function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    } 
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
    let result = []

    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        }else{
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

let arr = [3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3];
let sortedArr = mergeSort(arr);

console.log(sortedArr);

// I can add on branch in git. now I have two baranch in git master and stepik

function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    let pivot = arr[0]
    let left = []
    let right = []

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(pivot, quickSort[right])

}