import React,{Component} from 'react'

class Menu extends Component{
    state={ clicked: false}

clickedeventHandler = () => {
    this.setState({clicked: !this.state.clicked});
}

closenavbar = () =>{
    this.setState({clicked: !this.state.clicked}); 
}

    render(){
    return(
        <div className='menu'>
            <input
                type="checkbox"
                checked={this.state.clicked}
                className="checkboxs"
            />
            <div className='menubackscreen'><div className='colororg'></div></div>
            <div className='listhover'></div>
            <ul className='list'>
                <div className='navbar-band title'>SURAKSH.Aboutme</div>
                <li><a href='#' className='aboutme'><span>About Me.</span></a></li>
                <li><a href='#' className='projects'><span>Projects.</span></a></li>
                <li><a href='#' className='experince'><span>Experince.</span></a></li>
                <li><a href='#' className='contact'><span>Contact Me.</span></a></li>
                <div className='closeicon' onClick={this.clickedeventHandler}><i className='fas fa-times'></i></div>
            </ul> 
           
            <div className='menu-icon' onClick={this.clickedeventHandler}>
                <svg width="auto" style={{position:"absolute"}}>
                <line x1="5" y1="28" x2="5" y2="65" style={{stroke:"rgb(0,0,0)"}} />
                </svg>
                <svg width="auto" style={{position:"absolute"}}>
                <line x1="15" y1="28" x2="15" y2="45" style={{stroke:"rgb(0,0,0)"}} />
                </svg>
                <svg width="auto" style={{position:"absolute"}}>
                <line  x1="25" y1="28" x2="25" y2="50" style={{stroke:"rgb(0,0,0)"}} />
                </svg>
                <svg width="auto" style={{position:"absolute"}}>
                <line  x1="35" y1="28" x2="35" y2="60" style={{stroke:"rgb(0,0,0)"}} />
                </svg>
                <div>M</div>
                <div>E</div>
                <div>N</div>
                <div>U</div>
                </div>
        </div>
    );
    }
}
export default Menu;