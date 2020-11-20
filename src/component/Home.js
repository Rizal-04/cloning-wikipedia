import {Component} from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';


class Home extends Component{
     render(){
         return(
             <div style={{textDecoration: 'none', fontFamily:'Times New Roman'}}>
                 <main align="right" style={{marginTop:-15, marginRight: 20}}>
                     <p style={{textDecoration: 'none', fontFamily:'Lucida-Sans'}}>Not logged in <a href ="/" style={{textDecoration:'none'}}>Talk</a>&nbsp;&nbsp;<a href="/" style={{textDecoration:'none'}}>Contributions</a>&nbsp;&nbsp;<a href="/" style={{textDecoration:'none'}}>create acount</a>&nbsp;&nbsp;<a href="/" style={{textDecoration:'none'}}>Log in</a></p>
                 </main>
                 <Mui.Container fixed>
                 <Mui.Grid container spacing={-9}>
                        <Mui.Grid item xs={2} >
                          <img  src="/wikipedia.jpg"  width="150" height="170"/><br/>   
                          <p>
                         <a href="/"style={{textDecoration:'none'}} >Main Page</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Contents</a> <br/>  
                         <a href="/" style={{textDecoration:'none'}}>Current Events</a> <br/>
                         <a href="/" style={{textDecoration:'none'}}>Random Article</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>About Wikipedia</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Contact Us</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Donate</a><br/><br/>
                         contribute<hr/>
                         <a href="/" style={{textDecoration:'none'}}>Help</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Learn to edit</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Community portal</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Recents changes</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Upload file</a><br/><br/>
                         Tools<hr/>
                         <a href="/" style={{textDecoration:'none'}}>What links here</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Related changes</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Special pages</a> <br/>
                         <a href="/" style={{textDecoration:'none'}}>Permanent link</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Page information</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Cite this page</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Wikidata item</a><br/><br/>
                         Print/exports<hr/>
                         <a href="/" style={{textDecoration:'none'}}>Download as PDF</a> 
                         <a href="/" style={{textDecoration:'none'}}>Printable version</a> <br/><br/>
                         Languages<hr/>
                         <a href="/" style={{textDecoration:'none'}}>العربية</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Deutsch</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Español</a> <br/>
                         <a href="/" style={{textDecoration:'none'}}>Français</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>हिन्दी</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>日本語</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Português</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>Русский</a><br/>
                         <a href="/" style={{textDecoration:'none'}}>中文</a><br/>   
                         <button >21 more</button>                      
                     </p>

                         </Mui.Grid>
                         <Mui.Grid item  xs={10}>
                             <Mui.Paper>
                              <p>Artikel &nbsp;<a href="">Talk</a>
                                  <p align="right" style={{marginTop:-15, marginRight: 20}}><a href="" style={{textDecoration:'none'}}>Read</a>&nbsp;&nbsp;<a href="" style={{textDecoration:'none'}}>Edit</a>&nbsp;&nbsp;<a href="" style={{textDecoration:'none'}}>View history</a></p>
                                </p>
                                <hr/>    
                            <h1>React (web framework)</h1><hr/>
                            <p>From Wikipedia, the free encyclopedia</p><br/>
                            <p><strong>React </strong>(also known as <strong> React.js</strong> or <strong>ReactJS)</strong> is an <a href="/"> open-source, front end, JavaScript library[3]</a> for building <a href ="/"> user interfaces </a> or UI components. It is maintained by <a href =""> Facebook</a>  and a community of individual developers and companies. .[4][5][6] React can be used as a base in the development of <a href="">single-page </a> or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for <a href="">state management</a> and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries.</p>
                            <Mui.Card variant="outlined" align='left' style={{ width:250 }}>
                         <Mui.CardContent >
                         <Mui.Typography  variant="p" gutterBottom style={{}}>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Contents </strong>[<a href="/">Hide</a>]
                         </Mui.Typography><br/><br/>
                         <Mui.Typography  variant="p">
                         1 <a href="/" style={{textDecoration:'none'}}>Basic Usage</a><br/>
                         2 <a href="/" style={{textDecoration:'none'}}>Notables Features</a> <br/>  
                         &nbsp;&nbsp;&nbsp;2.1 <a href="/" style={{textDecoration:'none'}}>Components</a> <br/>
                         &nbsp;&nbsp;&nbsp;2.2 <a href="/" style={{textDecoration:'none'}}>Functional components</a><br/>
                         &nbsp;&nbsp;&nbsp;2.3 <a href="/" style={{textDecoration:'none'}}>Class-based components</a><br/>
                         &nbsp;&nbsp;&nbsp;2.4 <a href="/" style={{textDecoration:'none'}}>Virtual DOM</a><br/>
                         &nbsp;&nbsp;&nbsp;2.5 <a href="/" style={{textDecoration:'none'}}>Lifecycle methods</a><br/>
                         &nbsp;&nbsp;&nbsp;2.6 <a href="/" style={{textDecoration:'none'}}>JSX</a><br/>
                         &nbsp;&nbsp;&nbsp;2.7 <a href="/" style={{textDecoration:'none'}}>Architecture beyond HTML</a><br/>
                         &nbsp;&nbsp;&nbsp;2.8 <a href="/" style={{textDecoration:'none'}}>React hooks</a><br/>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.8.1 <a href="/" style={{textDecoration:'none'}}>Rules of hooks</a><br/>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.8.2 <a href="/" style={{textDecoration:'none'}}>Custom hooks</a><br/>
                         3 <a href="/" style={{textDecoration:'none'}}>Common Idioms</a><br/>
                         &nbsp;&nbsp;&nbsp;3.1 <a href="/" style={{textDecoration:'none'}}>Use of the Flux architecture</a><br/>
                         4 <a href="/" style={{textDecoration:'none'}}>Future development</a> <br/>
                         5 <a href="/" style={{textDecoration:'none'}}>History</a><br/>
                         6 <a href="/" style={{textDecoration:'none'}}>Licensing</a><br/>
                         7 <a href="/" style={{textDecoration:'none'}}>See Also</a><br/>
                         8 <a href="/" style={{textDecoration:'none'}}>References</a><br/>
                         9 <a href="/" style={{textDecoration:'none'}}> External links</a>
                         </Mui.Typography>
                         </Mui.CardContent>
                         </Mui.Card><br/><br/>
                            <p><strong style={{fontSize:'X-Large'}}>Basic usage</strong><a href="" style={{textDecoration:'none'}}>&nbsp; [edit]</a></p>
                            <hr/>
                           <p>The following is a rudimentary example of React usage in HTML with JSX and JavaScript.</p>
                           <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent><h3>
                         1.  &lt;div id="myReactApp"&gt;&lt;/div&gt;<br/>
                         2.  <br/>  
                         3.   &lt;script type="text/babel"&gt;<br/>
                         4.  function Greeter(props) &#123; <br/>
                         5.  return &lt;h1&gt;&#123;props.greeting&#125;&lt;/h1&gt;<br/>
                         6.  &#125;<br/>
                         7.  var App = &lt;Greeter greeting="Hello World!" /&gt;;<br/>
                         8.ReactDOM.render(App, document.getElementById('myReactApp'));<br/>
                         9.&lt;/script&gt;
                         </h3>
                         </Mui.CardContent>   
                         </Mui.Card>
                            <p>The Greeter function is a React component that accepts a property greeting. The variable App is an instance of the Greeter component where the greeting property is set to 'Hello World!'. The ReactDOM.render method then renders our Greeter component inside the DOM element with id myReactApp.</p>
                            <p>When displayed in a web browser the result will be</p>
                            <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent><h3>
                           &lt;div id="myReactApp"&gt;<br/>
                          &lt;h1&gt;Hello World! &lt;/h1&gt;<br/>
                           &lt;/div&gt;
                         </h3>
                         </Mui.CardContent>   
                         </Mui.Card>
                           <p><strong style={{fontSize:'X-Large', fontFamily:'sans-serif'}}>Notable features</strong><a href="" style={{textDecoration:'none'}}>&nbsp; [edit]</a></p>
                            <hr/>
                            <p><strong style={{fontSize:'X-Large', fontFamily:'sans-serif'}}>Components</strong><a href="" style={{textDecoration:'none'}}>&nbsp; [edit]</a></p>
                            <p>React code is made of entities called components. Components can be rendered to a particular element in the <a href="">DOM</a> using the React DOM library. When rendering a component, one can pass in values that are known as "props"[11]:</p>
                            <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent><h3 >
                         ReactDOM.render(&lt;Greeter greeting="Hello World!" /&gt; , document.getElementById('myReactApp'));
                         </h3>
                         </Mui.CardContent>   
                         </Mui.Card>
                         <p>The two primary ways of declaring components in React is via functional components and class-based components.</p>
                         <p><strong style={{fontSize:'X-Large', fontFamily:'sans-serif'}}>Functional components</strong><a href="" style={{textDecoration:'none'}}>&nbsp; [edit]</a></p>
                         <p>Functional components are declared with a function that then returns some JSX.</p>
                         <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent><h3 >
                          const Greeting = (props) =&gt; &lt;div&gt;Hello, &#123;props.name&#125;!&lt;/div&gt;
                         </h3>
                         </Mui.CardContent>   
                         </Mui.Card>
                         <p><strong style={{fontSize:'X-Large', fontFamily:'sans-serif'}}>Class-based components </strong><a href="" style={{textDecoration:'none'}}>&nbsp; [edit]</a></p>
                         <p>Class-based components are declared using <a href="" style={{textDecoration:'none'}}>ES6</a> classes.</p>
                         <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent><h3 >
                         class ParentComponent extends React.Component&#123;<br/>state = &#123;color: 'green' &#125;;<br/> render()&#123;<br/> return (<br/>
                         &lt;ChildComponent color=&#123;this.state.color&#125;/&gt;<br/>);<br/>&#125;<br/>&#125;
                         </h3>
                         </Mui.CardContent>   
                         </Mui.Card>
                         <p><strong style={{fontSize:'X-Large', fontFamily:'sans-serif'}}>Virtual DOM</strong><a href="" style={{textDecoration:'none'}}>&nbsp; [edit]</a></p>
                        <p>Another notable feature is the use of a virtual <a href="" style={{textDecoration:'none'}}> Document Object Model,</a> or virtual DOM. React creates an <a href="" style={{textDecoration:'none'}}> in-memory</a> data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.[12]. This process is called <strong>reconciliation.</strong> This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This selective rendering provides a major performance boost. It saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page.</p><br/>
                        <p><strong style={{fontSize:'X-Large', fontFamily:'sans-serif'}}>Lifecycle methods</strong><a href="" style={{textDecoration:'none'}}>&nbsp; [edit]</a></p>
                        <p>Lifecycle methods use a form of <a href="" style={{textDecoration:'none'}}>hooking </a> that allows the execution of code at set points during a component's lifetime.</p>
                         <ul>
                             &nbsp;<li>shouldComponentUpdate allows the developer to prevent unnecessary re-rendering of a component by returning false if a render is not required.</li>
                             &nbsp;<li>componentDidMount is called once the component has "mounted" (the component has been created in the user interface, often by associating it with a DOM node). This is commonly used to trigger data loading from a remote source via an API.</li>
                             &nbsp;<li>componentWillUnmount is called immediately before the component is torn down or "unmounted". This is commonly used to clear resource-demanding dependencies to the component that will not simply be removed with the unmounting of the component (e.g., removing any setInterval() instances that are related to the component, or an "eventListener" set on the "document" because of the presence of the component)</li>
                             &nbsp;<li>render is the most important lifecycle method and the only required one in any component. It is usually called every time the component's state is updated, which should be reflected in the user interface.</li>
                         </ul>
                         <p><strong style={{fontSize:'X-Large', fontFamily:'sans-serif'}}>JSX</strong><a href="" style={{textDecoration:'none'}}>&nbsp; [edit]</a></p>
                        <p>JSX, or JavaScript XML, is an extension to the JavaScript language syntax.[13] Similar in appearance to HTML, JSX provides a way to structure component rendering using syntax familiar to many developers. React components are typically written using JSX, although they do not have to be (components may also be written in pure JavaScript). JSX is similar to another extension syntax created by Facebook for PHP called XHP.</p>
                        <p>An example of JSX code:</p><br/>
                        
                        
                        
                        
                        
                        
                        
                         </Mui.Paper>
                        </Mui.Grid>
                 </Mui.Grid>
                 </Mui.Container>         
             </div>
         )
     }
}

export default Home;