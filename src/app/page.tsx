"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumSizeLargeTitles"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Portfolio",
          id: "#portfolio",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ktd9k9"
      logoAlt="SR Infotech Logo"
      brandName="SR Infotech"
      button={{
        text: "WhatsApp Us",
        href: "https://wa.me/917231944840",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardCarousel
      background={{
        variant: "plain",
      }}
      title="SR Infotech: Your Partner in Digital Transformation"
      description="Unlock unparalleled growth with our cutting-edge Bulk SMS, WhatsApp Marketing, and comprehensive Digital Solutions. We empower businesses to connect, engage, and thrive in the digital age."
      tag="Innovate. Engage. Grow."
      tagAnimation="blur-reveal"
      buttons={[
        {
          text: "Explore Services",
          href: "#services",
        },
        {
          text: "Get a Quote",
          href: "#contact",
        },
      ]}
      buttonAnimation="blur-reveal"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-blue-background-with-many-small-details-generative-ai_169016-30142.jpg",
          imageAlt: "Digital marketing dashboard with neon green accents",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-innovative-idea-concept_52683-76709.jpg",
          imageAlt: "Abstract data flow and connectivity with neon green circuits",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/person-using-smartphone-his-automated-home_23-2149036912.jpg",
          imageAlt: "Mobile and computer screens displaying neon green marketing campaigns",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fiber-optics-lights-abstract-background_23-2148241280.jpg",
          imageAlt: "People interacting with digital services, connected by neon green lines",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-smartwatch-hologram-presentation-wearable-gadget_53876-97061.jpg",
          imageAlt: "Hand interacting with holographic interface displaying neon green analytics",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-tracking-concept_23-2151983332.jpg",
          imageAlt: "Glowing network of communication nodes with neon green light trails",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      title="Empowering Your Digital Presence"
      description="At SR Infotech, we are dedicated to revolutionizing how businesses interact with their audience. Our expertise spans advanced messaging solutions and bespoke digital strategies, all designed to deliver measurable results and foster sustainable growth. Partner with us to transform your vision into digital reality."
      bulletPoints={[
        {
          title: "Innovative Solutions",
          description: "Leveraging the latest technology for maximum impact and efficiency.",
        },
        {
          title: "Client-Centric Approach",
          description: "Tailored strategies that align with your unique business goals.",
        },
        {
          title: "Proven Results",
          description: "Driving tangible growth and higher engagement for our partners.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/black-business-employee-browses-social-media-webpages-her-phone_482257-119987.jpg"
      imageAlt="Modern tech workspace with neon green accents"
      mediaAnimation="opacity"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Bulk SMS Services",
          description: "Reach thousands instantly with our reliable and cost-effective bulk SMS solutions. Perfect for promotions, alerts, and transactional messages.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendewring-cryptocurency-distribution-concept_23-2149901294.jpg",
          imageAlt: "Abstract graphic of bulk SMS messages",
        },
        {
          title: "WhatsApp Marketing",
          description: "Engage your audience personally and effectively through targeted WhatsApp campaigns. Drive conversions with direct, interactive communication.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-headset-talking-using-laptop_74855-2592.jpg",
          imageAlt: "WhatsApp chat bubbles with neon green glow",
        },
        {
          title: "Digital Solutions",
          description: "Comprehensive strategies including SEO, social media, web development, and more. We build your end-to-end digital ecosystem.",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-background-with-connecting-dots-lines_1048-5675.jpg",
          imageAlt: "Interconnected digital network with neon green nodes",
        },
      ]}
      title="Our Core Digital Services"
      description="From direct communication to comprehensive online strategies, SR Infotech provides the tools and expertise you need to succeed in today's competitive landscape."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Mobile App Development",
          price: "Custom Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169854.jpg",
          imageAlt: "Sleek UI design for a mobile app project",
        },
        {
          id: "p2",
          name: "Responsive Web Design",
          price: "Custom Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-office_23-2151345406.jpg",
          imageAlt: "Elegant website design mockup on a laptop",
        },
        {
          id: "p3",
          name: "Data Analytics & Reporting",
          price: "Custom Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hand-holding-futuristic-screen_23-2149126945.jpg",
          imageAlt: "Digital marketing analytics dashboard",
        },
        {
          id: "p4",
          name: "Brand Identity Creation",
          price: "Custom Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/real-life-zodiac-collage_23-2149588405.jpg",
          imageAlt: "Creative branding identity design",
        },
        {
          id: "p5",
          name: "E-commerce Platform Setup",
          price: "Custom Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-woman-paying-formal-wear-with-mobile-phone-nfc-pos-terminal-buying-stylish-clothes-accessories-modern-boutique-shopper-standing-retail-store-counter-desk-close-up_482257-63317.jpg",
          imageAlt: "E-commerce website UI design",
        },
        {
          id: "p6",
          name: "IT Infrastructure & Cloud",
          price: "Custom Quote",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-poker-faced-man-outdoors_23-2148283901.jpg",
          imageAlt: "Server racks and data center infrastructure",
        },
      ]}
      title="Our Digital Solutions Portfolio"
      description="Explore a selection of our successful projects, showcasing our expertise in delivering impactful digital experiences for businesses across various industries."
    />
  </div>

  <div id="trusted-partners" data-section="trusted-partners">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Global Tech Solutions",
        "Innovate Labs",
        "Digital Growth Agency",
        "Data Insights Corp",
        "E-Store Pro",
        "CloudNet Systems",
        "SecureCode Technologies",
      ]}
      title="Trusted by Industry Leaders"
      description="Our commitment to excellence has earned us the trust of diverse businesses seeking cutting-edge digital solutions."
      showCard={false}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="auto"
      testimonials={[
        {
          id: "1",
          name: "Priya Sharma",
          role: "CEO",
          company: "Connect Innovations",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/serious-smart-businesswoman-thinking-propensity_1262-5545.jpg",
          imageAlt: "Priya Sharma, CEO of Connect Innovations",
        },
        {
          id: "2",
          name: "Rahul Verma",
          role: "CTO",
          company: "TechStream Solutions",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-working-as-team-company_23-2149136872.jpg",
          imageAlt: "Rahul Verma, CTO of TechStream Solutions",
        },
        {
          id: "3",
          name: "Anjali Gupta",
          role: "Marketing Director",
          company: "BrandUp Agency",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/successful-financier-showing-smartphone_1262-3117.jpg",
          imageAlt: "Anjali Gupta, Marketing Director of BrandUp Agency",
        },
        {
          id: "4",
          name: "Vikram Singh",
          role: "Product Manager",
          company: "Apex Digital",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-portrait-posing-loft-modern-space_158595-5362.jpg",
          imageAlt: "Vikram Singh, Product Manager of Apex Digital",
        },
        {
          id: "5",
          name: "Divya Rao",
          role: "Founder",
          company: "Synergy Startups",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-working-late-office_1303-27095.jpg",
          imageAlt: "Divya Rao, Founder of Synergy Startups",
        },
      ]}
      title="What Our Clients Say"
      description="Hear directly from businesses who have experienced transformative results and unparalleled support from SR Infotech."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Get in Touch"
      tagAnimation="blur-reveal"
      title="Ready to Elevate Your Digital Presence?"
      description="Connect with SR Infotech today to discuss your project. Our experts are here to provide tailored solutions that drive real results. Let's build your digital success story together."
      buttons={[
        {
          text: "Call Us Now",
          href: "tel:+917231944840",
        },
        {
          text: "Email Us",
          href: "mailto:officialsrinfotech@gmail.com",
        },
        {
          text: "Message on WhatsApp",
          href: "https://wa.me/917231944840",
        },
      ]}
      buttonAnimation="blur-reveal"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Bulk SMS Services",
              href: "#services",
            },
            {
              label: "WhatsApp Marketing",
              href: "#services",
            },
            {
              label: "Digital Solutions",
              href: "#services",
            },
            {
              label: "Portfolio",
              href: "#portfolio",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Email",
              href: "mailto:officialsrinfotech@gmail.com",
            },
            {
              label: "WhatsApp",
              href: "https://wa.me/917231944840",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/Official_srinfotech",
            },
          ],
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ktd9k9"
      logoAlt="SR Infotech Logo"
      logoText="SR Infotech"
      copyrightText="© 2024 SR Infotech. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
