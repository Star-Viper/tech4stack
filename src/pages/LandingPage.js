import React from "react";
import "./LandingPage.css";
import ContactUs from "./ContactUs";
const LandingPage = () => {
  return (
    <>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">bitPAY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          {/* <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      <div className="landing-page">
        <div className="landing-page-child" />
        <div className="landing-page-item" />
        <div className="landing-page-inner" />
        <div className="ellipse-div" />
        <div className="landing-page-child1" />

        <div className="man-working-on-nft-blockchain" />
        <div className="home1-rect">
          <div className="home1-rect-child" />
          <div className="no-more-waiting">
            No more waiting for bank confirmations – enjoy swift and efficient
            transactions that keep your revenue flowing seamlessly
          </div>
          <b className="revolutionize-transactions-wit">
            Revolutionize Transactions with Blockchain QR Code Technology!
          </b>
          <div className="swift-simple-secure">Swift Simple Secure</div>
          <div className="button">
            <div className="button-child" />
            <div className="experience-it">Experience it</div>
          </div>
        </div>
        <img
          className="man-working-on-nft-blockchain1"
          alt=""
          src="/man-working-on-nft-blockchain--1281x1191@2x.png"
        />
        <div className="landing-page-child2" />
      </div>
    </>
  );
};

export default LandingPage;
