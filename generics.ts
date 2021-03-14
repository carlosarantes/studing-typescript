// S => State
// T => Type
// K => Key
// V => Value
// E => Element


/**
 * 
 * unknow = tipo desconhecido
 */

type myType = number | string;

function useState<S extends myType>() { // S = Vai representar pra minha função o tipo que será usado
    let state: S;

    function getState() {
        return state;
    }

    function setState(newState: S) {
        state = newState;
    }

    return { getState, setState };
}

const newState = useState();

newState.setState("teste");
console.log(newState.getState());

newState.setState(123);
console.log(newState.getState());
