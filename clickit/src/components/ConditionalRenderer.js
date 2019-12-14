// import React, {Component} from 'react'
// import Home from './Nav/Home'
// import About from './Nav/About'
// import Projects from './Nav/Projects'
// import NavigationTabs from './NavigationTabs';

// class ConditionalRenderer extends Component {
//     state = {
//         currentPage: "Home"
//     }

//     handlePageChange = page => {
//         this.setState({currentPage: page}, () => console.log(this.state.currentPage))
        
//     }

//     renderPage = () => {
//         if (this.state.currentPage === "Home") {
//             return (
//                 <Home />
//             )
//         } else if (this.state.currentPage === "About") {
//             return (
//                 <About />
//             )
//     } else if (this.state.currentPage === "Projects") {
//         return (
//             <Projects />
//         )
//     }
// }

//     render() {
//         return (
//             <div>
//             <NavigationTabs handlePageChange={this.handlePageChange}/>
//             {this.renderPage()}
//             </div>
//         )
//     }
// }

// export default ConditionalRenderer