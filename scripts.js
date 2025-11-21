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
    // Enhanced Greetings with more human-like interactions
    greetings: {
      patterns: [
        "hello",
        "hi",
        "hey",
        "hoi",
        "hey there",
        "hi there",
        "hello there",
        "greetings",
        "good morning",
        "good afternoon",
        "good evening",
        "morning",
        "afternoon",
        "evening",
        "hey pharmacia",
        "hi pharmacia",
        "hello pharmacia",
        "sup",
        "what's up",
        "yo",
        "hi team",
        "hello team",
      ],
      responses: [
        "Hello! Welcome to Pharmacia Kuwait. How may I assist you with our pharmaceutical products and services today?",
        "Good day! Thank you for contacting Pharmacia. How can we support your healthcare needs today?",
        "Welcome to Pharmacia! We're here to provide you with premium pharmaceutical solutions. How can we help you?",
        "Hello! It's a pleasure to connect with you. How may Pharmacia assist you today?",
      ],
    },

    // Enhanced How are you responses
    how_are_you: {
      patterns: [
        "how are you",
        "how are you doing",
        "how's it going",
        "how do you do",
        "how are things",
        "how is everything",
        "what's going on",
        "how have you been",
        "how are you today",
        "how are you doing today",
        "how is your day",
      ],
      responses: [
        "Thank you for asking! We're doing well and ready to assist you with all your pharmaceutical needs. How can we help you today?",
        "We're excellent, thank you! Ready to provide you with the best pharmaceutical service. What can we do for you?",
        "Doing great! Always pleased to connect with our valued clients. How may Pharmacia assist you?",
        "We're doing very well, thank you for asking! How can we support your healthcare requirements today?",
      ],
    },

    // Enhanced farewell responses
    farewell: {
      patterns: [
        "bye",
        "goodbye",
        "see you",
        "see ya",
        "farewell",
        "take care",
        "have a good day",
        "have a nice day",
        "thanks bye",
        "thank you bye",
        "that's all",
        "that will be all",
        "no more questions",
        "i'm done",
        "talk to you later",
        "catch you later",
        "until next time",
        "signing off",
      ],
      responses: [
        "Thank you for contacting Pharmacia! We're here whenever you need pharmaceutical assistance. Have a wonderful day!",
        "It was our pleasure to assist you. For any future pharmaceutical needs, remember Pharmacia is here for you. Stay healthy!",
        "Goodbye! Thank you for choosing Pharmacia. We look forward to serving your healthcare needs again soon.",
        "Have a great day! Remember, Pharmacia is always here to support your wellness journey with quality products.",
      ],
    },

    // Enhanced gratitude responses
    thanks: {
      patterns: [
        "thanks",
        "thank you",
        "thank you so much",
        "thanks a lot",
        "appreciate it",
        "much appreciated",
        "thank you very much",
        "thanks for your help",
        "thank you for assistance",
        "grateful",
        "thanks a bunch",
        "thank you kindly",
        "many thanks",
      ],
      responses: [
        "You're most welcome! It's our pleasure to assist you with your pharmaceutical needs.",
        "Thank you for choosing Pharmacia! We're always here to provide you with quality healthcare solutions.",
        "You're very welcome! Don't hesitate to reach out if you need any further assistance with our products.",
        "Our pleasure! At Pharmacia, we're committed to serving your healthcare requirements with excellence.",
      ],
    },

    // Company information - Enhanced
    about: {
      patterns: [
        "what is pharmacia",
        "about pharmacia",
        "company information",
        "tell me about pharmacia",
        "who is pharmacia",
        "describe pharmacia",
        "what does pharmacia do",
        "pharmacia overview",
        "company background",
        "about your company",
        "tell me about your company",
        "what kind of company",
        "pharmacia details",
        "company profile",
        "business overview",
      ],
      responses: [
        "Pharmacia is a distinguished pharmaceutical and medical supplies company with over 25 years of excellence in delivering premium-quality medicines and medical supplies. Headquartered in Kuwait, we are committed to enhancing community well-being through trusted healthcare products coupled with personalized, compassionate service.",
        "With a legacy spanning more than 25 years, Pharmacia stands as a premier pharmaceutical company in Kuwait, specializing in comprehensive medical solutions. Our commitment extends beyond products to building lasting healthcare partnerships through innovation, quality, and exceptional service standards.",
      ],
    },

    headquarters: {
      patterns: [
        "where is pharmacia",
        "headquarters",
        "location",
        "where are you located",
        "your address",
        "physical location",
        "office location",
        "where is your office",
        "company location",
        "where are you based",
        "main office",
        "corporate office",
        "visit us",
        "come to your office",
        "where to find you",
      ],
      responses: [
        "Pharmacia is proudly headquartered in Kuwait. Our central office is located at: Building No. 12, Block 8, Shuwaikh Industrial Area, Kuwait City, Kuwait. We welcome professional visits and consultations.",
        "Our headquarters are situated in the strategic Shuwaikh Industrial Area in Kuwait City: Building No. 12, Block 8. This location allows us to efficiently serve our clients across the region with premium pharmaceutical products.",
      ],
    },

    established: {
      patterns: [
        "when was pharmacia established",
        "founding year",
        "when did pharmacia start",
        "how old is pharmacia",
        "year established",
        "when founded",
        "start date",
        "company founding",
        "establishment date",
        "since when",
        "years in business",
        "business start",
        "incorporation date",
      ],
      responses: [
        "Pharmacia was established in 1998, bringing over 25 years of trusted experience and expertise in the pharmaceutical industry. Our long-standing presence reflects our commitment to sustainable healthcare solutions.",
        "Since our establishment in 1998, Pharmacia has been serving the healthcare community with distinction for over two decades, building a reputation for reliability and excellence in pharmaceutical distribution.",
      ],
    },

    // Enhanced Products information
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
        "what items",
        "inventory",
        "product portfolio",
        "catalogue items",
        "available products",
      ],
      responses: [
        "Pharmacia offers a comprehensive portfolio of premium pharmaceutical products including:\n\n• Cardiovascular medications and heart care solutions\n• Diabetes management supplies and specialized medications\n• WHO-approved vaccines & immunizations\n• Mental health and wellness aids\n• Advanced wound care supplies and dressings\n• Nutritional supplements and vitamins\n\nEach product category is carefully selected to meet the highest quality standards and address diverse healthcare needs.",
        "Our product portfolio encompasses:\n\n🏥 **Cardiovascular Care**: Hypertension and heart condition medications\n💉 **Diabetes Management**: Blood sugar control supplies\n🛡️ **Vaccines**: Temperature-controlled immunizations\n🧠 **Mental Wellness**: Emotional stability and psychological health aids\n🩹 **Wound Care**: Sterile dressings and advanced treatment products\n🍃 **Nutrition**: High-quality vitamins and supplements\n\nAll products maintain WHO certification and rigorous quality assurance.",
      ],
    },

    // Enhanced Contact information
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
        "reach customer service",
        "support contact",
        "sales contact",
        "general inquiry",
        "phone contact",
        "email contact",
        "office phone",
        "main contact",
      ],
      responses: [
        "We'd be delighted to connect with you. Here are our primary contact channels:\n\n📞 **Phone**: +965 1234 5678\n📧 **Email**: info@pharmacia.com\n🏢 **Address**: Building No. 12, Block 8, Shuwaikh Industrial Area, Kuwait City, Kuwait\n\nOur professional team is ready to assist with your pharmaceutical requirements during business hours.",
        "For comprehensive support, please reach us through:\n\n• **Telephone**: +965 1234 5678 (Main Office)\n• **Email**: info@pharmacia.com (General Inquiries)\n• **Location**: Shuwaikh Industrial Area, Kuwait City\n\nWe recommend scheduling appointments for detailed product consultations to ensure we provide you with undivided attention.",
      ],
    },

    // Enhanced website navigation
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
        "go to website",
        "web address",
        "url",
        "online presence",
        "digital platform",
        "company website",
        "main website",
      ],
      responses: [
        "Our comprehensive website is available at: https://mustafa-lowna.github.io/Pharmacia-Kuwait/\n\nYou'll find detailed information about our products, company background, expert team, certifications, and much more. The website is designed to provide you with all necessary pharmaceutical information in an accessible format.",
        "For complete details about Pharmacia's offerings, please visit our official website: https://mustafa-lowna.github.io/Pharmacia-Kuwait/\n\nThe site features our full product catalog, company certifications, team profiles, and valuable healthcare resources to support your decision-making process.",
      ],
    },

    // Enhanced services information
    services: {
      patterns: [
        "services",
        "what services",
        "service offerings",
        "help provided",
        "assistance offered",
        "support services",
        "professional services",
        "additional services",
        "value added services",
        "customer services",
        "service portfolio",
        "how you help",
        "service range",
      ],
      responses: [
        "At Pharmacia, we provide comprehensive pharmaceutical services including:\n\n• Premium quality medicine distribution\n• Medical supplies procurement and delivery\n• Professional healthcare consultation\n• Product information and technical support\n• Supply chain management solutions\n• Regulatory compliance guidance\n• After-sales support and maintenance\n\nOur services are designed to ensure complete healthcare solution delivery.",
        "Pharmacia's service portfolio encompasses:\n\n📦 **Distribution**: Reliable supply of pharmaceuticals\n💊 **Product Sourcing**: Access to quality medical supplies\n👨‍⚕️ **Expert Consultation**: Professional healthcare guidance\n🛡️ **Quality Assurance**: Rigorous product verification\n🔗 **Supply Chain**: Efficient delivery systems\n📋 **Regulatory Support**: Compliance and certification assistance\n\nEach service is delivered with our signature commitment to excellence.",
      ],
    },

    // Enhanced quality assurance
    quality: {
      patterns: [
        "quality",
        "quality assurance",
        "quality control",
        "quality standards",
        "how ensure quality",
        "product quality",
        "quality measures",
        "quality processes",
        "quality certification",
        "quality management",
        "quality system",
        "quality guarantee",
        "quality promise",
      ],
      responses: [
        "Quality is the cornerstone of Pharmacia's operations. We maintain:\n\n✅ WHO-GMP certification across all products\n✅ Rigorous testing protocols for safety and efficacy\n✅ International quality standards compliance\n✅ Continuous quality monitoring systems\n✅ Temperature-controlled supply chain integrity\n✅ Batch-to-batch consistency verification\n\nEvery product undergoes multiple quality checkpoints before reaching our clients.",
        "Our quality assurance framework includes:\n\n• **International Certifications**: WHO-GMP, ISO standards\n• **Testing Protocols**: Comprehensive safety and efficacy testing\n• **Supply Chain Controls**: Temperature and handling monitoring\n• **Documentation**: Complete batch records and traceability\n• **Compliance**: Adherence to international regulatory requirements\n• **Continuous Improvement**: Regular quality system enhancements\n\nThis ensures every Pharmacia product meets the highest pharmaceutical standards.",
      ],
    },

    // Enhanced pricing information
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
        "quote",
        "get quote",
        "price estimate",
        "cost information",
      ],
      responses: [
        "We understand pricing is an important consideration. Pharmacia offers competitive pricing while maintaining the highest quality standards. For specific product pricing, we recommend:\n\n• Contacting our sales team for detailed quotations\n• Discussing volume-based pricing for larger orders\n• Exploring our value-added service packages\n\nOur pricing reflects the premium quality and reliability of our pharmaceutical products.",
        "Pharmacia provides value-based pricing for all our pharmaceutical solutions. To receive accurate pricing information:\n\n📞 Contact our sales team at +965 1234 5678\n📧 Email your specific requirements to info@pharmacia.com\n💼 Schedule a consultation for customized pricing\n\nWe offer transparent pricing structures and can discuss options that fit your budget and requirements.",
      ],
    },

    // Enhanced ordering process
    ordering: {
      patterns: [
        "order",
        "how to order",
        "purchase",
        "buy",
        "procurement",
        "place order",
        "ordering process",
        "how to buy",
        "purchase process",
        "get products",
        "acquire products",
        "order procedure",
        "buying process",
        "procurement process",
        "order steps",
      ],
      responses: [
        "The ordering process at Pharmacia is designed for efficiency and reliability:\n\n1. **Consultation**: Discuss your requirements with our team\n2. **Product Selection**: Choose from our certified product range\n3. **Quotation**: Receive detailed pricing and delivery information\n4. **Order Confirmation**: Formalize your purchase requirements\n5. **Documentation**: Complete necessary regulatory documentation\n6. **Delivery**: Scheduled delivery with quality assurance\n7. **Support**: Ongoing after-sales service and support\n\nContact us to initiate your order process.",
        "To place an order with Pharmacia:\n\n📋 **Step 1**: Contact our sales team with your requirements\n💬 **Step 2**: Product consultation and selection guidance\n💰 **Step 3**: Receive comprehensive quotation\n✅ **Step 4**: Order confirmation and documentation\n🚚 **Step 5**: Scheduled delivery with tracking\n🛡️ **Step 6**: Quality verification upon receipt\n🔧 **Step 7**: Continuous support and service\n\nOur team ensures a seamless ordering experience from start to finish.",
      ],
    },

    // Enhanced delivery information
    delivery: {
      patterns: [
        "delivery",
        "shipping",
        "transport",
        "logistics",
        "how delivered",
        "delivery time",
        "shipping time",
        "delivery process",
        "shipping process",
        "transportation",
        "lead time",
        "delivery schedule",
        "when delivered",
        "delivery options",
        "shipping methods",
        "logistics process",
      ],
      responses: [
        "Pharmacia maintains a robust delivery system ensuring:\n\n⏱️ **Timely Delivery**: Efficient scheduling and tracking\n🌡️ **Temperature Control**: Climate-sensitive product protection\n🛡️ **Security**: Secure transportation protocols\n📋 **Documentation**: Complete delivery documentation\n🔍 **Verification**: Quality checks upon delivery\n🌍 **Regional Coverage**: Service across Kuwait and beyond\n\nOur logistics team coordinates each delivery to meet your specific timeline and quality requirements.",
        "Our delivery framework includes:\n\n• **Scheduling**: Coordinated delivery timelines\n• **Temperature Management**: Critical for vaccine and sensitive products\n• **Security Measures**: Product integrity throughout transit\n• **Tracking Systems**: Real-time delivery monitoring\n• **Quality Assurance**: Final verification before handover\n• **Documentation Support**: Complete regulatory compliance\n• **Flexible Options**: Adaptable to your operational needs\n\nWe ensure your pharmaceutical products arrive in perfect condition, every time.",
      ],
    },

    // Default response - Enhanced
    default: {
      responses: [
        "Thank you for your inquiry. For detailed information about this specific question, I recommend contacting our support team at +965 1234 5678 who can provide comprehensive assistance.",
        "I appreciate your question. To ensure you receive the most accurate and detailed information, our support team would be best equipped to assist you with this matter.",
        "That's an excellent question. For specialized information on this topic, I suggest reaching out to our expert team who can provide you with detailed guidance.",
        "I understand your interest in this area. For comprehensive details, our professional staff is available to address your specific requirements and provide tailored solutions.",
      ],
    },
  };

  // Enhanced response selection with professional formatting
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

  // Enhanced conversation flow with professional tone
  function handleUserMessage(message) {
    const response = findResponse(message);

    // Add small delay for more natural conversation feel
    setTimeout(() => {
      displayResponse(response);
    }, 1000);

    return response;
  }

  // Function to display response (you'll need to integrate this with your UI)
  function displayResponse(response) {
    // This function should display the response in your chat interface
    console.log("Pharmacia:", response);

    // Example implementation:
    // const chatContainer = document.getElementById('chat-container');
    // const responseElement = document.createElement('div');
    // responseElement.className = 'response';
    // responseElement.textContent = response;
    // chatContainer.appendChild(responseElement);
  }

  // Example usage with enhanced professional interactions
  console.log("User: Hello");
  console.log("Pharmacia:", handleUserMessage("Hello"));

  console.log("User: How are you today?");
  console.log("Pharmacia:", handleUserMessage("How are you today?"));

  console.log("User: What products do you offer?");
  console.log("Pharmacia:", handleUserMessage("What products do you offer?"));

  console.log("User: How can I contact you?");
  console.log("Pharmacia:", handleUserMessage("How can I contact you?"));

  console.log("User: Thank you for your help");
  console.log("Pharmacia:", handleUserMessage("Thank you for your help"));

  console.log("User: Goodbye");
  console.log("Pharmacia:", handleUserMessage("Goodbye"));
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
