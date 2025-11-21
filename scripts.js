window.addEventListener("DOMContentLoaded", () => {
  const navbar =
    document.querySelector("#mainNav") || document.querySelector(".navbar");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.getElementById("navbarResponsive");

  // Navbar shrink function (toggle CSS class or inline styles on scroll)
  const navbarShrink = () => {
    if (!navbar) return;
    if (window.scrollY === 0) {
      navbar.classList.remove("navbar-shrink");
      if (navbar.style) {
        navbar.style.padding = "8px 0";
        navbar.style.boxShadow = "none";
      }
    } else {
      navbar.classList.add("navbar-shrink");
      if (navbar.style) {
        navbar.style.padding = "8px 0";
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
      }
    }
  };

  // Initial shrink on page load
  navbarShrink();

  // Shrink navbar on scroll event
  document.addEventListener("scroll", navbarShrink);

  // Collapse responsive navbar when a nav link is clicked (if toggler shown)
  const responsiveNavItems = Array.from(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });

  // IntersectionObserver animation for elements when they come into view
  const animatedElements = document.querySelectorAll(
    ".value-card, .product-card, .testimonial-card"
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );
  animatedElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });

  // Smooth scroll for anchor links including handling # and #top
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});

// ChatBot
// ChatBot
// ChatBot

