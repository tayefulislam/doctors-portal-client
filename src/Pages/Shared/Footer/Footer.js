import React from 'react';
import footer from '../../../assets/images/footer.png'
// import footer from '../../../assets/images/people1.png'
const Footer = () => {

    const date = new Date().getFullYear()
    return (

        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} class="p-20">
            <div className='footer grid-cols-1 lg:grid-cols-3 text-lg'>
                <div>
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
            </div>


            <div className='text-center mt-10'>
                <p>Copyright © {date} - All right reserved by Doctors Portal</p>
            </div>

        </footer>


    );
};

export default Footer;