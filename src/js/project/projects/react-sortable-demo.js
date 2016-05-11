export default {
	id: "react-sortable-demo",
	title: "React and jQuery Sortable Demo",
	thumbnail: "assets/img/react-sortable-demo.png",
	onGitHub: true,
	info: `
#### Using jQuery UI Sortable with React
<img align="right" src="assets/img/react-sortable-demo.png"  alt =" " width="360" style="border: solid 1px #d4d4d4" />  
Example: https://nguymin4.github.io/react-sortable-demo  
This is the example of how to use jQuery UI Sortable with React.  

There are many HTML5-based Drag and Drop libraries out there which support React. 
But the biggest problem of HTML5-based Drag and Drop is that, the ghost image doesn't look nice if the dragging item has round corners or is a circle.
In fact, the ghost image is always a rectangular (or square). That's why I prefer jQuery UI Sortable feature.

jQuery UI directly manipulate DOM so obviously it doesn't work nicely with React virtual DOM.
To be able to use jQuery UI Sortable for a React Component, we need to find the real DOM of it with the help of \`findDOMNode\` from \`react-dom\`.
Next, I will track the position of item in the list with the help of jQuery UI Sortable event \`start\`, \`stop\` and \`receive\`.
I store the new position data but I will cancel all the change with \`sortable("cancel")\`. And then I change the state of the list/lane to rerender related items.
`
};