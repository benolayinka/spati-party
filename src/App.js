import React, { Component } from 'react';
import telegram from './telegram.svg'
import email from './email.svg'
import aubergine from './Aubergine-big.png'
import './App.css';
import background from './static/images/background.jpg'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const bgStyle = {
  width:'100%', 
  height:'100%',
  objectPosition: '50% 50%',
  objectFit: 'cover',
  position:'absolute',
  top:'0',
  left:'0',
  zIndex:'0',
  transition:'opacity 1s cubic-bezier(.33,0,.2,1)',
}

function Background(props) {
  return (
        <div>
          <img style={bgStyle} className="Background loaded" src={props.src} data-src={props.src} data-image={props.src} data-image-focal-point="0.5,0.5" alt="spatiparty.jpg" data-use-advanced-positioning="true" data-load="false" data-position-mode="objectPosition" data-parent-ratio="1.3" data-image-resolution="2500w"/>
        </div>
        );
}

const scrimStyle = {
  position:'absolute',
  top:'0',
  left:'0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgb(64, 139, 108)',
  opacity: '0.3',
  zIndex: '1',
  transition: 'background 170ms ease-out,opacity 170ms ease-out',
}

function Scrim(props) {
  return (
      <div style={scrimStyle} className="scrim"></div>
    )
}

const TelegramIcon = function(props){
  return (
    <div className = "icon-wrapper">
      <a href="https://t.me/spatiparty" target="_blank">
        <img src={telegram} className="Telegram" alt="telegram" />
      </a>
    </div>
  );
}

const pointerStyle = {
  cursor:'pointer',
}

const EmailIcon = function(props){
  return (
    <div className = "icon-wrapper">
        <img src={email} className="Email" alt="email" style={pointerStyle} onClick={props.onClick}/>
    </div>
  );
}

class ModalButtons extends Component {
    constructor(...args) {
      super(...args);
      this.state = { showEmail: false};
      this.onClick = () => this.setState({ showEmail: true });
    }
    render() {
      return (
        <Container>
          <Row style={{height:'120px'}}>
            <Col><h2>telegram</h2><TelegramIcon/></Col>
            <Col><h2>email</h2><EmailIcon onClick={this.onClick}/></Col>
          </Row>
          <Row style={{height:'100px'}}>
          <Col>
            {this.state.showEmail && (
                  <MailChimp/>
              )}
            </Col>
          </Row>
        </Container>
    );
  }
}

const hiddenStyle = {
  display:'none',
}

const posStyle = {
  position:'absolute',
  left:'-5000px',
}

const flexStyle = {
  display:'inline-grid',
  justifyContent: 'space-around',
}

const MailChimp = function()
{
  return (
    <div id="mc_embed_signup">
      <form action="https://party.us20.list-manage.com/subscribe/post?u=e00142d1ff08fb74ba4f294cf&amp;id=5638ffc338" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
        
      <div className="mc-field-group flex-container" style={flexStyle}>
        <label htmlFor="mce-EMAIL">email</label>
        <input type="email" name="EMAIL" className="required email" id="mce-EMAIL"/>
      </div>
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={hiddenStyle}></div>
          <div className="response" id="mce-success-response" style={hiddenStyle}></div>
        </div>
          <div style={posStyle} aria-hidden="true"><input type="text" name="b_e00142d1ff08fb74ba4f294cf_5638ffc338" tabIndex="-1"/></div>
          <div className="clear"><input type="submit" value="get dat" name="getdat" id="mc-embedded-subscribe" className="btn"/></div>
          </div>
      </form>
    </div>
    );
}

const modalStyle = function() {
  return {
    zIndex: 1040,
    backgroundColor: 'rgba(64, 139, 108,.8)',
    color: 'white',
    border: '0px solid #e5e5e5',
    textAlign: 'center',
  };
};

class VerticallyCenteredModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        style={modalStyle()}
        size="sm"
        aria-labelledby="modal-label"
        centered
      >
        <Modal.Body>
          <h2>how u wanna holla at späti party?</h2>
          <p>
          </p>
          <ModalButtons/>
        </Modal.Body>
      </Modal>
    );
  }
}

const coverHeading = {
  marginBottom: '2.5rem',
  display: 'inline-block',
  fontSize:'50px',
}

class Main extends Component {
  constructor(...args) {
    super(...args);
    this.state = { modalShow: false };
  }
  render() {
  let modalClose = () => this.setState({ modalShow: false });
  return (
    <main role="main" className="inner cover">
      <h1 style = {coverHeading}>excuse me where da späti party at?</h1>
      <p className="lead">
        <Button variant="primary" onClick={() => this.setState({ modalShow: true })}>
            Get da Location
          </Button></p>
          <VerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
          />
    </main>
  );
  }
}

const fbIcon = {
  backgroundSize:'48px 48px',
  preserveAspectRatio:"none",
}

const FacebookIcon = function(props){
  return (
      <a href="https://www.facebook.com/spaeti180/" target="_blank">
      <svg style={fbIcon} className="svg-mask" fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="48px" height="48px">
          <defs>
            <clipPath id="circle-mask">
              <circle cx="32" cy="32" r="32" />
            </clipPath>
          </defs>
          <g>
          <path clip-path="url(#circle-mask)" d="M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z"></path>
          </g>
        </svg>
        </a>
  );
}

const footerStyle = {
  position: 'absolute',
  bottom:'0',
  marginBottom:'20px',
  width: '95%',
  justifyContent: 'center',
}

function Footer() {
  return (
    <footer style={footerStyle} className="mastfoot mt-auto">
      <div style={{marginBottom:'20px'}}>
      <img src={aubergine} width='100px' className="App-logo" alt="logo" />
      </div>
        <div className="inner">
          <FacebookIcon/>
        </div>
      </footer>
  )
}

class App extends Component {

  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    return (
    <div className="App">
      <div className="bg">
      <Background src={background}/>
      <Scrim/>
      </div>
      <div className="fg cover-container d-flex h-100 p-3 mx-auto flex-column">
        <Main/>
        <Footer/>
      </div>
    </div>
    );
  }
}

export default App;
