import React from "react";
import "../styles/GiftCard.css";
import giftCardImage from "../Images/giftcardbanner.png";
import eGiftVoucherImage from "../Images/egiftvoucher.png";
import giftCard from "../Images/giftcard.png";

function GiftCards() {
  return (
    <div style={{background: 'linear-gradient(120deg, #f8fafc 60%, #e0e7ff 100%)', minHeight: '100vh', paddingBottom: '2rem'}}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '2rem 0'}}>
        <img src={giftCardImage} alt="Gift Card" style={{maxWidth: '100%', borderRadius: '1.5rem', boxShadow: '0 2px 16px rgba(13,72,136,0.10)'}} />
      </div>
      <p style={{ fontWeight: 'bolder', color: '#0d4888', fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
        GIFT DELICIOUS MOMENTS WITH DOMINO'S PIZZA GIFTING SOLUTIONS
      </p>
      <div className="gift-cards-container" style={{display: 'flex', justifyContent: 'center', gap: '2rem'}}>
        <div className="gift-card-content" style={{
          background: '#fff',
          borderRadius: '1.5rem',
          boxShadow: '0 2px 16px rgba(13,72,136,0.10)',
          padding: '2rem',
          maxWidth: '400px',
          textAlign: 'center'
        }}>
          <img src={eGiftVoucherImage} alt="E-Gift Voucher" style={{maxWidth: '100%', borderRadius: '1rem', marginBottom: '1rem'}} />
          <h4 style={{color: '#0d4888', fontWeight: 700}}>E-GIFT VOUCHER</h4>
          <p style={{color: '#555'}}>Confused thinking about what to gift your family & friends on every festival? Be it any occasion, bring a smile on everyone's face by gifting them a Domino's Pizza E-Gift Voucher. This can be redeemed on the Mobile Site or the Mobile App.</p>
        </div>
        <div className="gift-card-content" style={{
          background: '#fff',
          borderRadius: '1.5rem',
          boxShadow: '0 2px 16px rgba(13,72,136,0.10)',
          padding: '2rem',
          maxWidth: '400px',
          textAlign: 'center'
        }}>
          <img src={giftCard} alt="Gift Card" style={{maxWidth: '100%', borderRadius: '1rem', marginBottom: '1rem'}} />
          <h4 style={{color: '#0d4888', fontWeight: 700}}>GIFT CARD</h4>
          <p style={{color: '#555'}}>Discover the joy of gifting with Domino's Pizza Gift Card. Gift Cards are redeemable at all the Domino's Pizza outlets, Mobile Site & Mobile App & can be easily reloaded whenever anyone is hungry.</p>
        </div>
      </div>
    </div>
  );
}

export default GiftCards;

