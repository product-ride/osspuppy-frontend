import styled from 'styled-components';

const FooterContainer = styled.div`
    .flex;
    .bg-black;
    .text-white;
    .flex-col;
    .lg:flex-row;
    .justify-between;
    .items-center;
    .p-8;
    a {
        color: #FA4D3D;
    }
`;

const P = styled.p`
    .w-full;
    .lg:w-8/12;
`

const PRLogo = styled.img``
const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <PRLogo src="/pr_logo.svg" alt="Product Ride"/>
                <P>Made in love on OSS from <a href="https://productride.com/" target="_blank">Product Ride</a>. 
                 Product Ride is a OSS first organization, aiming to trasnform the digital space</P>
            </div>
            <div>
                Find all our OSS projects <a href="https://github.com/product-ride" target="_blank">here</a>
            </div>
        </FooterContainer>
    )
}

export default Footer;