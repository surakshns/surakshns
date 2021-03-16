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
            {this.state.clicked ?
            <ul className={this.state.clicked ? 'list active' : 'list'}>
                <li>About Me.</li>
                <li>Projects</li>
                <li>Experince</li>
                <div className='closeicon' onClick={this.clickedeventHandler}><i className='fas fa-times'></i></div>
            </ul> : <div></div>}
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