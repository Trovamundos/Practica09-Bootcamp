import "./styles.css";
import * as DataBusiness from './data-business';
import * as Utils from './utils';

DataBusiness.getUsers().then(data => {
    document.getElementById('root').innerText = '';
    const nodes = [];
    for (let item of data) {
        const node = Utils.createCharacterRow(item);
        node.onclick = function() {
            Utils.showCharacter(item);
        }
        nodes.push(node);
    }

    for (let node of nodes) {
        document.getElementById('root').append(node);
    }
}).catch(error => {
    document.write('Algo no va bien, será algun error...');
});