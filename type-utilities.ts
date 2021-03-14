type Todo = {
    title : string;
    description: string;
    completed: boolean;
}

// readonly
const todo : Readonly<Todo> = {
    title: "Assistir dark",
    description : "HAHAHA",
    completed : false
}

console.log(todo);
// todo.completed = true;

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo> ) { // Partial = define os campos como optional
    return { ...todo, ...fieldsToUpdate }
}

const todo2 : Todo = updateTodo(todo, { completed : true })


// Pick
type TodoPreview = Pick<Todo, "title" | "description">

const todo3 : TodoPreview = {
    title : "Hahahaha",
    description : "asasa as asa sasasas"
}

// Omit
type TodoPreview2 = Omit<Todo, "description">

const todo4 : TodoPreview2 = {
    title : "Hahahaha",
    completed : true
}

