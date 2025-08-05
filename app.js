// const reactDiv = React.createElement(
//     'div',
//     {   className: 'post-item', 
//     },
//     React.createElement(
//         'h2',
//         {
//             title: 'Học React tại F8'
//         },
//         'Học ReactJS'
//     ),

import { isNamedExportBindings } from "typescript";

//     React.createElement(
//         'p',
//         null,
//         'Học React từ cơ bản tới nâng cao'
//     )
    
// )



// // React
// // import ReactDOM from 'react-dom';
// const ulReact = React.createElement(
//     'ul',
//     { 
//         id: 'ul-id', 
//         style:  {
//                     color: 'red' 
//                 } 
//     },
//     React.createElement('li', null, 'JS'),
//     React.createElement('li', null, 'ReactJS'),
// );

// // Thêm đoạn này để render ra màn hình:
// const container = document.getElementById("root");


// // React 18
// const root = ReactDOM.createRoot(container)
// const app = React.createElement(
//   React.Fragment, // hoặc 'div' nếu bạn muốn thẻ thật trong DOM
//   null,
//   reactDiv,
//   ulReact
// );
// root.render(app);


// // ReactDOM.render(app, root);
// const reactCourse = 'ReactJS F8'
// const ul = <ul>
//     <li>JS</li>
//     <li>ReactJS</li>
// </ul>
// ReactDOM.render(ul,document.getElementById('root'));

// -----------------------------------
// const courses = [
//     {
//         name: 'html, css'
//     },
//     {
//         name: 'responsive'
//     },
//     {
//         name:'React'
//     }
// ]
// const jsx = (
//     <ul>
//         {courses.map((course,index) => 
//             <li key={index}>{course.name}</li>
//         )}
//     </ul>
// )
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(jsx);
// --------------------------------------------------------
// function Header() {
//     return (
//         <div className="header">Header</div>
//     )
// }

// class Content extends React.Component {
//     render(){
//         return (
//             <div className="content">New Content</div>
//         )
//     }
// }

// const app = (
//     <div className="wrapper">
//         <Header></Header>
//         <Content></Content>
//         <div className="footer">Footer</div>
//     </div>
// )

// console.log(app);
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(app);
// ----------------------------------------------------

// /*

// */
/*
 const posts =
        {
            img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/10266/6628ed851ef83.png',
            postTitle: 'Config Zsh bằng Oh-my-zsh và P10k trên WSL cực ngầu ✨',
            postDesc: 'Hello anh em , thì như blog trước mình có nói rằng mình ko có dùng Ubuntu, nhưng sao lại có...',
            postPublished: 'một năm trước·4 phút đọc',
        }

        function PostItem () {
            return (
                <div className="post-item">
                    <img src={posts.img} alt="Post Image" className="post-image" />
                    <h2 className="post-title">{posts.postTitle}</h2>
                    <p className="post-desc">{posts.postDesc}</p>
                    <span className="post-published">{posts.postPublished}</span>
                </div>
            )
        }

        const app = ( 
            <div className="app">
                <PostItem />
            </div>)

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(app);
*/