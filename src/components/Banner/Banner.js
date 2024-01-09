import styled from "styled-components";
import bannerImage from "../../assets/images/banner.jpg";

function Banner(props) {
  return (
    <BannerContainer>
      <div className="bannerItem">
        <FlippedImage src={bannerImage} alt="Banner" />
      </div>

      <div className="bannerText">
        <h1 className="heading">Discover the limitless world of entertainment</h1>
        <p className="textIntro">
          "Enjoy watching movies anytime, anywhere, on your smartphone, tablet, laptop, or TV!"
        </p>
      </div>
      <div className="overlayBottom"></div>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  position: relative;
  color: white;
  overflow: hidden; // Add this line

  .bannerItem {
    img {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }
  }

  .bannerText {
    position: absolute;
    top: 230px;
    left: 80px;
    z-index: 1;
    @media only screen and (max-width: 900px) {
      top: 220px;
      left: 25px;
    }
    @media only screen and (max-width: 600px) {
      top: 200px;
      left: 12px;
    }
    .heading {
      max-width: 700px;
      width: 100%;
      font-size: 46px;
      transition: all 0.3s ease;
      @media only screen and (max-width: 800px) {
        font-size: 40px;
      }
      @media only screen and (max-width: 600px) {
        font-size: 32px;
      }
    }
    .textIntro {
      max-width: 600px;
      width: 100%;
      line-height: 1.3;
      padding-top: 22px;
      font-size: 18px;
      @media only screen and (max-width: 800px) {
        max-width: 530px;
        font-size: 16px;
      }
      @media only screen and (max-width: 600px) {
        max-width: 430px;
        font-size: 14px;
      }
    }
  }
  .overlayBottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15, 15, 15, 0.6) 40%,
      rgb(17, 17, 17),
      rgb(17, 17, 17)
    );
  }
`;

// Rotate the image to the right
const FlippedImage = styled.img`
  transform: scaleX(-1);
`;

export default Banner;
