// მოცემულია უჯრები 4x4 ზე და 4 ცალი ფერი.უჯრები უნდა შევავსო ფერებით ისე რომ მეზობელი უჯრების ფერები ერთმანეთს არ ემთხვეოდეს
// მაქვს ასევე ერთი ღილაკი რომელმაც ყოველ კლიკზე ახალი ფერები უნდა შეიცვალოს

let startBtn = document.querySelector("#messBtn");
let boxes = document.querySelectorAll(".brick");


// ეს ფუნქცია მასივის მასივის სახით წამოიღებს მასივში არსებული ელემენტების ყველა შესაძლო კომბინაციას
function getPermutations(arr)
{
    const output = [];
    function swapInPlace(arrToSwap,indexA,indexB)
    {   
        const temp = arrToSwap[indexA];
        arrToSwap[indexA] = arrToSwap[indexB];
        arrToSwap[indexB] = temp;
    }
    function generate(n, heapArr)
    {
        if (n === 1)
        {
            output.push(heapArr.slice());
            return;
        }
        generate(n - 1, heapArr);

        for (let i = 0; i < n - 1; i++)
        {
            if (n % 2 === 0)
            {
                swapInPlace(heapArr, i, n - 1);
            }
            else
            {
                swapInPlace(heapArr, 0, n - 1);
            }
            generate(n - 1, heapArr);
        }
    }
    generate(arr.length, arr.slice());
    return output;
};


let colors = [
    "red",
    "yellow",
    "green",
    "blue"
];

// ზედა ფუნქციის მუშაობის შედეგს ვიმახსოვრებთ ცვლადში
let allCombinations = getPermutations(colors);

// ვაგენერირებთ ინდექსს რომელიც მასივის შიგნით იტერაციისთვის 
let randomColorIndex = Math.floor(Math.random() * allCombinations.length);
// ამოგვაქვს შემთხვევითი ფერები
let randomColor = allCombinations[randomColorIndex];

//შემთხვევით ფერებს ვინახავთ ამ მასივში
let randomColors = [];
randomColors.push(...randomColor,...randomColor.reverse(),...randomColor.reverse(),...randomColor.reverse());


startBtn.addEventListener("click", () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = randomColors[i];
    }
})
