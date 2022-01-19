import React,{ Fragment } from 'react';

import { DropdownLink } from './components';

import leftLogo from '../images/vertex-logo.png';

import rightLogo from '../images/vertex-logo-small.png';

import { Dropdown } from 'react-materialize';

import { Link } from 'react-router-dom';

import { MdDashboard } from 'react-icons/md';

import  { MdMenu } from 'react-icons/md';

import { MdArrowDropDown }  from 'react-icons/md';

import { MdSearch } from 'react-icons/md';

import { RegisterUser } from './user/credential/registerpage';

import  Login  from './user/credential/loginpage';

import { UserLink } from './wrapper';

export default class ServiceNavigation extends React.Component{

        constructor(props){
          super(props)
          this.show = this.show.bind(this);
          this.fromRedirect = this.fromRedirect.bind(this);
          this.redirectLogin = this.redirectLogin.bind(this);
          this.hide = this.hide.bind(this);
          this.showlogin = this.showlogin.bind(this)
          this.hidelogin = this.hidelogin.bind(this);
          this.showRegisterForm = this.showRegisterForm.bind(this);
          this.state = {toggle:["default-none"],showLogin:["default-none"]}  
        }

    show(){
      let concat = this.state.toggle.concat(["display-block"])
       this.setState({toggle:concat});
    }

    fromRedirect(e){
      let concat = this.state.toggle.concat([e])
       this.setState({toggle:concat});
      // let slice = this.state.toggle.slice();
      //     slice.splice(1,1)
      const slice = "default-none";
       this.setState({showLogin:slice});
       console.log('from redirect '," "+slice);
    };

    hide(){
      const slice = this.state.toggle.slice();
            slice.splice(1,1)
            this.setState({toggle:slice});
    };

    redirectLogin(e){
      const concat = this.state.showLogin.concat([e])
      this.setState({showLogin:concat})
    };

    showlogin(){
      let concat = this.state.toggle.concat(["display-block"])
       this.setState({showLogin:concat});
    };

// componentDidMount(){
//       const dis = this.props.showRegister
//       this.state.toggle.concat([dis]);
// }

