import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import {Home} from './Home'
import {Department} from './Department'
import {Employee} from './Employee'
import { Link,BrowserRouter as Router, Route,Routes,HashRouter} from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <HashRouter>
              <div className="App">
                <h3 className="d-flex justify-content-center m-3">
                  React JS Frontend
                </h3>
                  <div>
                    <Link  to='/Home'>home</Link>
                    <Link Link  to='/Department'>department</Link>
                    <Link  to='/Employee'>employee</Link>
                  </div>            
                  <Routes>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/Department" element={<Department/>}/>
                    <Route path="/Employee" element={<Employee/>}/>                
                  </Routes>
              </div>
            </HashRouter>
        )
    }
}

// function App(){
//       return (
//           <div>
//               <div class="row">
//                   <div class="col-xs-offset-2 col-xs-8">
//                       <div class="page-header"><h2>React Router Demo</h2></div>
//                   </div>
//               </div>
//               <div class="row">
//                   <div class="col-xs-2 col-xs-offset-2">
//                       <div class="list-group">
//                           {/* 
//                           使用Link标签代替 a 标签，这一步是用于实现第一步：浏览器URL的变更
//                           */}
//                           <Link class="list-group-item" to='/home'>Home</Link>
//                           <Link class="list-group-item" to='/department'>department</Link>
//                           <Link class="list-group-item" to='/employee'>employee</Link>

//                       </div>
//                   </div>
//                   <div class="col-xs-6">
//                       <div class="panel">
//                           <div class="panel-body">
//                               {/* 
//                               在App.js中，定义路由，路由规定了path对应跳转的组件
//                               */}
//                               <Route path="/home" component={Home}/>
//                               <Route path="/department" component={Department}/>
//                               <Route path="/employee" component={Employee}/>

//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       )
// }
// export default App;




