import { createMachine } from 'xstate';

const waterMachine = createMachine({
  id: 'water',
  initial: 'liquid',
  states: {
    ice: {
      
      on: {
        HEAT: {
          target: "liquid"
        },
      }
    },
    liquid: {
      on: {
        FREEZE: {
          target: "ice"
        },
        HEAT: {
          target: "gas"
        },
      }
    },
    gas: {
      on: {
        FREEZE: {
          target: "liquid"
        },
        HEAT: {
          target: "plasma"
        },
      }
    },
    plasma: {
      on: {
        FREEZE: {
          target: "gas"
        },
      }
    }
  }
});

export {  waterMachine }

// entry: () => console.log("entrou aqui"),
// exit: () => console.log("saiu aqui"),