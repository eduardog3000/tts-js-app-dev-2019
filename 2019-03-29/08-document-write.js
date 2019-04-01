const formatItem = ({id, text, completed}) => `<li id="${id}" class="${completed ? '' : 'un'}completed">${text}</li>`;

const formatItems = list => `<ul>${list.map(formatItem).join('')}</ul>`;

const list = JSON.parse('[{"id":1,"text":"Done that","completed":true},{"id":2,"text":"Do this","completed":false}]');

const output = formatItems(list);

// Put markup as string into Web page:
document.write(output);
