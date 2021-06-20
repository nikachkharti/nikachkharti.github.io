let colorsContainer = document.getElementById("colors");
let startBtn = document.getElementById("startBtn");


let colors = [
    "red",
    "green",
    "blue",
    "black"
]

startBtn.addEventListener("click", () => {
    colorsContainer.innerHTML = "";

    let l = 0;
    let t = 0;
    let k = 0;

    for (let i = 0; i < 16; i++)
    {
        let div = document.createElement('div');

        if (i < 4)
        {
            div.style.backgroundColor = colors[i];
        }
        else if (i >= 4 && i < 8)
        {
            l == 0 ? colors.reverse() : "";
            div.style.backgroundColor = colors[l];
            l++;
        }
        else if (i >= 8 && i < 12)
        {
            t == 0 ? colors.reverse() : "";
            div.style.backgroundColor = colors[t];
            t++;
        }
        else if (i >= 12 && i < 16)
        {
            k == 0 ? colors.reverse() : "";
            div.style.backgroundColor = colors[k];
            k++;
        }
        
        colorsContainer.appendChild(div);
    }

    
})