document.addEventListener("DOMContentLoaded", function () {
  // DOM elements
  const chatbotButton = document.querySelector(".chatbot-button");
  const chatbotWindow = document.querySelector(".chatbot-window");
  const chatbotClose = document.querySelector(".chatbot-close");
  const chatbotSend = document.querySelector(".chatbot-send");
  const chatbotInput = document.querySelector(".chatbot-input input");
  const chatbotMessages = document.querySelector(".chatbot-messages");
  const quickReplies = document.querySelectorAll(".chatbot-quick-reply");

  // Toggle chat window
  chatbotButton.addEventListener("click", function () {
    chatbotWindow.classList.toggle("active");
  });

  chatbotClose.addEventListener("click", function () {
    chatbotWindow.classList.remove("active");
  });

  // Send message function
  function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message === "") return;

    // Add user message
    addMessage(message, "user");
    chatbotInput.value = "";

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = generateResponse(message);
      addMessage(botResponse, "bot");
    }, 600);
  }

  // Send button event
  chatbotSend.addEventListener("click", sendMessage);

  // Send message on Enter key
  chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Quick replies
  quickReplies.forEach((reply) => {
    reply.addEventListener("click", function () {
      const text = this.textContent;
      addMessage(text, "user");

      // Simulate bot response after a short delay
      setTimeout(() => {
        const botResponse = generateResponse(text);
        addMessage(botResponse, "bot");
      }, 600);
    });
  });

  // Add message to chat
  function addMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");
    messageElement.classList.add(sender + "-message");
    messageElement.textContent = text;

    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Comprehensive knowledge base for Pharmacia
  const knowledgeBase = {
    // Professional Greetings
    greetings: {
      patterns: [
        "hello",
        "hi",
        "hey",
        "good morning",
        "good afternoon",
        "good evening",
        "greetings",
        "hello there",
        "hi there",
        "hey there",
        "welcome",
        "hello pharmacia",
        "hi pharmacia",
        "good day",
        "pleasure to meet you",
      ],
      responses: [
        "Welcome to Pharmacia Kuwait. How may we assist you with your pharmaceutical and medical supply needs today?",
        "Thank you for contacting Pharmacia. We are here to provide you with comprehensive information about our premium pharmaceutical products and services.",
        "Good day. Welcome to Pharmacia Kuwait, your trusted partner in healthcare solutions for over 25 years. How can we help you today?",
      ],
    },

    // Company Information - Comprehensive
    about: {
      patterns: [
        "what is pharmacia",
        "about pharmacia",
        "company information",
        "tell me about pharmacia",
        "who is pharmacia",
        "company background",
        "about your company",
        "pharmacia overview",
        "company profile",
        "what does pharmacia do",
        "business information",
        "corporate information",
      ],
      responses: [
        "Pharmacia is a distinguished pharmaceutical and medical supplies company headquartered in Kuwait with over 25 years of experience in delivering premium-quality medicines and medical supplies. Our commitment is to enhance well-being through trusted healthcare products coupled with compassionate and personalized service.",
        "Established in 1998, Pharmacia has been a leading provider of pharmaceutical products and medical supplies in Kuwait and beyond. We specialize in cardiovascular medications, diabetes care, vaccines, wound care supplies, mental health aids, and nutrition supplements, all meeting the highest quality standards.",
      ],
    },

    // Location & Contact Information
    headquarters: {
      patterns: [
        "where is pharmacia",
        "headquarters",
        "location",
        "where are you located",
        "your address",
        "physical location",
        "office location",
        "visit us",
        "come to your office",
        "where to find you",
        "company address",
        "main office",
        "corporate address",
        "kuwait location",
      ],
      responses: [
        "Pharmacia is headquartered in Kuwait at Building No. 12, Block 8, Shuwaikh Industrial Area, Kuwait City, Kuwait. We welcome professional visits and consultations.",
        "Our main office is located in the Shuwaikh Industrial Area, Kuwait City: Building No. 12, Block 8. This strategic location allows us to efficiently serve our clients across the region.",
      ],
    },

    contact: {
      patterns: [
        "contact",
        "how to contact",
        "get in touch",
        "reach us",
        "contact information",
        "phone number",
        "email address",
        "call us",
        "email us",
        "contact details",
        "customer service",
        "support contact",
        "sales contact",
        "general inquiry",
      ],
      responses: [
        "You can contact Pharmacia through: Phone: +965 1234 5678, Email: info@pharmacia.com, or visit our headquarters at Building No. 12, Block 8, Shuwaikh Industrial Area, Kuwait City, Kuwait.",
        "For inquiries, please contact us at: Telephone: +965 1234 5678, Email: info@pharmacia.com, Address: Building No. 12, Block 8, Shuwaikh Industrial Area, Kuwait City, Kuwait.",
      ],
    },

    // Products - Comprehensive Coverage
    products: {
      patterns: [
        "products",
        "what products",
        "offer",
        "medicines",
        "medical supplies",
        "what do you sell",
        "product range",
        "your products",
        "offerings",
        "medical products",
        "pharmaceutical products",
        "product portfolio",
        "all products",
        "complete products",
        "what items do you have",
      ],
      responses: [
        "Pharmacia offers a comprehensive range of pharmaceutical products including: Cardiovascular Medications, Diabetes Care Supplies, Vaccines & Immunizations, Mental Health Aids, Wound Care Supplies, and Nutrition Supplements. All our products meet WHO standards and are rigorously tested for quality and safety.",
        "Our product portfolio includes: Cardiovascular Medications for heart conditions, Diabetes Care supplies for blood sugar management, WHO-approved Vaccines, Mental Health Aids for psychological wellness, Wound Care Supplies for optimal healing, and Nutrition Supplements for overall health. Each product category is designed to address specific healthcare needs with the highest quality standards.",
      ],
    },

    cardiovascular: {
      patterns: [
        "cardiovascular",
        "heart medications",
        "hypertension",
        "blood pressure",
        "heart conditions",
        "cardiovascular medications",
        "heart care",
        "blood pressure medications",
        "hypertension drugs",
        "cardio products",
      ],
      responses: [
        "Pharmacia offers premium cardiovascular medications for hypertension and heart conditions. These medications are expertly formulated to provide effective, reliable care that enhances heart health, supports healthy circulation, and promotes overall well-being with consistent quality and safety. Price starts from $24.99.",
        "Our cardiovascular medications category includes specialized drugs for hypertension and various heart conditions. These products are designed to support heart health and circulation, formulated with the highest quality standards. Starting price: $24.99.",
      ],
    },

    vaccines: {
      patterns: [
        "vaccines",
        "immunizations",
        "vaccinations",
        "who vaccines",
        "temperature controlled vaccines",
        "immunization products",
        "vaccine supplies",
        "who approved vaccines",
      ],
      responses: [
        "We provide WHO-approved vaccines equipped with advanced temperature-controlled delivery systems to ensure optimal stability and potency throughout the supply chain. These vaccines guarantee effective immunization while maintaining the highest standards of quality and safety. Price starts from $39.99.",
        "Pharmacia's vaccine portfolio includes WHO-certified immunizations with advanced temperature control systems to maintain efficacy throughout delivery. Our vaccines meet international quality standards for safe and effective immunization. Starting price: $39.99.",
      ],
    },

    wound_care: {
      patterns: [
        "wound care",
        "bandages",
        "dressings",
        "wound treatment",
        "wound care supplies",
        "sterile dressings",
        "medical bandages",
        "wound healing products",
        "advanced wound care",
      ],
      responses: [
        "We offer premium wound care supplies including sterile dressings, durable bandages, and advanced wound care treatment products designed to promote optimal healing, accelerate tissue recovery, and effectively prevent infection. Price starts from $12.99.",
        "Our wound care product line features sterile dressings, durable bandages, and advanced treatment solutions meticulously designed to promote optimal healing and prevent infections. These supplies are essential for proper wound management. Starting price: $12.99.",
      ],
    },

    diabetes: {
      patterns: [
        "diabetes",
        "diabetes care",
        "blood sugar",
        "glucose",
        "diabetes supplies",
        "diabetes medications",
        "blood sugar control",
        "diabetes management",
        "glucose monitoring",
      ],
      responses: [
        "Yes, we provide comprehensive diabetes care supplies and specialized medications designed to ensure accurate and consistent blood sugar control, support significantly improved health outcomes, and greatly enhance overall quality of life for patients managing diabetes. Price starts from $29.99.",
        "Pharmacia's diabetes care portfolio includes specialized medications and supplies for effective blood sugar management. These products are designed to support improved health outcomes and quality of life for diabetes patients. Starting price: $29.99.",
      ],
    },

    mental_health: {
      patterns: [
        "mental health",
        "mental wellness",
        "emotional stability",
        "psychological health",
        "mental health aids",
        "psychological supplements",
        "emotional wellness",
        "mental health supplements",
      ],
      responses: [
        "We offer supportive aids and supplements formulated with advanced ingredients to promote optimal mental wellness, significantly enhance emotional stability, and holistically support comprehensive psychological health along with improved cognitive function and resilience. Price starts from $34.99.",
        "Our mental health aids category includes specialized supplements and products designed to support psychological wellness, emotional stability, and cognitive function. These formulations promote comprehensive mental health support. Starting price: $34.99.",
      ],
    },

    supplements: {
      patterns: [
        "nutrition",
        "supplements",
        "vitamins",
        "minerals",
        "nutritional",
        "nutrition supplements",
        "health supplements",
        "vitamins and minerals",
        "nutritional products",
      ],
      responses: [
        "We provide high-quality vitamins, minerals, and essential nutrients meticulously formulated with advanced bioavailable ingredients to support balanced nutrition, significantly enhance overall health, and effectively promote sustained long-term wellness and vitality. Price starts from $19.99.",
        "Pharmacia's nutrition supplements include high-quality vitamins, minerals, and essential nutrients designed to support balanced nutrition and promote long-term wellness. These supplements are formulated with bioavailable ingredients for optimal absorption. Starting price: $19.99.",
      ],
    },

    // Pricing Information
    pricing: {
      patterns: [
        "price",
        "pricing",
        "cost",
        "how much",
        "price list",
        "product pricing",
        "cost of products",
        "price range",
        "affordable",
        "expensive",
        "budget",
        "pricing structure",
      ],
      responses: [
        "Pharmacia offers competitive pricing for all our premium pharmaceutical products while maintaining the highest quality standards. Our pricing reflects the quality and reliability of our products. Specific pricing varies by product category: Cardiovascular from $24.99, Vaccines from $39.99, Wound Care from $12.99, Diabetes Care from $29.99, Mental Health Aids from $34.99, and Nutrition Supplements from $19.99.",
        "We provide value-based pricing for our pharmaceutical solutions. Product pricing ranges are: Cardiovascular Medications starting at $24.99, Vaccines from $39.99, Wound Care Supplies from $12.99, Diabetes Care products from $29.99, Mental Health Aids from $34.99, and Nutrition Supplements from $19.99. Contact our sales team for detailed quotations.",
      ],
    },

    // Why Choose Pharmacia Section
    why_choose: {
      patterns: [
        "why choose",
        "why pharmacia",
        "advantages",
        "benefits",
        "why select pharmacia",
        "what makes you different",
        "competitive advantage",
        "why your company",
        "strengths",
      ],
      responses: [
        "You should choose Pharmacia for our: 25+ years of experience in healthcare, Quality assured WHO-approved products, Global reach with trusted supply chain, Advanced technology and temperature-controlled systems, Expert customer support, and Strict safety & compliance standards in every shipment.",
        "Pharmacia stands out due to: Over 25 years of pharmaceutical expertise, WHO-certified quality assured products, International supply chain capabilities, Modern technology and delivery systems, Professional customer support team, and Comprehensive regulatory compliance and safety standards.",
      ],
    },

    experience: {
      patterns: [
        "experience",
        "years of experience",
        "how long",
        "industry experience",
        "25 years",
        "over 25 years",
        "established",
        "how old",
        "company history",
      ],
      responses: [
        "Pharmacia was established in 1998, bringing over 25 years of experience in the pharmaceutical industry. Our long-standing presence reflects our commitment to sustainable healthcare solutions and trusted service.",
        "With more than 25 years in the pharmaceutical industry since our establishment in 1998, Pharmacia has built extensive expertise and a reputation for reliability in healthcare solutions.",
      ],
    },

    quality_assured: {
      patterns: [
        "quality assured",
        "quality products",
        "high quality",
        "quality standards",
        "who approved",
        "quality certification",
        "product quality",
        "quality assurance",
      ],
      responses: [
        "Absolutely. All Pharmacia products are WHO-approved, rigorously tested medicines and supplies meeting the highest international standards of quality and safety. We maintain strict quality control throughout our supply chain.",
        "Yes, Pharmacia maintains the highest quality standards with WHO-certified products that undergo rigorous testing for safety and efficacy. Our quality assurance processes ensure every product meets international pharmaceutical standards.",
      ],
    },

    global_reach: {
      patterns: [
        "global reach",
        "international",
        "worldwide",
        "multiple countries",
        "international delivery",
        "global supply",
        "worldwide delivery",
        "international presence",
        "global operations",
      ],
      responses: [
        "Pharmacia has a trusted supply chain with delivery across multiple regions and countries. Our global reach ensures we can serve clients internationally while maintaining product quality and timely delivery.",
        "Yes, we operate with international capabilities, serving multiple countries and regions through our trusted supply chain network. This allows us to deliver quality pharmaceutical products worldwide.",
      ],
    },

    technology: {
      patterns: [
        "advanced technology",
        "technology",
        "innovation",
        "modern systems",
        "temperature control",
        "delivery systems",
        "automation",
        "technical systems",
      ],
      responses: [
        "Pharmacia utilizes modern automation and temperature-controlled delivery systems to ensure product integrity and efficient service delivery. Our advanced technology maintains product quality throughout the supply chain.",
        "We employ cutting-edge technology including automated systems and specialized temperature-controlled delivery mechanisms to ensure the integrity and efficacy of our pharmaceutical products during transportation and storage.",
      ],
    },

    customer_support: {
      patterns: [
        "customer support",
        "support",
        "help",
        "assistance",
        "after sales",
        "guidance",
        "professional support",
        "customer service",
        "technical support",
      ],
      responses: [
        "Yes, we provide expert guidance and after-sales support by industry professionals. Our customer service team is available to assist you with any questions, product information, or technical support requirements.",
        "Pharmacia offers comprehensive customer support including expert guidance, after-sales service, and technical assistance from our team of pharmaceutical professionals. We are committed to supporting our clients throughout their healthcare journey.",
      ],
    },

    // Expert Team Information
    experts: {
      patterns: [
        "experts",
        "team",
        "professionals",
        "specialists",
        "our experts",
        "who are your experts",
        "expert team",
        "professional team",
        "company experts",
      ],
      responses: [
        "Our expert team includes: Dr. Arjun Singh (Chief Medical Officer), Mr. Sameer Verma (Pharmaceutical Analyst), and Mr. Rakesh Sharma (Supply Chain Manager). These dedicated professionals drive innovation, quality, and compassionate care at Pharmacia.",
        "The Pharmacia leadership team comprises Dr. Arjun Singh as Chief Medical Officer, Mr. Sameer Verma as Pharmaceutical Analyst, and Mr. Rakesh Sharma as Supply Chain Manager. Each brings specialized expertise to ensure our pharmaceutical excellence.",
      ],
    },

    dr_arjun: {
      patterns: [
        "dr arjun",
        "arjun singh",
        "chief medical officer",
        "medical officer",
        "dr singh",
        "chief medical",
      ],
      responses: [
        "Dr. Arjun Singh is our Chief Medical Officer. He ensures that all our products meet the highest medical standards and provides expert guidance on healthcare solutions. With years of experience in the medical field, he oversees our product quality and medical compliance.",
        "As Chief Medical Officer, Dr. Arjun Singh brings extensive medical expertise to Pharmacia, ensuring all our pharmaceutical products meet rigorous medical standards and providing professional healthcare guidance to our clients.",
      ],
    },

    sameer_verma: {
      patterns: [
        "sameer verma",
        "pharmaceutical analyst",
        "mr verma",
        "analyst",
        "quality analyst",
        "pharmaceutical analysis",
      ],
      responses: [
        "Mr. Sameer Verma is our Pharmaceutical Analyst. He is responsible for analyzing and ensuring the quality and efficacy of our pharmaceutical products. His expertise ensures that all our medications meet stringent quality standards before reaching customers.",
        "As our Pharmaceutical Analyst, Mr. Sameer Verma plays a crucial role in quality assurance, conducting thorough analysis of all pharmaceutical products to ensure they meet our high standards for efficacy and safety.",
      ],
    },

    rakesh_sharma: {
      patterns: [
        "rakesh sharma",
        "supply chain manager",
        "mr sharma",
        "supply chain",
        "logistics",
        "delivery management",
      ],
      responses: [
        "Mr. Rakesh Sharma is our Supply Chain Manager. He oversees the efficient distribution of our products, ensuring timely delivery while maintaining quality standards throughout the supply chain. His management ensures our products reach customers in perfect condition.",
        "Mr. Rakesh Sharma, as Supply Chain Manager, manages our logistics and distribution networks to ensure efficient delivery of pharmaceutical products while maintaining quality standards throughout the transportation process.",
      ],
    },

    // Client Testimonials
    testimonials: {
      patterns: [
        "testimonials",
        "reviews",
        "client feedback",
        "what clients say",
        "customer reviews",
        "what customers say",
        "client testimonials",
        "customer feedback",
        "reviews and testimonials",
      ],
      responses: [
        "Our clients consistently praise Pharmacia for our product quality and professional service. Dr. Arjun Singh from City Hospital states: 'The team at PHARMACIA consistently delivers top-notch medical supplies with professionalism and care.'",
        "We have received excellent feedback from our clients. Rahul Singh, Director of Wellness Group notes: 'We trust PHARMACIA for their innovative solutions and reliable medical supplies. Their commitment to patient wellbeing and professional support has set a new standard in healthcare partnerships.'",
      ],
    },

    more_testimonials: {
      patterns: [
        "more testimonials",
        "other reviews",
        "additional feedback",
        "what other clients say",
        "more client reviews",
      ],
      responses: [
        "Additional client feedback includes Rajesh Kumar, Procurement Manager at Health Network: 'The team at PHARMACIA understands the critical nature of medical supplies. Their responsive customer service and quality products make them our preferred partner.' Dr. Aman Verma, Senior Physician at Metro Clinic adds: 'PHARMACIA consistently delivers high-quality products with outstanding attention to detail.'",
        "Our clients appreciate our reliable service. Rajesh Kumar from Health Network states we are their preferred partner due to responsive service and quality products. Dr. Aman Verma from Metro Clinic commends our consistent high-quality deliveries and attention to detail.",
      ],
    },

    // Certifications
    certifications: {
      patterns: [
        "certifications",
        "certified",
        "accreditations",
        "approvals",
        "quality certifications",
        "who certification",
        "international standards",
        "regulatory approvals",
        "quality approvals",
      ],
      responses: [
        "Pharmacia holds multiple certifications including WHO-GMP, ISO, and other international quality certifications. Our products meet the highest global standards for pharmaceutical products, ensuring safety, efficacy, and quality.",
        "We maintain comprehensive certifications including WHO-GMP standards and ISO certifications. These international quality certifications demonstrate our commitment to maintaining the highest standards in pharmaceutical manufacturing and distribution.",
      ],
    },

    // Website Navigation
    website: {
      patterns: [
        "website",
        "your website",
        "online",
        "web page",
        "site",
        "pharmacia website",
        "visit website",
        "check website",
        "web address",
        "url",
        "online information",
      ],
      responses: [
        "Our comprehensive website is available at: https://mustafa-lowna.github.io/Pharmacia-Kuwait/ You'll find detailed information about our products, company background, expert team, certifications, and client testimonials.",
        "For complete information about Pharmacia, visit our website: https://mustafa-lowna.github.io/Pharmacia-Kuwait/ The site features our full product catalog, company certifications, team profiles, and valuable healthcare resources.",
      ],
    },

    // Watch Video Section
    watch_video: {
      patterns: [
        "watch video",
        "company video",
        "promotional video",
        "video presentation",
        "view video",
        "see video",
        "introductory video",
        "corporate video",
      ],
      responses: [
        "You can watch our company video through the 'Watch Video' section on our website homepage. The video provides an overview of Pharmacia's mission, products, and commitment to healthcare excellence.",
        "Our introductory video is available in the 'Watch Video' section on our website. It showcases Pharmacia's 25-year journey, product portfolio, and our dedication to quality pharmaceutical solutions.",
      ],
    },

    // Ordering and Business Information
    ordering: {
      patterns: [
        "how to order",
        "place order",
        "purchase",
        "buy products",
        "procurement",
        "order process",
        "how to buy",
        "purchase process",
        "order procedure",
      ],
      responses: [
        "To place an order with Pharmacia, please contact our sales team at +965 1234 5678 or email info@pharmacia.com. Our team will guide you through the ordering process, provide product specifications, and discuss delivery options.",
        "The ordering process involves contacting our sales team who will assist with product selection, provide pricing information, and coordinate delivery. You can reach us at +965 1234 5678 or info@pharmacia.com to begin the procurement process.",
      ],
    },

    // Default response
    default: {
      responses: [
        "Thank you for your inquiry. For detailed information about this specific question, I recommend contacting our support team at +965 1234 5678 who can provide comprehensive assistance.",
        "I appreciate your question. To ensure you receive the most accurate and detailed information, our support team would be best equipped to assist you with this matter.",
        "That's an excellent question. For specialized information on this topic, I suggest reaching out to our expert team who can provide you with detailed guidance.",
        "I understand your interest in this area. For comprehensive details, our professional staff is available to address your specific requirements and provide tailored solutions.",
      ],
    },
  };

  // Professional response handling function
  function findResponse(userInput) {
    const input = userInput.toLowerCase().trim();

    // Check for exact matches in patterns first
    for (const category in knowledgeBase) {
      if (knowledgeBase[category].patterns) {
        for (const pattern of knowledgeBase[category].patterns) {
          if (input.includes(pattern.toLowerCase())) {
            const responses = knowledgeBase[category].responses;
            return responses[Math.floor(Math.random() * responses.length)];
          }
        }
      }
    }

    // If no match found, return default response
    const defaultResponses = knowledgeBase.default.responses;
    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  }

  // Professional conversation handler
  function handleUserMessage(message) {
    const response = findResponse(message);

    // Add professional delay for natural conversation
    setTimeout(() => {
      displayResponse(response);
    }, 800);

    return response;
  }

  function displayResponse(response) {
    // Implement this function to display responses in your chat interface
    console.log("Pharmacia:", response);
  }
  // Generate bot response based on user input
  function generateResponse(message) {
    const lowerMessage = message.toLowerCase();

    // Check for matching patterns
    for (const category in knowledgeBase) {
      if (category === "default") continue;

      for (const pattern of knowledgeBase[category].patterns) {
        if (lowerMessage.includes(pattern)) {
          const responses = knowledgeBase[category].responses;
          return responses[Math.floor(Math.random() * responses.length)];
        }
      }
    }

    // Return default response if no match found
    const defaultResponses = knowledgeBase.default.responses;
    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  }
});
