import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { faF } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">
                            Copyright &copy; 2022 All Rights Reserved by{" "}
                            <a href="https://croybd.com">CroyBD</a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
