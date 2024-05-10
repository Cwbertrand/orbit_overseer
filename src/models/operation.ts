import { Result } from "./result";
import { Element } from "./element";

export interface Operation {
    id: string;
    duration: number;
    turn: number;
    description: string;
    elements: Element[];
    result: Result;
}




// const initialMessage = {
//     type: "operation",
//     data: {
//         "turn": 4,  // Random turn number
//         "role": "supervisor",  // Varying role
//         "id": "CA-134",  // Random operation ID
//         "duration": 7,  // Random duration
//         "description": "Deactivate odd switches and press three times on green buttons",  // Varying description
//         "elements": [
//             {
//                 "type": "switch",
//                 "id": 0,
//                 "valueType": "number",
//                 "value": 1
//             },
//             {
//                 "type": "switch",
//                 "id": 1,
//                 "valueType": "number",
//                 "value": 2
//             },
//             {
//                 "type": "switch",
//                 "id": 2,
//                 "valueType": "number",
//                 "value": 3
//             },
//             {
//                 "type": "switch",
//                 "id": 3,
//                 "valueType": "number",
//                 "value": 4
//             },
//             {
//                 "type": "button",
//                 "id": 4,
//                 "valueType": "color",
//                 "value": "#000"
//             },
//             {
//                 "type": "button",
//                 "id": 5,
//                 "valueType": "color",
//                 "value": "#FF0000"
//             },
//             {
//                 "type": "button",
//                 "id": 6,
//                 "valueType": "color",
//                 "value": "#00FF00"
//             },
//             {
//                 "type": "button",
//                 "id": 7,
//                 "valueType": "color",
//                 "value": "#0000FF"  // Changed value to vary the color
//             }
//         ],
//         result: {
//             buttons: {
//                 "order": "sequential",  // Changed order type
//                 "ids": [6, 6, 6]  // Changed the number and ids of the buttons
//             },
//             switches: [0, 2]  // Changed the ids of the switches
//         }
//     }
// };