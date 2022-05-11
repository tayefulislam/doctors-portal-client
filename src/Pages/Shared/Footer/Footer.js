import React from 'react';

const Footer = () => {
    return (

        <>
            <footer className="footer grid grid-cols-1 lg:grid-cols-3 px-10 text-center">
                <div className=" text-center">
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>


            </footer>
            <div class="text-center mt-5 mb-2">

                <p>Copyright 2022 All Rights Reserved</p>
            </div>

        </>
    );
};

export default Footer;