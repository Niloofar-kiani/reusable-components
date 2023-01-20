import Accordion from '../components/Accordion';

const AccordionPage = () => {
  const items = [
    { 
      id:1,
      label:'React',
      content:'React makes it painless to create interactive UIs. · Component-Based. Build encapsulated components that manage their own state'
    },
    { 
      id:2,
      label:'JavaScript',
      content:'JavaScript is the worlds most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.',
    },
    { 
      id:3,
      label:'CSS',
      content:'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.'
    }
  ]
 return <div><Accordion items={items}/></div>
}

export default AccordionPage;