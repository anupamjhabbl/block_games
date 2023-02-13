let change_the_chance = () => {
    let chance_box = document.getElementById('chance');
    chance_box.innerHTML = `chance: ${chance}`;
}


let horizontal_check= (e) => {
    let k = e.target.parentElement;
    let child_of_k = k.children;
    let i = 0;
    let color;
    if (chance==user1){
        color = 'green';
    }
    else{
        color = 'black';
    }
    while (i<child_of_k.length){
        if (child_of_k[i].style.backgroundColor==color){
            i = i+1;
            let j = 0;
            while (i<child_of_k.length && j<3){
                if (child_of_k[i].style.backgroundColor!=color){
                    break;
                }
                i++;
                j++;
            }
            if (j==3){
                alert(`winner is ${chance}`);
                window.location.reload();
            }
        }
        else{
            i++;
        }
    }
}

let vertical_check = (e) => {
    let k = e.target.parentElement;
    let child_of_k = k.children;
    let size = child_of_k.length;

    let index;
    for (let i=0;i<size;i++){
        if (child_of_k[i] == e.target){
            index = i;
            break;
        }
    }

    let m = k.parentElement;
    let child_of_m = m.children;
    let size_m = child_of_m.length;

    let i = 0;
    let color;
    if (chance==user1){
        color = 'green';
    }
    else{
        color = 'black';
    }

    while (i<size_m){
        if (child_of_m[i].children[index].style.backgroundColor==color){
            i = i+1;
            let j = 0;
            while (i<child_of_m.length && j<3){
                if (child_of_m[i].children[index].style.backgroundColor!=color){
                    break;
                }
                i++;
                j++;
            }
            if (j==3){
                alert(`winner is ${chance}`);
                window.location.reload();
            }
        }
        else{
            i++;
        }
    }
}

let box_click = (e) => {
    if (chance==user1){
        e.target.onclick = null;
        e.target.style.backgroundColor = 'green';
        horizontal_check(e);
        vertical_check(e);
        chance = user2;
        change_the_chance();
    }
    else{
        e.target.onclick = null;
        e.target.style.backgroundColor = 'black';
        horizontal_check(e);
        vertical_check(e);
        chance = user1;
        change_the_chance();
    }

}


let user1 = prompt('Name of first player');
let user2 = prompt('Name of second player');
let chance = user1;
change_the_chance();


let boxes = document.getElementsByClassName('box_level2');
for (element in boxes){
    boxes[element].onclick = box_click;
}
