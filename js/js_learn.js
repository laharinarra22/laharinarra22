// guessing game

// let a = prompt("welcome. enter your max number");
// let num = 15;
// i = 0

// while (true) {
//     if (a < num) {
//         ++i;
//         a = prompt("too low. guess again:");

//     }
//     else if (a > num) {
//         ++i;
//         a = prompt("too high. guess again:");
//     }
//     else if (a > num || a === 'q') {
//         ++i;
//         console.log(`it took you ${i} guesses.`)
//         break;
//     }
// }


//todo list

let enter = prompt('what would you like to do').toLowerCase();
let todo = []

while (enter !== 'quit') {

    if (enter === 'new') {
        let todo_list = prompt(`enter ${enter} todo`);
        todo.push(todo_list);
        console.log(`${todo_list} added to list`);
    }

    else if (enter === 'list') {
        console.log("***********")
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("***********")
    }

    else if (enter === 'delete') {
        let deleteindex = prompt('enter index of todo to delete');
        todo.splice(deleteindex, 1);
        console.log('todo removed')
    }
    enter = prompt('what would you like to do').toLowerCase();
}

if (enter === 'quit') {
    console.log('thankyou');
}