    hidelogin(){
      const slice = this.state.toggle.slice();
            slice.splice(1,1)
            this.setState({showLogin:slice});
    }
    showRegisterForm(){
       const dis = this.props.showRegister
       this.state.toggle.concat([dis])
    }

render(){
return(
<Fragment> 
   <nav className="fixed">
         
          <div className={this.state.toggle}>
              <RegisterUser clientInfo={this.props.clientInfo}
                            isPassword={this.props.passValue}
                                  hide={this.hide}
                                  hideRegister={e=>this.hide(e)}
                                  showRegister={e=>this.fromRedirect(e)}
              />
          </div>

          <div className={this.state.showLogin}>
              <Login loginPassword={this.props.loginPassword}
                         hidelogin={this.hidelogin}
                         showRegister={e=>this.fromRedirect(e)}
                         showLogin={e=>this.redirectLogin(e)}
                         adminPass={this.props.adminPass}
                        clientPass={this.props.clientPass}
                          techPass={this.props.techPass}
                        managePass={this.props.managePass}
              />
          </div>
          
       <div className="nav-wrapper cyan darken-4" id="nav-wrapper-background">
          <a href="#services" data-target="home-slide-out" className="hide-on-med-and-up sidenav-trigger right"><MdMenu style={{fontSize:'45px',marginTop:'5px'}}/></a>
                <div className="col center vertex-tag-nav">   
                  <Dropdown className="" options={{hover:true}} trigger={<img node="a" src={leftLogo} alt="ay pag buot..." className="btn-floating cyan pulse responsive_img circle vertex-tag hide-on-med-only"/>}>
                        <a href={null} onClick={this.show}>Register</a>
                        <a href={null} onClick={this.showlogin}>Login</a>
                  </Dropdown> 
                </div>

             <div className="col s12 m12 l12" style={{marginTop:'-50px'}}>
                 <ul id="nav-mobile" className="right hide-on-small-only">
                   <li className="search cyan darken-2" style={{width:'auto'}}>
                     <div className="search-wrapper" style={{width:'auto'}}>
                       <input id="search" type="search" className="item-search browser-default cyan" placeholder="Search here"/><MdSearch style={{fontSize:'25px'}} className="search-icon left" />
                     </div>   
                   </li>
                    <li className="cyan darken-2">
                        <Link className="remove-hover" to="/"><i className="material-icons small"><MdDashboard style={{marginTop:'10px'}} /></i></Link>
                    </li>
                    <li className="hide-on-small-only ldevice cyan darken-2">
                       <DropdownLink id="target-link-device" node="a" className="btn waves-effect waves-riffle btn-device cyan" name="Product">
                         <Link to="/productpage" >Devices</Link>
                         {/*<Link to="/add-form" >add item</Link>*/}
                         {/*<Link to="/customer-home" >Customer Link </Link>*/}
                         <Link to="/servicescontent" >Services</Link>
                       </DropdownLink>
                    </li>
                    <li className="hide-on-small-only  lsecurity cyan darken-2">
                    <DropdownLink id="Dropdown-signup" node="button" className="btn waves-effect waves-riffle btn-device cyan" name="Sign in">
                        <a href={null} onClick={this.show}>Register</a>
                        <a href={null} onClick={this.showlogin}>Login</a>
                    </DropdownLink>    
                    </li>
                    {/*<li className="cyan darken-2">
                         <i className="material-icons tiny"><img alt="ay pag buot" id="right-logo" src={rightLogo} className="circle right-logo-icon" width="30" height="30" /><MdArrowDropDown /></i>
                    </li>*/}
                 </ul>
             </div>

             <div className=" col s6 m3 l3 hide-on-med-and-up" style={{backgroundColor:'transparent'}}> {/*show-on-small*/}
                <h6 className="our-services">Vertex Solution</h6>
             </div>

            <div className=" col s12" style={{backgroundColor:'transparent'}}> {/*show-on-medium-only */}

                   <div className="col m6 l6 hide-on-small-only">
                       <h5 className="our-services">Vertex Solution</h5>
                   </div>

                   <div className="col s12 m6 l6">
                      <div className="col s12 center show-on-large" style={{marginTop:'-5px'}}>{/*show-on-large*/}
                         <h4 className="our-services">Our Services</h4>
                      </div>

                    {/*  <div className="col s12 center hide-on-med-and-down" >
                         <h5 className="our-services">Our Services</h5>
                      </div>*/}
{/*
                      <div className="col s12 center show-on-med-only" >
                         <h5 className="our-services">Our Services</h5>
                      </div>*/}
                   </div>

            </div> 
            
       </div>

  </nav>
                  <ul id="dropdown-target-list" className="dropdown-content hide-on-large-only">
                       <li><a href="#!" className="dropdown-trigger" data-target="dropdown-link"><i className="material-icons right drop-down-icon-sub-device">arrow_drop_down</i>Devices</a></li>
                       <li className="divider"></li>
                       <li><a href="#!" className="dropdown-trigger" data-target="drop-down-target-sub-security-link"><i className="material-icons right drop-down-icon-sub-device">arrow_drop_down</i>Security</a></li>
                       <li className="divider"></li>
                       <li><a href="#!" className=""><i className="material-icons right drop-down-icon-sub-device">arrow_drop_down</i>Survelance</a></li>
                       <li className="divider"></li>
                       <li><a href="#!" className=""><i className="material-icons right drop-down-icon-sub-device">arrow_drop_down</i>Scalability</a></li>
                  </ul>
             
                   <ul id="dropdown-link" className="dropdown-content">
                    <li className="divider"></li>
                    <li><a href="#!" id="sub-biometric">Biometrics</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">IP CAM</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">turns style</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Parktron</a></li>
                     <li className="divider"></li>
                    <li><a href="#!">Aboites</a></li>
                     <li className="divider"></li>
                    <li><a href="#!">Concentrix</a></li>
                     <li className="divider"></li>
                    <li><a href="#!">Face Rrecognition</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">360 degress</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Parktron</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Globe</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">AXA</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Tata Consultancy</a></li>
                  </ul>
                
                  <ul id="drop-down-target-sub-security-link" className="dropdown-content">
                    <li className="divider"></li>
                    <li><a href="#!">Bio Star</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Lenel</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Genetic</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">ICT</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Fascility Commander</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">turns style</a></li>
                  </ul>
                
                  <ul id="dropdown-target-devices" className="dropdown-content">
                    <li className="divider"></li>
                    <li><a href="#biometrics" id="biometrics">Biometrics</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">IP CAM</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">turns style</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Biometrics</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">IP CAM</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">turns style</a></li>
                  </ul>
              
                 <ul id="home-slide-out" className="collapsible sidenav">
                    <li><a href="#!" className="collapsible-header waves-effect waves-ripple cyan"><i className="material-icons">pages</i>Devices</a>
                        <div className="collapsible-body">
                            <ul>                                        
                                <li>
                                  <a href="#biometrics" id="sidenav-link-biometrics">Biometrics</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li><a href="#!" className="collapsible-header  waves-effect waves-ripple cyan darken-4"><i className="material-icons pages"></i>Security</a>
                        <div className="collapsible-body">
                            <ul>                                        
                                <li><a href="page-contact.html">Contact Page</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                  </ul>
               
                  <ul id="dropdown-register-from-services" className="dropdown-content cyan accent-3">
                  <div className="popup-banner">
                    <h3 className="register-with-us">Register with Us!</h3>
                    <h5 className="are-you-a-company">Be a Vertex Family serv</h5>
                    <a href="#!" className="btn waves-effect waves-ripple cyan" id="btn_register">Register</a>
                  </div>      
                  </ul>             
   </Fragment>
 );
 }
}