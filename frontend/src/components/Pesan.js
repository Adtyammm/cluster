import React from "react";
import {Link} from "react-router-dom";
import "../style/psn.css";
import Sidebar from "./sidebar";

class Pesan extends React.Component {
  render() {
    return (
      <div className="body">
            <div class="menu">
            <Link to={"/Dashboard"} class="back"><i class="fa fa-angle-left"></i> <img src="https://cdn-icons-png.flaticon.com/512/8139/8139323.png" draggable="false"/></Link>
            <div className="foto">
            <img src="./chad.png"></img>
            </div>
            <div class="name">Random chat</div>
              <div class="name">Random chat</div>
              <div class="members">
                <b>You</b>, Marga, Charo & Brotons
              </div>
            </div>
            <ol class="chat">
              <li class="other">
                <div class="msg">
                  <div class="user">
                    Marga<span class="range admin">Admin</span>
                  </div>
                  <p>Dude</p>
                  <p>
                    Want to go dinner? <emoji class="pizza"></emoji>
                  </p>
                  <time>20:17</time>
                </div>
              </li>
              <li class="self">
                <div class="msg">
                  <p>Puff...</p>
                  <p>
                    I'm still doing the Góngora comment...{" "}
                    <emoji class="books"></emoji>
                  </p>
                  <p>Better other day</p>
                  <time>20:18</time>
                </div>
              </li>
            </ol>
            <div class="typezone">
            
              <form className="fr">
              <input type="submit" class="krmw" value="" />
                <textarea className="area" type="text" placeholder="Say something"></textarea>
                
              </form>
              
              <div class="emojis"></div>
            </div>
          </div>
    );
  }
}

export default Pesan;
